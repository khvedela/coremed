import { Injectable } from '@angular/core';
import { getDatabase, ref, set } from "firebase/database";
import {onValue} from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class DbService {


  constructor() { }

  writeUserData(userId: number, name: string, email: string, imageUrl: string) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }

  getDataFromDb() {
    const db = getDatabase();
    const starCountRef = ref(db, 'posts/' + 1 + '/starCount');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      // updateStarCount(postElement, data);
    });
  }

}
