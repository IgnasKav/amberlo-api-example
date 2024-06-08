import { get, post } from "./api";

type ListType = "VatRates" | "ClientStatus" | "ClientRelationship";

type ListItem = {
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

const Lists = {
  getList: async (type: ListType, includeDefault: boolean) =>
    get<GetListResponse>(`/api/lists/${type}?includeDefault=${includeDefault}`),
  getVatRates: async () =>
    get<GetListResponse>("/api/lists/VatRates?includeDefault=true"),
};

export { Lists };
