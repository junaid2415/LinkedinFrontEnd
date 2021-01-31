import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EducationComponent} from '../education/education.component';
import {SkillsComponent} from '../skills/skills.component';
import {ExperienceComponent} from '../experience/experience.component';
import {HomeComponent} from '../home/home.component';
import {ProfileComponent} from '../profile/profile.component';
import {TestComponent} from '../test/test.component'; // CLI imports router

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'education' , component : EducationComponent},
  {path: 'skills' , component: SkillsComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'home/test', component: TestComponent}
]; // sets up routes constant where you define your routess

// configures NgModule im  ports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
