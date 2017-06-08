import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
     this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>
   }

  getListings(){
   
    return this.listings;
  }

  getListingDetails(id){
    this.listing = this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>
    return this.listing;
  }

  addListing(listing){

    return this.listings.push(listing);

  }
  updateListing(id, listing){
    return this.listings.update(id, listing);
  }

  deleteListing(id){
    return this.listings.remove(id);
  }

}

interface Listing{
  $key?:string;
  firstname?:string;
  lastname?:string;
  email?:string;
  city?:string;
  country?:string;
  state?:string;
  businessname?:string;
  status?:string;
  street1?:string;
  street2?:string;
  bankaccno?:number;
  pincode?:number;
  phoneno?:number;
}
