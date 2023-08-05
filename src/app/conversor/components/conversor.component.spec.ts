import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ConversorComponent } from './conversor.component';
import { ConversorService, MoedaService } from '../services';
import { DataBrPipe } from '../pipes';
import { ModalCotacaoComponent } from '../utils';
import { NumeroDirective } from '../directives';

describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBrPipe, ModalCotacaoComponent, NumeroDirective],
      providers: [ConversorService, MoedaService],
      imports: [HttpClientModule, FormsModule],
    });
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
