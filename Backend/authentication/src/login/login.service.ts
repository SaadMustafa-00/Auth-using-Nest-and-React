import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Repository } from 'typeorm';
import { Login } from './entities/login.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login)
    private readonly loginRepository: Repository<Login>,
  ) { }



  //Creating user and saving data in database
  createUser(data: any) {
    return this.loginRepository.save(data);
  }
  //Returning all users from database
  findAll() {
    return this.loginRepository.find();
  }
  //Returning specific object using email
  findOne(email: string) {
    return this.loginRepository.findOne({ where: { email: email } });
  }

  //Updating The user values using Id
  async update(id: number, updatedFields: Record<string, any>): Promise<Login> {
    await this.loginRepository.update(id, updatedFields);
    return this.loginRepository.findOne({ where: { id: id } });
  }

  // update(id: number, updateLoginDto: UpdateLoginDto) {
  //   return `This action updates a #${id} login`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} login`;
  // }
}
