import { Component, OnInit,ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ChildComponent } from '../child/child.component';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  message= "Hello Friends";
  hide: boolean = true;

  ngOnInit(): void {
  }

  receiveMessage($event: string) {
    this.message = $event;
    this.hide = false;
      }
      receiveMessage1($event1: boolean) {
        this.hide = $event1

          }
}
