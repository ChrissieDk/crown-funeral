// Types for the response
export interface PolicyHistory {
  PolicyCode: string;
  PolicyDescription: string;
  AgeFrom: string;
  AgeTo: string;
  Cover: string;
  Premium: string;
  WaitingPeriod: string;
  EntityName: string;
  FromDate: string;
  ToDate: string;
  User: string;
}

export interface PaymentType {
  "PaymentTypeCode:": string;
  PaymentTypeDescription: string;
  DedDayWageType: string | null;
}

export interface Contact {
  Cell: string;
  WorkTel: string;
  HomeTel: string;
  Fax: string;
  Email: string;
  AlternateContact: string;
}

export interface Beneficiary {
  FullName: string;
  FirstName: string;
  LastName: string;
  IDNumber: string;
  Percentage: string;
  Relation: string;
}

export interface Spouse {
  FullName: string;
  FirstName: string;
  LastName: string;
  IDNumber: string;
  DateOfBirth: string;
  StatusCode: string;
  Premium: string;
  Cover: string;
  InceptionDate: string;
}

export interface MemberInformation {
  Result: string;
  RelateID: string;
  ClientName: string;
  PolicyNumber: string;
  FullName: string;
  FirstName: string;
  LastName: string;
  Title: string;
  IDNumber: string;
  DateOfBirth: string;
  MemberType: string;
  InceptionDate: string;
  StatusDescription: string;
  Initials: string;
  CurrentAge: number;
  AgeAtEntry: string;
  Gender: string;
  Agent: string;
  AgentCode: string;
  PolicyHistory: PolicyHistory[];
  PaymentType: PaymentType[];
  Contact: Contact[];
  Beneficiary: Beneficiary[];
  Spouse: Spouse[];
  Dependent: null[];
  Extended: null[];
}

export interface IllionUserData {
  name: string;
  surname: string;
  mobile: string;
  email: string;
  policyNumber: string;
  productName?: string;
}
