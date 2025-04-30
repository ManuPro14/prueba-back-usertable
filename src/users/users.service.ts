import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  findAll() {
    return this.repo.find();
  }

  async create(dto: CreateUserDto) {
    const existing = await this.repo.findOneBy({ email: dto.email });
    if (existing) {
      throw new ConflictException('El correo ya está registrado');
    }
  
    const hashed = await bcrypt.hash(dto.password, 10);
    const user = this.repo.create({ ...dto, password: hashed });
    return this.repo.save(user);
  }

  async toggle(id: number) {
    const user = await this.repo.findOneBy({ id });
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    user.isActive = !user.isActive;
    return this.repo.save(user);
  }

  findByEmail(email: string) {
    return this.repo.findOneBy({ email });
  }
}
