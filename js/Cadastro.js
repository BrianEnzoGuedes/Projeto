document.getElementById('cep').addEventListener('blur', buscarCEP);

async function buscarCEP() {
  const cep = document.getElementById('cep').value.replace(/\D/g, '');

  if (cep.length !== 8) {
    alert('CEP inválido. Digite 8 números.');
    return;
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      alert('CEP não encontrado!');
      return;
    }

    document.getElementById('rua').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.localidade;
    document.getElementById('estado').value = data.uf;

  } catch (error) {
    alert('Erro ao buscar CEP.');
    console.error(error);
  }
}
