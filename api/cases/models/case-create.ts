import type { ListItem } from "../../lists";
import type { CaseStatus } from "./case-statuses";

export type CaseCreateRequest = {
  caseNumber: string;
  category: ListItem;
  contactClient?: any;
  // isos string
  createDate: string;
  name: string;
  // isos string
  openDate: string;
  responsible: {
    securityUserId: string;
  };
  status: CaseStatus;
  type?: ListItem;
};

export type CaseCreateResponse = {
  caseId: string;
};
