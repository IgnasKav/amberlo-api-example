import { Clients } from "../api/clients/clients";
import type { AmberloClient } from "../api/clients/models/amberlo-client";

const editClient = async (clientId: string) => {
  const clientResp = await Clients.getClientById(clientId);

  if (clientResp.isError || !clientResp.data) {
    throw new Error("Could not find client");
  }

  const client = clientResp.data;

  changeClientName(client, "Edited");

  const saveResp = await Clients.edit(client);

  if (saveResp.isError) {
    throw new Error("Failed to edit client");
  }

  console.log("Client edited");
};

const changeClientName = (client: AmberloClient, name: string) => {
  client.firstName = name;

  // if client is a person for changing firstname/lastname this property needs to be changed
  if (client.person) {
    client.person.firstName = name;
  }
};

export { editClient };
