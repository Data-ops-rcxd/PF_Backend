import request from 'supertest';
import app from '../../app';
import { describe } from 'yargs';

describe('Se llama a la creacion de usuario', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
            const response = await request(app).get('/createuser');
            expect(response.status).toBe(200); // Verify the response status code
            expect(response.body).toHaveProperty('users'); // Verify the response body or specific properties
            expect(Array.isArray(response.body.users)).toBe(true); // Additional assertions on the response data
        });
    test('No funciona cuando no debe funcionar?:', async () => {
        });
     }
    );

describe('Se llama a la creacion de JWT', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
    });
   test('No funciona cuando no debe funcionar?:', async () => {
    });
});

describe('Se llama al retorno de los datos de un usuario', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
    });
   test('No funciona cuando no debe funcionar?:', async () => {
    });
});

describe('Se llama a la modificacion de los datos de un usuario', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
    });
   test('No funciona cuando no debe funcionar?:', async () => {
    });
});

describe('Se llama a la inhabilitacion de un usuario', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
    });
   test('No funciona cuando no debe funcionar?:', async () => {
    });
});

