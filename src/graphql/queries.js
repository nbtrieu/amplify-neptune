/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchPublicationsByProduct = /* GraphQL */ `
  query SearchPublicationsByProduct($product_name: String!) {
    searchPublicationsByProduct(product_name: $product_name) {
      uuid
      title
      doi
      publication_date
      affiliations
      abstract
      source_name
      volume
      issue
      start_page
      end_page
      keywords
      publication_type
      citations
      references
      url
      notes
    }
  }
`;

export const searchByKeyword = /* GraphQL */ `
  query SearchByKeyword($keyword: String!) {
    searchByKeyword(keyword: $keyword) {
      uuid
      customer_id
      first_name
      last_name
      full_name
      email
      phone
      title
      organization
      mailing_address
      interest_areas
      lead_source
      event_name
      social_media
      date_of_birth
      previous_titles
      previous_organizations
      tentative_organizations
      purchasing_agent
      validated_lead_status
      status
      ingestion_tag
      data_source
      __typename
    }
  }
`;

export const searchByOrganization = /* GraphQL */ `
  query SearchByOrganization($organization: String!) {
    searchByOrganization(organization: $organization) {
      uuid
      customer_id
      first_name
      last_name
      full_name
      email
      phone
      title
      organization
      mailing_address
      interest_areas
      lead_source
      event_name
      social_media
      date_of_birth
      previous_titles
      previous_organizations
      tentative_organizations
      purchasing_agent
      validated_lead_status
      status
      ingestion_tag
      data_source
      __typename
    }
  }
`;

export const searchByName = /* GraphQL */ `
  query SearchByName($name: String!) {
    searchByName(name: $name) {
      uuid
      customer_id
      first_name
      last_name
      full_name
      email
      phone
      title
      organization
      mailing_address
      interest_areas
      lead_source
      event_name
      social_media
      date_of_birth
      previous_titles
      previous_organizations
      tentative_organizations
      purchasing_agent
      validated_lead_status
      status
      ingestion_tag
      data_source
      __typename
    }
  }
`;

export const getNodeCount = /* GraphQL */ `
  query GetNodeCount {
    getNodeCount
  }
`;
export const getKeywordUid = /* GraphQL */ `
  query GetKeywordUid($keyword: String!) {
    getKeywordUid(keyword: $keyword)
  }
`;
export const getKeyword = /* GraphQL */ `
  query GetKeyword($id: ID!) {
    getKeyword(id: $id) {
      id
      uuid
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
        uuid
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
      uuid
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
        uuid
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
      uuid
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
        uuid
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
        uuid
        name
        createdAt
        updatedAt
        __typename
      }
      person {
        id
        uuid
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
        uuid
        name
        mailing_address
        createdAt
        updatedAt
        __typename
      }
      person {
        id
        uuid
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
