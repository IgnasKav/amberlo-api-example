import { post } from "./api";

const Cases = {
  search: async (filters: object) => post("/api/cases/search", filters),
};

export { Cases };
