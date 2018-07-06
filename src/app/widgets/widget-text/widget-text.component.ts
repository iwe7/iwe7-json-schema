import { Iwe7Widget } from './../../../../projects/iwe7-widgets/src/lib/widget-base/widget-base';
import { Iwe7WidgetEventService, Iwe7WidgetEvent } from './../../../../projects/iwe7-widgets/src/lib/iwe7-widget-event.service';
import { Component, OnInit, Input, HostBinding, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { Iwe7WidgetTargetService } from 'projects/iwe7-widgets/src/lib/iwe7-widget-target.service';

@Component({
  selector: 'widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent extends Iwe7Widget implements OnInit {
  @HostBinding('style.user-select') userSelect: string = 'text';
  // 输入
  @Input()
  set selectable(val: boolean) {
    if (val) {
      this.userSelect = 'text';
    } else {
      this.userSelect = 'none';
    }
  }
  // 内容 contents
  @Input() text: string;
  constructor(
    iwe7WidgetEventService: Iwe7WidgetEventService,
    iwe7WidgetTargetService: Iwe7WidgetTargetService,
    public ele: ElementRef
  ) {
    super(iwe7WidgetEventService, iwe7WidgetTargetService);
  }

  ngOnInit() {
    if (this.debug) {
      console.log(this);
    }
  }
  // 事件
  changeText(event: Iwe7WidgetEvent) {
    this.text = event.params.text;
  }
}
