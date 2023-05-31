import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts';

const routes: Routes = [
	{
		path: '',
		component: HomeLayoutComponent,
		children: [
			{ path: '', loadChildren: () => import('./routes/home/home.module').then((m) => m.HomeModule) },
		]
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		scrollPositionRestoration: "enabled",
		anchorScrolling: "enabled",
		scrollOffset: [0, 64],
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
