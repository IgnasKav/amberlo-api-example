export type SearchResponse = {
  hasMorePages: boolean;
  totalRows: number;
};

export type EntityAccess = {
  canView: boolean;
  canEdit: boolean;
  canDelete: boolean;
};

export type InvoiceStatistics = {
  totalNetAmount: number;
  totalAmount: number;
  paidAmount: number;
  dueAmount: number;
  overdueAmount: number;
};

export type TimeEntryStatistics = {
  userTimeInMinutes: number;
  payableTimeInMinutes: number;
  totalAmount: number;
  billedTimeInMinutes: number;
  billedTimeAmount: number;
  paidTimeInMinutes: number;
  paidTimeAmount: number;
};

export type ExpenseStatistics = {
  amount: number;
};
