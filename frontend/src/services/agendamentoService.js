const BASE_URL = 'http://localhost:3000/agendamento'

export async function listarAgendamentos() {
  const res = await fetch(BASE_URL)
  const json = await res.json()
  return json.dados || []
}

export async function criarAgendamento(dados) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });

  const json = await res.json();

  if (!res.ok) {
    console.error('ERRO BACKEND:', json);
    throw new Error(json.mensagem || 'Erro ao criar agendamento');
  }

  return json;
}

export async function atualizarAgendamento(id, dados) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  })
  return res.json()
}

export async function deletarAgendamento(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  })
  return res.json()
}