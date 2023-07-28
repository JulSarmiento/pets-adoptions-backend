import "dotenv/config";
import { connect } from 'mongoose';

import app from "./src/app.js";

const PORT = process.env.PORT_TO_USE || 3001;

const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.94wxqpb.mongodb.net/${process.env.MONGO_db}?retryWrites=true&w=majority`;

const start = async () => {
  try {
    await connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();


