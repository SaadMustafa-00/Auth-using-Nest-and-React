import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './login/entities/login.entity';


@Module({
  imports: [
    LoginModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0244',
      database: 'Authentication',
      entities: [
        Login,
      ],
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
