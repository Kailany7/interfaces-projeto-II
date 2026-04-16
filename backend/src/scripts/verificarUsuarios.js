import mongoose from "mongoose";
import Funcionario from "../models/funcionarioModel.js";

await mongoose.connect("mongodb://interfaces_db_user:hEMxrGHFbF1QJPAO@ac-sa9tiei-shard-00-00.bz3kv06.mongodb.net:27017,ac-sa9tiei-shard-00-01.bz3kv06.mongodb.net:27017,ac-sa9tiei-shard-00-02.bz3kv06.mongodb.net:27017/nails-designer?ssl=true&replicaSet=atlas-b9mlsa-shard-0&authSource=admin");

const funcionarios = await Funcionario.find({});
console.log("Funcionários no banco:", JSON.stringify(funcionarios, null, 2));
await mongoose.disconnect();
