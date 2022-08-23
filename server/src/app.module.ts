import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { typeORMConfig } from "./config/typeorm.config"
import { AuthModule } from "./auth/auth.module"

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(typeORMConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
