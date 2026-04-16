import mongoose from "mongoose";
import Funcionario from "../models/funcionarioModel.js";

await mongoose.connect("mongodb://localhost:27017/nomedobanco");
await Funcionario.deleteOne({ email: "admin@gmail.com" });
console.log("Admin deletado");
await mongoose.disconnect();
