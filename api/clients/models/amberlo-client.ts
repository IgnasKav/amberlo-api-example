import type { EntityCustomField } from "../../custom-fields";
import type { Currency, ListItem } from "../../lists";
import type { EntityAccess } from "../../models/search-response";
import type { UserRelation } from "../../models/user-relation";
import type { ClientAdress } from "./client-address";
import type { ClientType } from "./client-create";

export type AmberloClient = {
  clientId: string;
  clientCode: string;
  createDate: string;
  memo: string;
  estimateMemo: string;
  proFormaMemo: string;
  deliveryAddress: string;
  showDeliveryAddress: boolean;
  additionalSellerInformation: string;
  showAdditionalSellerInformation: boolean;
  invoiceNote: string;
  clientType: ClientType;
  status: ListItem;
  relationship: ListItem;
  bankAccountNumber: string;
  vatRateType: string;
  vatCode: string;
  owners: unknown[];
  linkedClients: unknown[];
  addresses: ClientAdress[];
  contacts: unknown[];
  customFields: EntityCustomField[];
  firstName: string;
  lastName: string;
  fullName: string;
  rateSourceId: string;
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
  modifications: {
    created: {
      userId: string;
      date: string;
      fullName: string;
    };
  };
  responsible: UserRelation;
  access: EntityAccess;
  title: string;
  relatedMattersBudget: unknown[];
  clientNumber: string;
  companyName: string;
  paymentTerm?: number;
  vatRate?: number;
  vatRateDisabled?: boolean;
  currency?: Currency;
  birthdate?: string;
  gender?: ListItem;
  familyStatus?: ListItem;
  person?: {
    firstName: string;
    lastName: string;
  };
};
