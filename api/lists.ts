import { get, post } from "./api";

type ListType = "VatRates" | "ClientStatus" | "ClientRelationship";

export type ListItem = {
  listItemId: string;
  listName: ListType;
  // this is the value
  name: string;
  isSystemItem: boolean;
};

type GetListResponse = {
  list: {
    listId: string;
    items: ListItem[];
  };
};

export type Currency = {
  currencyId: string;
  name: string;
  symbol: string;
  type: number;
};

type GetCurrenciesResponse = {
  rows: Currency[];
};

export type Country = {
  countryId: string;
  iso2: string;
  iso3: string;
  name: string;
  isInEuropeUnion: boolean;
  vatRate: number;
};

const Lists = {
  getList: async (type: ListType, includeDefault: boolean) =>
    get<GetListResponse>(`/api/lists/${type}?includeDefault=${includeDefault}`),
  getVatRates: async () =>
    get<GetListResponse>("/api/lists/VatRates?includeDefault=false"),
  getCurrencies: async () =>
    get<GetCurrenciesResponse>("/api/lists/currencies"),
  getCountries: async () => get<Country[]>("/api/countries"),
};

export { Lists };
