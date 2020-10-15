import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card'; 

@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class MaterialModule {}
