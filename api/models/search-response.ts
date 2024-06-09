export type SearchResponse = {
  hasMorePages: boolean;
  totalRows: number;
};

export type EntityAccess = {
  canView: boolean;
  canEdit: boolean;
  canDelete: boolean;
};
