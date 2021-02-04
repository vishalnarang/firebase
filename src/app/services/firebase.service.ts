import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'
import { AngularFireStorage } from "@angular/fire/storage";
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    setResult: BehaviorSubject<any> = new BehaviorSubject(false);

    constructor(public fireStore: AngularFirestore) { }


    getOrganisationData() {
        return this.fireStore.collection('organisations').snapshotChanges().pipe(
            map(changes =>
                changes.map(c =>
                    (c.payload.doc.data())
                )
            )
        );
    }

    addOrganisationData(data) {
        let id = this.fireStore.collection('organisations').doc().ref.id;
        this.fireStore.collection('organisations').doc(id).set({
            ...data,
            organisationId: id
        }).then(() => {
            this.setResult.next(1);
        }).catch(function (error) {
            this.setResult.next(2);
        });
    }

    getCategoriesData() {
        return this.fireStore.collection('categories').snapshotChanges().pipe(
            map(changes =>
                changes.map(c =>
                    (c.payload.doc.data())
                )
            )
        );
    }

    getParticularOrganisationData(id){
        return this.fireStore.collection('organisations').doc(id).snapshotChanges();
    }
}