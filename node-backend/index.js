import  express  from "express";
import PeopleRouter from "./src/routes/routes.controller.js";
import cors from "cors";

const app = express();

//CONFIG
app.use(express.json());
const PORT = process.env.PORT || 3000
app.use(cors());
//ROUTES
app.use("/api",PeopleRouter);

//SERVIDOR
app.listen(3000 ,()=>{
    console.log(`servidor en en puerto ${PORT}`);
})

