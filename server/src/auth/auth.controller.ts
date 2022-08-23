import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common"
import { AuthService } from "./auth.service"
import { CreateUserDto } from "./dto/user.create.dto"
import ReqWithUser from "./dto/user.req.dto"
import { LocalGuard } from "./passport/auth.local.guard"

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async signup(@Body() req: CreateUserDto) {
    console.log(req)
    return await this.authService.create(req)
  }

  @HttpCode(200)
  @UseGuards(LocalGuard)
  @Post("/login")
  async singin(@Req() req: ReqWithUser, @Res() res: any) {
    const { user } = req
    const token = await this.authService.getJwt(user.idx)
    return res.json({ info: user, token: token })
  }
}
