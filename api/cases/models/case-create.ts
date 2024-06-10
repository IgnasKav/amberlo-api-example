import type { CustomFieldSaveReq } from "../../custom-fields";
import type { ListItem } from "../../lists";
import type { CaseStatus } from "./case-statuses";

export type CaseCreateRequest = {
  caseNumber: string;
  category: ListItem;
  // isos string
  createDate: string;
  name: string;
  // isos string
  openDate: string;
  responsible: {
    securityUserId: string;
  };
  status: CaseStatus;
  description?: string;
  type?: ListItem;
  jurisdiction?: ListItem;
  language?: ListItem;
  archiveNumber?: string;
  courtCaseNumber?: string;
  client?: {
    clientId: string;
  };
  // isos string
  estimatedCloseDate?: string;
  // isos string
  closeDate?: string;
  customFields?: CustomFieldSaveReq;
};

export type CaseCreateResponse = {
  caseId: string;
};
