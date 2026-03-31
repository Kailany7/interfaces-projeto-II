import Cliente from "../models/clienteModel.js";

export const listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).json(clientes);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao listar clientes", erro: error.message });
  }
};

export const buscarClientePorId = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ mensagem: "Cliente não encontrado" });
    }
    res.status(200).json(cliente);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao buscar cliente", erro: error.message });
  }
};

export const atualizarCliente = async (req, res) => {
  try {
    const { nome, telefone, email } = req.body;
    const clienteAtualizado = await Cliente.findByIdAndUpdate(
      req.params.id,
      { nome, telefone, email },
      { new: true, runValidators: true },
    );
    if (!clienteAtualizado) {
      return res.status(404).json({ mensagem: "Cliente não encontrado" });
    }
    res.status(200).json({
      mensagem: "Cliente atualizado com sucesso",
      cliente: clienteAtualizado,
    });
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao atualizar cliente", erro: error.message });
  }
};

export const deletarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);
    if (!cliente) {
      return res.status(404).json({ mensagem: "Cliente não encontrado" });
    }
    res.status(200).json({ mensagem: "Cliente deletado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao deletar cliente", erro: error.message });
  }
};

export const buscarClientePorNome = async (req, res) => {
  try {
    const { nome } = req.query;
    const clientes = await Cliente.find({
      nome: { $regex: nome, $options: "i" },
    });
    res.status(200).json(clientes);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao buscar clientes", erro: error.message });
  }
};

export const criarCliente = async (req, res) => {
  try {
    const { nome, telefone, email } = req.body;
    const novoCliente = await Cliente.create({ nome, telefone, email });
    res
      .status(201)
      .json({ mensagem: "Cliente criado com sucesso", cliente: novoCliente });
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao criar cliente", erro: error.message });
  }
};
