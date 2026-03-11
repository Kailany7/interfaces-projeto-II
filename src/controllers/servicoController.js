import servicoModel from "../models/servicoModel.js";

// Criar serviço
export const criarServico = async (req, res) => {
    try {
        const servico = await servicoModel.create(req.body);
        res.status(201).json(servico);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Listar todos os serviços
export const listarServicos = async (req, res) => {
    try {
        const servicos = await servicoModel.find();
        res.json(servicos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Buscar serviço por ID
export const buscarServicoPorId = async (req, res) => {
    try {
        const servico = await servicoModel.findById(req.params.id);

        if (!servico) {
            return res.status(404).json({ error: "Serviço não encontrado" });
        }

        res.json(servico);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Atualizar serviço
export const atualizarServico = async (req, res) => {
    try {
        const servico = await servicoModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!servico) {
            return res.status(404).json({ error: "Serviço não encontrado" });
        }

        res.json(servico);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Deletar serviço
export const deletarServico = async (req, res) => {
    try {
        const servico = await servicoModel.findByIdAndDelete(req.params.id);

        if (!servico) {
            return res.status(404).json({ error: "Serviço não encontrado" });
        }

        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};