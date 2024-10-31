/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAllZymoWebProducts = /* GraphQL */ `
  query GetAllZymoWebProducts {
    getZymoWebProducts {
      items {
        uuid
        sku
        shopify_id
        handle
        command
        title
        body_html
        vendor
        type
        tags
        status
        url
        total_inventory_qty
        category_id
        category_name
        category
        custom_collections
        smart_collections
        image_type
        image_src
        image_command
        image_position
        image_width
        image_height
        image_alt_text
        variant_id
        option1_name
        option1_value
        option2_name
        option2_value
        variant_position
        variant_price
        metafield_title_tag
        metafield_custom_product
        metafield_highlight_a
        metafield_highlight_b
        metafield_highlight_c
        metafield_short_description
        metafield_google_product_category
        metafield_custom_label_0
        metafield_suggested_terms
        metafield_sds_url
        metafield_search_tag
      }
    }
  }
`;

export const searchMarketingCampaignsByKeyword = /* GraphQL */ `
  query SearchMarketingCampaignsByKeyword($keyword: String!) {
    searchMarketingCampaignsByKeyword(keyword: $keyword) {
      uuid
      name
      tags
      subject
      list
      send_time
      send_weekday
      total_recipients
      unique_placed_order
      placed_order_rate
      revenue
      unique_opens
      open_rate
      total_opens
      unique_clicks
      click_rate
      total_clicks
      unsubscribes
      spam_complaints
      spam_complaints_rate
      successful_deliveries
      bounces
      bounce_rate
      campaign_id
      campaign_channel
      ingestion_tag
      data_source
    }
  }
`

export const searchPublicationProductsByKeyword = /* GraphQL */ `
  query SearchPublicationProductsByKeyword($keyword: String!) {
    searchPublicationProductsByKeyword(keyword: $keyword) {
      uuid
      name
      display_name
      company
      publications
    }
  }
`

export const searchOrganizationsByKeyword = /* GraphQL */ `
  query SearchOrganizationsByKeyword($keyword: String!) {
    searchOrganizationsByKeyword(keyword: $keyword) {
      uuid
      name
      display_name
      industry
      description
      location
      mailing_address
      website
      domain
      linkedin_url
      specialties
      size
    }
  }
`

export const searchPublicationsByKeyword = /* GraphQL */ `
  query SearchPublicationsByKeyword($keyword: String!) {
    searchPublicationsByKeyword(keyword: $keyword) {
      abstract
      affiliations {
        affiliation
        author
        email
        equal_contribution
        first_author
        second_author
      }
      citations
      doi
      end_page
      issue
      keywords
      notes
      publication_date
      publication_type
      references
      source_name
      start_page
      title
      url
      uuid
      volume
    }
  }
`;

export const searchPublicationsByProduct = /* GraphQL */ `
  query SearchPublicationsByProduct($product_name: String!) {
    searchPublicationsByProduct(product_name: $product_name) {
      abstract
      affiliations {
        affiliation
        author
        email
        equal_contribution
        first_author
        second_author
      }
      citations
      doi
      end_page
      issue
      keywords
      notes
      publication_date
      publication_type
      references
      source_name
      start_page
      title
      url
      uuid
      volume
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
      number_of_cases
      score_case
      quantity
      sales
      number_of_orders
      score_sales
      score_total
      rank
      cases_tier
      sales_tier
      message_tier
      orders_tier
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
      number_of_cases
      score_case
      quantity
      sales
      number_of_orders
      score_sales
      score_total
      rank
      cases_tier
      sales_tier
      message_tier
      orders_tier
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
      number_of_cases
      score_case
      quantity
      sales
      number_of_orders
      score_sales
      score_total
      rank
      cases_tier
      sales_tier
      message_tier
      orders_tier
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
