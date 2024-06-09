import {
  Clients,
  type ClientAddress,
  type ClientCreateRequest,
} from "../api/clients";
import {
  type CustomField,
  type CustomFieldSaveReq,
} from "../api/custom-fields";
import { type Country } from "../api/lists";
import {
  ClientCustomFieldTypes,
  ClientPaymentTypesCustomFieldValues,
} from "./models/custom-fields";
import { loadClientData } from "./utils";

const createClient = async () => {
  const {
    currentUser,
    clientNumber,
    clientStatuses,
    clientRelationshipTypes,
    currencies,
    countries,
    customFields,
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
    paymentTerm: 1,
    currency: currencies[0],
  };

  // adding address and vat rate is optional
  addClientAdress(clientCreateReq, countries);
  addVatRate(clientCreateReq, 21);
  handleCustomFields(clientCreateReq, customFields);

  const clientCreateResp = await Clients.create(clientCreateReq);

  if (clientCreateResp.isError) {
    throw new Error(
      `failed to create client, reason: ${clientCreateResp.message}`
    );
  }

  console.log("client created");
};

const handleCustomFields = (
  clientCreateReq: ClientCreateRequest,
  customFields: CustomField[]
) => {
  const paymentTypesCustomField = customFields.find(
    (c) => c.name === ClientCustomFieldTypes.paymentTypes
  );

  if (!paymentTypesCustomField) return;

  const valuesToSelect = [
    ClientPaymentTypesCustomFieldValues.card,
    ClientPaymentTypesCustomFieldValues.cash,
  ];
  const selectedValues = paymentTypesCustomField.context.values.filter((v) =>
    valuesToSelect.includes(v.value)
  );

  if (!selectedValues) return;

  const customFieldSaveReq: CustomFieldSaveReq = [
    {
      customFieldId: paymentTypesCustomField.customFieldId,
      customFieldValueType:
        paymentTypesCustomField.context.customFieldValueType,
      fieldName: paymentTypesCustomField.name,
      values: selectedValues.map((v) => ({ ...v, isSelected: true })),
    },
  ];

  clientCreateReq.customFields = customFieldSaveReq;
};

const addVatRate = (clientCreateReq: ClientCreateRequest, vatRate: number) => {
  clientCreateReq.vatRate = vatRate;
  clientCreateReq.vatRateDisabled = false;
  clientCreateReq.vatRateType = "Default";
};

const addClientAdress = (
  clientCreateReq: ClientCreateRequest,
  countries: Country[]
) => {
  const adress: ClientAddress = {
    city: {
      name: "Some city",
    },
    country: countries[0],
    postalCode: "123123",
    state: "Kaunas",
    streetLine1: "Some street",
  };

  clientCreateReq.addresses = [adress];
};

export { createClient };
