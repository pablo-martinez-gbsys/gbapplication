import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TopBusinessNewsPage } from './top-business-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: '', component: TopBusinessNewsPage}])
  ],
  declarations: [TopBusinessNewsPage]
})
export class topBusinessNewsPageModule {}

