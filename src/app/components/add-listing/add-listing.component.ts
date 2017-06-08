import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  firstname:any;
  lastname:any;
  city:any;
  email:any;
  businessname:any;
  phoneno:any;
  status:any;
  state:any;
  country:any;
  bankaccno:any;
  street1:any;
  street2:any;
  pincode:any;

  constructor(
  	private firebaseService:FirebaseService,
  	private router:Router
  	) { }

  ngOnInit() {
  }
  onAddSubmit(){
  	let listing ={
  		firstname: this.firstname,
  		lastname: this.lastname,
  		email: this.email,
  		phoneno: this.phoneno,
  		city: this.city,
  		businessname:this.businessname,
        status:this.status,
        state:this.state,
        country:this.country,
        bankaccno:this.bankaccno,
        street1:this.street1,
        street2:this.street2,
        pincode:this.pincode

  	}
  	this.firebaseService.addListing(listing);

  	this.router.navigate(['listings']);
  }

}
