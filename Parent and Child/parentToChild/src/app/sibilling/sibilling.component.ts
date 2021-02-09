import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-sibilling',
  templateUrl: './sibilling.component.html',
  styleUrls: ['./sibilling.component.css']
})
export class SibillingComponent implements OnInit {

  message!: string;
  subscription!: Subscription;

  constructor(private data: DataServiceService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {
    this.data.changeMesssage("Hello from Sibling")
  }
}
