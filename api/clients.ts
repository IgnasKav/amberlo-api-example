import { post } from "./api";

const Clients = {
  search: async (filters: object) => post("/api/clients/search", filters),
};

export { Clients };
