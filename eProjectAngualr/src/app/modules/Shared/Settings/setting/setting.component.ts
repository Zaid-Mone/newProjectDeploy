import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOptgroup } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/core/core.index';
import { SettingMenuComponent } from '../setting-menu/setting-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [RouterModule,FormsModule,SettingMenuComponent,SharedModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {
  public routes = routes;
    gender = "selectgender"
}
