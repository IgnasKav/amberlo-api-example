import { createCase } from "./cases/create";
import { searchCases } from "./cases/search";
import { createClient } from "./clients/create";
import { searchClients } from "./clients/search";

// await createClient();
await createCase();
// const clients = await searchClients();
// const cases = await searchCases();

console.log("done");
