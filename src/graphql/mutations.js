/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChallengeActivity = /* GraphQL */ `
  mutation CreateChallengeActivity(
    $input: CreateChallengeActivityInput!
    $condition: ModelChallengeActivityConditionInput
  ) {
    createChallengeActivity(input: $input, condition: $condition) {
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
export const updateChallengeActivity = /* GraphQL */ `
  mutation UpdateChallengeActivity(
    $input: UpdateChallengeActivityInput!
    $condition: ModelChallengeActivityConditionInput
  ) {
    updateChallengeActivity(input: $input, condition: $condition) {
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
export const deleteChallengeActivity = /* GraphQL */ `
  mutation DeleteChallengeActivity(
    $input: DeleteChallengeActivityInput!
    $condition: ModelChallengeActivityConditionInput
  ) {
    deleteChallengeActivity(input: $input, condition: $condition) {
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
export const createChallenge = /* GraphQL */ `
  mutation CreateChallenge(
    $input: CreateChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    createChallenge(input: $input, condition: $condition) {
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
export const updateChallenge = /* GraphQL */ `
  mutation UpdateChallenge(
    $input: UpdateChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    updateChallenge(input: $input, condition: $condition) {
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
export const deleteChallenge = /* GraphQL */ `
  mutation DeleteChallenge(
    $input: DeleteChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    deleteChallenge(input: $input, condition: $condition) {
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
export const createActivityFeedComment = /* GraphQL */ `
  mutation CreateActivityFeedComment(
    $input: CreateActivityFeedCommentInput!
    $condition: ModelActivityFeedCommentConditionInput
  ) {
    createActivityFeedComment(input: $input, condition: $condition) {
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
export const updateActivityFeedComment = /* GraphQL */ `
  mutation UpdateActivityFeedComment(
    $input: UpdateActivityFeedCommentInput!
    $condition: ModelActivityFeedCommentConditionInput
  ) {
    updateActivityFeedComment(input: $input, condition: $condition) {
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
export const deleteActivityFeedComment = /* GraphQL */ `
  mutation DeleteActivityFeedComment(
    $input: DeleteActivityFeedCommentInput!
    $condition: ModelActivityFeedCommentConditionInput
  ) {
    deleteActivityFeedComment(input: $input, condition: $condition) {
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
export const createActivityFeedLike = /* GraphQL */ `
  mutation CreateActivityFeedLike(
    $input: CreateActivityFeedLikeInput!
    $condition: ModelActivityFeedLikeConditionInput
  ) {
    createActivityFeedLike(input: $input, condition: $condition) {
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
export const updateActivityFeedLike = /* GraphQL */ `
  mutation UpdateActivityFeedLike(
    $input: UpdateActivityFeedLikeInput!
    $condition: ModelActivityFeedLikeConditionInput
  ) {
    updateActivityFeedLike(input: $input, condition: $condition) {
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
export const deleteActivityFeedLike = /* GraphQL */ `
  mutation DeleteActivityFeedLike(
    $input: DeleteActivityFeedLikeInput!
    $condition: ModelActivityFeedLikeConditionInput
  ) {
    deleteActivityFeedLike(input: $input, condition: $condition) {
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
export const createActivityFeed = /* GraphQL */ `
  mutation CreateActivityFeed(
    $input: CreateActivityFeedInput!
    $condition: ModelActivityFeedConditionInput
  ) {
    createActivityFeed(input: $input, condition: $condition) {
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
export const updateActivityFeed = /* GraphQL */ `
  mutation UpdateActivityFeed(
    $input: UpdateActivityFeedInput!
    $condition: ModelActivityFeedConditionInput
  ) {
    updateActivityFeed(input: $input, condition: $condition) {
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
export const deleteActivityFeed = /* GraphQL */ `
  mutation DeleteActivityFeed(
    $input: DeleteActivityFeedInput!
    $condition: ModelActivityFeedConditionInput
  ) {
    deleteActivityFeed(input: $input, condition: $condition) {
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
export const createCampaign = /* GraphQL */ `
  mutation CreateCampaign(
    $input: CreateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    createCampaign(input: $input, condition: $condition) {
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
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
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
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
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
export const createSchool = /* GraphQL */ `
  mutation CreateSchool(
    $input: CreateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    createSchool(input: $input, condition: $condition) {
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
export const updateSchool = /* GraphQL */ `
  mutation UpdateSchool(
    $input: UpdateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    updateSchool(input: $input, condition: $condition) {
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
export const deleteSchool = /* GraphQL */ `
  mutation DeleteSchool(
    $input: DeleteSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    deleteSchool(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createGroupMember = /* GraphQL */ `
  mutation CreateGroupMember(
    $input: CreateGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    createGroupMember(input: $input, condition: $condition) {
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
export const updateGroupMember = /* GraphQL */ `
  mutation UpdateGroupMember(
    $input: UpdateGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    updateGroupMember(input: $input, condition: $condition) {
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
export const deleteGroupMember = /* GraphQL */ `
  mutation DeleteGroupMember(
    $input: DeleteGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    deleteGroupMember(input: $input, condition: $condition) {
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
export const createGroupInvite = /* GraphQL */ `
  mutation CreateGroupInvite(
    $input: CreateGroupInviteInput!
    $condition: ModelGroupInviteConditionInput
  ) {
    createGroupInvite(input: $input, condition: $condition) {
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
export const updateGroupInvite = /* GraphQL */ `
  mutation UpdateGroupInvite(
    $input: UpdateGroupInviteInput!
    $condition: ModelGroupInviteConditionInput
  ) {
    updateGroupInvite(input: $input, condition: $condition) {
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
export const deleteGroupInvite = /* GraphQL */ `
  mutation DeleteGroupInvite(
    $input: DeleteGroupInviteInput!
    $condition: ModelGroupInviteConditionInput
  ) {
    deleteGroupInvite(input: $input, condition: $condition) {
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
export const createCampaignInvite = /* GraphQL */ `
  mutation CreateCampaignInvite(
    $input: CreateCampaignInviteInput!
    $condition: ModelCampaignInviteConditionInput
  ) {
    createCampaignInvite(input: $input, condition: $condition) {
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
export const updateCampaignInvite = /* GraphQL */ `
  mutation UpdateCampaignInvite(
    $input: UpdateCampaignInviteInput!
    $condition: ModelCampaignInviteConditionInput
  ) {
    updateCampaignInvite(input: $input, condition: $condition) {
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
export const deleteCampaignInvite = /* GraphQL */ `
  mutation DeleteCampaignInvite(
    $input: DeleteCampaignInviteInput!
    $condition: ModelCampaignInviteConditionInput
  ) {
    deleteCampaignInvite(input: $input, condition: $condition) {
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
export const createUserDevice = /* GraphQL */ `
  mutation CreateUserDevice(
    $input: CreateUserDeviceInput!
    $condition: ModelUserDeviceConditionInput
  ) {
    createUserDevice(input: $input, condition: $condition) {
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
export const updateUserDevice = /* GraphQL */ `
  mutation UpdateUserDevice(
    $input: UpdateUserDeviceInput!
    $condition: ModelUserDeviceConditionInput
  ) {
    updateUserDevice(input: $input, condition: $condition) {
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
export const deleteUserDevice = /* GraphQL */ `
  mutation DeleteUserDevice(
    $input: DeleteUserDeviceInput!
    $condition: ModelUserDeviceConditionInput
  ) {
    deleteUserDevice(input: $input, condition: $condition) {
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
