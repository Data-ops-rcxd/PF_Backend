/*import supertest from 'supertest';
import app from '../../app';
let id ;
const fakeid = '6475ebf15ac24cf94077d3ed';
const userid = '6472ffd7c3f6cf774a88f833';
const fakeuserid = '6472ffd7c3f6cf774a77f833';
const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc1ZGE0NTljYjA3MTFiYTQ1OTJmYTAiLCJpYXQiOjE2ODU0NDUxOTB9.iUzXHq87ShJoLf5_4ru99RU-_83AFuNwXKAL3tDUpZM';
const faketoken= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc1ZGE0NTljYjA3MTFiYTQ1OTJmYTAiLCJpYXabcdE2ODU0NDUxOTB9.iUzXHq87ShJoLf5_4ru99RU-_83AFuNwXKAL3tDUpZM'
describe('Product Endpoints', ()  =>{
    describe('Se llama a la creacion de producto', ()  =>{
        test('funciona cuando debe funcionar?:', async () => {
            const response = await supertest(app).post('/Products/createproduct').set('Authorization', token).send({
                userid: userid,
                categories: ['dios', 'leyenda'],
                name: 'Pepe',
                description: "el unico he inigualable",
                price: '10',
            });
        expect(response.status).toBe(201);
        id = response.body._id;
    });
        
    test('No funciona cuando no debe funcionar?:', async () => {
        const response = await supertest(app).post('/Products/createproduct').set('Authorization', faketoken).send({
            userid: '6472ffd7c3f6cf774a33f833',
            name: 'Pepe',
            price: '10',
        });
        expect(response.status).toBe(401);    
    });
    }
    );

    describe('Se llama al retorno de los datos de un producto', ()  =>{
        test('funciona cuando debe funcionar?:', async () => {
            const response = await supertest(app).get('/Products/ProductbyID/' + id);//creo que tocara poner un id que ya existe desde antes en la base de datos
            expect(response.status).toBe(200);
        });
       test('No funciona cuando no debe funcionar?:', async () => {
        const response = await supertest(app).get('/Products/ProductbyID/' + fakeid);//creo que tocara poner un id que ya existe desde antes en la base de datos
        expect(response.status).toBe(404);
        });
    });

    // describe('Se llama al retorno de los datos de un producto que correspondan a usuario, texto y/o categoria dada', ()  =>{
    //     test('funciona con id?:', async () => {
    //         const response = await supertest(app).get('/Products/searchproducts/' + userid+'/'+'/');
    //         expect(response.status).toBe(200);
    //     });
    //    test('No funciona cuando no debe funcionar?:', async () => {
    //     const response = await supertest(app).get('/Products/searchproducts/');
    //     expect(response.status).toBe(404);
    //     });
    // }); //tengo que preguntar a tache

    // describe('Se llama al retorno de las categorias de los productos que correspondan a un usuario dado', ()  =>{
    //     test('funciona cuando debe funcionar?:', async () => {
    //         const response = await supertest(app).get('/Products/categoriesbyuser/' + userid);//creo que tocara poner un id que ya existe desde antes en la base de datos
    //         expect(response.status).toBe(200);
    //     });
    //    test('No funciona cuando no debe funcionar?:', async () => {
    //     const response = await supertest(app).get('/Products/categoriesbyuser/' + fakeuserid);//creo que tocara poner un id que ya existe desde antes en la base de datos
    //     expect(response.status).toBe(404);// creo que se debe poner en el enpoint el un try catch para cuando no se encuentre el user
    //     });
    // });

    // describe('Se llama a la modificacion de los datos de un producto', ()  =>{
    //     test('funciona cuando debe funcionar?:', async () => {
    //         const response = await supertest(app).patch('/Products'+id).set('Authorization', token);//no se si esta parte de authorization este bien, hay ue chequear
    //         expect(response.status).toBe(200);
    //     });
    //    test('No funciona cuando no debe funcionar?:', async () => {
    //     const response = await supertest(app).patch('/Products/'+fakeid).set('Authorization', faketoken);//no se si esta parte de authorization este bien, hay ue chequear
    //         expect(response.status).toBe(401);
    //     });
    // });

    describe('Se llama a la inhabilitacion de un producto', ()  =>{
        test('funciona cuando debe funcionar?:', async () => {
            const response = await supertest(app).delete('/Products/'+id).set('Authorization', token);//no se si esta parte de authorization este bien, hay ue chequear
        expect(response.status).toBe(200);
        });
       test('No funciona cuando no debe funcionar?:', async () => {
        const response = await supertest(app).delete('/Products/'+fakeid).set('Authorization', faketoken);//no se si esta parte de authorization este bien, hay ue chequear
        expect(response.status).toBe(500);
        });
    });
});

    // describe('Product Controllers ', () => {
    //     //Aqui van las pruebas de controladores giuls
    //     describe('Se llama a la inhabilitacion de un usuario', ()  =>{
    //       test('funciona cuando debe funcionar?:', async () => {
    //       });
    //      test('No funciona cuando no debe funcionar?:', async () => {
    //       });
    //   }); 
*/

