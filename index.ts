import { createCase } from "./cases/create";
import { searchCases } from "./cases/search";
import { createClient } from "./clients/create";
import { searchClients } from "./clients/search";

const clients = await searchClients();
// const cases = await searchCases();
// await createClient();
// await createCase();

console.log("done");
