import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Funcionario from "../models/funcionarioModel.js";

await mongoose.connect("mongodb://interfaces_db_user:hEMxrGHFbF1QJPAO@ac-sa9tiei-shard-00-00.bz3kv06.mongodb.net:27017,ac-sa9tiei-shard-00-01.bz3kv06.mongodb.net:27017,ac-sa9tiei-shard-00-02.bz3kv06.mongodb.net:27017/nails-designer?ssl=true&replicaSet=atlas-b9mlsa-shard-0&authSource=admin");

const senhaHash = await bcrypt.hash("123321", 10);
await Funcionario.updateOne(
    { email: "admin@gmail.com" },
    { senha: senhaHash }
);
console.log("Senha do admin atualizada para: 123321");
await mongoose.disconnect();
