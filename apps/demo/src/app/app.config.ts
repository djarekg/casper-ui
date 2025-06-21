import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  type ApplicationConfig,
  importProvidersFrom,
  provideZonelessChangeDetection,
} from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
// import { provideAnimations } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';
import { authInterceptor } from '@/common/auth/auth.interceptor';

export default {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(
      [
        /**
         * The default route is the layout component. This is the
         * component that will be loaded when the application is
         * first loaded.
         */
        {
          path: '',
          loadComponent: () => import('./features/layout/layout.container'),
          loadChildren: () => import('./app.routes'),
        },
      ],
      withComponentInputBinding(),
      withPreloading(PreloadAllModules),
    ),
    provideHttpClient(withInterceptors([authInterceptor()])),
    // provideAnimations(),
    importProvidersFrom(MatNativeDateModule),
  ],
} satisfies ApplicationConfig;
