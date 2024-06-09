import { Cases } from "../api/cases/cases";
import type { CaseCreateRequest } from "../api/cases/models/case-create";
import { loadCaseData } from "./utils";

const createCase = async () => {
  const caseData = await loadCaseData();

  const caseCreateRequest: CaseCreateRequest = {
    caseNumber: caseData.caseNumber,
    category: caseData.caseCategories[1],
    createDate: new Date().toISOString(),
    name: "Test case",
    openDate: new Date().toISOString(),
    responsible: {
      securityUserId: caseData.currentUser.securityUserId,
    },
    status: "New",
  };

  const caseCreateResp = await Cases.create(caseCreateRequest);

  console.log("loading case data");
};

export { createCase };
