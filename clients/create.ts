import { Clients } from "../api/clients";
import { Lists } from "../api/lists";

const createClient = async () => {
  // later move loading of these properties to another method and resolve them using Promise.all
  const clientNumber = await loadClientNumber();
  const clientStatuses = await loadClientStatuses();
  const clientRelationshipTypes = await loadClientRelationshipTypes();
  const vatRates = await loadVatRates();

  console.log("clientNumber", clientNumber);
};

const loadClientNumber = async () => {
  const clientNumberResp = await Clients.getClientNumber();

  if (clientNumberResp.isError || !clientNumberResp.data) {
    throw new Error("failed to load client number");
  }

  return clientNumberResp.data.clientNumber;
};

const loadClientStatuses = async () => {
  const clientStatusesResp = await Lists.getList("ClientStatus", false);

  if (clientStatusesResp.isError || !clientStatusesResp.data) {
    throw new Error("failed to load client statuses");
  }

  return clientStatusesResp.data.list.items;
};

const loadClientRelationshipTypes = async () => {
  const clientRelationshipResp = await Lists.getList(
    "ClientRelationship",
    false
  );

  if (clientRelationshipResp.isError || !clientRelationshipResp.data) {
    throw new Error("failed to load client relationship types");
  }

  return clientRelationshipResp.data.list.items;
};

const loadVatRates = async () => {
  const vatRatesResp = await Lists.getVatRates();

  if (vatRatesResp.isError || !vatRatesResp.data) {
    throw new Error("failed to load vat rates");
  }

  return vatRatesResp.data.list.items;
};

export { createClient };
