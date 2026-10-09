import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-shopping-input",
  standalone: true,
  imports: [FormsModule],
  template: `
    <div style="margin-bottom: 20px;">
      <label for="item" style="margin-right: 10px;">Nouvel article</label>
      <input id="item" name="item" [(ngModel)]="itemName" placeholder="ex: brocolli">
      <button type="button" (click)="submitItem()" style="margin-left: 10px;">Ajouter</button>
    </div>
  `
})
export class ShoppingInputComponent {
  itemName = "";
  @Output() addItem = new EventEmitter<string>();

  submitItem(): void {
    const clean = this.itemName.trim();
  
    if (clean.length > 0) {
      this.addItem.emit(clean);
      this.itemName = "";
    }
  }
}