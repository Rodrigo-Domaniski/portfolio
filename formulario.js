function enviarFormulario() {
  // Obtém os dados do formulário
  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;
  const contato = document.querySelector("#contato").value;

  // Envia os dados do formulário para o PHP
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "enviar.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(`nome=${nome}&email=${email}&contato=${contato}`);

  // Exibe uma mensagem de sucesso
  alert("Mensagem enviada com sucesso!");
}

// Adiciona um evento de clique ao botão "Enviar"
document.querySelector("#enviar").addEventListener("click", enviarFormulario);