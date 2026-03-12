import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { env } from "../config/env.js";
import Funcionario from "../models/funcionarioModel.js";
import Cliente from "../models/clienteModel.js";

await mongoose.connect(env.MONGO_URI);
console.log("MongoDB conectado");

await Funcionario.deleteMany();
await Cliente.deleteMany();

const senhaHash = await bcrypt.hash("123456", 10);

await Funcionario.create([
  {
    nome: "Ana",
    especialidade: "Unha em gel",
    telefone: "83977777777",
    email: "ana@gmail.com",
    senha: senhaHash,
  },
  {
    nome: "Juliana",
    especialidade: "Nail Art",
    telefone: "83966666666",
    email: "juliana@gmail.com",
    senha: senhaHash,
  },
]);

await Cliente.create([
  {
    nome: "Pedro Lira",
    telefone: "83999999999",
    email: "pedro@email.com",
  },
  {
    nome: "Maria Silva",
    telefone: "83988888888",
    email: "maria@email.com",
  },
]);

console.log("Funcionários e clientes criados com sucesso!");
await mongoose.disconnect();
