let convidados = [];
let confirmados = 0;

function adicionar() {
  const nome = document.getElementById("nome").value;

  if (nome === "") return;

  const convidado = {
    nome: nome,
    confirmado: false
  };

  convidados.push(convidado);
  render();
}

function toggleConfirmar(index) {
  convidados[index].confirmado = !convidados[index].confirmado;
  render();
}

function render() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  confirmados = 0;

  convidados.forEach((c, index) => {
    const li = document.createElement("li");

    if (c.confirmado) {
      confirmados++;
      li.innerHTML = `
        ${c.nome} ✅
        <button onclick="toggleConfirmar(${index})">Desfazer</button>
      `;
    } else {
      li.innerHTML = `
        ${c.nome}
        <button onclick="toggleConfirmar(${index})">Confirmar</button>
      `;
    }

    lista.appendChild(li);
  });

  document.getElementById("contador").innerText = confirmados;
}