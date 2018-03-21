import { Injectable } from '@angular/core';

@Injectable()
export class FaqscService {


  private faqsc: any [] =
  [
    {
      Pregunta: '¿Qué empresas pueden aplicar a fudefafa',
      // tslint:disable-next-line:max-line-length
      Respuesta: 'Empresas de todos tamaños que busquen crecimiento pero que cuenten con un componente de innovación claro. *Por ahora los productos',
    },
    {
      Pregunta: '¿Qué plan es el que más me conviene?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'Empresas de todos tamaños que busquen crecimiento pero que cuenten con un componente de innovación claro. *Por ahora los productos perecederos que necesiten refrigeración no son aceptados.'  ,
    },
    {
      Pregunta: '¿Cuáles son los criterios de evaluación?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: '_____________________--'  ,
    },
    {
      Pregunta: '¿En qué periodo de tiempo obtengo respuesta de aprobación?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: '************************************'  ,
    },
    {
      Pregunta: '¿Es obligatorio vender desde una pieza?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: '-+-+-+-+-+-+-+-+-+-+-+-+-+',
    },
    {
      Pregunta: '¿Qué pasa si no vendo?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: '/////////////////////////////////////////////////////'  ,
    },
    {
      Pregunta: '¿Cómo funcionan los envíos?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: '999999999999999999999999999999999999999999999'  ,
    },
    {
      Pregunta: '¿Cómo funcionan las devoluciones?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'hkjhkn =)'  ,
    },
    {
      Pregunta: '¿A quién tengo que emitir factura?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'hjkfhpplkjlwkjelknmweq'
    },
    {
      Pregunta: '¿Qué pasa si mi producto se pierde o daña?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'ño'  ,
    },
    {
      Pregunta: '¿Quién evalua a las empresas aplicantes?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'jlsfhkjfdhljl'  ,
    },
    {
      Pregunta: '¿Cómo cuido mi producción para no sobredemandarla?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'intermedia'  ,
    },
    {
      Pregunta: '¿Qué hay acerca de envíos internacionales?'  ,
      // tslint:disable-next-line:max-line-length
      Respuesta: 'respondiiiiiiiiiiiiiiiida.'  ,
    },
  ];


  constructor() {
    console.log('servivio listo para usar!!!');
  }

  getfaqsc() {

    return this.faqsc;

  }

}
