import "dotenv/config";
import app from "./src/app.js";

const PORT = process.env.PORT_TO_USE || 3001;

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();