import type { SearchRequest } from "../../models/search-request";
import type {
  EntityAccess,
  SearchResponse,
} from "../../models/search-response";

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
      user: {
        securityUserId: string;
        userId: string;
        companyId: string;
        userName: string;
        firstName: string;
        lastName: string;
        languageCode: string;
        timeZoneId: string;
        hasProfileImage: boolean;
        title: string;
        name: string;
        numberFormat: string;
        dateFormat: string;
        timeFormat: string;
      };
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
    relatedTasksSummary: {
      userOverdueCount: number;
      totalOverdueCount: number;
      userDueCount: number;
      totalDueCount: number;
      userUpcomingCount: number;
      totalUpcomingCount: number;
    };
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

type ClientType = "Private" | "Company";

type ClientAdress = {
  addressType: string;
  country?: {
    countryId: string;
    iso2: string;
    iso3: string;
    name: string;
    isInEuropeUnion: boolean;
    vatRate: number;
  };
  state: string;
  city: {
    cityId: string;
    countryId: string;
    name: string;
  };
  streetLine1: string;
  streetLine2: string;
  houseNo: string;
  postalCode: string;
};

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
  matter: {
    newCount: number;
    activeCount: number;
    suspendedCount: number;
    canceledCount: number;
    closedCount: number;
    inactiveCount: number;
  };
  invoice: {
    invoice: {
      totalNetAmount: number;
      totalAmount: number;
      paidAmount: number;
      dueAmount: number;
      overdueAmount: number;
    };
    estimate: {
      totalNetAmount: number;
      totalAmount: number;
      paidAmount: number;
      dueAmount: number;
      overdueAmount: number;
    };
  };
};
