import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-letter-page',
  templateUrl: 'letter-page.component.html',
  standalone: true,
})
export class LetterPageComponent {
  @ViewChild("page", { static: true }) page!: ElementRef<HTMLDivElement>;

  ngOnInit() {

  }

  onResize() {
    var width = this.page.nativeElement.clientWidth;
    var height = this.page.nativeElement.clientHeight;
  }
}
