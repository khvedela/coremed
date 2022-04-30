import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listOfUsers: any[] = [];

  constructor(private db: AngularFirestore) {
    const things = db.collection('posts').valueChanges();
    things.subscribe((data) => {
      this.listOfUsers.push(data)
      console.log(this.listOfUsers);
    });
  }

  ngOnInit(): void {
  }
}
