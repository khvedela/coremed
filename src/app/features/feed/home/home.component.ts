import {Component, OnInit} from '@angular/core';
import {Firestore, collectionData, collection, setDoc, doc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Post} from "../../../interfaces/post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Observable<any[]>;
  text2: any;

  test: boolean = true

  constructor(public firestore: Firestore) {
    const collections = collection(firestore, 'posts');
    this.posts = collectionData(collections);
  }

  async ngOnInit() {
    // await setDoc(doc(this.firestore, "cities", "LA"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // });
  }
}
