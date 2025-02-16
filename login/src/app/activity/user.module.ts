import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from './routes.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    RoutesModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
