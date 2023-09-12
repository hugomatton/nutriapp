import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Mes Patients',
      routerLink: '/patients',
      icon: 'pi pi-fw pi-user',
    },
    {
      label: 'Historique',
      routerLink: '/historique',
      icon: 'pi pi-fw pi-clock',
    },
  ];

  activeItem: MenuItem | undefined;

  ngOnInit(): void {
    this.activeItem = this.menuItems[0];
  }
}
