import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    exports: [
        MatButtonModule,
        MatTabsModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatGridListModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatDividerModule,
        FlexLayoutModule
    ]
})
export class MaterialModule { }
