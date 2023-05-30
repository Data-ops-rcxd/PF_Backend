import request from 'supertest';
import app from '../../app';
import { describe } from 'yargs';

describe('Se llama a la creacion de producto', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
        const test_body = {name: 'john'}
        const { status, _body: body } = await request(app)
        .post('/createuser')
        .send(test_body)
        .set('Accept', 'application/json')
        expect(status).toBe(200)
        expect(body).toBeDefined()
        expect(body).toStrictEqual(test_body)
        });
    test('No funciona cuando no debe funcionar?:', async () => {
        });
     }
    );

describe('Se llama al retorno de los datos de un producto', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
    });
   test('No funciona cuando no debe funcionar?:', async () => {
    });
});

describe('Se llama al retorno de los datos de un producto que correspondan a usuario, texto y/o categoria dada', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
    });
   test('No funciona cuando no debe funcionar?:', async () => {
    });
});

describe('Se llama al retorno de las categorias de los productos que correspondan a un usuario dado', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
    });
   test('No funciona cuando no debe funcionar?:', async () => {
    });
});

describe('Se llama a la modificacion de los datos de un producto', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
    });
   test('No funciona cuando no debe funcionar?:', async () => {
    });
});

describe('Se llama a la inhabilitacion de un producto', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
    });
   test('No funciona cuando no debe funcionar?:', async () => {
    });
});

