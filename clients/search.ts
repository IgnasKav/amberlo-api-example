import { Clients } from "../api/clients/clients";
import type { ClientsSearchRequest } from "../api/clients/models/client-search-request";

const searchClients = async () => {
  const body: ClientsSearchRequest = {
    sort: [{ field: "RecentUses", direction: "Desc" }],
    groupBy: "None",
    textFilter: "",
    filters: [],
    page: 1,
    top: 50,
  };

  const resp = await Clients.search(body);

  if (resp.isError || !resp.data) {
    throw new Error("Failed to load clients");
  }

  return resp.data;
};

export { searchClients };
