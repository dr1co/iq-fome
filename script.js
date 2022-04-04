let prato, precoPrato, stringPrato
let bebida, precoBebida, stringBebida
let sobremesa, precoSobremesa, stringSobremesa
let precoTotal

function selecionarPrato(elemento)
{
    const checkPar = document.querySelector(".opcoes-prato").querySelector(".exibir")

    if(prato != null)
    {
        prato.classList.toggle("selecionado")
        checkPar.classList.toggle("exibir")
    }

    elemento.classList.toggle("selecionado")
    const checkmark = elemento.querySelector(".icone")
    checkmark.classList.toggle("exibir")
    prato = document.querySelector(".opcoes-prato").querySelector(".selecionado")
    stringPrato = prato.querySelector("h3").innerHTML
    precoPrato = prato.querySelector("h2").innerHTML
    confirmacao()
}

function selecionarBebida(elemento)
{
    const checkPar = document.querySelector(".opcoes-bebida").querySelector(".exibir")
    
    if(bebida != null)
    {
        bebida.classList.toggle("selecionado")
        checkPar.classList.toggle("exibir")
    }

    elemento.classList.toggle("selecionado")
    const checkmark = elemento.querySelector(".icone")
    checkmark.classList.toggle("exibir")
    bebida = document.querySelector(".opcoes-bebida").querySelector(".selecionado")
    stringBebida = bebida.querySelector("h3").innerHTML
    precoBebida = bebida.querySelector("h2").innerHTML
    confirmacao()
}

function selecionarSobremesa(elemento)
{
    const checkPar = document.querySelector(".opcoes-sobremesa").querySelector(".exibir")
    if(sobremesa != null)

    {
        sobremesa.classList.toggle("selecionado")
        checkPar.classList.toggle("exibir")
    }

    elemento.classList.toggle("selecionado")
    const checkmark = elemento.querySelector(".icone")
    checkmark.classList.toggle("exibir")
    sobremesa = document.querySelector(".opcoes-sobremesa").querySelector(".selecionado")
    stringSobremesa = sobremesa.querySelector("h3").innerHTML
    precoSobremesa = sobremesa.querySelector("h2").innerHTML
    confirmacao()
}

function confirmacao()
{
    const botaoFecharPedido = document.querySelector(".botao-fecha-pedido")
    if(prato != null && bebida != null && sobremesa != null)
    {
        botaoFecharPedido.disabled = false
        botaoFecharPedido.classList.add("confirmar")
        botaoFecharPedido.querySelector("h2").innerHTML = `Fechar Pedido`
    }
}

function fecharPedido()
{
    document.querySelector(".pedido-prato").innerHTML = `${stringPrato}`
    document.querySelector(".preco-prato").innerHTML = `${precoPrato}`
    document.querySelector(".pedido-bebida").innerHTML = `${stringBebida}`
    document.querySelector(".preco-bebida").innerHTML = `${precoBebida}`
    document.querySelector(".pedido-sobremesa").innerHTML = `${stringSobremesa}`
    document.querySelector(".preco-sobremesa").innerHTML = `${precoSobremesa}`
    precoTotal = Number(precoPrato.replace("R$ ", "").replace(",", ".")) + Number(precoBebida.replace("R$ ", "").replace(",", ".")) + Number(precoSobremesa.replace("R$ ", "").replace(",", "."))
    document.querySelector(".preco-total").innerHTML = `R$ ${precoTotal}0`
    document.querySelector(".confirmacao").classList.add("exibir-confirmacao")
}

function confirmarPedido()
{
    const nome = prompt("Por favor, insira o seu primeiro nome:")
    const endereco = prompt("Por favor, coloque seu endereço de entrega:")
    let mensagem = `Olá, gostaria de fazer o pedido:
- Prato: ${stringPrato}
- Bebida: ${stringBebida}
- Sobremesa: ${stringSobremesa}
Total: R$ ${precoTotal}0
    
Nome: ${nome}
Endereço de entrega: ${endereco}`

    mensagem = window.encodeURIComponent(mensagem)
    window.open(`https://wa.me/5511988783536?text=${mensagem}`)
}

function cancelarPedido()
{
    document.querySelector(".confirmacao").classList.remove("exibir-confirmacao")
}