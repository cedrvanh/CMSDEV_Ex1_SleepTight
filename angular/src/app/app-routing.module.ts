import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LandingComponent } from './components/auth/landing/landing.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TipsComponent } from './components/tips/tips.component';
import { FriendsComponent } from './components/friends/friends.component';
import { HashtagCreateComponent } from './components/hashtags/create/create.component';
import { HashtagsComponent } from './components/hashtags/hashtags.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { EditProfileComponent } from './components/profile/edit/edit.component';
import { FriendDetailComponent } from './components/friends/friend-detail/friend-detail.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'landing', component: LandingComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'profile/edit/:id', component: EditProfileComponent, canActivate: [AuthGuard] },
    { path: 'tips', component: TipsComponent, canActivate: [AuthGuard] },
    { path: 'hashtags/create', component: HashtagCreateComponent, canActivate: [AuthGuard] },
    { path: 'hashtags', component: HashtagsComponent, canActivate: [AuthGuard] },
    { path: 'tracking', component: TrackingComponent, canActivate: [AuthGuard] },
    { path: 'friends', component: FriendsComponent, canActivate: [AuthGuard] },
    { path: 'friend/:id', component: FriendDetailComponent, canActivate: [AuthGuard] },
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
