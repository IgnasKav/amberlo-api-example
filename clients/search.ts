import { Clients } from "../api/clients";

const searchClients = async () => {
  const body = {
    sort: [{ field: "RecentUses", direction: "Desc" }],
    sortName: "CLIENTS.SORT_FIELDS.RECENTLY_USED",
    groupBy: "None",
    textFilter: "",
    filters: [],
    ownerDocumentId: null,
    page: 1,
    top: 50,
    facetLimits: null,
  };

  const res = await Clients.search(body);
  return res;
};

export { searchClients };
