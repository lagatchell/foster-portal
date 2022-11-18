import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, MatToolbarModule, FlexLayoutModule],
  declarations: [HeaderComponent],
  exports: [FlexLayoutModule, HeaderComponent],
  providers: [],
})
export class SharedModule { }
