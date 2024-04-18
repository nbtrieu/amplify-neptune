/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateKeyword = /* GraphQL */ `
  subscription OnCreateKeyword($filter: ModelSubscriptionKeywordFilterInput) {
    onCreateKeyword(filter: $filter) {
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
export const onUpdateKeyword = /* GraphQL */ `
  subscription OnUpdateKeyword($filter: ModelSubscriptionKeywordFilterInput) {
    onUpdateKeyword(filter: $filter) {
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
export const onDeleteKeyword = /* GraphQL */ `
  subscription OnDeleteKeyword($filter: ModelSubscriptionKeywordFilterInput) {
    onDeleteKeyword(filter: $filter) {
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
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onCreateOrganization(filter: $filter) {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onUpdateOrganization(filter: $filter) {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onDeleteOrganization(filter: $filter) {
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
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson($filter: ModelSubscriptionPersonFilterInput) {
    onCreatePerson(filter: $filter) {
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
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson($filter: ModelSubscriptionPersonFilterInput) {
    onUpdatePerson(filter: $filter) {
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
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson($filter: ModelSubscriptionPersonFilterInput) {
    onDeletePerson(filter: $filter) {
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
export const onCreateKeywordPerson = /* GraphQL */ `
  subscription OnCreateKeywordPerson(
    $filter: ModelSubscriptionKeywordPersonFilterInput
  ) {
    onCreateKeywordPerson(filter: $filter) {
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
export const onUpdateKeywordPerson = /* GraphQL */ `
  subscription OnUpdateKeywordPerson(
    $filter: ModelSubscriptionKeywordPersonFilterInput
  ) {
    onUpdateKeywordPerson(filter: $filter) {
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
export const onDeleteKeywordPerson = /* GraphQL */ `
  subscription OnDeleteKeywordPerson(
    $filter: ModelSubscriptionKeywordPersonFilterInput
  ) {
    onDeleteKeywordPerson(filter: $filter) {
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
export const onCreateOrganizationPerson = /* GraphQL */ `
  subscription OnCreateOrganizationPerson(
    $filter: ModelSubscriptionOrganizationPersonFilterInput
  ) {
    onCreateOrganizationPerson(filter: $filter) {
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
export const onUpdateOrganizationPerson = /* GraphQL */ `
  subscription OnUpdateOrganizationPerson(
    $filter: ModelSubscriptionOrganizationPersonFilterInput
  ) {
    onUpdateOrganizationPerson(filter: $filter) {
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
export const onDeleteOrganizationPerson = /* GraphQL */ `
  subscription OnDeleteOrganizationPerson(
    $filter: ModelSubscriptionOrganizationPersonFilterInput
  ) {
    onDeleteOrganizationPerson(filter: $filter) {
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
