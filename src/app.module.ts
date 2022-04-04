import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GhostingApisModule } from './ghosting-apis/ghosting-apis.module';

@Module({
  imports: [GhostingApisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
