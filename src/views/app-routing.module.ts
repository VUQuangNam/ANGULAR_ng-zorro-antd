import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DefaultLayoutComponent } from './pages/layouts/default/default-layout.component';
import { WorkplaceComponent } from './pages/page/workplace/workplace.component';
import { ButtonComponent } from './pages/page/button/button.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/button' },
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            { path: 'button', component: ButtonComponent },
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
