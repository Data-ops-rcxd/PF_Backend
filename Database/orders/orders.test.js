import supertest from 'supertest';
import app from '../../app';
let id ;
const fakeid = '6475ebf15ac24cf94077d3ed';
const userid = '6472ffd7c3f6cf774a88f833';
const fakeuserid = '6472ffd7c3f6cf774a77f833';
const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc1ZGE0NTljYjA3MTFiYTQ1OTJmYTAiLCJpYXQiOjE2ODU0NDUxOTB9.iUzXHq87ShJoLf5_4ru99RU-_83AFuNwXKAL3tDUpZM';
const faketoken= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc1ZGE0NTljYjA3MTFiYTQ1OTJmYTAiLCJpYXabcdE2ODU0NDUxOTB9.iUzXHq87ShJoLf5_4ru99RU-_83AFuNwXKAL3tDUpZM'
describe('Orders Endpoints', ()  =>{
    describe('Se llama a la creacion de pedido', ()  =>{
        test('funciona cuando debe funcionar?:', async () => {         
        }
        );
        test('No funciona cuando no debe funcionar?:', async () => {
        });
    });
    describe('Se llama al retorno de los datos de un pedido', ()  =>{
        test('funciona cuando debe funcionar?:', async () => {
        });
    test('No funciona cuando no debe funcionar?:', async () => {
        });
    });

    // describe('Se llama al retorno de los datos de los pedidos realizados por el usuario, y/o entre las fechas proveídas, si son proveídas', ()  =>{
    //     test('funciona cuando debe funcionar?:', async () => {
    //     });
    //    test('No funciona cuando no debe funcionar?:', async () => {
    //     });
    // });

    // describe('Se llama a la modificacion de la calificacion y comentarios del pedido', ()  =>{
    //     test('funciona cuando debe funcionar?:', async () => {
    //     });
    //    test('No funciona cuando no debe funcionar?:', async () => {
    //     });
    // });
});

// describe('Product Controllers ', () => {
//     //Aqui van las pruebas de controladores giuls
//     describe('Se llama a la inhabilitacion de un usuario', ()  =>{
//       test('funciona cuando debe funcionar?:', async () => {
//       });
//      test('No funciona cuando no debe funcionar?:', async () => {
//       });
//   }); 
// })
