import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'bitcoin',
        children: [
          {
            path: '',
            loadChildren: '../bitcoin/bitcoin.module#BitcoinPageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'domain',
        children: [
          {
            path: '',
            loadChildren: '../domain/domain.module#DomainPageModule'
          }
        ]
      },
      {
        path: 'apple',
        children: [
          {
            path: '',
            loadChildren: '../apple/apple.module#ApplePageModule'
          }
        ]
      },
      {
        path: 'tech-crunch',
        children: [
          {
            path: '',
            loadChildren: '../tech-crunch/tech-crunch.module#TechCrunchPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/bitcoin',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/bitcoin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
