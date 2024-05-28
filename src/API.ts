/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePersonInput = {
  id?: string | null,
  name: string,
  dateOfBirth: string,
  Gender?: Gender | null,
  email: string,
  phoneNumber: string,
  medicalConditions: string,
  groupRegistrationUsersId: string,
  companyRegistrationUsersId: string,
};

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  MIXED = "MIXED",
}


export type ModelPersonConditionInput = {
  name?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  Gender?: ModelGenderInput | null,
  email?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  medicalConditions?: ModelStringInput | null,
  and?: Array< ModelPersonConditionInput | null > | null,
  or?: Array< ModelPersonConditionInput | null > | null,
  not?: ModelPersonConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  groupRegistrationUsersId?: ModelIDInput | null,
  companyRegistrationUsersId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelGenderInput = {
  eq?: Gender | null,
  ne?: Gender | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Person = {
  __typename: "Person",
  id: string,
  name: string,
  dateOfBirth: string,
  Gender?: Gender | null,
  email: string,
  phoneNumber: string,
  medicalConditions: string,
  nextOfKin?: Person | null,
  createdAt: string,
  updatedAt: string,
  groupRegistrationUsersId: string,
  companyRegistrationUsersId: string,
};

export type UpdatePersonInput = {
  id: string,
  name?: string | null,
  dateOfBirth?: string | null,
  Gender?: Gender | null,
  email?: string | null,
  phoneNumber?: string | null,
  medicalConditions?: string | null,
  groupRegistrationUsersId?: string | null,
  companyRegistrationUsersId?: string | null,
};

export type DeletePersonInput = {
  id: string,
};

export type CreateSoloRegistrationInput = {
  id?: string | null,
  description: string,
  category: Category,
  eventSolosId?: string | null,
};

export enum Category {
  JUNIOR = "JUNIOR",
  OPEN = "OPEN",
  MASTERSA = "MASTERSA",
  MASTERSB = "MASTERSB",
  VETERAN = "VETERAN",
  EBIKE = "EBIKE",
  TEAMJUNIOR = "TEAMJUNIOR",
  WTEAMJUNIOR = "WTEAMJUNIOR",
  TEAMOPEN = "TEAMOPEN",
  WTEAMOPEN = "WTEAMOPEN",
  TEAMMASTERS = "TEAMMASTERS",
  WTEAMMASTERS = "WTEAMMASTERS",
  MIXEDOPENCOMPETITIVE = "MIXEDOPENCOMPETITIVE",
  MIXEDEBIKE = "MIXEDEBIKE",
  MIXEDCOPORATE = "MIXEDCOPORATE",
}


export type ModelSoloRegistrationConditionInput = {
  description?: ModelStringInput | null,
  category?: ModelCategoryInput | null,
  and?: Array< ModelSoloRegistrationConditionInput | null > | null,
  or?: Array< ModelSoloRegistrationConditionInput | null > | null,
  not?: ModelSoloRegistrationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  eventSolosId?: ModelIDInput | null,
};

export type ModelCategoryInput = {
  eq?: Category | null,
  ne?: Category | null,
};

export type SoloRegistration = {
  __typename: "SoloRegistration",
  id: string,
  user: Person,
  description: string,
  category: Category,
  event: Event,
  createdAt: string,
  updatedAt: string,
  eventSolosId?: string | null,
};

export type Registration = {
  __typename: "Registration",
  id: string,
  description: string,
  category: Category,
};

export type CompanyRegistration = {
  __typename: "CompanyRegistration",
  id: string,
  users?: ModelPersonConnection | null,
  description: string,
  workClass: string,
  category: Category,
  subCat?: SubCategory | null,
  event: Event,
  createdAt: string,
  updatedAt: string,
  eventCompaniesId?: string | null,
};

export type ModelPersonConnection = {
  __typename: "ModelPersonConnection",
  items:  Array<Person | null >,
  nextToken?: string | null,
};

export enum SubCategory {
  ENGINEERS = "ENGINEERS",
  CIVIL = "CIVIL",
  BANKING = "BANKING",
  PROFSERV = "PROFSERV",
  OTHER = "OTHER",
  NONDRONE = "NONDRONE",
}


export type Event = {
  __typename: "Event",
  id: string,
  description: string,
  title: string,
  date: string,
  solos?: ModelSoloRegistrationConnection | null,
  companies?: ModelCompanyRegistrationConnection | null,
  groups?: ModelGroupRegistrationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSoloRegistrationConnection = {
  __typename: "ModelSoloRegistrationConnection",
  items:  Array<SoloRegistration | null >,
  nextToken?: string | null,
};

export type ModelCompanyRegistrationConnection = {
  __typename: "ModelCompanyRegistrationConnection",
  items:  Array<CompanyRegistration | null >,
  nextToken?: string | null,
};

export type ModelGroupRegistrationConnection = {
  __typename: "ModelGroupRegistrationConnection",
  items:  Array<GroupRegistration | null >,
  nextToken?: string | null,
};

export type GroupRegistration = {
  __typename: "GroupRegistration",
  id: string,
  users?: ModelPersonConnection | null,
  description: string,
  category: Category,
  event: Event,
  createdAt: string,
  updatedAt: string,
  eventGroupsId?: string | null,
};

export type UpdateSoloRegistrationInput = {
  id: string,
  description?: string | null,
  category?: Category | null,
  eventSolosId?: string | null,
};

export type DeleteSoloRegistrationInput = {
  id: string,
};

export type CreateGroupRegistrationInput = {
  id?: string | null,
  description: string,
  category: Category,
  eventGroupsId?: string | null,
};

export type ModelGroupRegistrationConditionInput = {
  description?: ModelStringInput | null,
  category?: ModelCategoryInput | null,
  and?: Array< ModelGroupRegistrationConditionInput | null > | null,
  or?: Array< ModelGroupRegistrationConditionInput | null > | null,
  not?: ModelGroupRegistrationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  eventGroupsId?: ModelIDInput | null,
};

export type UpdateGroupRegistrationInput = {
  id: string,
  description?: string | null,
  category?: Category | null,
  eventGroupsId?: string | null,
};

export type DeleteGroupRegistrationInput = {
  id: string,
};

export type CreateCompanyRegistrationInput = {
  id?: string | null,
  description: string,
  workClass: string,
  category: Category,
  subCat?: SubCategory | null,
  eventCompaniesId?: string | null,
};

export type ModelCompanyRegistrationConditionInput = {
  description?: ModelStringInput | null,
  workClass?: ModelStringInput | null,
  category?: ModelCategoryInput | null,
  subCat?: ModelSubCategoryInput | null,
  and?: Array< ModelCompanyRegistrationConditionInput | null > | null,
  or?: Array< ModelCompanyRegistrationConditionInput | null > | null,
  not?: ModelCompanyRegistrationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  eventCompaniesId?: ModelIDInput | null,
};

export type ModelSubCategoryInput = {
  eq?: SubCategory | null,
  ne?: SubCategory | null,
};

export type UpdateCompanyRegistrationInput = {
  id: string,
  description?: string | null,
  workClass?: string | null,
  category?: Category | null,
  subCat?: SubCategory | null,
  eventCompaniesId?: string | null,
};

export type DeleteCompanyRegistrationInput = {
  id: string,
};

export type CreateEventInput = {
  id?: string | null,
  description: string,
  title: string,
  date: string,
};

export type ModelEventConditionInput = {
  description?: ModelStringInput | null,
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateEventInput = {
  id: string,
  description?: string | null,
  title?: string | null,
  date?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type ModelPersonFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  Gender?: ModelGenderInput | null,
  email?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  medicalConditions?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPersonFilterInput | null > | null,
  or?: Array< ModelPersonFilterInput | null > | null,
  not?: ModelPersonFilterInput | null,
  groupRegistrationUsersId?: ModelIDInput | null,
  companyRegistrationUsersId?: ModelIDInput | null,
};

export type ModelSoloRegistrationFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  category?: ModelCategoryInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSoloRegistrationFilterInput | null > | null,
  or?: Array< ModelSoloRegistrationFilterInput | null > | null,
  not?: ModelSoloRegistrationFilterInput | null,
  eventSolosId?: ModelIDInput | null,
};

export type ModelGroupRegistrationFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  category?: ModelCategoryInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGroupRegistrationFilterInput | null > | null,
  or?: Array< ModelGroupRegistrationFilterInput | null > | null,
  not?: ModelGroupRegistrationFilterInput | null,
  eventGroupsId?: ModelIDInput | null,
};

export type ModelCompanyRegistrationFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  workClass?: ModelStringInput | null,
  category?: ModelCategoryInput | null,
  subCat?: ModelSubCategoryInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCompanyRegistrationFilterInput | null > | null,
  or?: Array< ModelCompanyRegistrationFilterInput | null > | null,
  not?: ModelCompanyRegistrationFilterInput | null,
  eventCompaniesId?: ModelIDInput | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPersonFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  dateOfBirth?: ModelSubscriptionStringInput | null,
  Gender?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  medicalConditions?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPersonFilterInput | null > | null,
  or?: Array< ModelSubscriptionPersonFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSoloRegistrationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSoloRegistrationFilterInput | null > | null,
  or?: Array< ModelSubscriptionSoloRegistrationFilterInput | null > | null,
};

export type ModelSubscriptionGroupRegistrationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGroupRegistrationFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupRegistrationFilterInput | null > | null,
  groupRegistrationUsersId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionCompanyRegistrationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  workClass?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  subCat?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCompanyRegistrationFilterInput | null > | null,
  or?: Array< ModelSubscriptionCompanyRegistrationFilterInput | null > | null,
  companyRegistrationUsersId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
  eventSolosId?: ModelSubscriptionIDInput | null,
  eventCompaniesId?: ModelSubscriptionIDInput | null,
  eventGroupsId?: ModelSubscriptionIDInput | null,
};

export type CreatePersonMutationVariables = {
  input: CreatePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type CreatePersonMutation = {
  createPerson?:  {
    __typename: "Person",
    id: string,
    name: string,
    dateOfBirth: string,
    Gender?: Gender | null,
    email: string,
    phoneNumber: string,
    medicalConditions: string,
    nextOfKin?:  {
      __typename: "Person",
      id: string,
      name: string,
      dateOfBirth: string,
      Gender?: Gender | null,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      createdAt: string,
      updatedAt: string,
      groupRegistrationUsersId: string,
      companyRegistrationUsersId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupRegistrationUsersId: string,
    companyRegistrationUsersId: string,
  } | null,
};

export type UpdatePersonMutationVariables = {
  input: UpdatePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type UpdatePersonMutation = {
  updatePerson?:  {
    __typename: "Person",
    id: string,
    name: string,
    dateOfBirth: string,
    Gender?: Gender | null,
    email: string,
    phoneNumber: string,
    medicalConditions: string,
    nextOfKin?:  {
      __typename: "Person",
      id: string,
      name: string,
      dateOfBirth: string,
      Gender?: Gender | null,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      createdAt: string,
      updatedAt: string,
      groupRegistrationUsersId: string,
      companyRegistrationUsersId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupRegistrationUsersId: string,
    companyRegistrationUsersId: string,
  } | null,
};

export type DeletePersonMutationVariables = {
  input: DeletePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type DeletePersonMutation = {
  deletePerson?:  {
    __typename: "Person",
    id: string,
    name: string,
    dateOfBirth: string,
    Gender?: Gender | null,
    email: string,
    phoneNumber: string,
    medicalConditions: string,
    nextOfKin?:  {
      __typename: "Person",
      id: string,
      name: string,
      dateOfBirth: string,
      Gender?: Gender | null,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      createdAt: string,
      updatedAt: string,
      groupRegistrationUsersId: string,
      companyRegistrationUsersId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupRegistrationUsersId: string,
    companyRegistrationUsersId: string,
  } | null,
};

export type CreateSoloRegistrationMutationVariables = {
  input: CreateSoloRegistrationInput,
  condition?: ModelSoloRegistrationConditionInput | null,
};

export type CreateSoloRegistrationMutation = {
  createSoloRegistration?:  {
    __typename: "SoloRegistration",
    id: string,
    user:  {
      __typename: "Person",
      id: string,
      name: string,
      dateOfBirth: string,
      Gender?: Gender | null,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      createdAt: string,
      updatedAt: string,
      groupRegistrationUsersId: string,
      companyRegistrationUsersId: string,
    },
    description: string,
    category: Category,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventSolosId?: string | null,
  } | null,
};

export type UpdateSoloRegistrationMutationVariables = {
  input: UpdateSoloRegistrationInput,
  condition?: ModelSoloRegistrationConditionInput | null,
};

export type UpdateSoloRegistrationMutation = {
  updateSoloRegistration?:  {
    __typename: "SoloRegistration",
    id: string,
    user:  {
      __typename: "Person",
      id: string,
      name: string,
      dateOfBirth: string,
      Gender?: Gender | null,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      createdAt: string,
      updatedAt: string,
      groupRegistrationUsersId: string,
      companyRegistrationUsersId: string,
    },
    description: string,
    category: Category,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventSolosId?: string | null,
  } | null,
};

export type DeleteSoloRegistrationMutationVariables = {
  input: DeleteSoloRegistrationInput,
  condition?: ModelSoloRegistrationConditionInput | null,
};

export type DeleteSoloRegistrationMutation = {
  deleteSoloRegistration?:  {
    __typename: "SoloRegistration",
    id: string,
    user:  {
      __typename: "Person",
      id: string,
      name: string,
      dateOfBirth: string,
      Gender?: Gender | null,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      createdAt: string,
      updatedAt: string,
      groupRegistrationUsersId: string,
      companyRegistrationUsersId: string,
    },
    description: string,
    category: Category,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventSolosId?: string | null,
  } | null,
};

export type CreateGroupRegistrationMutationVariables = {
  input: CreateGroupRegistrationInput,
  condition?: ModelGroupRegistrationConditionInput | null,
};

export type CreateGroupRegistrationMutation = {
  createGroupRegistration?:  {
    __typename: "GroupRegistration",
    id: string,
    users?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    description: string,
    category: Category,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventGroupsId?: string | null,
  } | null,
};

export type UpdateGroupRegistrationMutationVariables = {
  input: UpdateGroupRegistrationInput,
  condition?: ModelGroupRegistrationConditionInput | null,
};

export type UpdateGroupRegistrationMutation = {
  updateGroupRegistration?:  {
    __typename: "GroupRegistration",
    id: string,
    users?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    description: string,
    category: Category,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventGroupsId?: string | null,
  } | null,
};

export type DeleteGroupRegistrationMutationVariables = {
  input: DeleteGroupRegistrationInput,
  condition?: ModelGroupRegistrationConditionInput | null,
};

export type DeleteGroupRegistrationMutation = {
  deleteGroupRegistration?:  {
    __typename: "GroupRegistration",
    id: string,
    users?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    description: string,
    category: Category,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventGroupsId?: string | null,
  } | null,
};

export type CreateCompanyRegistrationMutationVariables = {
  input: CreateCompanyRegistrationInput,
  condition?: ModelCompanyRegistrationConditionInput | null,
};

export type CreateCompanyRegistrationMutation = {
  createCompanyRegistration?:  {
    __typename: "CompanyRegistration",
    id: string,
    users?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    description: string,
    workClass: string,
    category: Category,
    subCat?: SubCategory | null,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventCompaniesId?: string | null,
  } | null,
};

export type UpdateCompanyRegistrationMutationVariables = {
  input: UpdateCompanyRegistrationInput,
  condition?: ModelCompanyRegistrationConditionInput | null,
};

export type UpdateCompanyRegistrationMutation = {
  updateCompanyRegistration?:  {
    __typename: "CompanyRegistration",
    id: string,
    users?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    description: string,
    workClass: string,
    category: Category,
    subCat?: SubCategory | null,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventCompaniesId?: string | null,
  } | null,
};

export type DeleteCompanyRegistrationMutationVariables = {
  input: DeleteCompanyRegistrationInput,
  condition?: ModelCompanyRegistrationConditionInput | null,
};

export type DeleteCompanyRegistrationMutation = {
  deleteCompanyRegistration?:  {
    __typename: "CompanyRegistration",
    id: string,
    users?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    description: string,
    workClass: string,
    category: Category,
    subCat?: SubCategory | null,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventCompaniesId?: string | null,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    description: string,
    title: string,
    date: string,
    solos?:  {
      __typename: "ModelSoloRegistrationConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelCompanyRegistrationConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelGroupRegistrationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    description: string,
    title: string,
    date: string,
    solos?:  {
      __typename: "ModelSoloRegistrationConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelCompanyRegistrationConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelGroupRegistrationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    description: string,
    title: string,
    date: string,
    solos?:  {
      __typename: "ModelSoloRegistrationConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelCompanyRegistrationConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelGroupRegistrationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPersonQueryVariables = {
  id: string,
};

export type GetPersonQuery = {
  getPerson?:  {
    __typename: "Person",
    id: string,
    name: string,
    dateOfBirth: string,
    Gender?: Gender | null,
    email: string,
    phoneNumber: string,
    medicalConditions: string,
    nextOfKin?:  {
      __typename: "Person",
      id: string,
      name: string,
      dateOfBirth: string,
      Gender?: Gender | null,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      createdAt: string,
      updatedAt: string,
      groupRegistrationUsersId: string,
      companyRegistrationUsersId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupRegistrationUsersId: string,
    companyRegistrationUsersId: string,
  } | null,
};

export type ListPeopleQueryVariables = {
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPeopleQuery = {
  listPeople?:  {
    __typename: "ModelPersonConnection",
    items:  Array< {
      __typename: "Person",
      id: string,
      name: string,
      dateOfBirth: string,
      Gender?: Gender | null,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      createdAt: string,
      updatedAt: string,
      groupRegistrationUsersId: string,
      companyRegistrationUsersId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSoloRegistrationQueryVariables = {
  id: string,
};

export type GetSoloRegistrationQuery = {
  getSoloRegistration?:  {
    __typename: "SoloRegistration",
    id: string,
    user:  {
      __typename: "Person",
      id: string,
      name: string,
      dateOfBirth: string,
      Gender?: Gender | null,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      createdAt: string,
      updatedAt: string,
      groupRegistrationUsersId: string,
      companyRegistrationUsersId: string,
    },
    description: string,
    category: Category,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventSolosId?: string | null,
  } | null,
};

export type ListSoloRegistrationsQueryVariables = {
  filter?: ModelSoloRegistrationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSoloRegistrationsQuery = {
  listSoloRegistrations?:  {
    __typename: "ModelSoloRegistrationConnection",
    items:  Array< {
      __typename: "SoloRegistration",
      id: string,
      description: string,
      category: Category,
      createdAt: string,
      updatedAt: string,
      eventSolosId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupRegistrationQueryVariables = {
  id: string,
};

export type GetGroupRegistrationQuery = {
  getGroupRegistration?:  {
    __typename: "GroupRegistration",
    id: string,
    users?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    description: string,
    category: Category,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventGroupsId?: string | null,
  } | null,
};

export type ListGroupRegistrationsQueryVariables = {
  filter?: ModelGroupRegistrationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupRegistrationsQuery = {
  listGroupRegistrations?:  {
    __typename: "ModelGroupRegistrationConnection",
    items:  Array< {
      __typename: "GroupRegistration",
      id: string,
      description: string,
      category: Category,
      createdAt: string,
      updatedAt: string,
      eventGroupsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCompanyRegistrationQueryVariables = {
  id: string,
};

export type GetCompanyRegistrationQuery = {
  getCompanyRegistration?:  {
    __typename: "CompanyRegistration",
    id: string,
    users?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    description: string,
    workClass: string,
    category: Category,
    subCat?: SubCategory | null,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventCompaniesId?: string | null,
  } | null,
};

export type ListCompanyRegistrationsQueryVariables = {
  filter?: ModelCompanyRegistrationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompanyRegistrationsQuery = {
  listCompanyRegistrations?:  {
    __typename: "ModelCompanyRegistrationConnection",
    items:  Array< {
      __typename: "CompanyRegistration",
      id: string,
      description: string,
      workClass: string,
      category: Category,
      subCat?: SubCategory | null,
      createdAt: string,
      updatedAt: string,
      eventCompaniesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    description: string,
    title: string,
    date: string,
    solos?:  {
      __typename: "ModelSoloRegistrationConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelCompanyRegistrationConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelGroupRegistrationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePersonSubscriptionVariables = {
  filter?: ModelSubscriptionPersonFilterInput | null,
};

export type OnCreatePersonSubscription = {
  onCreatePerson?:  {
    __typename: "Person",
    id: string,
    name: string,
    dateOfBirth: string,
    Gender?: Gender | null,
    email: string,
    phoneNumber: string,
    medicalConditions: string,
    nextOfKin?:  {
      __typename: "Person",
      id: string,
      name: string,
      dateOfBirth: string,
      Gender?: Gender | null,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      createdAt: string,
      updatedAt: string,
      groupRegistrationUsersId: string,
      companyRegistrationUsersId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupRegistrationUsersId: string,
    companyRegistrationUsersId: string,
  } | null,
};

export type OnUpdatePersonSubscriptionVariables = {
  filter?: ModelSubscriptionPersonFilterInput | null,
};

export type OnUpdatePersonSubscription = {
  onUpdatePerson?:  {
    __typename: "Person",
    id: string,
    name: string,
    dateOfBirth: string,
    Gender?: Gender | null,
    email: string,
    phoneNumber: string,
    medicalConditions: string,
    nextOfKin?:  {
      __typename: "Person",
      id: string,
      name: string,
      dateOfBirth: string,
      Gender?: Gender | null,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      createdAt: string,
      updatedAt: string,
      groupRegistrationUsersId: string,
      companyRegistrationUsersId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupRegistrationUsersId: string,
    companyRegistrationUsersId: string,
  } | null,
};

export type OnDeletePersonSubscriptionVariables = {
  filter?: ModelSubscriptionPersonFilterInput | null,
};

export type OnDeletePersonSubscription = {
  onDeletePerson?:  {
    __typename: "Person",
    id: string,
    name: string,
    dateOfBirth: string,
    Gender?: Gender | null,
    email: string,
    phoneNumber: string,
    medicalConditions: string,
    nextOfKin?:  {
      __typename: "Person",
      id: string,
      name: string,
      dateOfBirth: string,
      Gender?: Gender | null,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      createdAt: string,
      updatedAt: string,
      groupRegistrationUsersId: string,
      companyRegistrationUsersId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupRegistrationUsersId: string,
    companyRegistrationUsersId: string,
  } | null,
};

export type OnCreateSoloRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionSoloRegistrationFilterInput | null,
};

export type OnCreateSoloRegistrationSubscription = {
  onCreateSoloRegistration?:  {
    __typename: "SoloRegistration",
    id: string,
    user:  {
      __typename: "Person",
      id: string,
      name: string,
      dateOfBirth: string,
      Gender?: Gender | null,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      createdAt: string,
      updatedAt: string,
      groupRegistrationUsersId: string,
      companyRegistrationUsersId: string,
    },
    description: string,
    category: Category,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventSolosId?: string | null,
  } | null,
};

export type OnUpdateSoloRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionSoloRegistrationFilterInput | null,
};

export type OnUpdateSoloRegistrationSubscription = {
  onUpdateSoloRegistration?:  {
    __typename: "SoloRegistration",
    id: string,
    user:  {
      __typename: "Person",
      id: string,
      name: string,
      dateOfBirth: string,
      Gender?: Gender | null,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      createdAt: string,
      updatedAt: string,
      groupRegistrationUsersId: string,
      companyRegistrationUsersId: string,
    },
    description: string,
    category: Category,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventSolosId?: string | null,
  } | null,
};

export type OnDeleteSoloRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionSoloRegistrationFilterInput | null,
};

export type OnDeleteSoloRegistrationSubscription = {
  onDeleteSoloRegistration?:  {
    __typename: "SoloRegistration",
    id: string,
    user:  {
      __typename: "Person",
      id: string,
      name: string,
      dateOfBirth: string,
      Gender?: Gender | null,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      createdAt: string,
      updatedAt: string,
      groupRegistrationUsersId: string,
      companyRegistrationUsersId: string,
    },
    description: string,
    category: Category,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventSolosId?: string | null,
  } | null,
};

export type OnCreateGroupRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionGroupRegistrationFilterInput | null,
};

export type OnCreateGroupRegistrationSubscription = {
  onCreateGroupRegistration?:  {
    __typename: "GroupRegistration",
    id: string,
    users?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    description: string,
    category: Category,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventGroupsId?: string | null,
  } | null,
};

export type OnUpdateGroupRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionGroupRegistrationFilterInput | null,
};

export type OnUpdateGroupRegistrationSubscription = {
  onUpdateGroupRegistration?:  {
    __typename: "GroupRegistration",
    id: string,
    users?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    description: string,
    category: Category,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventGroupsId?: string | null,
  } | null,
};

export type OnDeleteGroupRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionGroupRegistrationFilterInput | null,
};

export type OnDeleteGroupRegistrationSubscription = {
  onDeleteGroupRegistration?:  {
    __typename: "GroupRegistration",
    id: string,
    users?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    description: string,
    category: Category,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventGroupsId?: string | null,
  } | null,
};

export type OnCreateCompanyRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyRegistrationFilterInput | null,
};

export type OnCreateCompanyRegistrationSubscription = {
  onCreateCompanyRegistration?:  {
    __typename: "CompanyRegistration",
    id: string,
    users?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    description: string,
    workClass: string,
    category: Category,
    subCat?: SubCategory | null,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventCompaniesId?: string | null,
  } | null,
};

export type OnUpdateCompanyRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyRegistrationFilterInput | null,
};

export type OnUpdateCompanyRegistrationSubscription = {
  onUpdateCompanyRegistration?:  {
    __typename: "CompanyRegistration",
    id: string,
    users?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    description: string,
    workClass: string,
    category: Category,
    subCat?: SubCategory | null,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventCompaniesId?: string | null,
  } | null,
};

export type OnDeleteCompanyRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyRegistrationFilterInput | null,
};

export type OnDeleteCompanyRegistrationSubscription = {
  onDeleteCompanyRegistration?:  {
    __typename: "CompanyRegistration",
    id: string,
    users?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    description: string,
    workClass: string,
    category: Category,
    subCat?: SubCategory | null,
    event:  {
      __typename: "Event",
      id: string,
      description: string,
      title: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    eventCompaniesId?: string | null,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    description: string,
    title: string,
    date: string,
    solos?:  {
      __typename: "ModelSoloRegistrationConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelCompanyRegistrationConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelGroupRegistrationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    description: string,
    title: string,
    date: string,
    solos?:  {
      __typename: "ModelSoloRegistrationConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelCompanyRegistrationConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelGroupRegistrationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    description: string,
    title: string,
    date: string,
    solos?:  {
      __typename: "ModelSoloRegistrationConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelCompanyRegistrationConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelGroupRegistrationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
