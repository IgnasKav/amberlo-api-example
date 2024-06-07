import { Cases } from "./api/cases";
import { searchClients } from "./clients/search";

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

const clients = await searchClients();
const cases = await getCases();

console.log("done");
