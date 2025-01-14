import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInReturnDto } from './interface/signInReturn.dto';
import { SignInDto } from './interface/signIn.dto';
import { SignUpDto } from './interface/signUp.dto';
import { SignUpReturnDto } from './interface/signUpReturn.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'Login no sistema' })
  @ApiResponse({
    status: 200,
    description: 'Ok',
    type: [SignInReturnDto],
  })
  async signIn(@Body() signInDto: SignInDto): Promise<SignInReturnDto> {
    return await this.authService.signIn(
      signInDto.username,
      signInDto.password,
    );
  }

  @HttpCode(HttpStatus.OK)
  @Post('validate-token')
  @ApiOperation({ summary: 'Validar token' })
  @ApiResponse({
    status: 200,
    description: 'Ok',
    type: Boolean,
  })
  async validateToken(@Body() { token }: { token: string }): Promise<boolean> {
    return this.authService.validateToken(token);
  }

  @Post('sign-up')
  @ApiOperation({ summary: 'Cadastro de novos usuários' })
  @ApiResponse({
    status: 200,
    description: 'Ok',
    type: [SignUpReturnDto],
  })
  async signUp(@Body() user: SignUpDto): Promise<SignUpReturnDto> {
    return this.authService.signUp(user);
  }
}
