import { Cases } from "./api/cases/cases";
import { Clients } from "./api/clients/clients";
import { createCase } from "./cases/create";
import { searchCases } from "./cases/search";
import { createClient } from "./clients/create";
import { searchClients } from "./clients/search";

const loadCaseById = async () => {
  const resp = await Cases.getCaseById("f323285d-1fbe-4962-92bc-475acd8524b9");

  if (resp.isError || !resp.data) {
    throw new Error("Could not find case");
  }

  return resp.data;
};

const loadClientById = async () => {
  const resp = await Clients.getClientById(
    "e7413f1b-a055-4264-aead-042159a781f1"
  );

  if (resp.isError || !resp.data) {
    throw new Error("Could not find case");
  }

  return resp.data;
};

// await createClient();
// await createCase();
// const clients = await searchClients();
// const cases = await searchCases();

const caseById = await loadCaseById();

const clientById = console.log("done");
