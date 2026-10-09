import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-shopping-list",
  standalone: true,
  template: `
    <ul>
      @for (item of items; track $index) {
        <li style="margin-bottom: 10px;">
          <span style="display: inline-block; width: 150px;">{{ item }}</span>
          <button type="button" (click)="requestDelete($index)">
            Supprimer
          </button>
        </li>
      }
    </ul>
    
    @if (items.length === 0) {
      <p style="color: gray;">- Votre liste est vide.</p>
    }
  `
})
export class ShoppingListComponent {
  @Input({ required: true }) items!: string[];
  @Output() removeItem = new EventEmitter<number>();

  requestDelete(index: number): void {
    this.removeItem.emit(index);
  }
}