import request from 'supertest';
import app from '../../app';
import { describe } from 'yargs';
describe('Orders Endpoints', ()  =>{
describe('Se llama a la creacion de pedido', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
        const response = await request(app).get('/api/users');
            expect(response.status).toBe(200); // Verify the response status code
            expect(response.body).toHaveProperty('users'); // Verify the response body or specific properties
            expect(Array.isArray(response.body.users)).toBe(true); // Additional assertions on the response data           
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

describe('Se llama al retorno de los datos de los pedidos realizados por el usuario, y/o entre las fechas proveídas, si son proveídas', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
    });
   test('No funciona cuando no debe funcionar?:', async () => {
    });
});

describe('Se llama a la modificacion de la calificacion y comentarios del pedido', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
    });
   test('No funciona cuando no debe funcionar?:', async () => {
    });
});
});

describe('Product Controllers ', () => {
    //Aqui van las pruebas de controladores giuls
    describe('Se llama a la inhabilitacion de un usuario', ()  =>{
      test('funciona cuando debe funcionar?:', async () => {
      });
     test('No funciona cuando no debe funcionar?:', async () => {
      });
  }); 
})
