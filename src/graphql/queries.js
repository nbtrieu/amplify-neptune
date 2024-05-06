/* eslint-disable */
// this is an auto generated file. This will be overwritten
export const getKeywordUid = /* GraphQL */ `
  query GetKeywordUid($keyword: String!) {
    getKeywordUid(keyword: $keyword)
  }
`

export const getNodeCount = /* GraphQL */ `
  query GetNodeCount {
    getNodeCount
  }
`

export const searchByKeyword = /* GraphQL */ `
  query SearchByKeyword($keyword: String!) {
    searchByKeyword(keyword: $keyword) {
      uid
      name
      email
      phone
      title
      organization
      mailing_address
      interest_areas
      lead_source
      event_name
      __typename
    }
  }
`;

export const searchByOrganization = /* GraphQL */ `
  query SearchByOrganization($organization: String!) {
    searchByOrganization(organization: $organization) {
      uid
      name
      email
      phone
      title
      organization
      mailing_address
      interest_areas
      lead_source
      event_name
      __typename
    }
  }
`;

export const getKeyword = /* GraphQL */ `
  query GetKeyword($id: ID!) {
    getKeyword(id: $id) {
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
export const listKeywords = /* GraphQL */ `
  query ListKeywords(
    $filter: ModelKeywordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKeywords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        uid
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
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
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        uid
        name
        mailing_address
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
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
export const listPeople = /* GraphQL */ `
  query ListPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getKeywordPerson = /* GraphQL */ `
  query GetKeywordPerson($id: ID!) {
    getKeywordPerson(id: $id) {
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
export const listKeywordPeople = /* GraphQL */ `
  query ListKeywordPeople(
    $filter: ModelKeywordPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKeywordPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        keywordId
        personId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const keywordPeopleByKeywordId = /* GraphQL */ `
  query KeywordPeopleByKeywordId(
    $keywordId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelKeywordPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    keywordPeopleByKeywordId(
      keywordId: $keywordId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        keywordId
        personId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const keywordPeopleByPersonId = /* GraphQL */ `
  query KeywordPeopleByPersonId(
    $personId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelKeywordPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    keywordPeopleByPersonId(
      personId: $personId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        keywordId
        personId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrganizationPerson = /* GraphQL */ `
  query GetOrganizationPerson($id: ID!) {
    getOrganizationPerson(id: $id) {
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
export const listOrganizationPeople = /* GraphQL */ `
  query ListOrganizationPeople(
    $filter: ModelOrganizationPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizationPeople(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        organizationId
        personId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const organizationPeopleByOrganizationId = /* GraphQL */ `
  query OrganizationPeopleByOrganizationId(
    $organizationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrganizationPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    organizationPeopleByOrganizationId(
      organizationId: $organizationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        organizationId
        personId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const organizationPeopleByPersonId = /* GraphQL */ `
  query OrganizationPeopleByPersonId(
    $personId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrganizationPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    organizationPeopleByPersonId(
      personId: $personId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        organizationId
        personId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
