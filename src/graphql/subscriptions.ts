/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePerson = /* GraphQL */ `subscription OnCreatePerson($filter: ModelSubscriptionPersonFilterInput) {
  onCreatePerson(filter: $filter) {
    id
    name
    dateOfBirth
    Gender
    email
    phoneNumber
    medicalConditions
    nextOfKin {
      id
      name
      dateOfBirth
      Gender
      email
      phoneNumber
      medicalConditions
      createdAt
      updatedAt
      groupRegistrationUsersId
      companyRegistrationUsersId
      __typename
    }
    createdAt
    updatedAt
    groupRegistrationUsersId
    companyRegistrationUsersId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePersonSubscriptionVariables,
  APITypes.OnCreatePersonSubscription
>;
export const onUpdatePerson = /* GraphQL */ `subscription OnUpdatePerson($filter: ModelSubscriptionPersonFilterInput) {
  onUpdatePerson(filter: $filter) {
    id
    name
    dateOfBirth
    Gender
    email
    phoneNumber
    medicalConditions
    nextOfKin {
      id
      name
      dateOfBirth
      Gender
      email
      phoneNumber
      medicalConditions
      createdAt
      updatedAt
      groupRegistrationUsersId
      companyRegistrationUsersId
      __typename
    }
    createdAt
    updatedAt
    groupRegistrationUsersId
    companyRegistrationUsersId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePersonSubscriptionVariables,
  APITypes.OnUpdatePersonSubscription
>;
export const onDeletePerson = /* GraphQL */ `subscription OnDeletePerson($filter: ModelSubscriptionPersonFilterInput) {
  onDeletePerson(filter: $filter) {
    id
    name
    dateOfBirth
    Gender
    email
    phoneNumber
    medicalConditions
    nextOfKin {
      id
      name
      dateOfBirth
      Gender
      email
      phoneNumber
      medicalConditions
      createdAt
      updatedAt
      groupRegistrationUsersId
      companyRegistrationUsersId
      __typename
    }
    createdAt
    updatedAt
    groupRegistrationUsersId
    companyRegistrationUsersId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePersonSubscriptionVariables,
  APITypes.OnDeletePersonSubscription
>;
export const onCreateSoloRegistration = /* GraphQL */ `subscription OnCreateSoloRegistration(
  $filter: ModelSubscriptionSoloRegistrationFilterInput
) {
  onCreateSoloRegistration(filter: $filter) {
    id
    user {
      id
      name
      dateOfBirth
      Gender
      email
      phoneNumber
      medicalConditions
      createdAt
      updatedAt
      groupRegistrationUsersId
      companyRegistrationUsersId
      __typename
    }
    description
    category
    event {
      id
      description
      title
      date
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    eventSolosId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSoloRegistrationSubscriptionVariables,
  APITypes.OnCreateSoloRegistrationSubscription
>;
export const onUpdateSoloRegistration = /* GraphQL */ `subscription OnUpdateSoloRegistration(
  $filter: ModelSubscriptionSoloRegistrationFilterInput
) {
  onUpdateSoloRegistration(filter: $filter) {
    id
    user {
      id
      name
      dateOfBirth
      Gender
      email
      phoneNumber
      medicalConditions
      createdAt
      updatedAt
      groupRegistrationUsersId
      companyRegistrationUsersId
      __typename
    }
    description
    category
    event {
      id
      description
      title
      date
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    eventSolosId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSoloRegistrationSubscriptionVariables,
  APITypes.OnUpdateSoloRegistrationSubscription
>;
export const onDeleteSoloRegistration = /* GraphQL */ `subscription OnDeleteSoloRegistration(
  $filter: ModelSubscriptionSoloRegistrationFilterInput
) {
  onDeleteSoloRegistration(filter: $filter) {
    id
    user {
      id
      name
      dateOfBirth
      Gender
      email
      phoneNumber
      medicalConditions
      createdAt
      updatedAt
      groupRegistrationUsersId
      companyRegistrationUsersId
      __typename
    }
    description
    category
    event {
      id
      description
      title
      date
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    eventSolosId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSoloRegistrationSubscriptionVariables,
  APITypes.OnDeleteSoloRegistrationSubscription
>;
export const onCreateGroupRegistration = /* GraphQL */ `subscription OnCreateGroupRegistration(
  $filter: ModelSubscriptionGroupRegistrationFilterInput
) {
  onCreateGroupRegistration(filter: $filter) {
    id
    users {
      nextToken
      __typename
    }
    description
    category
    event {
      id
      description
      title
      date
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    eventGroupsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGroupRegistrationSubscriptionVariables,
  APITypes.OnCreateGroupRegistrationSubscription
>;
export const onUpdateGroupRegistration = /* GraphQL */ `subscription OnUpdateGroupRegistration(
  $filter: ModelSubscriptionGroupRegistrationFilterInput
) {
  onUpdateGroupRegistration(filter: $filter) {
    id
    users {
      nextToken
      __typename
    }
    description
    category
    event {
      id
      description
      title
      date
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    eventGroupsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGroupRegistrationSubscriptionVariables,
  APITypes.OnUpdateGroupRegistrationSubscription
>;
export const onDeleteGroupRegistration = /* GraphQL */ `subscription OnDeleteGroupRegistration(
  $filter: ModelSubscriptionGroupRegistrationFilterInput
) {
  onDeleteGroupRegistration(filter: $filter) {
    id
    users {
      nextToken
      __typename
    }
    description
    category
    event {
      id
      description
      title
      date
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    eventGroupsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGroupRegistrationSubscriptionVariables,
  APITypes.OnDeleteGroupRegistrationSubscription
>;
export const onCreateCompanyRegistration = /* GraphQL */ `subscription OnCreateCompanyRegistration(
  $filter: ModelSubscriptionCompanyRegistrationFilterInput
) {
  onCreateCompanyRegistration(filter: $filter) {
    id
    users {
      nextToken
      __typename
    }
    description
    workClass
    category
    subCat
    event {
      id
      description
      title
      date
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    eventCompaniesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCompanyRegistrationSubscriptionVariables,
  APITypes.OnCreateCompanyRegistrationSubscription
>;
export const onUpdateCompanyRegistration = /* GraphQL */ `subscription OnUpdateCompanyRegistration(
  $filter: ModelSubscriptionCompanyRegistrationFilterInput
) {
  onUpdateCompanyRegistration(filter: $filter) {
    id
    users {
      nextToken
      __typename
    }
    description
    workClass
    category
    subCat
    event {
      id
      description
      title
      date
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    eventCompaniesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCompanyRegistrationSubscriptionVariables,
  APITypes.OnUpdateCompanyRegistrationSubscription
>;
export const onDeleteCompanyRegistration = /* GraphQL */ `subscription OnDeleteCompanyRegistration(
  $filter: ModelSubscriptionCompanyRegistrationFilterInput
) {
  onDeleteCompanyRegistration(filter: $filter) {
    id
    users {
      nextToken
      __typename
    }
    description
    workClass
    category
    subCat
    event {
      id
      description
      title
      date
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    eventCompaniesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCompanyRegistrationSubscriptionVariables,
  APITypes.OnDeleteCompanyRegistrationSubscription
>;
export const onCreateEvent = /* GraphQL */ `subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
  onCreateEvent(filter: $filter) {
    id
    description
    title
    date
    solos {
      nextToken
      __typename
    }
    companies {
      nextToken
      __typename
    }
    groups {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEventSubscriptionVariables,
  APITypes.OnCreateEventSubscription
>;
export const onUpdateEvent = /* GraphQL */ `subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
  onUpdateEvent(filter: $filter) {
    id
    description
    title
    date
    solos {
      nextToken
      __typename
    }
    companies {
      nextToken
      __typename
    }
    groups {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEventSubscriptionVariables,
  APITypes.OnUpdateEventSubscription
>;
export const onDeleteEvent = /* GraphQL */ `subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
  onDeleteEvent(filter: $filter) {
    id
    description
    title
    date
    solos {
      nextToken
      __typename
    }
    companies {
      nextToken
      __typename
    }
    groups {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEventSubscriptionVariables,
  APITypes.OnDeleteEventSubscription
>;
