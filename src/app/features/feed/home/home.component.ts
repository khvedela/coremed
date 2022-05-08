import {Component, OnInit} from '@angular/core';
import {Firestore, collectionData, collection, setDoc, doc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Observable<any[]>;
  text2: any;
  spinner = true;

  test: boolean = false

  constructor(public firestore: Firestore, private auth: AuthService) {
    const collections = collection(firestore, 'posts');
    this.posts = collectionData(collections);
  }

  async ngOnInit() {
    // await setDoc(doc(this.firestore, "cities", "LA"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // });
    // this.auth.getUsername()
    //   .subscribe((data) => {
    //     const user = data.find(user => user.uid == 'Q4c7PL3pi6eKFlnHGfa5trQJH1z1')
    //     console.log(user?.displayName);
    //   })
  }
}
