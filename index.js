function escopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const pessoas = []

    function recebeEvento(evento) {
        evento.preventDefault()                     //necessario para que ao cliar no botão de enviar não see atualize a
        //pagina e sim q ocorra somente o envio dos dados
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({ nome: nome.value, sobrenome: sobrenome.value, peso: peso.value, altura: altura.value })
        console.log(nome.value, sobrenome.value, peso.value, altura.value)
        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} tem ${peso.value} e ${altura.value} </p>`

    }

    form.addEventListener('submit', recebeEvento)
}
escopo()