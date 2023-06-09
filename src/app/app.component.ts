import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'ssoldig-web';
	showPage = true;

	ngOnInit(): void {
		// $(window).on('load', () => {
		// 	const startLoading = `
		// 		<div id="start-loading" class="fixed bg-white top-0 bottom-0 right-0 left-0 z-50 flex items-center justify-center">
		// 			<div id="images" class="grid grid-cols-3 mx-auto">
		// 				<img src="../assets/img/ssd-orange-logo.png" alt="Logo de SSOLDIG">
		// 				<img src="../assets/img/ssd-skyblue-logo.png" alt="Logo de SSOLDIG">
		// 				<img src="../assets/img/ssd-purple-logo.png" alt="Logo de SSOLDIG">
		// 			</div>
		// 			<div id="gif" class="hidden">
		// 				<img src="../assets/img/SSD-gif.gif" alt="Logo de SSOLDIG">
		// 			</div>
		// 		</div>
		// 	`;

		// 	$('body').append(startLoading);

		// 	setTimeout(() => {
		// 		// $('#start-loading').fadeOut('slow');
		// 		this.showPage = true;
		// 		$('#images').addClass('hidden').fadeOut('slow');
		// 	}, 2000);
		// 	setTimeout(() => {
		// 		$('#gif').removeClass('hidden').fadeIn('slow');
		// 		$('#start-loading').fadeOut('slow');
		// 	}, 6000);

		// });
	}
}
