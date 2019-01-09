import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LandingComponent } from './components/auth/landing/landing.component';
import { QuizQuestionsComponent } from './components/quiz/quiz-questions/quiz-questions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TipsComponent } from './components/tips/tips.component';
import { FriendsComponent } from './components/friends/friends.component';
import { HashtagCreateComponent } from './components/hashtags/create/create.component';
import { HashtagsComponent } from './components/hashtags/hashtags.component';
import { TrackingComponent } from './components/tracking/tracking.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'landing', component: LandingComponent },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'quiz', component: QuizQuestionsComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'tips', component: TipsComponent, canActivate: [AuthGuard] },
    { path: 'hashtags/create', component: HashtagCreateComponent, canActivate: [AuthGuard] },
    { path: 'hashtags', component: HashtagsComponent, canActivate: [AuthGuard] },
    { path: 'tracking', component: TrackingComponent, canActivate: [AuthGuard] },
    { path: 'friends', component: FriendsComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
