import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
=======
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http'

>>>>>>> a64e0e38f31f376033b27f3f934af37a00f2b811
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AdTaskComponent } from './components/ad-task/ad-task.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
<<<<<<< HEAD
import { TasksComponent } from './components/tasks/tasks.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
];
=======
>>>>>>> a64e0e38f31f376033b27f3f934af37a00f2b811

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AdTaskComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
=======
    HttpClientModule
>>>>>>> a64e0e38f31f376033b27f3f934af37a00f2b811
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
