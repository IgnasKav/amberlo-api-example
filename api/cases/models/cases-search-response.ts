import type { ListItem } from "../../lists";
import type {
  EntityAccess,
  SearchResponse,
} from "../../models/search-response";

export type CasesSearchResponse = {
  rows: {
    caseId: string;
    name: string;
    caseNumber: string;
    description: string;
    caseStatus: string;
    clientAddress: {};
    clientContacts: {};
    caseClients: any[]; // You might want to define a type for case clients if needed
    lead: {
      firstName: string;
      lastName: string;
    };
    responsibles: any[]; // You might want to define a type for responsibles if needed
    isInRelation: boolean;
    unreadMessagesCount: number;
    openDate: string;
    category: ListItem;
    userTimeInMinutes: number;
    payableTimeInMinutes: number;
    expenseAmount: number;
    groupKey: string;
    usersWithActionableItems: any[];
    access: EntityAccess;
    caseEventsData: any[]; // You might want to define a type for case events data if needed
    relatedTasksSummary: RelatedTasksSummary;
    statistics: Statistics;
    budget: CaseBudget;
    courtCaseNumber: string;
    client?: CaseClient;
    clientCode?: string;
    clientVatCode?: string;
    estimatedCloseDate?: string;
    type?: ListItem;
  }[];
} & SearchResponse;

type CaseClient = {
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

type CaseBudget = {
  budgetSource: string;
  timeEntriesTimeInMinutes: number;
  budgetPeriodType: string;
  budgetType: string;
  priceRanges: any[]; // You might want to define a type for price ranges if needed
};

type Statistics = {
  timeEntry: {
    userTimeInMinutes: number;
    payableTimeInMinutes: number;
    totalAmount: number;
    billedTimeInMinutes: number;
    billedTimeAmount: number;
    paidTimeInMinutes: number;
    paidTimeAmount: number;
  };
  expense: {
    amount: number;
  };
  invoice: {
    invoice: InvoiceStatistics;
    estimate: InvoiceStatistics;
  };
};

type InvoiceStatistics = {
  totalNetAmount: number;
  totalAmount: number;
  paidAmount: number;
  dueAmount: number;
  overdueAmount: number;
};

type RelatedTasksSummary = {
  userOverdueCount: number;
  totalOverdueCount: number;
  userDueCount: number;
  totalDueCount: number;
  userUpcomingCount: number;
  totalUpcomingCount: number;
};
