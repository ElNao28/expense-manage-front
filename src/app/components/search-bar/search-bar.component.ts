import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Output()
  public valueButton = new EventEmitter<boolean>();

  public buttonAction() {
    this.valueButton.emit(true);
  }
}
