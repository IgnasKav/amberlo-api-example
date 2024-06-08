import { get, post } from "./api";
import type { AmberloUser } from "./auth";
import type { Country, Currency, ListItem } from "./lists";

export type ClientAddress = {
  city?: {
    name: string;
  };

  country: Country;
  postalCode?: string;
  state?: string;
  streetLine1?: string;
};

export type ClientCreateRequest = {
  clientNumber: string;
  firstName: string;
  lastName: string;
  clientType: "Private" | "Company";
  // can be an empty array, but is required
  contacts: [];
  // date iso string
  createDate: string;
  // can be an empty array, but is required
  customFields: [];
  // can be an empty array, but is required
  owners: [];
  relationship: ListItem;
  responsible: AmberloUser;
  status: ListItem;
  // optional, if not set, default curreny from settigns will be used
  currency?: Currency;
  // optional, if not set, default paymentTerm from settigns will be used
  paymentTerm?: number;
  addresses?: ClientAddress[];

  vatRate?: number;
  vatRateDisabled?: boolean;
  vatRateType?: "Default";
};

type ClientCreateResponse = {
  clientId: string;
};

type GetClientNumberResponse = {
  clientNumber: string;
};

const Clients = {
  search: async (filters: object) => post("/api/clients/search", filters),
  create: async (req: ClientCreateRequest) =>
    post<ClientCreateResponse>("/api/clients", req),
  getClientNumber: async () =>
    get<GetClientNumberResponse>(
      `/api/clients/number?date=${new Date().toISOString()}`
    ),
};

export { Clients };
