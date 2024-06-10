import type { ListItem } from "../../lists";
import type { ClientRelation } from "../../models/client-relation";
import type { RelatedTasksSummary } from "../../models/related-tasks-summary";
import type {
  EntityAccess,
  ExpenseStatistics,
  InvoiceStatistics,
  SearchResponse,
  TimeEntryStatistics,
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
    statistics: CaseStatistics;
    budget: CaseBudget;
    courtCaseNumber: string;
    client?: ClientRelation;
    clientCode?: string;
    clientVatCode?: string;
    estimatedCloseDate?: string;
    type?: ListItem;
  }[];
} & SearchResponse;

type CaseBudget = {
  budgetSource: string;
  timeEntriesTimeInMinutes: number;
  budgetPeriodType: string;
  budgetType: string;
  priceRanges: any[]; // You might want to define a type for price ranges if needed
};

type CaseStatistics = {
  timeEntry: TimeEntryStatistics;
  expense: ExpenseStatistics;
  invoice: {
    invoice: InvoiceStatistics;
    estimate: InvoiceStatistics;
  };
};
