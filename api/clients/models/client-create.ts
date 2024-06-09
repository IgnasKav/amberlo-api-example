import type { AmberloUser } from "../../auth";
import type { CustomFieldSaveReq } from "../../custom-fields";
import type { ListItem, Currency, Country } from "../../lists";
import type { ClientType } from "../clients";

export type ClientAddress = {
  city?: {
    name: string;
  };

  country: Country;
  postalCode?: string;
  state?: string;
  streetLine1?: string;
};

export type ClientCreateRequest = {
  clientNumber: string;
  firstName: string;
  lastName: string;
  clientType: ClientType;
  // can be an empty array, but is required
  contacts: [];
  // date iso string
  createDate: string;
  // can be an empty array, but is required
  customFields: CustomFieldSaveReq;
  // can be an empty array, but is required
  owners: [];
  relationship: ListItem;
  responsible: { securityUserId: string };
  status: ListItem;
  // optional, if not set, default curreny from settigns will be used
  currency?: Currency;
  // optional, if not set, default paymentTerm from settigns will be used
  paymentTerm?: number;
  addresses?: ClientAddress[];

  vatRate?: number;
  vatRateDisabled?: boolean;
  vatRateType?: "Default";
};

export type ClientCreateResponse = {
  clientId: string;
};
