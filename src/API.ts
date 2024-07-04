/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSoloRegistrationInput = {
  id?: string | null,
  user: PersonInput,
  category: string,
};

export type PersonInput = {
  name: string,
  dateOfBirth: string,
  gender: string,
  email: string,
  phoneNumber: string,
  medicalConditions: string,
  nextOfKinName: string,
  nextOfKinPhone: string,
};

export type ModelSoloRegistrationConditionInput = {
  category?: ModelStringInput | null,
  and?: Array< ModelSoloRegistrationConditionInput | null > | null,
  or?: Array< ModelSoloRegistrationConditionInput | null > | null,
  not?: ModelSoloRegistrationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type SoloRegistration = {
  __typename: "SoloRegistration",
  id: string,
  user: Person,
  category: string,
  createdAt: string,
  updatedAt: string,
};

export type Person = {
  __typename: "Person",
  name: string,
  dateOfBirth: string,
  gender: string,
  email: string,
  phoneNumber: string,
  medicalConditions: string,
  nextOfKinName: string,
  nextOfKinPhone: string,
};

export type UpdateSoloRegistrationInput = {
  id: string,
  user?: PersonInput | null,
  category?: string | null,
};

export type DeleteSoloRegistrationInput = {
  id: string,
};

export type CreateGroupRegistrationInput = {
  id?: string | null,
  users: Array< PersonInput | null >,
  category: string,
};

export type ModelGroupRegistrationConditionInput = {
  category?: ModelStringInput | null,
  and?: Array< ModelGroupRegistrationConditionInput | null > | null,
  or?: Array< ModelGroupRegistrationConditionInput | null > | null,
  not?: ModelGroupRegistrationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type GroupRegistration = {
  __typename: "GroupRegistration",
  id: string,
  users:  Array<Person | null >,
  category: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGroupRegistrationInput = {
  id: string,
  users?: Array< PersonInput | null > | null,
  category?: string | null,
};

export type DeleteGroupRegistrationInput = {
  id: string,
};

export type CreateCompanyRegistrationInput = {
  id?: string | null,
  users: Array< PersonInput | null >,
  workClass: string,
  category: string,
  subCat?: string | null,
};

export type ModelCompanyRegistrationConditionInput = {
  workClass?: ModelStringInput | null,
  category?: ModelStringInput | null,
  subCat?: ModelStringInput | null,
  and?: Array< ModelCompanyRegistrationConditionInput | null > | null,
  or?: Array< ModelCompanyRegistrationConditionInput | null > | null,
  not?: ModelCompanyRegistrationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CompanyRegistration = {
  __typename: "CompanyRegistration",
  id: string,
  users:  Array<Person | null >,
  workClass: string,
  category: string,
  subCat?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCompanyRegistrationInput = {
  id: string,
  users?: Array< PersonInput | null > | null,
  workClass?: string | null,
  category?: string | null,
  subCat?: string | null,
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

export type Event = {
  __typename: "Event",
  id: string,
  description: string,
  title: string,
  date: string,
  createdAt: string,
  updatedAt: string,
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

export type ModelSoloRegistrationFilterInput = {
  id?: ModelIDInput | null,
  category?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSoloRegistrationFilterInput | null > | null,
  or?: Array< ModelSoloRegistrationFilterInput | null > | null,
  not?: ModelSoloRegistrationFilterInput | null,
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

export type ModelSoloRegistrationConnection = {
  __typename: "ModelSoloRegistrationConnection",
  items:  Array<SoloRegistration | null >,
  nextToken?: string | null,
};

export type ModelGroupRegistrationFilterInput = {
  id?: ModelIDInput | null,
  category?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGroupRegistrationFilterInput | null > | null,
  or?: Array< ModelGroupRegistrationFilterInput | null > | null,
  not?: ModelGroupRegistrationFilterInput | null,
};

export type ModelGroupRegistrationConnection = {
  __typename: "ModelGroupRegistrationConnection",
  items:  Array<GroupRegistration | null >,
  nextToken?: string | null,
};

export type ModelCompanyRegistrationFilterInput = {
  id?: ModelIDInput | null,
  workClass?: ModelStringInput | null,
  category?: ModelStringInput | null,
  subCat?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCompanyRegistrationFilterInput | null > | null,
  or?: Array< ModelCompanyRegistrationFilterInput | null > | null,
  not?: ModelCompanyRegistrationFilterInput | null,
};

export type ModelCompanyRegistrationConnection = {
  __typename: "ModelCompanyRegistrationConnection",
  items:  Array<CompanyRegistration | null >,
  nextToken?: string | null,
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

export type ModelSubscriptionSoloRegistrationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  category?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSoloRegistrationFilterInput | null > | null,
  or?: Array< ModelSubscriptionSoloRegistrationFilterInput | null > | null,
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

export type ModelSubscriptionGroupRegistrationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  category?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGroupRegistrationFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupRegistrationFilterInput | null > | null,
};

export type ModelSubscriptionCompanyRegistrationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  workClass?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  subCat?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCompanyRegistrationFilterInput | null > | null,
  or?: Array< ModelSubscriptionCompanyRegistrationFilterInput | null > | null,
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
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    },
    category: string,
    createdAt: string,
    updatedAt: string,
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
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    },
    category: string,
    createdAt: string,
    updatedAt: string,
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
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    },
    category: string,
    createdAt: string,
    updatedAt: string,
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
    users:  Array< {
      __typename: "Person",
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    } | null >,
    category: string,
    createdAt: string,
    updatedAt: string,
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
    users:  Array< {
      __typename: "Person",
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    } | null >,
    category: string,
    createdAt: string,
    updatedAt: string,
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
    users:  Array< {
      __typename: "Person",
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    } | null >,
    category: string,
    createdAt: string,
    updatedAt: string,
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
    users:  Array< {
      __typename: "Person",
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    } | null >,
    workClass: string,
    category: string,
    subCat?: string | null,
    createdAt: string,
    updatedAt: string,
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
    users:  Array< {
      __typename: "Person",
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    } | null >,
    workClass: string,
    category: string,
    subCat?: string | null,
    createdAt: string,
    updatedAt: string,
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
    users:  Array< {
      __typename: "Person",
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    } | null >,
    workClass: string,
    category: string,
    subCat?: string | null,
    createdAt: string,
    updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
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
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    },
    category: string,
    createdAt: string,
    updatedAt: string,
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
      category: string,
      createdAt: string,
      updatedAt: string,
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
    users:  Array< {
      __typename: "Person",
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    } | null >,
    category: string,
    createdAt: string,
    updatedAt: string,
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
      category: string,
      createdAt: string,
      updatedAt: string,
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
    users:  Array< {
      __typename: "Person",
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    } | null >,
    workClass: string,
    category: string,
    subCat?: string | null,
    createdAt: string,
    updatedAt: string,
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
      workClass: string,
      category: string,
      subCat?: string | null,
      createdAt: string,
      updatedAt: string,
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

export type OnCreateSoloRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionSoloRegistrationFilterInput | null,
};

export type OnCreateSoloRegistrationSubscription = {
  onCreateSoloRegistration?:  {
    __typename: "SoloRegistration",
    id: string,
    user:  {
      __typename: "Person",
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    },
    category: string,
    createdAt: string,
    updatedAt: string,
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
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    },
    category: string,
    createdAt: string,
    updatedAt: string,
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
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    },
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionGroupRegistrationFilterInput | null,
};

export type OnCreateGroupRegistrationSubscription = {
  onCreateGroupRegistration?:  {
    __typename: "GroupRegistration",
    id: string,
    users:  Array< {
      __typename: "Person",
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    } | null >,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionGroupRegistrationFilterInput | null,
};

export type OnUpdateGroupRegistrationSubscription = {
  onUpdateGroupRegistration?:  {
    __typename: "GroupRegistration",
    id: string,
    users:  Array< {
      __typename: "Person",
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    } | null >,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionGroupRegistrationFilterInput | null,
};

export type OnDeleteGroupRegistrationSubscription = {
  onDeleteGroupRegistration?:  {
    __typename: "GroupRegistration",
    id: string,
    users:  Array< {
      __typename: "Person",
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    } | null >,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCompanyRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyRegistrationFilterInput | null,
};

export type OnCreateCompanyRegistrationSubscription = {
  onCreateCompanyRegistration?:  {
    __typename: "CompanyRegistration",
    id: string,
    users:  Array< {
      __typename: "Person",
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    } | null >,
    workClass: string,
    category: string,
    subCat?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCompanyRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyRegistrationFilterInput | null,
};

export type OnUpdateCompanyRegistrationSubscription = {
  onUpdateCompanyRegistration?:  {
    __typename: "CompanyRegistration",
    id: string,
    users:  Array< {
      __typename: "Person",
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    } | null >,
    workClass: string,
    category: string,
    subCat?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCompanyRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyRegistrationFilterInput | null,
};

export type OnDeleteCompanyRegistrationSubscription = {
  onDeleteCompanyRegistration?:  {
    __typename: "CompanyRegistration",
    id: string,
    users:  Array< {
      __typename: "Person",
      name: string,
      dateOfBirth: string,
      gender: string,
      email: string,
      phoneNumber: string,
      medicalConditions: string,
      nextOfKinName: string,
      nextOfKinPhone: string,
    } | null >,
    workClass: string,
    category: string,
    subCat?: string | null,
    createdAt: string,
    updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};
