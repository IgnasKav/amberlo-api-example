import { get, post } from "./api";

// check if possible to create client with lists that only have listItemId and listName
// check if possible to create client with responsible that only has securityUserId

type ListItem = {
  listItemId: string;
  listName: "ClientRelationship" | "ClientStatus";
};

type ClientCreateRequest = {
  clientNumber: string;

  // check if company type is correct
  clientType: "Private" | "Company";
  // can be an empty array, but is required
  contacts: [];
  // iso string
  createDate: Date;
  // can be an empty array, but is required
  customFields: [];
  firstName: string;
  lastName: string;
  // can be an empty array, but is required
  owners: [];
  relationship: ListItem;
  responsible: any;
  status: ListItem;
};

type GetClientNumberResponse = {
  clientNumber: string;
};

const Clients = {
  search: async (filters: object) => post("/api/clients/search", filters),
  create: async (req: object) => post("/api/clients", req),
  getClientNumber: async () =>
    get<GetClientNumberResponse>(
      `/api/clients/number?date=${new Date().toISOString()}`
    ),
};

export { Clients };
