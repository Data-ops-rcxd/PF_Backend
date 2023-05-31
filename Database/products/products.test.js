import supertest from "supertest";
import app from "../../app";

let id;
const fakeid = "6475ebf15ac24cf94077d3ed";
const userid = "6475da459cb0711ba4592fa0";
const fakeuserid = "6472ffd7c3f6cf774a77f833";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc1ZGE0NTljYjA3MTFiYTQ1OTJmYTAiLCJpYXQiOjE2ODU0NDUxOTB9.iUzXHq87ShJoLf5_4ru99RU-_83AFuNwXKAL3tDUpZM";
const faketoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc1ZGE0NTljYjA3MTFiYTQ1OTJmYTAiLCJpYXabcdE2ODU0NDUxOTB9.iUzXHq87ShJoLf5_4ru99RU-_83AFuNwXKAL3tDUpZM";

describe("Product Endpoints", () => {
  describe("Se llama a la creacion de producto", () => {
    test("funciona cuando debe funcionar?:", async () => {
      const response = await supertest(app)
        .post("/Products/createproduct")
        .set("Authorization", token)
        .send({
          userid: userid,
          categories: ["dios", "leyenda"],
          name: "Pepe",
          description: "el unico he inigualable",
          price: "10",
        });
      expect(response.status).toBe(201);
      id = response.body._id;
    });

    test("No funciona cuando no debe funcionar?:", async () => {
      const response = await supertest(app)
        .post("/Products/createproduct")
        .set("Authorization", faketoken)
        .send({
          userid: "6472ffd7c3f6cf774a33f833",
          name: "Pepe",
          price: "10",
        });
      expect(response.status).toBe(401);
    });
  });

  describe("Se llama al retorno de los datos de un producto", () => {
    test("funciona cuando debe funcionar?:", async () => {
      const response = await supertest(app).get("/Products/ProductbyID/" + id); //creo que tocara poner un id que ya existe desde antes en la base de datos
      expect(response.status).toBe(200);
    });
    test("No funciona cuando no debe funcionar?:", async () => {
      const response = await supertest(app).get(
        "/Products/ProductbyID/" + fakeid
      ); //creo que tocara poner un id que ya existe desde antes en la base de datos
      expect(response.status).toBe(404);
    });
  });

  describe("Se llama al retorno de los datos de un producto que correspondan a usuario, texto y/o categoria dada", () => {
    test("funciona con id?:", async () => {
      const response = await supertest(app).get(
        "/Products/searchproducts/?userid=" + userid
      );
      expect(response.status).toBe(200);
    });
    test("No funciona cuando no debe funcionar?:", async () => {
      const response = await supertest(app).get(
        "/Products/searchproducts/?userid=" + fakeid
      );
      expect(response.status).toBe(404);
    });
  });

  describe("Se llama al retorno de las categorias de los productos que correspondan a un usuario dado", () => {
    test("funciona cuando debe funcionar?:", async () => {
      const response = await supertest(app).get(
        "/Products/categoriesbyuser/" + userid
      );
      expect(response.status).toBe(200);
    });
    test("No funciona cuando no debe funcionar?:", async () => {
      const response = await supertest(app).get(
        "/Products/categoriesbyuser/" + fakeuserid
      );
      expect(response.status).toBe(404);
    });
  });

  describe("Se llama a la modificacion de los datos de un producto", () => {
    test("funciona cuando debe funcionar?:", async () => {
      const response = await supertest(app)
        .patch("/Products/" + id)
        .set("Authorization", token);
      expect(response.status).toBe(200);
    });
    test("No funciona cuando no debe funcionar?:", async () => {
      const response = await supertest(app)
        .patch("/Products/" + fakeid)
        .set("Authorization", faketoken);
      expect(response.status).toBe(401);
    });
  });

  describe("Se llama a la inhabilitacion de un producto", () => {
    test("funciona cuando debe funcionar?:", async () => {
      const response = await supertest(app)
        .delete("/Products/" + id)
        .set("Authorization", token);
    });
    test("No funciona cuando no debe funcionar?:", async () => {
      const response = await supertest(app)
        .delete("/Products/" + fakeid)
        .set("Authorization", faketoken);
      expect(response.status).toBe(401);
    });
  });
});

//Product Controllers Test
describe("Product Controllers ", () => {
  //POST / Create
  describe("Se llama a la creacion de producto", () => {
    test("Crear producto", async () => {
      const test_body = {
        categories: ["Games", "Collectibles"],
        name: "Rocket League Mini Figure",
        price: 20,
      };

      const { _body: body } = await supertest(app)
        .post("/Products/createproduct")
        .send(test_body)
        .set("Authorization", token);

      expect(body).toBeDefined();
      expect(body).toStrictEqual(
        expect.objectContaining({
          isDisable: false,
          categories: test_body.categories,
          name: test_body.name,
          price: test_body.price,
        })
      );
    });
  });

  //GET / Read
  //ID
  describe("Se llama a la busqueda por id del producto", () => {
    test("Buscar por id del producto", async () => {
      const test_id = "6476b484aca44e6e203492eb";

      const { _body: body } = await supertest(app).get(
        "/Products/ProductbyID/" + test_id
      );

      expect(body).toBeDefined();
      expect(body).toStrictEqual(
        expect.objectContaining({
          _id: test_id,
        })
      );
    });
  });
  //Usuario, descripción y categoría
  describe("Se llama a la busqueda por usuario, descripción y categoría", () => {
    test("Buscar por usuario, descripción y categoría", async () => {
      const test_body = {
        categoria: ["leyenda"],
        nom: "Pepe",
        userid: "6475da459cb0711ba4592fa0",
      };

      const response = await supertest(app).get(
        "/Products/searchproducts/?userid=" +
          test_body.userid +
          "&categoria=" +
          test_body.categoria +
          "&nom=" +
          test_body.nom
      );

      response.body.forEach((product) => {
        expect(product).toBeDefined();
        expect(product).toStrictEqual(
          expect.objectContaining({
            categories: expect.arrayContaining(test_body.categoria),
            name: test_body.nom,
            userid: test_body.userid,
          })
        );
      });
    });
  });
  //Categoria por User ID
  describe("Se llama a la busqueda de categorías por UserID", () => {
    test("Buscar categorías por UserID", async () => {
      const test_id = "6475da459cb0711ba4592fa0";

      const response = await supertest(app).get(
        "/Products/categoriesbyuser/" + test_id
      );

      expect(response.body).toBeDefined();
      expect(response.body).toStrictEqual(
        expect.arrayContaining([expect.any(String)])
      );
    });
  });

  //PATCH / Update
  describe("Se llama al update del producto", () => {
    test("Actualizar producto", async () => {
      const test_id = "647699f05115f22c49972658";
      const test_body = {
        name: "El producto que no cuesta 2000",
        price: 3000,
      };

      const response = await supertest(app)
        .patch("/Products/updateproduct/" + test_id)
        .send(test_body)
        .set("Authorization", token);
      expect(response.body).toBe("Changes applied");
    });
  });

  //DELETE / Delete
  describe("Se llama al delete del producto", () => {
    test("Borrar producto", async () => {
      const test_id = "64769ad7fa9efbb16705ad3f";

      const response = await supertest(app)
        .delete("/Products/deleteproduct/" + test_id)
        .set("Authorization", token);

      expect(response.body).toBe("Changes applied");
    });
  });
});
