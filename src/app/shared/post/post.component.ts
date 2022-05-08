import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {collection, doc, Firestore, getDoc} from "@angular/fire/firestore";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  test = true;
  @Input('title') title!: string;
  @Input('content') content!: string;
  @Input('imgUrl') imgUrl!: string;
  @Input('owner') owner!: string;
  @Input('date') date!: Date;
  @Input('like') like!: string[];
  @Input('comments') comments!: Object

  users: any;

  constructor(private auth: AuthService, public firestore: Firestore) {

  }

  ngOnInit(): void {

  }

  likes() {
    let names: string = '';
    // for (let i = 0; i < this.like.length; i++) names += `${this.like[i]}\n`
    // return names

    for (let i = 0; i < this.like.length; i++) {
      let name;
      this.getUsername(this.like[i]).then((x) => {
        names += `${x}\n`;
      })
      // names += `${name}\n`
      // names += `${this.getUsername(this.like[i])}\n`
      // this.getUsername(this.like[i]);
    }

    return names
    // this.likes = this.getUsername('Q4c7PL3pi6eKFlnHGfa5trQJH1z1')
  }

  convertFromTimeStamp(ts: object) {
    return new Date(Object.values(ts)[0])
  }

  async getUsername(id: string) {
    const userRef = doc(this.firestore, 'users', id)
    const docSnap = await getDoc(userRef);
    if(docSnap.exists()) {
      // console.log(docSnap.data().displayName)
      return docSnap.data().displayName
    } else {
      return 'not found'
    }
  }
}
