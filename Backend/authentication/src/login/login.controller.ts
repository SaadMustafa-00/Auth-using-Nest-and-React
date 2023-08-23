import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { emit } from 'process';
import { Login } from './entities/login.entity';




@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}


  //Creating user and saving data in database
  @Post('newUser')
  create(@Body() data: any) {
    return this.loginService.createUser(data);
  }

  //Returning all users from database
  @Get('allUsers')
  findAll() {
    return this.loginService.findAll();
  }

  //Returning specific object using email
  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.loginService.findOne(email);
  }


  //Updating The user values using Id
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatedFields: Record<string, any>): Promise<Login> {
      return this.loginService.update(id, updatedFields);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
  //   return this.loginService.update(+id, updateLoginDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.loginService.remove(+id);
  // }
}
