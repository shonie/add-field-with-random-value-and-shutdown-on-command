const app = require('./app');

const HOST = process.env.PORT || "127.0.0.1";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, HOST, () => {
  console.info(`Http server started on http://${HOST}:${PORT}`);
});

process.on("exit", (code) => {
  console.log(`Server got code ${code}. Closing http server...`);

  server.close(() => {
    console.log("Http server closed.");
  });
});
