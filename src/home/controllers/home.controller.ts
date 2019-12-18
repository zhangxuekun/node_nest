import { Controller, Get ,Render} from '@nestjs/common';
import { View } from '../../common/libs/view';

@Controller('home')
export class HomeController {

    @Get()
    @Render('index.ejs')
    root() {
      return { message: 'Hello world!' };
    }
}
