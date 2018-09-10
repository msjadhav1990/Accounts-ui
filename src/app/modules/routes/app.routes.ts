import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from '../../components/accountDetails/accounts.details.component';
import { AccountsComponent } from '../../components/accounts/accounts.component';
import { NotFoundComponent } from '../../components/notfound/not.found.component';

const appRoutes: Routes = [
    {path: 'details', component: AccountDetailsComponent},
    {path: 'createAccount', component: AccountsComponent},
    {path: '', redirectTo: '/details', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutesModule {}
