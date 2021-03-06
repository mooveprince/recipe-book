import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import {  } from 'events';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef; 

  @Output() itemAddedEvent = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.itemAddedEvent.emit(
      new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
      );
  }

}
