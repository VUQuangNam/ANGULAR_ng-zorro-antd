import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';

import { DefaultLayoutComponent } from './pages/layouts/default/default-layout.component';
import { DefaultSidebarComponent } from './pages/layouts/component/sidebar/sidebar.component';
import { DefaultHeaderComponent } from './pages/layouts/component/header/header.component';

registerLocaleData(vi);

@NgModule({
    declarations: [
        AppComponent,
        DefaultLayoutComponent,
        DefaultSidebarComponent,
        DefaultHeaderComponent,
        DefaultHeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [{ provide: NZ_I18N, useValue: vi_VN }],
    bootstrap: [AppComponent]
})
export class AppModule { }
