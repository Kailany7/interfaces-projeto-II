import mongoose from "mongoose";

const perfilClienteSchema = new mongoose.Schema(
    {
        cliente: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cliente",
            required: true,
            unique: true
        },

    foto: {
            type: String
        },

        endereco: {
            type: String
        },

        dataNascimento: {
            type: Date
        },

        observacoes: {
            type: String
        }
    },
    { timestamps: true }
);

export default mongoose.model("PerfilCliente", perfilClienteSchema);