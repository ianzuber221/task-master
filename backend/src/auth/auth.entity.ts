// auth-user.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('auth_user')
export class AuthUser {
  @PrimaryGeneratedColumn()
  id: number; // Unique ID for the user

  @Column({ unique: true })
  username: string; // Unique username for login

  @Column({ unique: true })
  email: string; // Unique email, often used for login

  @Column()
  password: string; // Hashed password for the user

  @Column({ default: 'user' })
  role: string; // The role of the user (e.g., 'user', 'admin')

  @CreateDateColumn()
  createdAt: Date; // Timestamp when the user was created

  @UpdateDateColumn()
  updatedAt: Date; // Timestamp when the user data was last updated
}
