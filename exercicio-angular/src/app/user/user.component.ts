import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
	allPeoples = [
		{ person: "João", bio: "Pai de Pet" },
		{ person: "Elma", bio: "Mãe de Pet" },
	];

}
