import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './auth/auth-interceptor';
import { RecipeService } from './recipe/recipe.service';

@NgModule({
  providers: [
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
