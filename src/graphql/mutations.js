/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createKeyword = /* GraphQL */ `
  mutation CreateKeyword(
    $input: CreateKeywordInput!
    $condition: ModelKeywordConditionInput
  ) {
    createKeyword(input: $input, condition: $condition) {
      id
      uid
      name
      KeywordOwners {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateKeyword = /* GraphQL */ `
  mutation UpdateKeyword(
    $input: UpdateKeywordInput!
    $condition: ModelKeywordConditionInput
  ) {
    updateKeyword(input: $input, condition: $condition) {
      id
      uid
      name
      KeywordOwners {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteKeyword = /* GraphQL */ `
  mutation DeleteKeyword(
    $input: DeleteKeywordInput!
    $condition: ModelKeywordConditionInput
  ) {
    deleteKeyword(input: $input, condition: $condition) {
      id
      uid
      name
      KeywordOwners {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
      id
      uid
      name
      mailing_address
      OrganizationMembers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
      id
      uid
      name
      mailing_address
      OrganizationMembers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
      id
      uid
      name
      mailing_address
      OrganizationMembers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
      id
      uid
      name
      email
      phone
      title
      mailing_address
      interest_areas
      lead_source
      event_name
      PeopleOrganizations {
        nextToken
        __typename
      }
      PeopleKeywords {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
      id
      uid
      name
      email
      phone
      title
      mailing_address
      interest_areas
      lead_source
      event_name
      PeopleOrganizations {
        nextToken
        __typename
      }
      PeopleKeywords {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
      id
      uid
      name
      email
      phone
      title
      mailing_address
      interest_areas
      lead_source
      event_name
      PeopleOrganizations {
        nextToken
        __typename
      }
      PeopleKeywords {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createKeywordPerson = /* GraphQL */ `
  mutation CreateKeywordPerson(
    $input: CreateKeywordPersonInput!
    $condition: ModelKeywordPersonConditionInput
  ) {
    createKeywordPerson(input: $input, condition: $condition) {
      id
      keywordId
      personId
      keyword {
        id
        uid
        name
        createdAt
        updatedAt
        __typename
      }
      person {
        id
        uid
        name
        email
        phone
        title
        mailing_address
        interest_areas
        lead_source
        event_name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateKeywordPerson = /* GraphQL */ `
  mutation UpdateKeywordPerson(
    $input: UpdateKeywordPersonInput!
    $condition: ModelKeywordPersonConditionInput
  ) {
    updateKeywordPerson(input: $input, condition: $condition) {
      id
      keywordId
      personId
      keyword {
        id
        uid
        name
        createdAt
        updatedAt
        __typename
      }
      person {
        id
        uid
        name
        email
        phone
        title
        mailing_address
        interest_areas
        lead_source
        event_name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteKeywordPerson = /* GraphQL */ `
  mutation DeleteKeywordPerson(
    $input: DeleteKeywordPersonInput!
    $condition: ModelKeywordPersonConditionInput
  ) {
    deleteKeywordPerson(input: $input, condition: $condition) {
      id
      keywordId
      personId
      keyword {
        id
        uid
        name
        createdAt
        updatedAt
        __typename
      }
      person {
        id
        uid
        name
        email
        phone
        title
        mailing_address
        interest_areas
        lead_source
        event_name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createOrganizationPerson = /* GraphQL */ `
  mutation CreateOrganizationPerson(
    $input: CreateOrganizationPersonInput!
    $condition: ModelOrganizationPersonConditionInput
  ) {
    createOrganizationPerson(input: $input, condition: $condition) {
      id
      organizationId
      personId
      organization {
        id
        uid
        name
        mailing_address
        createdAt
        updatedAt
        __typename
      }
      person {
        id
        uid
        name
        email
        phone
        title
        mailing_address
        interest_areas
        lead_source
        event_name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateOrganizationPerson = /* GraphQL */ `
  mutation UpdateOrganizationPerson(
    $input: UpdateOrganizationPersonInput!
    $condition: ModelOrganizationPersonConditionInput
  ) {
    updateOrganizationPerson(input: $input, condition: $condition) {
      id
      organizationId
      personId
      organization {
        id
        uid
        name
        mailing_address
        createdAt
        updatedAt
        __typename
      }
      person {
        id
        uid
        name
        email
        phone
        title
        mailing_address
        interest_areas
        lead_source
        event_name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteOrganizationPerson = /* GraphQL */ `
  mutation DeleteOrganizationPerson(
    $input: DeleteOrganizationPersonInput!
    $condition: ModelOrganizationPersonConditionInput
  ) {
    deleteOrganizationPerson(input: $input, condition: $condition) {
      id
      organizationId
      personId
      organization {
        id
        uid
        name
        mailing_address
        createdAt
        updatedAt
        __typename
      }
      person {
        id
        uid
        name
        email
        phone
        title
        mailing_address
        interest_areas
        lead_source
        event_name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
