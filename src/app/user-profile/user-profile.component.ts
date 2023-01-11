import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: 'In tartiflette we trust !',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
    bool: false
  }


  hide() {
    if (this.user.bool === false) { this.user.bool = true } else { this.user.bool = false };
  }
}
