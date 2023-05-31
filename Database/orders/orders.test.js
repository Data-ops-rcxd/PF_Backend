import supertest from "supertest";
import app from "../../app";

let id;
const productid = "6475ebcf7813ed065cdc7340";
const fakeproductid = "6475ebcf7813ed065aaa8040";
const fakeid = "6475ebf15ac24cf94077d3ed";
const userid = "6475da459cb0711ba4592fa0";
const fakeuserid = "6472ffd7c3f6cf774a77f833";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc1ZGE0NTljYjA3MTFiYTQ1OTJmYTAiLCJpYXQiOjE2ODU0NDUxOTB9.iUzXHq87ShJoLf5_4ru99RU-_83AFuNwXKAL3tDUpZM";
const faketoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc1ZGE0NTljYjA3MTFiYTQ1OTJmYTAiLCJpYXabcdE2ODU0NDUxOTB9.iUzXHq87ShJoLf5_4ru99RU-_83AFuNwXKAL3tDUpZM";
describe("Orders Endpoints", () => {
  describe("Se llama a la creacion de pedido", () => {
    test("funciona cuando debe funcionar?:", async () => {
      const response = await supertest(app)
        .post("/Orders/createorder")
        .set("Authorization", token)
        .send({
          userid: userid,
          state: "creado",
          productID: productid,
        });
      expect(response.status).toBe(201);
      id = response.body._id;
    }); // no se por que no funiona el que debe funcionar
    test("No funciona cuando no debe funcionar?:", async () => {
      const response = await supertest(app)
        .post("/Orders/createorder")
        .set("Authorization", faketoken)
        .send({
          userid: "6472ffd7c3f6cf774a33f833",
          name: "Pepe",
          price: "10",
        });
      expect(response.status).toBe(401);
    });
  });
  describe("Se llama al retorno de los datos de un pedido", () => {
    test("funciona cuando debe funcionar?:", async () => {
      const response = await supertest(app)
        .get("/Orders/findorder/" + id)
        .set("Authorization", token);
      expect(response.status).toBe(200);
    });
    test("No funciona cuando no debe funcionar?:", async () => {
      const response = await supertest(app)
        .get("/Orders/findorder/" + fakeid)
        .set("Authorization", faketoken);
      expect(response.status).toBe(401);
    });
  });

  describe("Se llama al retorno de los datos de los pedidos realizados por el usuario, y/o entre las fechas proveídas, si son proveídas", () => {
    test("funciona cuando debe funcionar?:", async () => {
      const response = await supertest(app)
        .get(
          "/Orders/findorderby/?user_id" +
            id +
            "initial_date=2023-01-01&final_date=2024-01-01"
        )
        .set("Authorization", token);
      expect(response.status).toBe(200);
    });
    test("No funciona cuando no debe funcionar?:", async () => {
      const response = await supertest(app)
        .get("/Orders/findorderby/?user_id=" + fakeid)
        .set("Authorization", faketoken);
      expect(response.status).toBe(401);
    });
  });

  describe("Se llama a la modificacion de la calificacion y comentarios del pedido", () => {
    test("funciona cuando debe funcionar?:", async () => {
      const response = await supertest(app)
        .patch("/Orders/updateorder/" + id)
        .set("Authorization", token);
      expect(response.status).toBe(200);
    });
    test("No funciona cuando no debe funcionar?:", async () => {
      const response = await supertest(app)
        .patch("/Orders/updateorder/" + fakeid)
        .set("Authorization", faketoken);
      expect(response.status).toBe(401);
    });
  });
});

//Order Controllers Test
describe("Order Controllers ", () => {
  //POST / Create
  describe("Se llama a la creacion de una orden", () => {
    test("Crear orden", async () => {
      const test_id = "6476b484aca44e6e203492eb";
      const test_body = {
        state: "creado",
        productID: test_id,
        comments: "Esto es un comentario de un producto.",
        rating: 4,
        totalprice: 4,
      };

      const { _body: body } = await supertest(app)
        .post("/Orders/createorder")
        .send(test_body)
        .set("Authorization", token);

      expect(body).toBeDefined();
      expect(body).toStrictEqual(
        expect.objectContaining({
          isDisable: false,
          state: test_body.state,
          productID: test_body.productID,
          comments: test_body.comments,
          rating: test_body.rating,
          totalprice: test_body.totalprice,
        })
      );
    });
  });

  //GET / Read
  //ID
  describe("Se llama a la busqueda por id de la orden", () => {
    test("Buscar por id de la orden", async () => {
      const test_id = "6476f1e6def90ce2a39f317c";

      const { _body: body } = await supertest(app)
        .get("/Orders/findorder/" + test_id)
        .set("Authorization", token);
      console.log(body);
      expect(body).toBeDefined();
      expect(body).toStrictEqual(
        expect.objectContaining({
          _id: test_id,
        })
      );
    });
  });

  //Usuario, descripción y categoría
  describe("Se llama a la busqueda por usuario, y fechas", () => {
    test("Buscar por usuario y fechas", async () => {
      const test_body = {
        initial_date: "2023-05-31",
        final_date: "2023-05-31",
      };

      const response = await supertest(app)
        .get(
          "/Orders/findorderby/?initial_date" +
            test_body.initial_date +
            "&final_date=" +
            test_body.final_date
        )
        .set("Authorization", token);

      response.body.forEach((product) => {
        expect(product).toBeDefined();
        expect(product).toStrictEqual(
          expect.objectContaining({
            userid: "6475da459cb0711ba4592fa0",
          })
        );
      });
    });
  });

  //PATCH / Update
  describe("Se llama al update de order", () => {
    test("Actualizar orden", async () => {
      const test_id = "6476f39b2986b56451463cd1";
      const test_body = {
        state: "en direccion",
        comments:
          "El olor al plastico en forma de juguete es ciertamente fascinante",
        rating: 10000000000000,
        totalprice: -1,
      };

      const response = await supertest(app)
        .patch("/Orders/updateorder/" + test_id)
        .send(test_body)
        .set("Authorization", token);
      expect(response.body).toBe("Changes applied");
    });
  });
});
