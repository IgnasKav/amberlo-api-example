export type ClientRelation = {
  clientId: string;
  clientType: string;
  name: string;
  createDate: string;
  access: {
    canView: boolean;
    canEdit: boolean;
    canDelete: boolean;
  };
  clientNumber: string;
  companyName: string;
};
