import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: "",  pathMatch: "full", component: HomeComponent,
  },
  {
    path: "about-us", component: AboutUsComponent,
  },
  {
    path: "contact-us", component: ContactUsComponent,
  },
  {
    path: "tasks", component: TasksComponent,
  },
  {
    path: "add-tasks", component: AddTasksComponent,
  },
  {
    path: "login", component: LoginComponent,
  },
  {
    path: "product/:id", component: ProductComponent,
  },
  {
    path: "**", component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
