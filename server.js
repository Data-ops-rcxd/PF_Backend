import app from "./app.js"

//connection port
const port = 3200;
const ipAddress = '0.0.0.0'
//Trying connection

try {
    app.listen(port, ipAddress,() => {
      console.log('Server started in port: ' + port + ' with address: ' + ipAddress);
    });
  } catch (error) {
    console.log(error);
  }