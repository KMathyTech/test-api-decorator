import {Component, OnInit} from '@angular/core';
import {EnterpriseService} from "./enterprise.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-decorator-injector';
  constructor(private enterpriseService: EnterpriseService) { }

  ngOnInit() {
    this.enterpriseService.log();
  }
}
