import type { RelatedTasksSummary } from "../../models/related-tasks-summary";
import type { SearchRequest } from "../../models/search-request";
import type {
  EntityAccess,
  ExpenseStatistics,
  InvoiceStatistics,
  SearchResponse,
  TimeEntryStatistics,
} from "../../models/search-response";
import type { UserRelation } from "../../models/user-relation";
import type { ClientAdress } from "./client-address";
import type { ClientType } from "./client-create";

export type ClientsSearchRequest = {
  sort: {
    field:
      | "RecentUses"
      | "Name"
      | "LastName"
      | "ClientType"
      | "CreateDate"
      | "Budget";
    direction: "Asc" | "Desc";
  }[];
  // you can pass any filters that you see in https://app.amberlo.io/#!/clients/list
  filters: any[];
} & SearchRequest;

export type ClientSearchResponse = {
  rows: {
    clientId: string;
    clientType: ClientType;
    clientCode: string;
    name: string;
    lastName: string;
    overdueTasks: number;
    responsible: {
      user: UserRelation;
      userRole: {
        listItemId: string;
        name: string;
        sortIndex: number;
        isSystemItem: boolean;
        predefinedType: number;
        isDeleted: boolean;
      };
    };
    addresses: ClientAdress[];
    owners: any[];
    linkedClients: any[];
    vatCode: string;
    bankAccountNumber: string;
    usersWithActionableItems: any[];
    unreadMessagesCount: number;
    access: EntityAccess;
    clientEventsData: any[];
    relatedTasksSummary: RelatedTasksSummary;
    statistics: ClientStatistics;
    budget: {
      budgetSource: string;
      timeEntriesTimeInMinutes: number;
      budgetPeriodType: string;
      budgetType: string;
      priceRanges: unknown[];
    };
    title: string;
    clientNumber: string;
    companyName: string;
    vatRate?: number;
    paymentTerm?: number;
    currencyIso3?: string;
  }[];
} & SearchResponse;

type ClientStatistics = {
  event: {
    totalTasks: number;
    completedTasks: number;
    overdueTasks: number;
    totalEvents: number;
    completedEvents: number;
    upcomingEvents: number;
    uncompletedEvents: number;
  };
  timeEntry: TimeEntryStatistics;
  expense: ExpenseStatistics;
  matter: {
    newCount: number;
    activeCount: number;
    suspendedCount: number;
    canceledCount: number;
    closedCount: number;
    inactiveCount: number;
  };
  invoice: {
    invoice: InvoiceStatistics;
    estimate: InvoiceStatistics;
  };
};
