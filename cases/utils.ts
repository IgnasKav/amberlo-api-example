import { Auth } from "../api/auth";
import { Cases } from "../api/cases/cases";
import { Lists } from "../api/lists";
import { searchClients } from "../clients/search";

const loadCaseData = async () => {
  const [
    currentUser,
    caseNumber,
    caseCategories,
    caseTypes,
    clients,
    jurisdictions,
    languages,
  ] = await Promise.all([
    loadCurrentUser(),
    loadCaseNumber(),
    loadCaseCategories(),
    loadCaseTypes(),
    loadClients(),
    loadCaseJurisdictions(),
    loadCaseLanguages(),
  ]);

  return {
    currentUser,
    caseNumber,
    caseCategories,
    caseTypes,
    clients,
    jurisdictions,
    languages,
  };
};

const loadCaseNumber = async () => {
  const caseNumberResp = await Cases.getCaseNumber();

  if (caseNumberResp.isError || !caseNumberResp.data) {
    throw new Error("failed to load client number");
  }

  return caseNumberResp.data.caseNumber;
};

const loadCaseCategories = async () => {
  const caseCategoriesResp = await Lists.getList("CaseCategory", false);

  if (caseCategoriesResp.isError || !caseCategoriesResp.data) {
    throw new Error("failed to load case categories");
  }

  return caseCategoriesResp.data.list.items;
};

const loadCaseTypes = async () => {
  const caseTypesResp = await Lists.getList("CaseType", false);

  if (caseTypesResp.isError || !caseTypesResp.data) {
    throw new Error("failed to load case types");
  }

  return caseTypesResp.data.list.items;
};

const loadClients = async () => {
  const clientsResp = await searchClients();

  if (clientsResp.isError || !clientsResp.data) {
    throw new Error("failed to load clients");
  }

  return clientsResp.data.rows;
};

const loadCaseJurisdictions = async () => {
  const caseJurisdictionsResp = await Lists.getList("CaseJurisdiction", false);

  if (caseJurisdictionsResp.isError || !caseJurisdictionsResp.data) {
    throw new Error("failed to load case jurisdictions");
  }

  return caseJurisdictionsResp.data.list.items;
};

const loadCaseLanguages = async () => {
  const caseLanguagesResp = await Lists.getList("CaseLanguage", false);

  if (caseLanguagesResp.isError || !caseLanguagesResp.data) {
    throw new Error("failed to load case languages");
  }

  return caseLanguagesResp.data.list.items;
};

const loadCurrentUser = async () => {
  const userResp = await Auth.getCurrentUser();

  if (userResp.isError || !userResp.data) {
    throw new Error("failed to load current user");
  }

  return userResp.data;
};

export { loadCaseData };
