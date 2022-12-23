import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { ContactmeService } from './contactme/contactme.service';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contactme',
    component: ContactmeComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    SkillsComponent,
    ContactmeComponent,
    QualificationsComponent,
  ],
  providers: [ContactmeService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    LayoutModule,
    FontAwesomeModule,
  ],
})
export class PagesModule {}
