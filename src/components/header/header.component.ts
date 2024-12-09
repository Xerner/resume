import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  standalone: true,
})

export class HeaderComponent {
  constructor(
    protected dataService: DataService,
  ) { }
}
