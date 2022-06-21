function PostRelatos(url, body) {
  let request = new XMLHttpRequest()
  request.open("POST", url, true)
  request.setRequestHeader("Content-type", "application/json", "Access-Control-Allow-Origin", "*")
  request.send(JSON.stringify(body))

  request.onload = function() {
    console.log(this.responseText)
  }

  return request.responseText
}

function ColetaValues() {
  event.preventDefault()
  const url = "http://127.0.0.1:8000/relatos"
  let NomeValue = document.getElementById('NomeImput').value
  let TamanhoValue = document.getElementById('TamanhoImput').value
  let RelatoValue = document.getElementById('RelatoImput').value

  body = {
    "nome": NomeValue,

    "tamanho": TamanhoValue,

    "relato": RelatoValue
  }

  PostRelatos(url, body)
}