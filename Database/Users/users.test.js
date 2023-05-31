import supertest from 'supertest';
import app from '../../app.js';
const mail= 'aaaaaaaa@ddddd.com';
const cont= 'aa1234';
describe('User Endpoints ', () => {
let token
describe('Se llama a la creacion de usuario', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
            const response = await supertest(app).post('/Users/createuser').send({
            name: 'Pedro',
            password: cont,
            email: mail,
          });
          expect(response.status).toBe(201);
    });

    test('No funciona cuando no debe funcionar?:', async () => {
        const response = await supertest(app).post('/Users/createuser').send({
            name: 'Pedro',
            password: '123',
            phone: '1',
            address: 'casa',
          });
          expect(response.status).toBe(500);
    });
  });
 describe('Se llama a la creacion de JWT', ()  =>{
     test('funciona cuando debe funcionar?:', async () => {
         const response = await supertest(app).get('/Users/finduserJWT').send({
             email: mail,
             password: cont,
           });
           token = response.body.token;
           console.log(token)
           expect(response.status).toBe(200);
     });
    test('No funciona cuando no debe funcionar?:', async () => {
         const response = await supertest(app).get('/Users/finduserJWT').send({
         email: '1@1',
         password: '123456',
       });
       expect(response.status).toBe(404);
     });
 });

describe('Se llama al retorno de los datos de un usuario', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
        const response = await supertest(app).get('/Users/finduser/' + "6472ffd7c3f6cf774a88f833");//creo que tocara poner un id que ya existe desde antes en la base de datos
        expect(response.status).toBe(200);
    });
   test('No funciona cuando no debe funcionar?:', async () => {
        const response = await supertest(app).get('/Users/finduser/' + "6472ffd7c3f6cf774a88f835");
      expect(response.status).toBe(404);
    });
});

describe('Se llama a la modificacion de los datos de un usuario', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
        const response = await supertest(app).patch('/Users/updateuser').set('Authorization', token);//no se si esta parte de authorization este bien, hay ue chequear
        expect(response.status).toBe(200);
    });
   test('No funciona cuando no debe funcionar?:', async () => {
        const response = await supertest(app).patch('/Users/updateuser').set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDcyZmZkN2MzZjZjZjc3NGE4OGY4MzMiLCJpYXQiOjE2ODUyNTg3MjN9.yr6hs-3TLcgLBRATQ4sdV4JB6RCmOUMr1B6fUfEa-wQ');
        expect(response.status).toBe(401);
    });
});

describe('Se llama a la inhabilitacion de un usuario', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
        const response = await supertest(app).delete('/Users/deleteuser').set('Authorization', token);//no se si esta parte de authorization este bien, hay ue chequear
        expect(response.status).toBe(200);
    });
   test('No funciona cuando no debe funcionar?:', async () => {
    const response = await supertest(app).delete('/Users/deleteuser').set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDcyZmZkN2MzZjZjZjc3NGE4OGY4MzMiLCJpYXQiOjE2ODUyNTg3MjN9.yr6hs-3TLcgLBRATQ4sdV4JB6RCmOUMr1B6fUfEa-wQ');
      expect(response.status).toBe(401);
    });
});
});

// describe('User Controllers ', () => {
//   //Aqui van las pruebas de controladores giuls
//   describe('Se llama a la inhabilitacion de un usuario', ()  =>{
//     test('funciona cuando debe funcionar?:', async () => {
//     });
//    test('No funciona cuando no debe funcionar?:', async () => {
//     });
//   });
// });
