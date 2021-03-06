import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EducationComponent} from '../Forms/education/education.component';
import {SkillsComponent} from '../Forms/skills/skills.component';
import {ExperienceComponent} from '../experience/experience.component';
import {HomeComponent} from '../home/home.component';
import {ProfileComponent} from '../profile/profile.component';
import {TestComponent} from '../Forms/AddUser/test.component';
import {EditEduComponent} from '../Forms/edit-edu/edit-edu.component';
import {EditUserComponent} from '../Forms/edit-user/edit-user.component';
import {EditSkillComponent} from '../Forms/edit-skill/edit-skill.component'; // CLI imports router

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'education' , component : EducationComponent},
  {path: 'skills' , component: SkillsComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'home/AddUser', component: TestComponent},
  {path: 'education/:id', component: EducationComponent},
  {path: 'skill/:id', component: SkillsComponent},
  {path: 'edit/education/:id', component: EditEduComponent},
  {path: 'edit/user/:id', component: EditUserComponent},
  {path: 'edit/skill/:id', component: EditSkillComponent}

]; // sets up routes constant where you define your routess

// configures NgModule im  ports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
