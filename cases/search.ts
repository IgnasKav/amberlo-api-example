import { Cases } from "../api/cases/cases";
import type { CasesSearchRequest } from "../api/cases/models/cases-search-request";

const searchCases = async () => {
  const req: CasesSearchRequest = {
    sort: [{ field: "ChangeDate", direction: "Desc" }],
    groupBy: "None",
    textFilter: "",
    filters: [],
    page: 1,
    top: 50,
  };

  const resp = await Cases.search(req);

  if (resp.isError || !resp.data) {
    throw new Error("Failed to load cases");
  }

  return resp.data;
};

export { searchCases };
