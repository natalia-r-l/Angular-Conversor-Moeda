import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { 
 Conversao,
 ConversaoResponse 
} from '../models';

@Injectable()
export class ConversorService {
  // Nova url do fixer.io, que adiciona o parâmetro access_key, que é a chave de autenticação 
  //private readonly BASE_URL = "http://api.fixer.io/latest";
  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=4cbd28e823e7210cb75f720f6234959c";
  constructor(private http: HttpClient) {}
  /**
   * Realiza a chamada para a API de conversão de moedas.
   *
   * @param Conversao conversao
   * @return Observable<ConversaoResponse>
   */
  
  
  converter(conversao: Conversao): Observable<any> {
  
  let params = 
  `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
  return this.http
      .get(this.BASE_URL + params);      
  }
  /**
   * Retorna a cotação para dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return number
   */ 
  cotacaoPara(conversaoResponse: ConversaoResponse, 
 conversao: Conversao): number {
  if (conversaoResponse === undefined) {
  return 0;
  }
  return conversaoResponse.rates[conversao.moedaPara];
  }
  /**
   * Retorna a cotação de dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return string
   */
  cotacaoDe(conversaoResponse: ConversaoResponse, 
 conversao: Conversao): string {
  if (conversaoResponse === undefined) {
  return '0';
  }
  return (1 / conversaoResponse.rates[conversao.moedaPara])
  .toFixed(4);
  }
  /**
   * Retorna a data da cotação dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @return string
   */
  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }
    return conversaoResponse.date;
  }
}
