import { get, post } from "../api";
import type {
  ClientCreateRequest,
  ClientCreateResponse,
} from "./models/client-create";
import type {
  ClientSearchResponse,
  ClientsSearchRequest,
} from "./models/client-search-request";

type GetClientNumberResponse = {
  clientNumber: string;
};

const Clients = {
  search: async (req: ClientsSearchRequest) =>
    post<ClientSearchResponse>("/api/clients/search", req),
  create: async (req: ClientCreateRequest) =>
    post<ClientCreateResponse>("/api/clients", req),
  getClientNumber: async () =>
    get<GetClientNumberResponse>(
      `/api/clients/number?date=${new Date().toISOString()}`
    ),
  getClientById: async (clientId: string) => get(`/api/clients/${clientId}`),
};

export { Clients };
