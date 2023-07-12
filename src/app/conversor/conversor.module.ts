import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { MoedaService, ConversorService } from './services';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { ConversorComponent } from './components';
import { DataBrPipe } from './pipes';

@NgModule({ 
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    ConversorComponent,
    NumeroDirective, 
    ModalCotacaoComponent, DataBrPipe   
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService,
  ]
})
export class ConversorModule { }
