import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EducationComponent } from './Forms/education/education.component';
import { SkillsComponent } from './Forms/skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './Forms/AddUser/test.component';
import { EditEduComponent } from './Forms/edit-edu/edit-edu.component';
import { EditSkillComponent } from './Forms/edit-skill/edit-skill.component';
import { EditUserComponent } from './Forms/edit-user/edit-user.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    HomeComponent,
    ProfileComponent,
    TestComponent,
    EditEduComponent,
    EditSkillComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
