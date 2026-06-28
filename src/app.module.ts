import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Job } from './jobs/entities/job.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: [Job],
        // synchronize: true is fine for Week 1 learning, but note --
        // you should switch to migrations before this gets "real".
        // For now it just auto-creates the jobs table from the entity above.
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([Job]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
