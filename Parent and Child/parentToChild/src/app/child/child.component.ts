import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input() message!:string;
  message = "Hello Friends"
  array: string[]=["jashu","vihaan","hari","pooja"];
  showChild:boolean=true;
  @Output() messageEvent = new EventEmitter<string[]>();
  @Output() hideChild = new EventEmitter<boolean>();
  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(this.array);
  }
  showChilddiv(){
    this.hideChild.emit(this.showChild);
  }
}
