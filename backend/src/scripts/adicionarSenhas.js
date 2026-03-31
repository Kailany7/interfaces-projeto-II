import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { env } from "../config/env.js";
import Funcionario from "../models/funcionarioModel.js";

await mongoose.connect(env.MONGO_URI);

const senhaHash = await bcrypt.hash("123456", 10);
await Funcionario.updateMany({}, { senha: senhaHash });

console.log("Senhas adicionadas com sucesso!");
await mongoose.disconnect();
