import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { InputSubmitComponent } from './input-submit/input-submit.component';
import { InputFormComponent } from './input-form/input-form.component';
import { MessageService } from './services/message.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputSubmitComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
