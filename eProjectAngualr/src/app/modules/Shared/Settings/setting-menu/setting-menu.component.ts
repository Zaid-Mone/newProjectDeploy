import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-setting-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './setting-menu.component.html',
  styleUrl: './setting-menu.component.scss'
})
export class SettingMenuComponent {
  url: string|number;
  public routes = routes;
  constructor(private router: Router) {
    this.url = this.router.url;
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.url = this.router.url;
      }
    });
  }
}
