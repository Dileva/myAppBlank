import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
/*  {  
    path: 'add',
    loadChildren: '../add/add.module#AddPageModule'
  },*/
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'add',
        loadChildren: '../inventory-childs/add/add.module#AddPageModule'
      },
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'inventory',
        loadChildren: '../inventory/inventory.module#InventoryPageModule'
      },
      {
        path: '',
        redirectTo: '/tabs/inventory',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
