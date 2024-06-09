export type SearchRequestSort = {
  field: string;
  direction: "Asc" | "Desc";
};

export type SearchRequest = {
  sort: SearchRequestSort[];
  groupBy: "None";
  textFilter: string;
  page: number;
  top: number;
};
