import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 // path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
 // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
 // { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
 // { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
 // { path: 'special', loadChildren: './special/special.module#SpecialPageModule' },
 // { path: 'add', loadChildren: './add/add.module#AddPageModule' },
//{ path: 'add', loadChildren: './add/add.module#AddPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'inventory', loadChildren: './inventory/inventory.module#InventoryPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
