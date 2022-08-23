import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export const typeORMConfig: TypeOrmModuleOptions = {
  type: "mysql", //Database 설정
  host: "210.90.136.10",
  port: 3306,
  username: "user",
  password: "Qwer1595@!",
  database: "ONESITE",
  entities: ["dist/**/*.entity.js"],
  synchronize: false,
}
