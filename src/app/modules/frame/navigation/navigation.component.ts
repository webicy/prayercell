import { Component, OnInit } from '@angular/core';
import { AppRoute } from '../../../classes/AppRoute';
import { appRoutes } from '../../../models/app-routes';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  routes:AppRoute[] = []
  constructor() { }

  ngOnInit(): void {
    const excludePathNames:string[]= ['index','not-found']
    this.routes = appRoutes.filter(route => excludePathNames.indexOf(route.name) === -1)
  }

}
