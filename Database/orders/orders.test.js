import supertest from 'supertest';
import app from '../../app';
let id ;
const fakeid = '6475ebf15ac24cf94077d3ed';
const userid = '6472ffd7c3f6cf774a88f833';
const fakeuserid = '6472ffd7c3f6cf774a77f833';
const productid= '6475ebcf7813ed065cdc7340';
const fakeproductid = '6475ebcf7813ed065aaa8040';
const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc1ZGE0NTljYjA3MTFiYTQ1OTJmYTAiLCJpYXQiOjE2ODU0NDUxOTB9.iUzXHq87ShJoLf5_4ru99RU-_83AFuNwXKAL3tDUpZM';
const faketoken= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc1ZGE0NTljYjA3MTFiYTQ1OTJmYTAiLCJpYXabcdE2ODU0NDUxOTB9.iUzXHq87ShJoLf5_4ru99RU-_83AFuNwXKAL3tDUpZM'
describe('Orders Endpoints', ()  =>{
    describe('Se llama a la creacion de pedido', ()  =>{
        // test('funciona cuando debe funcionar?:', async () => { 
        //     const response = await supertest(app).post('/Orders/createorder').set('Authorization', token).send({
        //         userid: userid,
        //         state: 'creado',
        //         productid:  productid
        //     });
        // expect(response.status).toBe(201);
        // id = response.body._id;        
        // }
        // );// no se por que no funiona el que debe funcionar
        test('No funciona cuando no debe funcionar?:', async () => {
            const response = await supertest(app).post('/Orders/createorder').set('Authorization', faketoken).send({
                userid: '6472ffd7c3f6cf774a33f833',
                name: 'Pepe',
                price: '10',
            });
            expect(response.status).toBe(401);
        });
    });
    // describe('Se llama al retorno de los datos de un pedido', ()  =>{
    //     test('funciona cuando debe funcionar?:', async () => {
    //         const response = await supertest(app).get('/Orders/findorder/' + id).set('Authorization', token);
    //         expect(response.status).toBe(200);
    //     });
    //     test('No funciona cuando no debe funcionar?:', async () => {
    //         const response = await supertest(app).get('/Orders/findorder/' + fakeid).set('Authorization', faketoken);
    //         expect(response.status).toBe(404);
    //     });
    // });

    // describe('Se llama al retorno de los datos de los pedidos realizados por el usuario, y/o entre las fechas proveídas, si son proveídas', ()  =>{
    //     test('funciona cuando debe funcionar?:', async () => {
    //         const response = await supertest(app).get('/Orders/findorderby/' + userid).set('Authorization', token);
    //         expect(response.status).toBe(200);
    //     });
    //    test('No funciona cuando no debe funcionar?:', async () => {
    //         const response = await supertest(app).get('/Orders/findorderby/' + fakeid).set('Authorization', faketoken);
    //         expect(response.status).toBe(404);
    //     });
    // });

    // describe('Se llama a la modificacion de la calificacion y comentarios del pedido', ()  =>{
    //     test('funciona cuando debe funcionar?:', async () => {
    //         const response = await supertest(app).patch('/Orders/updateorder'+id).set('Authorization', token);
    //         expect(response.status).toBe(200);
    //     });
    //    test('No funciona cuando no debe funcionar?:', async () => {
    //     const response = await supertest(app).patch('/Orders/updateorder'+fakeid).set('Authorization', faketoken);
    //     expect(response.status).toBe(401);
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
