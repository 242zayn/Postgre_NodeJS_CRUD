import app from "./src/app";

const startServer = () => {
  const prot = process.env.PORT || 4000;

  app.listen(prot, () => {
    console.log(`Server is running on port ${prot}`);
  });
};

startServer();
