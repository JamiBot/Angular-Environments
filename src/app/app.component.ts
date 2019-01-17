import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'env-example';

  constructor(private db: AngularFirestore) {
    this.db.collection(`items`).add({timestamp: new Date()});
  }
}
