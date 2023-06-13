import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, OurTeamComponent } from '../../views';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'nuestro-equipo', component: OurTeamComponent },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
