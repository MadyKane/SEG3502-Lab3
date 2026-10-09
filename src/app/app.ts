import { Component } from "@angular/core";
import { ShoppingInputComponent } from "./shopping-add/shopping-add";
import { ShoppingListComponent } from "./shopping-list/shopping-list";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ShoppingInputComponent, ShoppingListComponent],
  template: `
    <div style="font-family: sans-serif; padding: 20px;">
      <h1>Ma liste de courses</h1>
      
      <app-shopping-input (addItem)="onAddItem($event)"></app-shopping-input>
      
      <hr>
      
      <app-shopping-list 
        [items]="items" 
        (removeItem)="onRemoveItem($event)">
      </app-shopping-list>
    </div>
  `
})
export class AppComponent {
  items: string[] = [];

  onAddItem(name: string): void {
    this.items.push(name);
  }
  
  onRemoveItem(index: number): void {
    this.items.splice(index, 1);
  }
}