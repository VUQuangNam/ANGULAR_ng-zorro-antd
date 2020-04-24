import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/welcome' },
    { path: 'welcome', component: WelcomeComponent }
];

@NgModule({
    declarations: [
        WelcomeComponent
    ],
    imports: [RouterModule.forRoot(routes)],
    entryComponents: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
