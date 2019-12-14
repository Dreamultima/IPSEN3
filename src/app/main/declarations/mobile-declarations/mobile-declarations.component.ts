import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApplicationStateService} from '../../../application-state.service';
import {DeclarationsComponent} from '../declarations.component';

@Component({
  selector: 'app-mobile-declarations',
  templateUrl: './mobile-declarations.component.html',
  styleUrls: ['./mobile-declarations.component.scss']
})
export class MobileDeclarationsComponent extends DeclarationsComponent {

  constructor(router: Router, applicationStateService: ApplicationStateService) {
    super(router, applicationStateService);
  }

}