import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {

  id;
  firstname;
  lastname;
  city;
  email;
  businessname;
  phoneno;
  status;
  state;
  country;
  bankaccno;
  street1;
  street2;
  pincode;



  constructor(
  	 private firebaseService:FirebaseService,
  	 private router: Router,
  	 private route: ActivatedRoute

  	) { }

  ngOnInit() {
  	 this.id = this.route.snapshot.params['id'];

  	 this.firebaseService.getListingDetails(this.id).subscribe(listing =>{
  	 	this.firstname= listing.firstname;
		this.lastname= listing.lastname;
		this.email= listing.email;
		this.phoneno= listing.phoneno;
		this.city= listing.city;
		this.businessname= listing.businessname;
		this.status= listing.status;
		this.state= listing.state;
		this.country= listing.country;
		this.bankaccno= listing.bankaccno;
		this.street1= listing.street1;
		this.street2= listing.street2;
		this.pincode= listing.pincode;


  	 });


  }
  onEditSubmit(){
  	let listing = {

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

  	this.firebaseService.updateListing(this.id, listing);

  	this.router.navigate(['/listings']);
  }

}
