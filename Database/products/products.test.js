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
  }); //tengo que preguntar a tache

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

describe("User Controllers ", () => {
  let tk = "";
  //POST / Create
  describe("Se llama a la creacion de usuario", () => {
    test("Crear usuario", async () => {
      const test_body = {
        name: "Oscar",
        password: "moon",
        email: "mrknight@gmail.com",
      };

      const { _body: body } = await supertest(app)
        .post("/Users/createuser")
        .send(test_body);

      expect(body).toBeDefined();
      expect(body).toStrictEqual(
        expect.objectContaining({
          email: test_body.email,
          isDisable: false,
          name: test_body.name,
          password: test_body.password,
        })
      );
    });
  });

  //GET / Read
  //ID
  describe("Se llama a la busqueda por id", () => {
    test("Buscar por id", async () => {
      const test_id = "6472ffd7c3f6cf774a88f833";

      const { _body: body } = await supertest(app).get(
        "/Users/finduser/" + test_id
      );

      expect(body).toBeDefined();
      expect(body).toStrictEqual(
        expect.objectContaining({
          _id: test_id,
        })
      );
    });
  });
  //Mail + Password
  describe("Se llama a la busqueda por email y clave", () => {
    test("Buscar por email y clave", async () => {
      const test_body = {
        email: "papulin@yahoo.es",
        password: "42069",
      };

      const { _body: body } = await supertest(app)
        .get("/Users/finduserJWT")
        .send(test_body);

      tk = body.token;

      expect(body).toBeDefined();
      expect(body).toStrictEqual(
        expect.objectContaining({
          token: tk,
        })
      );
    });
  });

  //PATCH / Update
  describe("Se llama al update de usuario", () => {
    test("Actualizar usuario", async () => {
      const test_token = tk;
      const test_body = {
        name: "Marcos",
        password: "khonsu",
        email: "espectro@yahoo.es",
      };

      const response = await supertest(app)
        .patch("/Users/updateuser")
        .send(test_body)
        .set("Authorization", test_token);

      expect(response.body).toBe("changes applied");
    });
  });

  //DELETE / Delete
  describe("Se llama al delete de usuario", () => {
    test("Borrar usuario", async () => {
      const test_token = tk;

      const response = await supertest(app)
        .delete("/Users/deleteuser")
        .set("Authorization", test_token);

      expect(response.body).toBe("changes applied");
    });
  });
});
