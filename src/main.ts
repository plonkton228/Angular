import { AppModule } from './app.component';;
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic()
    .bootstrapModule(AppModule, { preserveWhitespaces: false });
