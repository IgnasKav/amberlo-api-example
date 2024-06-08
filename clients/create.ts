import { Auth } from "../api/auth";
import { Clients, type ClientCreateRequest } from "../api/clients";
import { Lists } from "../api/lists";

const createClient = async () => {
  const {
    currentUser,
    clientNumber,
    clientStatuses,
    clientRelationshipTypes,
    vatRates,
    currencies,
    countries,
  } = await loadClientData();

  const clientCreateReq: ClientCreateRequest = {
    clientNumber,
    clientType: "Private",
    createDate: new Date().toISOString(),
    firstName: "Example",
    lastName: "Client",
    relationship: clientRelationshipTypes[0],
    responsible: currentUser,
    status: clientStatuses[0],
    contacts: [],
    customFields: [],
    owners: [],
  };

  const clientCreateResp = await Clients.create(clientCreateReq);

  console.log("clientNumber", clientNumber);
};

const loadClientData = async () => {
  const [
    currentUser,
    clientNumber,
    clientStatuses,
    clientRelationshipTypes,
    vatRates,
    currencies,
    countries,
  ] = await Promise.all([
    loadCurrentUser(),
    loadClientNumber(),
    loadClientStatuses(),
    loadClientRelationshipTypes(),
    loadVatRates(),
    loadCurrencies(),
    loadCountries(),
  ]);

  return {
    currentUser,
    clientNumber,
    clientStatuses,
    clientRelationshipTypes,
    vatRates,
    currencies,
    countries,
  };
};

const loadCurrentUser = async () => {
  const userResp = await Auth.getCurrentUser();

  if (userResp.isError || !userResp.data) {
    throw new Error("failed to load current user");
  }

  return userResp.data;
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

const loadCurrencies = async () => {
  const currenciesResp = await Lists.getCurrencies();

  if (currenciesResp.isError || !currenciesResp.data) {
    throw new Error("failed to load currencies");
  }

  return currenciesResp.data.rows;
};

const loadCountries = async () => {
  const countriesResp = await Lists.getCountries();

  if (countriesResp.isError || !countriesResp.data) {
    throw new Error("failed to load countries");
  }

  return countriesResp.data;
};

export { createClient };
