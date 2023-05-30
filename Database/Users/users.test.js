import supertest from 'supertest';
import app from '../../app.js';

describe('User Endpoints ', () => {

describe('Se llama a la creacion de usuario', ()  =>{
    test('funciona cuando debe funcionar?:', async () => {
            const response = await supertest(app).post('/Users/createuser').send({
            name: 'Pedro',
            password: 'aa123',
            email: 'a@d.com',
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

// describe('Se llama a la creacion de JWT', ()  =>{
//     test('funciona cuando debe funcionar?:', async () => {
//         const response = await supertest(app).get('/finduserJWT').send({
//             email: 'a@a.com',
//             password: '123',
//           });
//           expect(response.status).toBe(200);
//           token = response.status.json;
//     });
//    test('No funciona cuando no debe funcionar?:', async () => {
//         const response = await supertest(app).get('/finduserJWT').send({
//         email: '1@1',
//         password: '123456',
//       });
//       expect(response.status).toBe(404);
//     });
// });

// describe('Se llama al retorno de los datos de un usuario', ()  =>{
//     test('funciona cuando debe funcionar?:', async () => {
//         const response = await supertest(app).get('/finduser/:' + "6472ffd7c3f6cf774a88f833");//creo que tocara poner un id que ya existe desde antes en la base de datos
//         expect(response.status).toBe(200);
//     });
//    test('No funciona cuando no debe funcionar?:', async () => {
//         const response = await supertest(app).get('/finduser/:' + "0");
//       expect(response.status).toBe(404);
//     });
// });

// describe('Se llama a la modificacion de los datos de un usuario', ()  =>{
//     test('funciona cuando debe funcionar?:', async () => {
//         const response = await supertest(app).patch('/updateuser').set('Authorization', 'Bearer ' + token);//no se si esta parte de authorization este bien, hay ue chequear
//         expect(response.status).toBe(200);
//     });
//    test('No funciona cuando no debe funcionar?:', async () => {
//         const response = await supertest(app).patch('/updateuser').set('Authorization', 'Bearer secreto');
//       expect(response.status).toBe(401);
//     });
// });

// describe('Se llama a la inhabilitacion de un usuario', ()  =>{
//     test('funciona cuando debe funcionar?:', async () => {
//         const response = await supertest(app).patch('/deleteuser').set('Authorization', 'Bearer ' + token);//no se si esta parte de authorization este bien, hay ue chequear
//         expect(response.status).toBe(200);
//     });
//    test('No funciona cuando no debe funcionar?:', async () => {
//     const response = await supertest(app).patch('/deleteuser').set('Authorization', 'Bearer secreto');
//       expect(response.status).toBe(401);
//     });
// }); 

// });

// describe('User Controllers ', () => {
//   //Aqui van las pruebas de controladores giuls
//   describe('Se llama a la inhabilitacion de un usuario', ()  =>{
//     test('funciona cuando debe funcionar?:', async () => {
//     });
//    test('No funciona cuando no debe funcionar?:', async () => {
//     });
}); 
})
