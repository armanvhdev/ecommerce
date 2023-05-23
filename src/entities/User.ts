import {
   Entity,
   Column,
   PrimaryGeneratedColumn,
   BaseEntity,
   CreateDateColumn,
   UpdateDateColumn,
} from 'typeorm';
import {
   IsNotEmpty,
   IsString,
   MaxLength,
   MinLength,
   IsEmail,
   IsEnum,
} from 'class-validator';

enum Role {
   ADMIN = 'admin',
   USER = 'user',
}

@Entity('user')
export class User extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({ length: 50 })
   @IsNotEmpty({ message: 'نام نمیتواند خالی باشد' })
   @IsString({ message: 'لطفامقدار درست راوارد کنید' })
   @MinLength(3, { message: 'تعداد حروف نام شما نباید کمتر از 3 باشد' })
   @MaxLength(50, { message: 'تعداد حروف نام نباید بیشتر از 50 باشد' })
   name: string;

   @Column({ length: 200 })
   @IsNotEmpty({ message: 'رمز عبور نمیتواند خالی باشد' })
   @IsString({ message: 'لطفامقدار درست راوارد کنید' })
   @MinLength(6, { message: 'تعداد حروف رمز عبور نباید کمتر از 6 باشد' })
   password: string;

   @Column({ unique: true })
   @IsNotEmpty({ message: 'ایمیل نمیتواند خالی باشد' })
   @IsEmail()
   email: string;

   @Column({ type: 'enum', enum: Role, default: 'user' })
   @IsEnum(Role)
   role: string;

   @CreateDateColumn()
   createdAt: Date;

   @UpdateDateColumn()
   updatedAt: Date;
}
