import { Cases } from "../api/cases/cases";
import type { CaseCreateRequest } from "../api/cases/models/case-create";
import { CaseCustomFieldTypes } from "../api/cases/models/case-custom-fields";
import type { CustomField, CustomFieldSaveReq } from "../api/custom-fields";
import type { ListItem } from "../api/lists";
import { loadCaseData } from "./utils";

const createCase = async () => {
  const {
    currentUser,
    caseNumber,
    caseCategories,
    caseTypes,
    clientsSearchResp,
    jurisdictions,
    languages,
    customFields,
  } = await loadCaseData();

  const category = caseCategories[1];
  const clients = clientsSearchResp.rows;

  if (clients.length === 0) {
    throw new Error("No clients created");
  }

  const caseCreateRequest: CaseCreateRequest = {
    caseNumber: caseNumber,
    category: category,
    createDate: new Date().toISOString(),
    name: "Test case",
    openDate: new Date().toISOString(),
    responsible: {
      securityUserId: currentUser.securityUserId,
    },
    status: "New",
    archiveNumber: "1231322",
    client: {
      clientId: clients[0].clientId,
    },
    courtCaseNumber: "1231231",
    description: "description",
    estimatedCloseDate: new Date().toISOString(),
    closeDate: new Date().toISOString(),
    jurisdiction: jurisdictions[0],
    language: languages[0],
  };

  addCaseType(caseCreateRequest, category, caseTypes);
  handleCustomFields(caseCreateRequest, customFields);

  const caseCreateResp = await Cases.create(caseCreateRequest);

  if (caseCreateResp.isError) {
    throw new Error(`Failed to create case, reason: ${caseCreateResp.message}`);
  }

  console.log("case created");
};

const handleCustomFields = (
  caseCreateReq: CaseCreateRequest,
  customFields: CustomField[]
) => {
  const singleLineCustomField = customFields.find(
    (c) => c.name === CaseCustomFieldTypes.singleLine
  );
  const paragraphCustomField = customFields.find(
    (c) => c.name === CaseCustomFieldTypes.paragraph
  );
  const numberCustomField = customFields.find(
    (c) => c.name === CaseCustomFieldTypes.number
  );
  const dateCustomField = customFields.find(
    (c) => c.name === CaseCustomFieldTypes.date
  );

  if (
    !singleLineCustomField ||
    !paragraphCustomField ||
    !numberCustomField ||
    !dateCustomField
  ) {
    return;
  }

  const customFieldSaveReq: CustomFieldSaveReq = [
    {
      customFieldId: singleLineCustomField.customFieldId,
      customFieldValueType: singleLineCustomField.context.customFieldValueType,
      fieldName: singleLineCustomField.name,
      values: [{ value: "Test single line" }],
    },
    {
      customFieldId: paragraphCustomField.customFieldId,
      customFieldValueType: paragraphCustomField.context.customFieldValueType,
      fieldName: paragraphCustomField.name,
      values: [{ value: "Test paragrapgh" }],
    },
    {
      customFieldId: numberCustomField.customFieldId,
      customFieldValueType: numberCustomField.context.customFieldValueType,
      fieldName: numberCustomField.name,
      values: [{ value: "3" }],
    },
    {
      customFieldId: dateCustomField.customFieldId,
      customFieldValueType: dateCustomField.context.customFieldValueType,
      fieldName: dateCustomField.name,
      values: [{ value: new Date().toISOString() }],
    },
  ];

  caseCreateReq.customFields = customFieldSaveReq;
};

const addCaseType = (
  caseCreateRequest: CaseCreateRequest,
  caseCategory: ListItem,
  caseTypes: ListItem[]
) => {
  const typesByCategory = caseTypes.filter(
    (t) => t.relatedListItem?.listItemId === caseCategory.listItemId
  );

  if (typesByCategory.length === 0) return;

  caseCreateRequest.type = typesByCategory[0];
};

export { createCase };
