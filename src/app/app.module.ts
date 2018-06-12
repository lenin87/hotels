import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {MyserviceService} from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChnageTextDirective } from './chnage-text.directive';
import { SqrtPipe } from './app.sqrt';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChnageTextDirective,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([{
      path:'new-cmp',
      component:NewCmpComponent
    }])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
