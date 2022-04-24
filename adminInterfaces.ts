import { tUserID } from "./interfaces"

export interface UserInfo {
    id: tUserID
    username: string
    firstName: string
    lastName: string
    mail: string
    admin: boolean
    active: boolean
    superAdmin: boolean
}
