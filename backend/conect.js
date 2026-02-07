function enviarMensagem() {
  const nome = document.getElementById("nome").value
  const email = document.getElementById("email").value
  const mensagem = document.getElementById("mensagem").value

  if (!nome || !email || !mensagem) {
    alert("Por favor, complete todos os campos para enviar sua mensagem.")
    return
  }

  const conteudo = {
    username: "Novo Contato do Portfólio",
    content: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
  }

  fetch(
    "https://discord.com/api/webhooks/1389309775006924880/MUS0gqV0qGhdyKRBGG7I8W3lvYohub9y8t5Q__690qzMaUiUpU1-lqR_o4GhSB4gjUEc",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(conteudo),
    },
  )
    .then((response) => {
      if (response.ok) {
        alert("Sua mensagem enviada com sucesso!")
        document.getElementById("nome").value = ""
        document.getElementById("email").value = ""
        document.getElementById("mensagem").value = ""
      } else {
        alert("Erro ao enviar sua mensagem. Tente novamente mais tarde.")
      }
    })
    .catch((error) => {
      alert("Erro na requisição: " + error.message)
    })
}
