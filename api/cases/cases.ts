import { get, post } from "../api";
import type {
  CaseCreateRequest,
  CaseCreateResponse,
} from "./models/case-create";

type CaseNumberResponse = {
  caseNumber: string;
};

const Cases = {
  search: async (filters: object) => post("/api/cases/search", filters),
  getCaseNumber: async () =>
    get<CaseNumberResponse>(
      `/api/cases/number?date=${new Date().toISOString()}`
    ),
  create: async (req: CaseCreateRequest) =>
    post<CaseCreateResponse>("/api/cases", req),
};

export { Cases };
