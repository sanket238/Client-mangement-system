import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {FlashMessagesService} from 'angular2-flash-messages';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listings:any;
  id:any;
  constructor(
     private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute,
    public af:AngularFire,
    public flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    this.firebaseService.getListings().subscribe(listings => {
      console.log(listings);
      this.listings = listings;

    });
  }

  login(){
    this.af.auth.login();
  }

}
