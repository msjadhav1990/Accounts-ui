import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AccountsService } from './services/accounts/accounts.service';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountDetailsComponent } from './components/accountDetails/accounts.details.component';
import { NotFoundComponent } from './components/notfound/not.found.component';
import { AppRoutesModule } from './modules/routes/app.routes';

@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpModule, AppRoutesModule],
  declarations: [ AppComponent, AccountsComponent, AccountDetailsComponent, NotFoundComponent ],
  providers: [ AccountsService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
