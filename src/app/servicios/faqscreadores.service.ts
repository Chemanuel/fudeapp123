import { Injectable } from '@angular/core';

@Injectable()
export class FaqscService {


  private faqsc: any [] =
  [
    {
      Pregunta: '¿Qué empresas pueden aplicar a fudefafa',
      // tslint:disable-next-line:max-line-length
      Respuesta: 'Empresas de todos los tamaños con grandes expectativas de expansión',
    },
    {
      Pregunta: '¿Cuáles son los criterios de evaluación?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'Empresas que la gente ama, y que podemos ayudar a vender en todas partes del mundo.'  ,
    },
    {
      Pregunta: '¿En qué periodo de tiempo obtengo respuesta de aprobación?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'En 5 días'  ,
    },
    {
      Pregunta: '¿Es obligatorio vender desde una pieza?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'No, para vender es importante tener en cuenta como te quieres expandir, vender desde una pieza acelera tu crecimiento.',
    },
    {
      Pregunta: '¿Qué pasa si no vendo?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'Si no vendes obtienes la evaluación de data de fudefafa para identificar cuales son los principales problemas de tu marca.'  ,
    },
    {
      Pregunta: '¿Cómo funcionan los envíos?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'Tú registras a tu Marca y recolección pasa por la mercancía a tu domicilio.'  ,
    },
    {
      Pregunta: '¿Cómo funcionan las devoluciones?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'Todas las devoluciones son operadas por fudefafa y son cobradas en automatico para las tres partes.'  ,
    },
    {
      Pregunta: '¿A quién tengo que emitir factura?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'Directamente a tu vendedor, fudefafa solo cobra su comisión correspondiente que es la que factura.'
    },
    {
      Pregunta: '¿Qué pasa si mi producto se pierde o daña?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'Seguro contra daños es la respuesta ideal para un imprevisto de este tipo, lo puedes adquirir en fudefafa.'  ,
    },
    {
      Pregunta: '¿Quién evalua a las empresas aplicantes?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'El grupo de expertos en mercados de fudefafa.'  ,
    },
    {
      Pregunta: '¿Cómo cuido mi producción para no sobredemandarla?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'Cada vez que ingresas un producto, indicas el inventario existente o futuro y por qué pedioro funciona, así cuando llegues al límite de venta la etiqueta "agotado" aparecerá en todos los sitios donde se exhiba tu producto.'  ,
    },
    {
      Pregunta: '¿Qué hay acerca de envíos internacionales?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'Son pagados por el comprador y tenemos cobertura internacional.'  ,
    },
  ];


  constructor() {
    console.log('servivio listo para usar!!!');
  }

  getfaqsc() {

    return this.faqsc;

  }

}
