import type { SearchRequest } from "../../models/search-request";

export type CasesSearchRequest = {
  sort: {
    field: "ChangeDate" | "Name" | "Number" | "Owner" | "CreateDate" | "Budget";
    direction: "Asc" | "Desc";
  }[];
  // you can pass any filters that you see in https://app.amberlo.io/#!/cases/list
  filters: any[];
} & SearchRequest;
