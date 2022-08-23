import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from "typeorm"

@Unique(["email", "number"])
@Entity({ name: "tbl_user" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number

  @Column({ type: "varchar", length: 255 })
  email: string

  @Column({ type: "varchar", length: 255 })
  name: string

  @Column({ type: "varchar", length: 255 })
  pw: string

  @Column({ type: "varchar", length: 255 })
  phone: string

  @Column({ type: "varchar", length: 50 })
  number: string

  @CreateDateColumn({ name: "create_at" })
  createdAt: Date

  @UpdateDateColumn({ name: "update_at" })
  updatedAt: Date
}
