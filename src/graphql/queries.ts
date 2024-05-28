/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPerson = /* GraphQL */ `query GetPerson($id: ID!) {
  getPerson(id: $id) {
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
` as GeneratedQuery<APITypes.GetPersonQueryVariables, APITypes.GetPersonQuery>;
export const listPeople = /* GraphQL */ `query ListPeople(
  $filter: ModelPersonFilterInput
  $limit: Int
  $nextToken: String
) {
  listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPeopleQueryVariables,
  APITypes.ListPeopleQuery
>;
export const getSoloRegistration = /* GraphQL */ `query GetSoloRegistration($id: ID!) {
  getSoloRegistration(id: $id) {
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
      description
      category
      createdAt
      updatedAt
      eventSolosId
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
      description
      category
      createdAt
      updatedAt
      eventGroupsId
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
      description
      workClass
      category
      subCat
      createdAt
      updatedAt
      eventCompaniesId
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
