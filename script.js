function confirmacao()
{
    const prato = document.querySelector(".opcoes-prato").querySelector(".selecionado")
    const bebida = document.querySelector(".opcoes-bebida").querySelector(".selecionado")
    const sobremesa = document.querySelector(".opcoes-sobremesa").querySelector(".selecionado")
    const botao = document.querySelector(".botao")
    if(prato != null && bebida != null && sobremesa != null)
    {
        botao.disabled = false
        botao.classList.add("confirmar")
        botao.querySelector("h2").innerHTML = `Fechar Pedido`
    }
}

function selecionarPrato(elemento)
{
    const parametro = document.querySelector(".opcoes-prato").querySelector(".selecionado")
    const checkPar = document.querySelector(".opcoes-prato").querySelector(".exibir")

    if(parametro != null)
    {
        parametro.classList.toggle("selecionado")
        checkPar.classList.toggle("exibir")
    }

    elemento.classList.toggle("selecionado")
    const checkmark = elemento.querySelector(".icone")
    checkmark.classList.toggle("exibir")
    confirmacao()
}

function selecionarBebida(elemento)
{
    const parametro = document.querySelector(".opcoes-bebida").querySelector(".selecionado")
    const checkPar = document.querySelector(".opcoes-bebida").querySelector(".exibir")
    if(parametro != null)

    {
        parametro.classList.toggle("selecionado")
        checkPar.classList.toggle("exibir")
    }

    elemento.classList.toggle("selecionado")
    const checkmark = elemento.querySelector(".icone")
    checkmark.classList.toggle("exibir")
    confirmacao()
}

function selecionarSobremesa(elemento)
{
    const parametro = document.querySelector(".opcoes-sobremesa").querySelector(".selecionado")
    const checkPar = document.querySelector(".opcoes-sobremesa").querySelector(".exibir")
    if(parametro != null)

    {
        parametro.classList.toggle("selecionado")
        checkPar.classList.toggle("exibir")
    }

    elemento.classList.toggle("selecionado")
    const checkmark = elemento.querySelector(".icone")
    checkmark.classList.toggle("exibir")
    confirmacao()
}

function confirmarPedido()
{
    const nome = prompt("Por favor, insira o seu nome:")
    const endereco = prompt("Por favor, coloque seu endereço de entrega:")
}