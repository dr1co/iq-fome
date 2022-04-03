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
}