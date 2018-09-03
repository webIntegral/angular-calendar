(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"5Wrq":function(s,a){s.exports='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { FormsModule } from <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FlatpickrModule } from <span class="hljs-string">\'angularx-flatpickr\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule, DateAdapter } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { adapterFactory } from <span class="hljs-string">\'angular-calendar/date-adapters/date-fns\'</span>;\n<span class="hljs-keyword">import</span> { NgbModalModule } from <span class="hljs-string">\'@ng-bootstrap/ng-bootstrap\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    FormsModule,\n    NgbModalModule,\n    FlatpickrModule.forRoot(),\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    })\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},IJlF:function(s,a){s.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { FormsModule } from '@angular/forms';\nimport { FlatpickrModule } from 'angularx-flatpickr';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\nimport { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';\nimport { DemoComponent } from './component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    FormsModule,\n    NgbModalModule,\n    FlatpickrModule.forRoot(),\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    })\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"},KWbP:function(s,a){s.exports='<ng-template #modalContent let-close="close">\n  <div class="modal-header">\n    <h5 class="modal-title">Event action occurred</h5>\n    <button type="button" class="close" (click)="close()">\n      <span aria-hidden="true">&times;</span>\n    </button>\n  </div>\n  <div class="modal-body">\n    <div>\n      Action:\n      <pre>{{ modalData?.action }}</pre>\n    </div>\n    <div>\n      Event:\n      <pre>{{ modalData?.event | json }}</pre>\n    </div>\n  </div>\n  <div class="modal-footer">\n    <button type="button" class="btn btn-outline-secondary" (click)="close()">OK</button>\n  </div>\n</ng-template>\n\n<div class="row text-center">\n  <div class="col-md-4">\n    <div class="btn-group">\n      <div\n        class="btn btn-primary"\n        mwlCalendarPreviousView\n        [view]="view"\n        [(viewDate)]="viewDate"\n        (viewDateChange)="activeDayIsOpen = false">\n        Previous\n      </div>\n      <div\n        class="btn btn-outline-secondary"\n        mwlCalendarToday\n        [(viewDate)]="viewDate">\n        Today\n      </div>\n      <div\n        class="btn btn-primary"\n        mwlCalendarNextView\n        [view]="view"\n        [(viewDate)]="viewDate"\n        (viewDateChange)="activeDayIsOpen = false">\n        Next\n      </div>\n    </div>\n  </div>\n  <div class="col-md-4">\n    <h3>{{ viewDate | calendarDate:(view + \'ViewTitle\'):\'en\' }}</h3>\n  </div>\n  <div class="col-md-4">\n    <div class="btn-group">\n      <div\n        class="btn btn-primary"\n        (click)="view = CalendarView.Month"\n        [class.active]="view === CalendarView.Month">\n        Month\n      </div>\n      <div\n        class="btn btn-primary"\n        (click)="view = CalendarView.Week"\n        [class.active]="view === CalendarView.Week">\n        Week\n      </div>\n      <div\n        class="btn btn-primary"\n        (click)="view = CalendarView.Day"\n        [class.active]="view === CalendarView.Day">\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<div [ngSwitch]="view">\n  <mwl-calendar-month-view\n    *ngSwitchCase="CalendarView.Month"\n    [viewDate]="viewDate"\n    [events]="events"\n    [refresh]="refresh"\n    [activeDayIsOpen]="activeDayIsOpen"\n    (dayClicked)="dayClicked($event.day)"\n    (eventClicked)="handleEvent(\'Clicked\', $event.event)"\n    (eventTimesChanged)="eventTimesChanged($event)">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase="CalendarView.Week"\n    [viewDate]="viewDate"\n    [events]="events"\n    [refresh]="refresh"\n    (eventClicked)="handleEvent(\'Clicked\', $event.event)"\n    (eventTimesChanged)="eventTimesChanged($event)">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase="CalendarView.Day"\n    [viewDate]="viewDate"\n    [events]="events"\n    [refresh]="refresh"\n    (eventClicked)="handleEvent(\'Clicked\', $event.event)"\n    (eventTimesChanged)="eventTimesChanged($event)">\n  </mwl-calendar-day-view>\n</div>\n\n<br><br><br>\n\n<h3>\n  Edit events\n  <button\n    class="btn btn-primary pull-right"\n    (click)="addEvent()">\n    Add new\n  </button>\n  <div class="clearfix"></div>\n</h3>\n\n<table class="table table-bordered">\n\n  <thead>\n    <tr>\n      <th>Title</th>\n      <th>Primary color</th>\n      <th>Secondary color</th>\n      <th>Starts at</th>\n      <th>Ends at</th>\n      <th>Remove</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor="let event of events; let index = index">\n      <td>\n        <input\n          type="text"\n          class="form-control"\n          [(ngModel)]="event.title"\n          (keyup)="refresh.next()">\n      </td>\n      <td>\n        <input\n          type="color"\n          [(ngModel)]="event.color.primary"\n          (change)="refresh.next()">\n      </td>\n      <td>\n        <input\n          type="color"\n          [(ngModel)]="event.color.secondary"\n          (change)="refresh.next()">\n      </td>\n      <td>\n        <input\n          class="form-control"\n          type="text"\n          mwlFlatpickr\n          [(ngModel)]="event.start"\n          (ngModelChange)="refresh.next()"\n          [altInput]="true"\n          [convertModelValue]="true"\n          [enableTime]="true"\n          dateFormat="Y-m-dTH:i"\n          altFormat="F j, Y H:i"\n          placeholder="Not set">\n      </td>\n      <td>\n        <input\n          class="form-control"\n          type="text"\n          mwlFlatpickr\n          [(ngModel)]="event.end"\n          (ngModelChange)="refresh.next()"\n          [altInput]="true"\n          [convertModelValue]="true"\n          [enableTime]="true"\n          dateFormat="Y-m-dTH:i"\n          altFormat="F j, Y H:i"\n          placeholder="Not set">\n      </td>\n      <td>\n        <button\n          class="btn btn-danger"\n          (click)="events.splice(index, 1); refresh.next()">\n          Delete\n        </button>\n      </td>\n    </tr>\n  </tbody>\n\n</table>\n'},Zu0B:function(s,a){s.exports='<span class="hljs-keyword">import</span> {\n  Component,\n  ChangeDetectionStrategy,\n  ViewChild,\n  TemplateRef\n} from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> {\n  startOfDay,\n  endOfDay,\n  subDays,\n  addDays,\n  endOfMonth,\n  isSameDay,\n  isSameMonth,\n  addHours\n} from <span class="hljs-string">\'date-fns\'</span>;\n<span class="hljs-keyword">import</span> { Subject } from <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { NgbModal } from <span class="hljs-string">\'@ng-bootstrap/ng-bootstrap\'</span>;\n<span class="hljs-keyword">import</span> {\n  CalendarEvent,\n  CalendarEventAction,\n  CalendarEventTimesChangedEvent,\n  CalendarView\n} from <span class="hljs-string">\'angular-calendar\'</span>;\n\n<span class="hljs-keyword">const</span> colors: <span class="hljs-built_in">any</span> = {\n  red: {\n    primary: <span class="hljs-string">\'#ad2121\'</span>,\n    secondary: <span class="hljs-string">\'#FAE3E3\'</span>\n  },\n  blue: {\n    primary: <span class="hljs-string">\'#1e90ff\'</span>,\n    secondary: <span class="hljs-string">\'#D1E8FF\'</span>\n  },\n  yellow: {\n    primary: <span class="hljs-string">\'#e3bc08\'</span>,\n    secondary: <span class="hljs-string">\'#FDF1BA\'</span>\n  }\n};\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  styleUrls: [<span class="hljs-string">\'styles.css\'</span>],\n  templateUrl: <span class="hljs-string">\'template.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  @ViewChild(<span class="hljs-string">\'modalContent\'</span>)\n  modalContent: TemplateRef&lt;<span class="hljs-built_in">any</span>&gt;;\n\n  view: CalendarView = CalendarView.Month;\n\n  CalendarView = CalendarView;\n\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  modalData: {\n    action: <span class="hljs-built_in">string</span>;\n    event: CalendarEvent;\n  };\n\n  actions: CalendarEventAction[] = [\n    {\n      label: <span class="hljs-string">\'&lt;i class="fa fa-fw fa-pencil"&gt;&lt;/i&gt;\'</span>,\n      onClick: ({ event }: { event: CalendarEvent }): <span class="hljs-built_in">void</span> =&gt; {\n        <span class="hljs-keyword">this</span>.handleEvent(<span class="hljs-string">\'Edited\'</span>, event);\n      }\n    },\n    {\n      label: <span class="hljs-string">\'&lt;i class="fa fa-fw fa-times"&gt;&lt;/i&gt;\'</span>,\n      onClick: ({ event }: { event: CalendarEvent }): <span class="hljs-built_in">void</span> =&gt; {\n        <span class="hljs-keyword">this</span>.events = <span class="hljs-keyword">this</span>.events.filter(iEvent =&gt; iEvent !== event);\n        <span class="hljs-keyword">this</span>.handleEvent(<span class="hljs-string">\'Deleted\'</span>, event);\n      }\n    }\n  ];\n\n  refresh: Subject&lt;<span class="hljs-built_in">any</span>&gt; = <span class="hljs-keyword">new</span> Subject();\n\n  events: CalendarEvent[] = [\n    {\n      start: subDays(startOfDay(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()), <span class="hljs-number">1</span>),\n      end: addDays(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(), <span class="hljs-number">1</span>),\n      title: <span class="hljs-string">\'A 3 day event\'</span>,\n      color: colors.red,\n      actions: <span class="hljs-keyword">this</span>.actions,\n      allDay: <span class="hljs-literal">true</span>,\n      resizable: {\n        beforeStart: <span class="hljs-literal">true</span>,\n        afterEnd: <span class="hljs-literal">true</span>\n      },\n      draggable: <span class="hljs-literal">true</span>\n    },\n    {\n      start: startOfDay(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()),\n      title: <span class="hljs-string">\'An event with no end date\'</span>,\n      color: colors.yellow,\n      actions: <span class="hljs-keyword">this</span>.actions\n    },\n    {\n      start: subDays(endOfMonth(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()), <span class="hljs-number">3</span>),\n      end: addDays(endOfMonth(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()), <span class="hljs-number">3</span>),\n      title: <span class="hljs-string">\'A long event that spans 2 months\'</span>,\n      color: colors.blue,\n      allDay: <span class="hljs-literal">true</span>\n    },\n    {\n      start: addHours(startOfDay(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()), <span class="hljs-number">2</span>),\n      end: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n      title: <span class="hljs-string">\'A draggable and resizable event\'</span>,\n      color: colors.yellow,\n      actions: <span class="hljs-keyword">this</span>.actions,\n      resizable: {\n        beforeStart: <span class="hljs-literal">true</span>,\n        afterEnd: <span class="hljs-literal">true</span>\n      },\n      draggable: <span class="hljs-literal">true</span>\n    }\n  ];\n\n  activeDayIsOpen: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">true</span>;\n\n  <span class="hljs-constructor"><span class="hljs-keyword">constructor</span>(private modal: NgbModal) </span>{}\n\n  dayClicked({ date, events }: { date: <span class="hljs-built_in">Date</span>; events: CalendarEvent[] }): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">if</span> (isSameMonth(date, <span class="hljs-keyword">this</span>.viewDate)) {\n      <span class="hljs-keyword">this</span>.viewDate = date;\n      <span class="hljs-keyword">if</span> (\n        (isSameDay(<span class="hljs-keyword">this</span>.viewDate, date) &amp;&amp; <span class="hljs-keyword">this</span>.activeDayIsOpen === <span class="hljs-literal">true</span>) ||\n        events.length === <span class="hljs-number">0</span>\n      ) {\n        <span class="hljs-keyword">this</span>.activeDayIsOpen = <span class="hljs-literal">false</span>;\n      } <span class="hljs-keyword">else</span> {\n        <span class="hljs-keyword">this</span>.activeDayIsOpen = <span class="hljs-literal">true</span>;\n      }\n    }\n  }\n\n  eventTimesChanged({\n    event,\n    newStart,\n    newEnd\n  }: CalendarEventTimesChangedEvent): <span class="hljs-built_in">void</span> {\n    event.start = newStart;\n    event.end = newEnd;\n    <span class="hljs-keyword">this</span>.handleEvent(<span class="hljs-string">\'Dropped or resized\'</span>, event);\n    <span class="hljs-keyword">this</span>.refresh.next();\n  }\n\n  handleEvent(action: <span class="hljs-built_in">string</span>, event: CalendarEvent): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">this</span>.modalData = { event, action };\n    <span class="hljs-keyword">this</span>.modal.open(<span class="hljs-keyword">this</span>.modalContent, { size: <span class="hljs-string">\'lg\'</span> });\n  }\n\n  addEvent(): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">this</span>.events.push({\n      title: <span class="hljs-string">\'New event\'</span>,\n      start: startOfDay(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()),\n      end: endOfDay(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()),\n      color: colors.red,\n      draggable: <span class="hljs-literal">true</span>,\n      resizable: {\n        beforeStart: <span class="hljs-literal">true</span>,\n        afterEnd: <span class="hljs-literal">true</span>\n      }\n    });\n    <span class="hljs-keyword">this</span>.refresh.next();\n  }\n}\n'},"cSe/":function(s,a){s.exports='<span class="hljs-tag">h3</span> <span class="hljs-rules">{\n  <span class="hljs-rule"><span class="hljs-attribute">margin</span>:<span class="hljs-value"> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">10px</span></span></span>;\n}</span>\n\n<span class="hljs-tag">pre</span> <span class="hljs-rules">{\n  <span class="hljs-rule"><span class="hljs-attribute">background-color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#f5f5f5</span></span></span>;\n  <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span class="hljs-number">15px</span></span></span>;\n}</span>'},exAj:function(s,a){s.exports="import {\n  Component,\n  ChangeDetectionStrategy,\n  ViewChild,\n  TemplateRef\n} from '@angular/core';\nimport {\n  startOfDay,\n  endOfDay,\n  subDays,\n  addDays,\n  endOfMonth,\n  isSameDay,\n  isSameMonth,\n  addHours\n} from 'date-fns';\nimport { Subject } from 'rxjs';\nimport { NgbModal } from '@ng-bootstrap/ng-bootstrap';\nimport {\n  CalendarEvent,\n  CalendarEventAction,\n  CalendarEventTimesChangedEvent,\n  CalendarView\n} from 'angular-calendar';\n\nconst colors: any = {\n  red: {\n    primary: '#ad2121',\n    secondary: '#FAE3E3'\n  },\n  blue: {\n    primary: '#1e90ff',\n    secondary: '#D1E8FF'\n  },\n  yellow: {\n    primary: '#e3bc08',\n    secondary: '#FDF1BA'\n  }\n};\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  styleUrls: ['styles.css'],\n  templateUrl: 'template.html'\n})\nexport class DemoComponent {\n  @ViewChild('modalContent')\n  modalContent: TemplateRef<any>;\n\n  view: CalendarView = CalendarView.Month;\n\n  CalendarView = CalendarView;\n\n  viewDate: Date = new Date();\n\n  modalData: {\n    action: string;\n    event: CalendarEvent;\n  };\n\n  actions: CalendarEventAction[] = [\n    {\n      label: '<i class=\"fa fa-fw fa-pencil\"></i>',\n      onClick: ({ event }: { event: CalendarEvent }): void => {\n        this.handleEvent('Edited', event);\n      }\n    },\n    {\n      label: '<i class=\"fa fa-fw fa-times\"></i>',\n      onClick: ({ event }: { event: CalendarEvent }): void => {\n        this.events = this.events.filter(iEvent => iEvent !== event);\n        this.handleEvent('Deleted', event);\n      }\n    }\n  ];\n\n  refresh: Subject<any> = new Subject();\n\n  events: CalendarEvent[] = [\n    {\n      start: subDays(startOfDay(new Date()), 1),\n      end: addDays(new Date(), 1),\n      title: 'A 3 day event',\n      color: colors.red,\n      actions: this.actions,\n      allDay: true,\n      resizable: {\n        beforeStart: true,\n        afterEnd: true\n      },\n      draggable: true\n    },\n    {\n      start: startOfDay(new Date()),\n      title: 'An event with no end date',\n      color: colors.yellow,\n      actions: this.actions\n    },\n    {\n      start: subDays(endOfMonth(new Date()), 3),\n      end: addDays(endOfMonth(new Date()), 3),\n      title: 'A long event that spans 2 months',\n      color: colors.blue,\n      allDay: true\n    },\n    {\n      start: addHours(startOfDay(new Date()), 2),\n      end: new Date(),\n      title: 'A draggable and resizable event',\n      color: colors.yellow,\n      actions: this.actions,\n      resizable: {\n        beforeStart: true,\n        afterEnd: true\n      },\n      draggable: true\n    }\n  ];\n\n  activeDayIsOpen: boolean = true;\n\n  constructor(private modal: NgbModal) {}\n\n  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {\n    if (isSameMonth(date, this.viewDate)) {\n      this.viewDate = date;\n      if (\n        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||\n        events.length === 0\n      ) {\n        this.activeDayIsOpen = false;\n      } else {\n        this.activeDayIsOpen = true;\n      }\n    }\n  }\n\n  eventTimesChanged({\n    event,\n    newStart,\n    newEnd\n  }: CalendarEventTimesChangedEvent): void {\n    event.start = newStart;\n    event.end = newEnd;\n    this.handleEvent('Dropped or resized', event);\n    this.refresh.next();\n  }\n\n  handleEvent(action: string, event: CalendarEvent): void {\n    this.modalData = { event, action };\n    this.modal.open(this.modalContent, { size: 'lg' });\n  }\n\n  addEvent(): void {\n    this.events.push({\n      title: 'New event',\n      start: startOfDay(new Date()),\n      end: endOfDay(new Date()),\n      color: colors.red,\n      draggable: true,\n      resizable: {\n        beforeStart: true,\n        afterEnd: true\n      }\n    });\n    this.refresh.next();\n  }\n}\n"},n8t0:function(s,a,n){"use strict";n.r(a),n.d(a,"sources",function(){return l});var l=[{filename:"component.ts",contents:{raw:n("exAj"),highlighted:n("Zu0B")}},{filename:"template.html",contents:{raw:n("KWbP"),highlighted:n("wV6v")}},{filename:"styles.css",contents:{raw:n("r3Qu"),highlighted:n("cSe/")}},{filename:"module.ts",contents:{raw:n("IJlF"),highlighted:n("5Wrq")}}]},r3Qu:function(s,a){s.exports="h3 {\n  margin: 0 0 10px;\n}\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px;\n}"},wV6v:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-title">ng-template</span> #<span class="hljs-attribute">modalContent</span> <span class="hljs-attribute">let-close</span>=<span class="hljs-value">"close"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"modal-header"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">h5</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"modal-title"</span>&gt;</span>Event action occurred<span class="hljs-tag">&lt;/<span class="hljs-title">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"button"</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"close"</span> (<span class="hljs-attribute">click</span>)=<span class="hljs-value">"close()"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">aria-hidden</span>=<span class="hljs-value">"true"</span>&gt;</span>&amp;times;<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-title">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"modal-body"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">div</span>&gt;</span>\n      Action:\n      <span class="hljs-tag">&lt;<span class="hljs-title">pre</span>&gt;</span>{{ modalData?.action }}<span class="hljs-tag">&lt;/<span class="hljs-title">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">div</span>&gt;</span>\n      Event:\n      <span class="hljs-tag">&lt;<span class="hljs-title">pre</span>&gt;</span>{{ modalData?.event | json }}<span class="hljs-tag">&lt;/<span class="hljs-title">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"modal-footer"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"button"</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"btn btn-outline-secondary"</span> (<span class="hljs-attribute">click</span>)=<span class="hljs-value">"close()"</span>&gt;</span>OK<span class="hljs-tag">&lt;/<span class="hljs-title">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">ng-template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"row text-center"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"col-md-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"btn-group"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">div</span>\n        <span class="hljs-attribute">class</span>=<span class="hljs-value">"btn btn-primary"</span>\n        <span class="hljs-attribute">mwlCalendarPreviousView</span>\n        [<span class="hljs-attribute">view</span>]=<span class="hljs-value">"view"</span>\n        [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>\n        (<span class="hljs-attribute">viewDateChange</span>)=<span class="hljs-value">"activeDayIsOpen = false"</span>&gt;</span>\n        Previous\n      <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">div</span>\n        <span class="hljs-attribute">class</span>=<span class="hljs-value">"btn btn-outline-secondary"</span>\n        <span class="hljs-attribute">mwlCalendarToday</span>\n        [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>&gt;</span>\n        Today\n      <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">div</span>\n        <span class="hljs-attribute">class</span>=<span class="hljs-value">"btn btn-primary"</span>\n        <span class="hljs-attribute">mwlCalendarNextView</span>\n        [<span class="hljs-attribute">view</span>]=<span class="hljs-value">"view"</span>\n        [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>\n        (<span class="hljs-attribute">viewDateChange</span>)=<span class="hljs-value">"activeDayIsOpen = false"</span>&gt;</span>\n        Next\n      <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"col-md-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">h3</span>&gt;</span>{{ viewDate | calendarDate:(view + \'ViewTitle\'):\'en\' }}<span class="hljs-tag">&lt;/<span class="hljs-title">h3</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"col-md-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"btn-group"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">div</span>\n        <span class="hljs-attribute">class</span>=<span class="hljs-value">"btn btn-primary"</span>\n        (<span class="hljs-attribute">click</span>)=<span class="hljs-value">"view = CalendarView.Month"</span>\n        [<span class="hljs-attribute">class.active</span>]=<span class="hljs-value">"view === CalendarView.Month"</span>&gt;</span>\n        Month\n      <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">div</span>\n        <span class="hljs-attribute">class</span>=<span class="hljs-value">"btn btn-primary"</span>\n        (<span class="hljs-attribute">click</span>)=<span class="hljs-value">"view = CalendarView.Week"</span>\n        [<span class="hljs-attribute">class.active</span>]=<span class="hljs-value">"view === CalendarView.Week"</span>&gt;</span>\n        Week\n      <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">div</span>\n        <span class="hljs-attribute">class</span>=<span class="hljs-value">"btn btn-primary"</span>\n        (<span class="hljs-attribute">click</span>)=<span class="hljs-value">"view = CalendarView.Day"</span>\n        [<span class="hljs-attribute">class.active</span>]=<span class="hljs-value">"view === CalendarView.Day"</span>&gt;</span>\n        Day\n      <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> [<span class="hljs-attribute">ngSwitch</span>]=<span class="hljs-value">"view"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"CalendarView.Month"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    [<span class="hljs-attribute">refresh</span>]=<span class="hljs-value">"refresh"</span>\n    [<span class="hljs-attribute">activeDayIsOpen</span>]=<span class="hljs-value">"activeDayIsOpen"</span>\n    (<span class="hljs-attribute">dayClicked</span>)=<span class="hljs-value">"dayClicked($event.day)"</span>\n    (<span class="hljs-attribute">eventClicked</span>)=<span class="hljs-value">"handleEvent(\'Clicked\', $event.event)"</span>\n    (<span class="hljs-attribute">eventTimesChanged</span>)=<span class="hljs-value">"eventTimesChanged($event)"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-week-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"CalendarView.Week"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    [<span class="hljs-attribute">refresh</span>]=<span class="hljs-value">"refresh"</span>\n    (<span class="hljs-attribute">eventClicked</span>)=<span class="hljs-value">"handleEvent(\'Clicked\', $event.event)"</span>\n    (<span class="hljs-attribute">eventTimesChanged</span>)=<span class="hljs-value">"eventTimesChanged($event)"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-week-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"CalendarView.Day"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    [<span class="hljs-attribute">refresh</span>]=<span class="hljs-value">"refresh"</span>\n    (<span class="hljs-attribute">eventClicked</span>)=<span class="hljs-value">"handleEvent(\'Clicked\', $event.event)"</span>\n    (<span class="hljs-attribute">eventTimesChanged</span>)=<span class="hljs-value">"eventTimesChanged($event)"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">h3</span>&gt;</span>\n  Edit events\n  <span class="hljs-tag">&lt;<span class="hljs-title">button</span>\n    <span class="hljs-attribute">class</span>=<span class="hljs-value">"btn btn-primary pull-right"</span>\n    (<span class="hljs-attribute">click</span>)=<span class="hljs-value">"addEvent()"</span>&gt;</span>\n    Add new\n  <span class="hljs-tag">&lt;/<span class="hljs-title">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"clearfix"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">table</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"table table-bordered"</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-title">thead</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">th</span>&gt;</span>Title<span class="hljs-tag">&lt;/<span class="hljs-title">th</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">th</span>&gt;</span>Primary color<span class="hljs-tag">&lt;/<span class="hljs-title">th</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">th</span>&gt;</span>Secondary color<span class="hljs-tag">&lt;/<span class="hljs-title">th</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">th</span>&gt;</span>Starts at<span class="hljs-tag">&lt;/<span class="hljs-title">th</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">th</span>&gt;</span>Ends at<span class="hljs-tag">&lt;/<span class="hljs-title">th</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">th</span>&gt;</span>Remove<span class="hljs-tag">&lt;/<span class="hljs-title">th</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-title">tr</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">thead</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-title">tbody</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">tr</span> *<span class="hljs-attribute">ngFor</span>=<span class="hljs-value">"let event of events; let index = index"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">td</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-title">input</span>\n          <span class="hljs-attribute">type</span>=<span class="hljs-value">"text"</span>\n          <span class="hljs-attribute">class</span>=<span class="hljs-value">"form-control"</span>\n          [(<span class="hljs-attribute">ngModel</span>)]=<span class="hljs-value">"event.title"</span>\n          (<span class="hljs-attribute">keyup</span>)=<span class="hljs-value">"refresh.next()"</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-title">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">td</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-title">input</span>\n          <span class="hljs-attribute">type</span>=<span class="hljs-value">"color"</span>\n          [(<span class="hljs-attribute">ngModel</span>)]=<span class="hljs-value">"event.color.primary"</span>\n          (<span class="hljs-attribute">change</span>)=<span class="hljs-value">"refresh.next()"</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-title">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">td</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-title">input</span>\n          <span class="hljs-attribute">type</span>=<span class="hljs-value">"color"</span>\n          [(<span class="hljs-attribute">ngModel</span>)]=<span class="hljs-value">"event.color.secondary"</span>\n          (<span class="hljs-attribute">change</span>)=<span class="hljs-value">"refresh.next()"</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-title">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">td</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-title">input</span>\n          <span class="hljs-attribute">class</span>=<span class="hljs-value">"form-control"</span>\n          <span class="hljs-attribute">type</span>=<span class="hljs-value">"text"</span>\n          <span class="hljs-attribute">mwlFlatpickr</span>\n          [(<span class="hljs-attribute">ngModel</span>)]=<span class="hljs-value">"event.start"</span>\n          (<span class="hljs-attribute">ngModelChange</span>)=<span class="hljs-value">"refresh.next()"</span>\n          [<span class="hljs-attribute">altInput</span>]=<span class="hljs-value">"true"</span>\n          [<span class="hljs-attribute">convertModelValue</span>]=<span class="hljs-value">"true"</span>\n          [<span class="hljs-attribute">enableTime</span>]=<span class="hljs-value">"true"</span>\n          <span class="hljs-attribute">dateFormat</span>=<span class="hljs-value">"Y-m-dTH:i"</span>\n          <span class="hljs-attribute">altFormat</span>=<span class="hljs-value">"F j, Y H:i"</span>\n          <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Not set"</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-title">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">td</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-title">input</span>\n          <span class="hljs-attribute">class</span>=<span class="hljs-value">"form-control"</span>\n          <span class="hljs-attribute">type</span>=<span class="hljs-value">"text"</span>\n          <span class="hljs-attribute">mwlFlatpickr</span>\n          [(<span class="hljs-attribute">ngModel</span>)]=<span class="hljs-value">"event.end"</span>\n          (<span class="hljs-attribute">ngModelChange</span>)=<span class="hljs-value">"refresh.next()"</span>\n          [<span class="hljs-attribute">altInput</span>]=<span class="hljs-value">"true"</span>\n          [<span class="hljs-attribute">convertModelValue</span>]=<span class="hljs-value">"true"</span>\n          [<span class="hljs-attribute">enableTime</span>]=<span class="hljs-value">"true"</span>\n          <span class="hljs-attribute">dateFormat</span>=<span class="hljs-value">"Y-m-dTH:i"</span>\n          <span class="hljs-attribute">altFormat</span>=<span class="hljs-value">"F j, Y H:i"</span>\n          <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Not set"</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-title">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">td</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-title">button</span>\n          <span class="hljs-attribute">class</span>=<span class="hljs-value">"btn btn-danger"</span>\n          (<span class="hljs-attribute">click</span>)=<span class="hljs-value">"events.splice(index, 1); refresh.next()"</span>&gt;</span>\n          Delete\n        <span class="hljs-tag">&lt;/<span class="hljs-title">button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-title">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-title">tr</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">tbody</span>&gt;</span>\n\n<span class="hljs-tag">&lt;/<span class="hljs-title">table</span>&gt;</span>\n'}}]);