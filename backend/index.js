import express from "express";
import cors from "cors";

import DashboardRoute from "./routes/DashboardRoute";

// dotenv.config();
const port = 5000;
const app = express();

// app.use(cors({ credentials: true, origin: 'http://localhost:5000' }));
app.use(cors());
app.use(express.json());

app.use(DashboardRoute);
app.use(express.static("public"));

// (async () => {
//   await db.sequelize.sync();
// })();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.listen(5000, () => console.log('Server Running Up ....'));
