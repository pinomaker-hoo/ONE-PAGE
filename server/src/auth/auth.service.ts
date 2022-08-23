import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { UserRepository } from "./user.repository"
import * as bcrypt from "bcryptjs"
import { CreateUserDto } from "./dto/user.create.dto"
import { User } from "./user.entity"
import { JwtService } from "@nestjs/jwt"

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}

  async create(req: CreateUserDto): Promise<any> {
    const hash = await bcrypt.hash(req.pw, 10)
    const user = this.userRepository.create({
      email: req.email,
      pw: hash,
      name: req.name,
      phone: req.phone,
      number: req.num,
    })
    return await this.userRepository.save(user)
  }

  async login(email: string, pw: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne({
        where: { email: email },
      })
      await this.compareBcrypt(pw, user.pw)
      return user
    } catch (err) {
      throw new HttpException("Err Account", HttpStatus.BAD_REQUEST)
    }
  }

  async compareBcrypt(pw: string, hash: string) {
    const result = await bcrypt.compare(pw, hash)
    if (!result) throw new HttpException("PW ERROR", HttpStatus.BAD_REQUEST)
  }

  async getUserByIdx(userId: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { idx: userId } })
    if (!user)
      throw new HttpException(
        "사용자가 존재하지 않습니다.",
        HttpStatus.NOT_FOUND
      )
    return user
  }

  async getJwt(userId: number) {
    const token = this.jwtService.sign({ userId })
    return token
  }
}
