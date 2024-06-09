import type { ClientType } from "../clients";

export type ClientsSearchRequest = {
  sort: {
    field: "RecentUses" | "Name" | "LastName" | "ClientType" | "CreateDate";
    direction: "Asc" | "Desc";
  }[];
  groupBy: "None";
  textFilter: string;
  // you can pass any filters that you see in amberlo contacts page
  filters: any[];
  page: number;
  top: number;
};

export type ClientSearchResponse = {
  hasMorePages: boolean;
  totalRows: number;
  rows: {
    clientId: string;
    clientNumber: string;
    clientType: ClientType;
    companyName: string;
    currencyIso3: string;
    lastName: string;
    name: string;
    overdueTasks: number;
    owners: any[];
    paymentTerm: number;
    title: string;
    unreadMessagesCount: number;
    vatCode: string;
    vatRate: number;
    statistics: ClientStatistics;
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
      }[];
    };
  }[];
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
