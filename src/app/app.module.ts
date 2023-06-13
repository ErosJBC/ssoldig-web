import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent, NavbarComponent } from './shared';
import { HomeLayoutComponent } from './layouts';
import { AboutUsComponent, ClientsComponent, ContactComponent, HomeComponent, OurTeamComponent, PresentationComponent, SolutionsComponent, WhyChooseUsComponent } from './views';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
		HomeLayoutComponent,
		HomeComponent,
		AboutUsComponent,
		ClientsComponent,
		ContactComponent,
		PresentationComponent,
		SolutionsComponent,
		WhyChooseUsComponent,
        OurTeamComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
