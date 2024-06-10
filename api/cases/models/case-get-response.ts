import type { EntityCustomField } from "../../custom-fields";
import type { ListItem } from "../../lists";
import type { ClientRelation } from "../../models/client-relation";
import type { EntityAccess } from "../../models/search-response";
import type { UserRelation } from "../../models/user-relation";

export type CaseGetResponse = {
  caseId: string;
  relatedClients: unknown[];
  category: ListItem;
  caseNumber: string;
  name: string;
  description: string;
  archiveNumber: string;
  createDate: string;
  status: string;
  statusDate: string;
  openDate: string;
  isInRelation: boolean;
  precedentLink: string;
  rateSourceQuestionId: string;
  documentId: string;
  document: {
    documentId: string;
    name: string;
    path: string;
    access: {
      canView: boolean;
      canEdit: boolean;
      canDelete: boolean;
    };
  };
  vatRateType: string;
  memo: string;
  estimateMemo: string;
  proFormaMemo: string;
  showDeliveryAddress: boolean;
  deliveryAddress: string;
  showAdditionalSellerInformation: boolean;
  additionalSellerInformation: string;
  modifications: {
    created: {
      userId: string;
      date: string;
      fullName: string;
    };
    modified: {
      date: string;
    };
  };
  responsible: UserRelation;
  access: EntityAccess;
  courtCaseNumber: string;
  customFields: EntityCustomField[];
  client?: ClientRelation;
  type?: ListItem;
  jurisdiction?: ListItem;
  language?: ListItem;
  closeDate?: string;
  estimatedCloseDate?: string;
  rateSourceId?: string;
};
