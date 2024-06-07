const api = "https://app.amberlo.io";
const portfolioId = "87a5672c-825d-40f7-99cd-36f3a788984e";
const secretKey =
  "0BA8628B8D01BAB5181CBB1E6462A149EAA10C370E843B4AE718EA10890B402D";
const accessKey = "AMB5A088F70E78B4EFCBBB322B6EA745642";

let cachedToken = "";

export type GetAcessTokenResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
  refresh_token: string;
  scope: string;
};

export type FetchResponse<T> = SuccessfulFetch<T> | FailedFetch | EmptyFetch;

type EmptyFetch = {
  isError: false;
  data: null;
};

type SuccessfulFetch<T> = {
  data: T;
  isError: false;
};

type FailedFetch = {
  isError: true;
  status: number;
  message: string;
};

const getAcessToken = async (): Promise<GetAcessTokenResponse> => {
  const response = await fetch(`${api}/login/connect/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "password",
      client_id: "app.amberlo.io",
      username: accessKey,
      password: secretKey,
    }),
  });

  const token = await response.json();

  return token as GetAcessTokenResponse;
};

const processFetchResponse = async <T>(
  resp: Response
): Promise<FetchResponse<T>> => {
  if (!resp.ok) {
    return {
      isError: true,
      status: resp.status,
      message: resp.statusText,
    };
  }

  let data: T | null = null;

  try {
    data = (await resp.json()) as T;
  } catch (e) {}

  if (data === null) {
    return { isError: false, data: null };
  }

  return { isError: false, data };
};

const getCachedToken = async (): Promise<string> => {
  if (cachedToken.trim().length === 0) {
    const newToken = await getAcessToken();
    cachedToken = newToken.access_token;
  }

  return cachedToken;
};

const post = async <T>(
  url: string,
  body: object
): Promise<FetchResponse<T>> => {
  const token = await getCachedToken();

  const response = await fetch(`${api}${url}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      PortfolioId: portfolioId,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await processFetchResponse(response);
};

const get = async <T>(url: string): Promise<FetchResponse<T>> => {
  const token = await getCachedToken();

  const response = await fetch(`${api}${url}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      PortfolioId: portfolioId,
      "Content-Type": "application/json",
    },
  });

  return processFetchResponse(response);
};

export { get, post };
