import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    NZ_I18N,
    vi_VN,
    NzMenuModule,
    NzButtonModule,
    NzCarouselModule,
    NzTableModule,
    NzDividerModule,
    NzSwitchModule
} from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';

import { DefaultLayoutComponent } from './pages/layouts/default/default-layout.component';
import { DefaultSidebarComponent } from './pages/layouts/component/sidebar/sidebar.component';
import { DefaultHeaderComponent } from './pages/layouts/component/header/header.component';
import { ButtonComponent } from './pages/page/button/button.component';
import { WorkplaceComponent } from './pages/page/workplace/workplace.component';

registerLocaleData(vi);

@NgModule({
    declarations: [
        AppComponent,
        DefaultLayoutComponent,
        DefaultSidebarComponent,
        DefaultHeaderComponent,
        DefaultHeaderComponent,
        ButtonComponent,
        WorkplaceComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NzButtonModule,
        NzCarouselModule,
        NzTableModule,
        NzDividerModule,
        NzSwitchModule
    ],
    providers: [{ provide: NZ_I18N, useValue: vi_VN }],
    bootstrap: [AppComponent]
})
export class AppModule { }
