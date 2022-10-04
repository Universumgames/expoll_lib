import { PollType, tDate, tDateTime, tOptionId, tPollID, tUserID, VoteValue } from "./interfaces"

export interface SimplePoll {
    pollID: tPollID
    admin: SimpleUser
    description: string
    userCount: number
    lastUpdated: Date
    type: PollType
    name: string
    editable: boolean
}

export interface ComplexOption {
    id?: number
    value?: string
    dateStart?: tDate
    dateEnd?: tDate
    dateTimeStart?: tDateTime
    dateTimeEnd?: tDateTime
}

export const empty = {
    id: 0,
    value: "",
    dateStart: new Date(),
    dateEnd: undefined,
    dateTimeStart: new Date(),
    dateTimeEnd: undefined
} as ComplexOption

export interface SimpleUser {
    id: tUserID
    firstName: string
    lastName: string
    username: string
}

export interface SimpleUserVotes {
    user: SimpleUser
    votes: simpleVote[]
}

export interface SimpleUserNote {
    userID: tUserID
    note: string
}

export interface DetailedPoll {
    pollID: tPollID
    admin: SimpleUser
    name: string
    description: string
    maxPerUserVoteCount: number
    userCount: number
    lastUpdated: Date
    created: Date
    type: PollType
    options: ComplexOption[]
    userVotes: SimpleUserVotes[]
    userNotes: SimpleUserNote[]
    allowsMaybe: boolean
    allowsEditing: boolean
    shareURL: string
}

export interface simpleVote {
    optionID: tOptionId
    votedFor?: VoteValue
}

export interface PollEdit {
    inviteLink?: string
    leave?: boolean
    pollID: tPollID
    name?: string
    description?: string
    maxPerUserVoteCount?: number
    userRemove?: tUserID[]
    votes?: { userID: tUserID; optionID: tOptionId; votedFor: VoteValue }[]
    options?: ComplexOption[]
    delete?: boolean
    allowsMaybe?: boolean
    notes?: { userID: tUserID; note: string }[]
    allowsEditing?: boolean
}

export interface VoteChange {
    pollID: tPollID
    optionID: tOptionId
    votedFor: VoteValue
    userID?: tUserID
}

export interface MailRegexEntry {
    regex: string
    blacklist: boolean
}

export interface NotificationPreferences {
    voteChange: boolean
    userAdded: boolean
    userRemoved: boolean
    pollDeleted: boolean
    pollEdited: boolean
    pollArchived: boolean
}

export enum NotificationType {
    voteChange = "voteChange",
    userAdded = "userAdded",
    userRemoved = "userRemoved",
    pollDeleted = "pollDeleted",
    pollEdited = "pollEdited",
    pollArchived = "pollArchived"
}
