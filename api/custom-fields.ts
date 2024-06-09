import { get } from "./api";

type CustomFieldArea = "Clients" | "Cases";

type CustomFieldValueType =
  | "SingleLineText"
  | "MultiLineText"
  | "Number"
  | "CheckBox"
  | "DropDown"
  | "MultiSelect"
  | "Date"
  | "Email"
  | "Phone"
  | "Url"
  | "Computed";

export type CustomFieldValue = {
  valueId: string;
  value: string;
};

export type CustomFieldContext = {
  customFieldValueType: CustomFieldValueType;
  values: CustomFieldValue[];
};

export type CustomField = {
  customFieldId: string;
  area: CustomFieldArea;
  name: string;
  // iso string
  createDate: string;
  isDeleted: boolean;
  index: number;
  context: CustomFieldContext;
};

type GetCustomFieldsResponse = {
  rows: CustomField[];
};

export type CustomFieldSaveReq = {
  customFieldId: string;
  customFieldValueType: CustomFieldValueType;
  fieldName: string;
  values: ({ isSelected: boolean } & CustomFieldValue)[];
}[];

const CustomFields = {
  getCustomFields: (area: CustomFieldArea) =>
    get<GetCustomFieldsResponse>(`/api/customfields?area=${area}`),
};

export { CustomFields };
