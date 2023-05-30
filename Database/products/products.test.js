// import supertest from 'supertest';
// import app from '../../app';
// import token from '../Users/users.test';
// describe('Product Endpoints', ()  =>{
// describe('Se llama a la creacion de producto', ()  =>{
//     test('funciona cuando debe funcionar?:', async () => {
//         const response = await supertest(app).post('/createuser').set('Authorization', 'Bearer ' + token).send({
//             userid: '6472ffd7c3f6cf774a88f833',
//             name: 'Pepe',
//             price: '10',
//           });
//       expect(response.status).toBe(201);
//       id = response.body.id;
// });
    
// test('No funciona cuando no debe funcionar?:', async () => {
//     const response = await supertest(app).post('/createuser').set('Authorization', 'Bearer secreto').send({
//         userid: '6472ffd7c3f6cf774a88f833',
//         name: 'Pepe',
//         price: '10',
//       });
//       expect(response.status).toBe(401);    
// });
//  }
// );

// describe('Se llama al retorno de los datos de un producto', ()  =>{
//     test('funciona cuando debe funcionar?:', async () => {
//         const response = await supertest(app).get('/finduser/:' + "22");//creo que tocara poner un id que ya existe desde antes en la base de datos
//         expect(response.status).toBe(200);
//     });
//    test('No funciona cuando no debe funcionar?:', async () => {
//     const response = await supertest(app).get('/ProductbyID/:' + "");//creo que tocara poner un id que ya existe desde antes en la base de datos
//     expect(response.status).toBe(401);
//     });
// });

// describe('Se llama al retorno de los datos de un producto que correspondan a usuario, texto y/o categoria dada', ()  =>{
//     test('funciona cuando debe funcionar?:', async () => {
//         const response = await supertest(app).get('/ProductbyID/:' + ""+'/:'+""+'/:'+"");
//         expect(response.status).toBe(200);
//     });
//    test('No funciona cuando no debe funcionar?:', async () => {
//     const response = await supertest(app).get('/ProductbyID/:' + "");
//     expect(response.status).toBe(200);
//     });
// });

// describe('Se llama al retorno de las categorias de los productos que correspondan a un usuario dado', ()  =>{
//     test('funciona cuando debe funcionar?:', async () => {
//     });
//    test('No funciona cuando no debe funcionar?:', async () => {
//     });
// });

// describe('Se llama a la modificacion de los datos de un producto', ()  =>{
//     test('funciona cuando debe funcionar?:', async () => {
//     });
//    test('No funciona cuando no debe funcionar?:', async () => {
//     });
// });

// describe('Se llama a la inhabilitacion de un producto', ()  =>{
//     test('funciona cuando debe funcionar?:', async () => {
//     });
//    test('No funciona cuando no debe funcionar?:', async () => {
//     });
// });
// });

// describe('Product Controllers ', () => {
//     //Aqui van las pruebas de controladores giuls
//     describe('Se llama a la inhabilitacion de un usuario', ()  =>{
//       test('funciona cuando debe funcionar?:', async () => {
//       });
//      test('No funciona cuando no debe funcionar?:', async () => {
//       });
//   }); 
// })

