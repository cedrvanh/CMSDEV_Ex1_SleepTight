import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './components/auth/authentication.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './shared/not-found/not-found.component';
import { NavComponent } from './shared/nav/nav.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { QuizComponent } from './components/quiz/quiz.component';
import { SanitizeHtml } from './pipes/sanitize.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { TipsComponent } from './components/tips/tips.component';
import { FriendsComponent } from './components/friends/friends.component';
import { HashtagCreateComponent } from './components/hashtags/create/create.component';
import { HashtagsComponent } from './components/hashtags/hashtags.component';
import { TrackingComponent } from './components/tracking/tracking.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthenticationModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavComponent,
    QuizComponent,
    SanitizeHtml,
    ProfileComponent,
    TipsComponent,
    FriendsComponent,
    HashtagCreateComponent,
    HashtagsComponent,
    TrackingComponent,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
