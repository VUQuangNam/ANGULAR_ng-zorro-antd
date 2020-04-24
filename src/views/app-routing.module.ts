import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DefaultLayoutComponent } from './pages/layouts/default/default-layout.component';
import { WelcomeComponent } from './pages/page/welcome/welcome.component';
import { WorkplaceComponent } from './pages/page/workplace/workplace.component';

export const currencyConfig = {
    allowNegative: true,
    allowZero: true,
    nullable: true,
    align: 'right',
    thousands: ',',
    decimal: '.',
    precision: 0,
    prefix: '',
    suffix: ''
};

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/welcome' },
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            { path: 'welcome', component: WelcomeComponent },
            { path: 'workplace', component: WorkplaceComponent }
        ]
    },
];

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forRoot(routes),
    ],
    entryComponents: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
