import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { env } from "../config/env.js";
import Funcionario from "../models/funcionarioModel.js";

async function criarAdmin() {
    try {
        await mongoose.connect(env.MONGO_URI);
        console.log("MongoDB conectado");

        const senhaHash = await bcrypt.hash("123321", 10);
        
        const admin = await Funcionario.findOneAndUpdate(
            { email: "admin@gmail.com" },
            {
                nome: "Administrador",
                email: "admin@gmail.com",
                senha: senhaHash,
                role: "admin"
            },
            { upsert: true, new: true }
        );

        console.log("Admin criado/atualizado:", admin);
        await mongoose.disconnect();
        console.log("Finalizado!");
    } catch (error) {
        console.error(error);
    }
}

criarAdmin();
