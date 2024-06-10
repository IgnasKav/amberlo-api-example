import { get, post } from "../api";
import type {
  CaseCreateRequest,
  CaseCreateResponse,
} from "./models/case-create";
import type { CaseGetResponse } from "./models/case-get-response";
import type { CasesSearchRequest } from "./models/cases-search-request";
import type { CasesSearchResponse } from "./models/cases-search-response";

type CaseNumberResponse = {
  caseNumber: string;
};

const Cases = {
  search: async (req: CasesSearchRequest) =>
    post<CasesSearchResponse>("/api/cases/search", req),
  getCaseNumber: async () =>
    get<CaseNumberResponse>(
      `/api/cases/number?date=${new Date().toISOString()}`
    ),
  create: async (req: CaseCreateRequest) =>
    post<CaseCreateResponse>("/api/cases", req),
  getCaseById: async (caseId: string) =>
    get<CaseGetResponse>(`/api/cases/${caseId}`),
};

export { Cases };
