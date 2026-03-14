import PerfilCliente from "../models/perfilClienteModel.js";

export const criarPerfil = async (req, res) => {
  try {
    const perfil = await PerfilCliente.create(req.body);
    res.status(201).json(perfil);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export const listarPerfis = async (req, res) => {
  try {
    const perfis = await PerfilCliente.find().populate("cliente");
    res.json(perfis);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export const buscarPerfilPorId = async (req, res) => {
  try {
    const perfil = await PerfilCliente
      .findById(req.params.id)
      .populate("cliente");

    if (!perfil) {
      return res.status(404).json({ mensagem: "Perfil não encontrado" });
    }

    res.json(perfil);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export const atualizarPerfil = async (req, res) => {
  try {
    const perfil = await PerfilCliente.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!perfil) {
      return res.status(404).json({ mensagem: "Perfil não encontrado" });
    }

    res.json(perfil);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export const deletarPerfil = async (req, res) => {
  try {
    const perfil = await PerfilCliente.findByIdAndDelete(req.params.id);

    if (!perfil) {
      return res.status(404).json({ mensagem: "Perfil não encontrado" });
    }

    res.json({ mensagem: "Perfil deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};