/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getSoloRegistration = /* GraphQL */ `query GetSoloRegistration($id: ID!) {
  getSoloRegistration(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSoloRegistrationQueryVariables,
  APITypes.GetSoloRegistrationQuery
>;
export const listSoloRegistrations = /* GraphQL */ `query ListSoloRegistrations(
  $filter: ModelSoloRegistrationFilterInput
  $limit: Int
  $nextToken: String
) {
  listSoloRegistrations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      category
      raceNumber
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSoloRegistrationsQueryVariables,
  APITypes.ListSoloRegistrationsQuery
>;
export const getGroupRegistration = /* GraphQL */ `query GetGroupRegistration($id: ID!) {
  getGroupRegistration(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetGroupRegistrationQueryVariables,
  APITypes.GetGroupRegistrationQuery
>;
export const listGroupRegistrations = /* GraphQL */ `query ListGroupRegistrations(
  $filter: ModelGroupRegistrationFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroupRegistrations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      category
      raceNumber
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupRegistrationsQueryVariables,
  APITypes.ListGroupRegistrationsQuery
>;
export const getCompanyRegistration = /* GraphQL */ `query GetCompanyRegistration($id: ID!) {
  getCompanyRegistration(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCompanyRegistrationQueryVariables,
  APITypes.GetCompanyRegistrationQuery
>;
export const listCompanyRegistrations = /* GraphQL */ `query ListCompanyRegistrations(
  $filter: ModelCompanyRegistrationFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanyRegistrations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      workClass
      category
      subCat
      raceNumber
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompanyRegistrationsQueryVariables,
  APITypes.ListCompanyRegistrationsQuery
>;
export const getEvent = /* GraphQL */ `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    description
    title
    date
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetEventQueryVariables, APITypes.GetEventQuery>;
export const listEvents = /* GraphQL */ `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      title
      date
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventsQueryVariables,
  APITypes.ListEventsQuery
>;
