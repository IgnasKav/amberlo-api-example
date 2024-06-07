import { Cases } from "./api/cases";

const getCases = async () => {
  const body = {
    sort: [{ field: "Name", direction: "Asc" }],
    sortName: "CASES.SORT_FIELDS.NAME",
    groupBy: "None",
    textFilter: "",
    filters: [],
    ownerDocumentId: null,
    page: 1,
    top: 50,
    overdueOnTop: true,
    facetLimits: null,
  };

  const res = await Cases.search(body);

  return res;
};

const cases = await getCases();

console.log("done");
