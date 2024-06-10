import { createCase } from "./cases/create";
import { searchCases } from "./cases/search";
import { createClient } from "./clients/create";
import { editClient } from "./clients/edit";
import { searchClients } from "./clients/search";

await createClient();
await createCase();
const clients = await searchClients();
const cases = await searchCases();
await editClient("25df0da8-fc43-49e6-a443-1260737804d2");

console.log("done");
