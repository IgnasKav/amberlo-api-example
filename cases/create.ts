import { Cases } from "../api/cases/cases";
import type { CaseCreateRequest } from "../api/cases/models/case-create";
import type { ListItem } from "../api/lists";
import { loadCaseData } from "./utils";

const createCase = async () => {
  const {
    currentUser,
    caseNumber,
    caseCategories,
    caseTypes,
    clients,
    jurisdictions,
    languages,
  } = await loadCaseData();

  const category = caseCategories[1];

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
      clientId: clients.length > 0 ? clients[0].clientId : "",
    },
    courtCaseNumber: "1231231",
    description: "description",
    estimatedCloseDate: new Date().toISOString(),
    closeDate: new Date().toISOString(),
    jurisdiction: jurisdictions[0],
    language: languages[0],
  };

  addCaseType(caseCreateRequest, category, caseTypes);

  const caseCreateResp = await Cases.create(caseCreateRequest);

  console.log("case created");
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
