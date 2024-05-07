import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(data: { email: string; password: string }) {
    const { email, password } = data;

    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user || user.password !== password) {
      return { success: false, message: 'Invalid credentials', data: null };
    }

    const payload = { id: user.id, email: user.email };
    return {
      success: true,
      message: 'Login successful',
      data: user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(data: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) {
    const { name, email, password, role } = data;

    const user = await this.prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        role: role,
      },
    });

    const payload = { id: user.id, email: user.email };
    return {
      success: true,
      message: 'Signup successful',
      data: user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
