import { Request } from "express"
import { User } from "../user.entity"

export default interface ReqWithUser extends Request {
  user: User
}
