import { Component } from '@angular/core';
import { BreadcrumbService } from './services/breadcrumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private breadCrumbService: BreadcrumbService){
    this.breadCrumbService.setTitle()
  }
}
