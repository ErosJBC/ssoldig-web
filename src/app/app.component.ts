import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'ssoldig-web';
	activatedPage: boolean = false;
	time_base: number = 3300;

	startLoading: string = `
		<div id="start-loading" class="fixed bg-white top-0 bottom-0 right-0 left-0 z-50 flex items-center justify-center">
			<div id="images" class="grid grid-cols-3 mx-auto">
                <img class="animate__animated animate__fadeInLeft animate__slow" src="../assets/img/ssd-skyblue-logo.png" alt="Logo de SSOLDIG">
				<img class="animate__animated animate__fadeInDown animate__slow" src="../assets/img/ssd-orange-logo.png" alt="Logo de SSOLDIG">
				<img class="animate__animated animate__fadeInRight animate__slow" src="../assets/img/ssd-purple-logo.png" alt="Logo de SSOLDIG">
			</div>
		</div>
	`;

	gif: string = `
		<div id="gif">
			<img src="../assets/img/SSD-gif.gif" alt="Logo de SSOLDIG">
		</div>
	`;

	ngOnInit(): void {
		!this.activatedPage && this.activateLoadingAnimation();
	}

	activateLoadingAnimation = () => {
		$(window).on('load', () => {
			$('body').append(this.startLoading);

			setTimeout(() => {
				$('#images').fadeOut('slow');
			}, this.time_base);

			setTimeout(() => {
				$('#start-loading').append(this.gif);
			}, this.time_base + 500);

			setTimeout(() => {
				$('#start-loading').fadeOut('slow');
				this.activatedPage = true;
			}, this.time_base + 7000);
		});
	}
}
