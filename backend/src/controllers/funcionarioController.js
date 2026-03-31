import Funcionario from "../models/funcionarioModel.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

// criar funcionário
export const criarFuncionario = async (req, res) => {

    try {

        const { nome, email, senha, especialidade, telefone } = req.body;

        const funcionarioExistente = await Funcionario.findOne({ email });

        if (funcionarioExistente) {
            return res.status(400).json({ mensagem: "Email já cadastrado" });
        }

        const senhaHash = await bcrypt.hash(senha, 10);

        const funcionario = new Funcionario({
            nome,
            email,
            senha: senhaHash,
            especialidade,
            telefone
        });

        await funcionario.save();

        res.status(201).json({
            mensagem: "Funcionário cadastrado com sucesso"
        });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }

};

// listar funcionários
export const listarFuncionarios = async (req, res) => {

    try {

        const funcionarios = await Funcionario.find().select("-senha");

        res.json(funcionarios);

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }

};

// buscar funcionário por id
export const buscarFuncionario = async (req, res) => {

    try {

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                mensagem: "ID inválido"
            });
        }

        const funcionario = await Funcionario.findById(req.params.id).select("-senha");

        if (!funcionario) {
            return res.status(404).json({ mensagem: "Funcionário não encontrado" });
        }

        res.json(funcionario);

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }

};

// atualizar funcionário
export const atualizarFuncionario = async (req, res) => {

    try {

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                mensagem: "ID inválido"
            });
        }

        const funcionario = await Funcionario.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!funcionario) {
            return res.status(404).json({
                mensagem: "Funcionário não encontrado"
            });
        }

        res.json(funcionario);

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }

};

// deletar funcionário
export const deletarFuncionario = async (req, res) => {

    try {

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                mensagem: "ID inválido"
            });
        }

        const funcionario = await Funcionario.findByIdAndDelete(req.params.id);

        if (!funcionario) {
            return res.status(404).json({
                mensagem: "Funcionário não encontrado"
            });
        }

        res.json({
            mensagem: "Funcionário deletado com sucesso"
        });

    } catch (error) {

        res.status(500).json({
            erro: error.message
        });

    }

};

