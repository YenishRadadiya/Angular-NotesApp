import { Directive, ElementRef, Input, input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { note_status } from '../services/book/book.service';

@Directive({
  selector: '[appColorNote]'
})
export class ColorNoteDirective implements OnChanges {
  @Input('appColorNote') status: note_status = note_status.DEFAULT;
  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    let color = 'white';
    switch (this.status) {
      case note_status.NEW:
        color = '#00800bb0';
        break;
      case note_status.UPDATED:
        color = '#ff8300cc';
        break;
      case note_status.DELETED:
        color = '#ff000094';
        break;
    }
    this.render.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
