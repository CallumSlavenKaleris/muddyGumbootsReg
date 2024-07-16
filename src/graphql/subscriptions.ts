/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateSoloRegistration = /* GraphQL */ `subscription OnCreateSoloRegistration(
  $filter: ModelSubscriptionSoloRegistrationFilterInput
) {
  onCreateSoloRegistration(filter: $filter) {
    id
    user {
      name
      dateOfBirth
      gender
      email
      phoneNumber
      medicalConditions
      nextOfKinName
      nextOfKinPhone
      __typename
    }
    category
    raceNumber
    createdAt
    updatedAt
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
      name
      dateOfBirth
      gender
      email
      phoneNumber
      medicalConditions
      nextOfKinName
      nextOfKinPhone
      __typename
    }
    category
    raceNumber
    createdAt
    updatedAt
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
      name
      dateOfBirth
      gender
      email
      phoneNumber
      medicalConditions
      nextOfKinName
      nextOfKinPhone
      __typename
    }
    category
    raceNumber
    createdAt
    updatedAt
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
      name
      dateOfBirth
      gender
      email
      phoneNumber
      medicalConditions
      nextOfKinName
      nextOfKinPhone
      __typename
    }
    category
    raceNumber
    createdAt
    updatedAt
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
      name
      dateOfBirth
      gender
      email
      phoneNumber
      medicalConditions
      nextOfKinName
      nextOfKinPhone
      __typename
    }
    category
    raceNumber
    createdAt
    updatedAt
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
      name
      dateOfBirth
      gender
      email
      phoneNumber
      medicalConditions
      nextOfKinName
      nextOfKinPhone
      __typename
    }
    category
    raceNumber
    createdAt
    updatedAt
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
      name
      dateOfBirth
      gender
      email
      phoneNumber
      medicalConditions
      nextOfKinName
      nextOfKinPhone
      __typename
    }
    workClass
    category
    subCat
    raceNumber
    createdAt
    updatedAt
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
      name
      dateOfBirth
      gender
      email
      phoneNumber
      medicalConditions
      nextOfKinName
      nextOfKinPhone
      __typename
    }
    workClass
    category
    subCat
    raceNumber
    createdAt
    updatedAt
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
      name
      dateOfBirth
      gender
      email
      phoneNumber
      medicalConditions
      nextOfKinName
      nextOfKinPhone
      __typename
    }
    workClass
    category
    subCat
    raceNumber
    createdAt
    updatedAt
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEventSubscriptionVariables,
  APITypes.OnDeleteEventSubscription
>;
