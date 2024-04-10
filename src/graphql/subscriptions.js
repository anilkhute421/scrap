/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChallengeActivity = /* GraphQL */ `
  subscription OnCreateChallengeActivity(
    $filter: ModelSubscriptionChallengeActivityFilterInput
  ) {
    onCreateChallengeActivity(filter: $filter) {
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
export const onUpdateChallengeActivity = /* GraphQL */ `
  subscription OnUpdateChallengeActivity(
    $filter: ModelSubscriptionChallengeActivityFilterInput
  ) {
    onUpdateChallengeActivity(filter: $filter) {
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
export const onDeleteChallengeActivity = /* GraphQL */ `
  subscription OnDeleteChallengeActivity(
    $filter: ModelSubscriptionChallengeActivityFilterInput
  ) {
    onDeleteChallengeActivity(filter: $filter) {
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
export const onCreateChallenge = /* GraphQL */ `
  subscription OnCreateChallenge(
    $filter: ModelSubscriptionChallengeFilterInput
  ) {
    onCreateChallenge(filter: $filter) {
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
export const onUpdateChallenge = /* GraphQL */ `
  subscription OnUpdateChallenge(
    $filter: ModelSubscriptionChallengeFilterInput
  ) {
    onUpdateChallenge(filter: $filter) {
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
export const onDeleteChallenge = /* GraphQL */ `
  subscription OnDeleteChallenge(
    $filter: ModelSubscriptionChallengeFilterInput
  ) {
    onDeleteChallenge(filter: $filter) {
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
export const onCreateActivityFeedComment = /* GraphQL */ `
  subscription OnCreateActivityFeedComment(
    $filter: ModelSubscriptionActivityFeedCommentFilterInput
  ) {
    onCreateActivityFeedComment(filter: $filter) {
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
export const onUpdateActivityFeedComment = /* GraphQL */ `
  subscription OnUpdateActivityFeedComment(
    $filter: ModelSubscriptionActivityFeedCommentFilterInput
  ) {
    onUpdateActivityFeedComment(filter: $filter) {
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
export const onDeleteActivityFeedComment = /* GraphQL */ `
  subscription OnDeleteActivityFeedComment(
    $filter: ModelSubscriptionActivityFeedCommentFilterInput
  ) {
    onDeleteActivityFeedComment(filter: $filter) {
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
export const onCreateActivityFeedLike = /* GraphQL */ `
  subscription OnCreateActivityFeedLike(
    $filter: ModelSubscriptionActivityFeedLikeFilterInput
  ) {
    onCreateActivityFeedLike(filter: $filter) {
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
export const onUpdateActivityFeedLike = /* GraphQL */ `
  subscription OnUpdateActivityFeedLike(
    $filter: ModelSubscriptionActivityFeedLikeFilterInput
  ) {
    onUpdateActivityFeedLike(filter: $filter) {
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
export const onDeleteActivityFeedLike = /* GraphQL */ `
  subscription OnDeleteActivityFeedLike(
    $filter: ModelSubscriptionActivityFeedLikeFilterInput
  ) {
    onDeleteActivityFeedLike(filter: $filter) {
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
export const onCreateActivityFeed = /* GraphQL */ `
  subscription OnCreateActivityFeed(
    $filter: ModelSubscriptionActivityFeedFilterInput
  ) {
    onCreateActivityFeed(filter: $filter) {
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
export const onUpdateActivityFeed = /* GraphQL */ `
  subscription OnUpdateActivityFeed(
    $filter: ModelSubscriptionActivityFeedFilterInput
  ) {
    onUpdateActivityFeed(filter: $filter) {
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
export const onDeleteActivityFeed = /* GraphQL */ `
  subscription OnDeleteActivityFeed(
    $filter: ModelSubscriptionActivityFeedFilterInput
  ) {
    onDeleteActivityFeed(filter: $filter) {
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
export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign($filter: ModelSubscriptionCampaignFilterInput) {
    onCreateCampaign(filter: $filter) {
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign($filter: ModelSubscriptionCampaignFilterInput) {
    onUpdateCampaign(filter: $filter) {
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign($filter: ModelSubscriptionCampaignFilterInput) {
    onDeleteCampaign(filter: $filter) {
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
export const onCreateSchool = /* GraphQL */ `
  subscription OnCreateSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onCreateSchool(filter: $filter) {
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
export const onUpdateSchool = /* GraphQL */ `
  subscription OnUpdateSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onUpdateSchool(filter: $filter) {
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
export const onDeleteSchool = /* GraphQL */ `
  subscription OnDeleteSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onDeleteSchool(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onCreateGroup(filter: $filter) {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onUpdateGroup(filter: $filter) {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
    onDeleteGroup(filter: $filter) {
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
export const onCreateGroupMember = /* GraphQL */ `
  subscription OnCreateGroupMember(
    $filter: ModelSubscriptionGroupMemberFilterInput
  ) {
    onCreateGroupMember(filter: $filter) {
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
export const onUpdateGroupMember = /* GraphQL */ `
  subscription OnUpdateGroupMember(
    $filter: ModelSubscriptionGroupMemberFilterInput
  ) {
    onUpdateGroupMember(filter: $filter) {
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
export const onDeleteGroupMember = /* GraphQL */ `
  subscription OnDeleteGroupMember(
    $filter: ModelSubscriptionGroupMemberFilterInput
  ) {
    onDeleteGroupMember(filter: $filter) {
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
export const onCreateGroupInvite = /* GraphQL */ `
  subscription OnCreateGroupInvite(
    $filter: ModelSubscriptionGroupInviteFilterInput
  ) {
    onCreateGroupInvite(filter: $filter) {
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
export const onUpdateGroupInvite = /* GraphQL */ `
  subscription OnUpdateGroupInvite(
    $filter: ModelSubscriptionGroupInviteFilterInput
  ) {
    onUpdateGroupInvite(filter: $filter) {
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
export const onDeleteGroupInvite = /* GraphQL */ `
  subscription OnDeleteGroupInvite(
    $filter: ModelSubscriptionGroupInviteFilterInput
  ) {
    onDeleteGroupInvite(filter: $filter) {
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
export const onCreateCampaignInvite = /* GraphQL */ `
  subscription OnCreateCampaignInvite(
    $filter: ModelSubscriptionCampaignInviteFilterInput
  ) {
    onCreateCampaignInvite(filter: $filter) {
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
export const onUpdateCampaignInvite = /* GraphQL */ `
  subscription OnUpdateCampaignInvite(
    $filter: ModelSubscriptionCampaignInviteFilterInput
  ) {
    onUpdateCampaignInvite(filter: $filter) {
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
export const onDeleteCampaignInvite = /* GraphQL */ `
  subscription OnDeleteCampaignInvite(
    $filter: ModelSubscriptionCampaignInviteFilterInput
  ) {
    onDeleteCampaignInvite(filter: $filter) {
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
export const onCreateUserDevice = /* GraphQL */ `
  subscription OnCreateUserDevice(
    $filter: ModelSubscriptionUserDeviceFilterInput
  ) {
    onCreateUserDevice(filter: $filter) {
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
export const onUpdateUserDevice = /* GraphQL */ `
  subscription OnUpdateUserDevice(
    $filter: ModelSubscriptionUserDeviceFilterInput
  ) {
    onUpdateUserDevice(filter: $filter) {
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
export const onDeleteUserDevice = /* GraphQL */ `
  subscription OnDeleteUserDevice(
    $filter: ModelSubscriptionUserDeviceFilterInput
  ) {
    onDeleteUserDevice(filter: $filter) {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onUpdateNotification(filter: $filter) {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onDeleteNotification(filter: $filter) {
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
