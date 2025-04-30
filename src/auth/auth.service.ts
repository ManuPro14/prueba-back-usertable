import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    
    // Usuario no existe
    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }
  
    // Usuario inactivo
    if (!user.isActive) {
      throw new UnauthorizedException('Usuario inactivo');
    }
  
    // Contraseña incorrecta
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }
  
    return {
      access_token: this.jwtService.sign({ sub: user.id }),
      user: {
        id: user.id,
        email: user.email,
        isActive: user.isActive
      }
    };
  }
}