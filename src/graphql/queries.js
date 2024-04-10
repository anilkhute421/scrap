/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChallengeActivity = /* GraphQL */ `
  query GetChallengeActivity($id: ID!) {
    getChallengeActivity(id: $id) {
      id
      groupId
      studentId
      challengeId
      research
      design
      build
      report
      status
      createdAt
      updatedAt
    }
  }
`;
export const listChallengeActivities = /* GraphQL */ `
  query ListChallengeActivities(
    $filter: ModelChallengeActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallengeActivities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        studentId
        challengeId
        research
        design
        build
        report
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const challengeActivitiesByGroupId = /* GraphQL */ `
  query ChallengeActivitiesByGroupId(
    $groupId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChallengeActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    challengeActivitiesByGroupId(
      groupId: $groupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        studentId
        challengeId
        research
        design
        build
        report
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const challengeActivitiesByStudentId = /* GraphQL */ `
  query ChallengeActivitiesByStudentId(
    $studentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChallengeActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    challengeActivitiesByStudentId(
      studentId: $studentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        studentId
        challengeId
        research
        design
        build
        report
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const challengeActivitiesByChallengeId = /* GraphQL */ `
  query ChallengeActivitiesByChallengeId(
    $challengeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChallengeActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    challengeActivitiesByChallengeId(
      challengeId: $challengeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        studentId
        challengeId
        research
        design
        build
        report
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChallenge = /* GraphQL */ `
  query GetChallenge($id: ID!) {
    getChallenge(id: $id) {
      id
      name
      description
      research
      design
      build
      report
      point
      createdAt
      updatedAt
    }
  }
`;
export const listChallenges = /* GraphQL */ `
  query ListChallenges(
    $filter: ModelChallengeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallenges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        research
        design
        build
        report
        point
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getActivityFeedComment = /* GraphQL */ `
  query GetActivityFeedComment($id: ID!) {
    getActivityFeedComment(id: $id) {
      id
      activityFeedId
      userId
      comment
      user {
        id
        firstName
        lastName
        role
        avatar
        createdAt
        updatedAt
        userStudentId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listActivityFeedComments = /* GraphQL */ `
  query ListActivityFeedComments(
    $filter: ModelActivityFeedCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivityFeedComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        activityFeedId
        userId
        comment
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const activityFeedCommentsByActivityFeedId = /* GraphQL */ `
  query ActivityFeedCommentsByActivityFeedId(
    $activityFeedId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelActivityFeedCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    activityFeedCommentsByActivityFeedId(
      activityFeedId: $activityFeedId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        activityFeedId
        userId
        comment
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const activityFeedCommentsByUserId = /* GraphQL */ `
  query ActivityFeedCommentsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelActivityFeedCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    activityFeedCommentsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        activityFeedId
        userId
        comment
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getActivityFeedLike = /* GraphQL */ `
  query GetActivityFeedLike($id: ID!) {
    getActivityFeedLike(id: $id) {
      id
      activityFeedId
      userId
      user {
        id
        firstName
        lastName
        role
        avatar
        createdAt
        updatedAt
        userStudentId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listActivityFeedLikes = /* GraphQL */ `
  query ListActivityFeedLikes(
    $filter: ModelActivityFeedLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivityFeedLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        activityFeedId
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const activityFeedLikesByActivityFeedId = /* GraphQL */ `
  query ActivityFeedLikesByActivityFeedId(
    $activityFeedId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelActivityFeedLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    activityFeedLikesByActivityFeedId(
      activityFeedId: $activityFeedId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        activityFeedId
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const activityFeedLikesByUserId = /* GraphQL */ `
  query ActivityFeedLikesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelActivityFeedLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    activityFeedLikesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        activityFeedId
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getActivityFeed = /* GraphQL */ `
  query GetActivityFeed($id: ID!) {
    getActivityFeed(id: $id) {
      id
      owner {
        id
        firstName
        lastName
        role
        avatar
        createdAt
        updatedAt
        userStudentId
      }
      content
      media
      group {
        id
        schoolId
        name
        approved
        createdAt
        updatedAt
        groupOwnerId
      }
      likes {
        nextToken
      }
      comments {
        nextToken
      }
      active
      schoolId
      createdAt
      updatedAt
      activityFeedOwnerId
      activityFeedGroupId
    }
  }
`;
export const listActivityFeeds = /* GraphQL */ `
  query ListActivityFeeds(
    $filter: ModelActivityFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivityFeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        media
        active
        schoolId
        createdAt
        updatedAt
        activityFeedOwnerId
        activityFeedGroupId
      }
      nextToken
    }
  }
`;
export const activityFeedsBySchoolId = /* GraphQL */ `
  query ActivityFeedsBySchoolId(
    $schoolId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelActivityFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    activityFeedsBySchoolId(
      schoolId: $schoolId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        media
        active
        schoolId
        createdAt
        updatedAt
        activityFeedOwnerId
        activityFeedGroupId
      }
      nextToken
    }
  }
`;
export const searchActivityFeeds = /* GraphQL */ `
  query SearchActivityFeeds(
    $filter: SearchableActivityFeedFilterInput
    $sort: [SearchableActivityFeedSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableActivityFeedAggregationInput]
  ) {
    searchActivityFeeds(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        content
        media
        active
        schoolId
        createdAt
        updatedAt
        activityFeedOwnerId
        activityFeedGroupId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getCampaign = /* GraphQL */ `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
      id
      category
      otherCategory
      name
      description
      approved
      schoolId
      school {
        id
        name
        type
        stage
        medium
        approved
        address
        address1
        address2
        zone
        city
        state
        postal_code
        primaryContact
        createdAt
        updatedAt
      }
      studentId
      student {
        id
        firstName
        lastName
        grade
        schoolId
        hasGroup
        createdAt
        updatedAt
        studentUserId
      }
      plan
      roles
      notes
      schedule
      invites {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCampaigns = /* GraphQL */ `
  query ListCampaigns(
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        otherCategory
        name
        description
        approved
        schoolId
        studentId
        plan
        roles
        notes
        schedule
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const campaignsBySchoolId = /* GraphQL */ `
  query CampaignsBySchoolId(
    $schoolId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    campaignsBySchoolId(
      schoolId: $schoolId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        otherCategory
        name
        description
        approved
        schoolId
        studentId
        plan
        roles
        notes
        schedule
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const campaignsByStudentId = /* GraphQL */ `
  query CampaignsByStudentId(
    $studentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    campaignsByStudentId(
      studentId: $studentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        otherCategory
        name
        description
        approved
        schoolId
        studentId
        plan
        roles
        notes
        schedule
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchCampaigns = /* GraphQL */ `
  query SearchCampaigns(
    $filter: SearchableCampaignFilterInput
    $sort: [SearchableCampaignSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCampaignAggregationInput]
  ) {
    searchCampaigns(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        category
        otherCategory
        name
        description
        approved
        schoolId
        studentId
        plan
        roles
        notes
        schedule
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
      id
      name
      type
      stage
      medium
      approved
      address
      address1
      address2
      zone
      city
      state
      postal_code
      primaryContact
      students {
        nextToken
      }
      groups {
        nextToken
      }
      campaigns {
        nextToken
      }
      activityFeed {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        stage
        medium
        approved
        address
        address1
        address2
        zone
        city
        state
        postal_code
        primaryContact
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchSchools = /* GraphQL */ `
  query SearchSchools(
    $filter: SearchableSchoolFilterInput
    $sort: [SearchableSchoolSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableSchoolAggregationInput]
  ) {
    searchSchools(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        type
        stage
        medium
        approved
        address
        address1
        address2
        zone
        city
        state
        postal_code
        primaryContact
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      role
      avatar
      student {
        id
        firstName
        lastName
        grade
        schoolId
        hasGroup
        createdAt
        updatedAt
        studentUserId
      }
      likes {
        nextToken
      }
      comments {
        nextToken
      }
      devices {
        nextToken
      }
      groupInvites {
        nextToken
      }
      notifications {
        nextToken
      }
      createdAt
      updatedAt
      userStudentId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        role
        avatar
        createdAt
        updatedAt
        userStudentId
      }
      nextToken
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: [SearchableUserSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserAggregationInput]
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        firstName
        lastName
        role
        avatar
        createdAt
        updatedAt
        userStudentId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      firstName
      lastName
      grade
      schoolId
      school {
        id
        name
        type
        stage
        medium
        approved
        address
        address1
        address2
        zone
        city
        state
        postal_code
        primaryContact
        createdAt
        updatedAt
      }
      user {
        id
        firstName
        lastName
        role
        avatar
        createdAt
        updatedAt
        userStudentId
      }
      hasGroup
      groupInvites {
        nextToken
      }
      campaignInvites {
        nextToken
      }
      groups {
        nextToken
      }
      campaigns {
        nextToken
      }
      challenges {
        nextToken
      }
      createdAt
      updatedAt
      studentUserId
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        grade
        schoolId
        hasGroup
        createdAt
        updatedAt
        studentUserId
      }
      nextToken
    }
  }
`;
export const studentsBySchoolId = /* GraphQL */ `
  query StudentsBySchoolId(
    $schoolId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentsBySchoolId(
      schoolId: $schoolId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        grade
        schoolId
        hasGroup
        createdAt
        updatedAt
        studentUserId
      }
      nextToken
    }
  }
`;
export const searchStudents = /* GraphQL */ `
  query SearchStudents(
    $filter: SearchableStudentFilterInput
    $sort: [SearchableStudentSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableStudentAggregationInput]
  ) {
    searchStudents(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        firstName
        lastName
        grade
        schoolId
        hasGroup
        createdAt
        updatedAt
        studentUserId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      schoolId
      name
      approved
      owner {
        id
        firstName
        lastName
        role
        avatar
        createdAt
        updatedAt
        userStudentId
      }
      invites {
        nextToken
      }
      members {
        nextToken
      }
      challenges {
        nextToken
      }
      createdAt
      updatedAt
      groupOwnerId
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        schoolId
        name
        approved
        createdAt
        updatedAt
        groupOwnerId
      }
      nextToken
    }
  }
`;
export const groupsBySchoolId = /* GraphQL */ `
  query GroupsBySchoolId(
    $schoolId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupsBySchoolId(
      schoolId: $schoolId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        schoolId
        name
        approved
        createdAt
        updatedAt
        groupOwnerId
      }
      nextToken
    }
  }
`;
export const searchGroups = /* GraphQL */ `
  query SearchGroups(
    $filter: SearchableGroupFilterInput
    $sort: [SearchableGroupSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableGroupAggregationInput]
  ) {
    searchGroups(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        schoolId
        name
        approved
        createdAt
        updatedAt
        groupOwnerId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getGroupMember = /* GraphQL */ `
  query GetGroupMember($id: ID!) {
    getGroupMember(id: $id) {
      id
      groupId
      group {
        id
        schoolId
        name
        approved
        createdAt
        updatedAt
        groupOwnerId
      }
      studentId
      student {
        id
        firstName
        lastName
        grade
        schoolId
        hasGroup
        createdAt
        updatedAt
        studentUserId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGroupMembers = /* GraphQL */ `
  query ListGroupMembers(
    $filter: ModelGroupMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupId
        studentId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const groupMembersByGroupId = /* GraphQL */ `
  query GroupMembersByGroupId(
    $groupId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupMembersByGroupId(
      groupId: $groupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        studentId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const groupMembersByStudentId = /* GraphQL */ `
  query GroupMembersByStudentId(
    $studentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupMembersByStudentId(
      studentId: $studentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        studentId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroupInvite = /* GraphQL */ `
  query GetGroupInvite($id: ID!) {
    getGroupInvite(id: $id) {
      id
      groupId
      group {
        id
        schoolId
        name
        approved
        createdAt
        updatedAt
        groupOwnerId
      }
      studentId
      student {
        id
        firstName
        lastName
        grade
        schoolId
        hasGroup
        createdAt
        updatedAt
        studentUserId
      }
      userId
      user {
        id
        firstName
        lastName
        role
        avatar
        createdAt
        updatedAt
        userStudentId
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const listGroupInvites = /* GraphQL */ `
  query ListGroupInvites(
    $filter: ModelGroupInviteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupInvites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupId
        studentId
        userId
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const groupInvitesByGroupId = /* GraphQL */ `
  query GroupInvitesByGroupId(
    $groupId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupInviteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupInvitesByGroupId(
      groupId: $groupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        studentId
        userId
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const groupInvitesByStudentId = /* GraphQL */ `
  query GroupInvitesByStudentId(
    $studentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupInviteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupInvitesByStudentId(
      studentId: $studentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        studentId
        userId
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const groupInvitesByUserId = /* GraphQL */ `
  query GroupInvitesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupInviteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupInvitesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        studentId
        userId
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCampaignInvite = /* GraphQL */ `
  query GetCampaignInvite($id: ID!) {
    getCampaignInvite(id: $id) {
      id
      campaignId
      campaign {
        id
        category
        otherCategory
        name
        description
        approved
        schoolId
        studentId
        plan
        roles
        notes
        schedule
        createdAt
        updatedAt
      }
      studentId
      student {
        id
        firstName
        lastName
        grade
        schoolId
        hasGroup
        createdAt
        updatedAt
        studentUserId
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const listCampaignInvites = /* GraphQL */ `
  query ListCampaignInvites(
    $filter: ModelCampaignInviteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaignInvites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        campaignId
        studentId
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const campaignInvitesByCampaignId = /* GraphQL */ `
  query CampaignInvitesByCampaignId(
    $campaignId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCampaignInviteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    campaignInvitesByCampaignId(
      campaignId: $campaignId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        campaignId
        studentId
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const campaignInvitesByStudentId = /* GraphQL */ `
  query CampaignInvitesByStudentId(
    $studentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCampaignInviteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    campaignInvitesByStudentId(
      studentId: $studentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        campaignId
        studentId
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserDevice = /* GraphQL */ `
  query GetUserDevice($id: ID!) {
    getUserDevice(id: $id) {
      id
      userId
      type
      name
      meta
      token
      arn
      createdAt
      updatedAt
    }
  }
`;
export const listUserDevices = /* GraphQL */ `
  query ListUserDevices(
    $filter: ModelUserDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        type
        name
        meta
        token
        arn
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userDevicesByUserId = /* GraphQL */ `
  query UserDevicesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userDevicesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        type
        name
        meta
        token
        arn
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      userId
      type
      typeId
      senderId
      sender {
        id
        firstName
        lastName
        role
        avatar
        createdAt
        updatedAt
        userStudentId
      }
      title
      message
      sent
      read
      createdAt
      updatedAt
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        type
        typeId
        senderId
        title
        message
        sent
        read
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const notificationsByDate = /* GraphQL */ `
  query NotificationsByDate(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByDate(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        type
        typeId
        senderId
        title
        message
        sent
        read
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
