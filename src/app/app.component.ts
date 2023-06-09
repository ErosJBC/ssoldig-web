import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'ssoldig-web';
	showPage = false;

	ngOnInit(): void {
		$(window).on('load', () => {
			const startLoading = `
				<div id="start-loading" class="fixed bg-white top-0 bottom-0 right-0 left-0 z-50 flex items-center justify-center">
					<div class="aspect-video">
						<img src="../../../../assets/img/SSD-gif.gif" alt="Logo de SSOLDIG">
					</div>	
				</div>
			`;

			$('body').append(startLoading);

			setTimeout(() => {
				$('#start-loading').fadeOut('slow');
				this.showPage = true;
			}, 6000);

		});
	}
}
