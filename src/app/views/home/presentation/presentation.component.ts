import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-presentation',
	templateUrl: './presentation.component.html',
	styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		const text = document.getElementById('writing');
		this.writingEffect('¡Un mundo digital en tus manos!', 150, text);
	}

	writingEffect = (text: string = '', time: number = 200, element: any = '') => {
		let characters = text.split('');
		element.innerHTML = ''
		let index = 0;
		let lengthText = text.length;
		let write = setInterval(function () {
			if (index === characters.length) {
				// element.innerHTML = text.substring(0, lengthText);
				element.innerHTML = text;
				// lengthText--;
				// if (lengthText === 0) {
					// element.innerHTML = '';
					// index = 0;
					// lengthText = text.length;
				// }
			} else {
				element.innerHTML += characters[index];
				index++;
			}
		}, time);
	}

}
