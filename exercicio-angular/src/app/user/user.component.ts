import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
	allPeoples = [
		{ people: "João", bio: "La La Land" },
		{ people: "Elma", bio: "A Origem" },
	];

	peoples() {
		return this.allPeoples[0].people && this.allPeoples[0].bio;
	}
}
