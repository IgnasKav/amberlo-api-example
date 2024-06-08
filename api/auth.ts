import { get } from "./api";

export type AmberloUser = {
  createDate: string;
  firstName: string;
  isActive: boolean;
  isDemoAccountAvailable: boolean;
  isEmailConfirmed: boolean;
  isLocked: boolean;
  isPasswordObsolete: boolean;
  isSupport: boolean;
  isSurveyCompleted: boolean;
  languageCode: string;
  lastName: string;
  securityUserId: string;
  userId: string;
  userName: string;
};

const Auth = {
  getCurrentUser: () => get<AmberloUser>("/api/account/account"),
};

export { Auth };
