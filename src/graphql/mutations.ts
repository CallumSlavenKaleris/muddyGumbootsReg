/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createSoloRegistration = /* GraphQL */ `mutation CreateSoloRegistration(
  $input: CreateSoloRegistrationInput!
  $condition: ModelSoloRegistrationConditionInput
) {
  createSoloRegistration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSoloRegistrationMutationVariables,
  APITypes.CreateSoloRegistrationMutation
>;
export const updateSoloRegistration = /* GraphQL */ `mutation UpdateSoloRegistration(
  $input: UpdateSoloRegistrationInput!
  $condition: ModelSoloRegistrationConditionInput
) {
  updateSoloRegistration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSoloRegistrationMutationVariables,
  APITypes.UpdateSoloRegistrationMutation
>;
export const deleteSoloRegistration = /* GraphQL */ `mutation DeleteSoloRegistration(
  $input: DeleteSoloRegistrationInput!
  $condition: ModelSoloRegistrationConditionInput
) {
  deleteSoloRegistration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSoloRegistrationMutationVariables,
  APITypes.DeleteSoloRegistrationMutation
>;
export const createGroupRegistration = /* GraphQL */ `mutation CreateGroupRegistration(
  $input: CreateGroupRegistrationInput!
  $condition: ModelGroupRegistrationConditionInput
) {
  createGroupRegistration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGroupRegistrationMutationVariables,
  APITypes.CreateGroupRegistrationMutation
>;
export const updateGroupRegistration = /* GraphQL */ `mutation UpdateGroupRegistration(
  $input: UpdateGroupRegistrationInput!
  $condition: ModelGroupRegistrationConditionInput
) {
  updateGroupRegistration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGroupRegistrationMutationVariables,
  APITypes.UpdateGroupRegistrationMutation
>;
export const deleteGroupRegistration = /* GraphQL */ `mutation DeleteGroupRegistration(
  $input: DeleteGroupRegistrationInput!
  $condition: ModelGroupRegistrationConditionInput
) {
  deleteGroupRegistration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGroupRegistrationMutationVariables,
  APITypes.DeleteGroupRegistrationMutation
>;
export const createCompanyRegistration = /* GraphQL */ `mutation CreateCompanyRegistration(
  $input: CreateCompanyRegistrationInput!
  $condition: ModelCompanyRegistrationConditionInput
) {
  createCompanyRegistration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCompanyRegistrationMutationVariables,
  APITypes.CreateCompanyRegistrationMutation
>;
export const updateCompanyRegistration = /* GraphQL */ `mutation UpdateCompanyRegistration(
  $input: UpdateCompanyRegistrationInput!
  $condition: ModelCompanyRegistrationConditionInput
) {
  updateCompanyRegistration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCompanyRegistrationMutationVariables,
  APITypes.UpdateCompanyRegistrationMutation
>;
export const deleteCompanyRegistration = /* GraphQL */ `mutation DeleteCompanyRegistration(
  $input: DeleteCompanyRegistrationInput!
  $condition: ModelCompanyRegistrationConditionInput
) {
  deleteCompanyRegistration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCompanyRegistrationMutationVariables,
  APITypes.DeleteCompanyRegistrationMutation
>;
export const createEvent = /* GraphQL */ `mutation CreateEvent(
  $input: CreateEventInput!
  $condition: ModelEventConditionInput
) {
  createEvent(input: $input, condition: $condition) {
    id
    description
    title
    date
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEventMutationVariables,
  APITypes.CreateEventMutation
>;
export const updateEvent = /* GraphQL */ `mutation UpdateEvent(
  $input: UpdateEventInput!
  $condition: ModelEventConditionInput
) {
  updateEvent(input: $input, condition: $condition) {
    id
    description
    title
    date
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEventMutationVariables,
  APITypes.UpdateEventMutation
>;
export const deleteEvent = /* GraphQL */ `mutation DeleteEvent(
  $input: DeleteEventInput!
  $condition: ModelEventConditionInput
) {
  deleteEvent(input: $input, condition: $condition) {
    id
    description
    title
    date
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEventMutationVariables,
  APITypes.DeleteEventMutation
>;
