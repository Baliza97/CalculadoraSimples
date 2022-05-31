const tela = document.getElementById("conta")
const mNaTela = document.getElementById("M")
const digitacao = document.getElementById("valorDigitado")

const btn0 = document.querySelector(".n0")
const btn1 = document.querySelector(".n1")
const btn2 = document.querySelector(".n2")
const btn3 = document.querySelector(".n3")
const btn4 = document.querySelector(".n4")
const btn5 = document.querySelector(".n5")
const btn6 = document.querySelector(".n6")
const btn7 = document.querySelector(".n7")
const btn8 = document.querySelector(".n8")
const btn9 = document.querySelector(".n9")

const btnSoma = document.querySelector(".oSoma")
const btnSub = document.querySelector(".oSub")
const btnMult = document.querySelector(".oMul")
const btnDiv = document.querySelector(".oDiv")
const btnTotal = document.querySelector(".oTot")

const btnMSoma = document.querySelector(".MSoma")
const btnMSub = document.querySelector(".MSub")
const btnMTotal = document.querySelector(".MTotal")

const btnApaga = document.querySelector(".CE")
const btnVirg = document.querySelector(".oVir")

let somaM = 0

function calculaTotal(conta) {
    let listaDeContas = separaValores(conta)
    let expressaoComSomasESub = resolveMultEDiv(listaDeContas)
    let resultado = resolveSomaESub(expressaoComSomasESub)
    return resultado
}

function separaValores(stringDaConta) {
    listaDeCaracteres = stringDaConta.split("")
    listaNumerosEOp = ["0"]
    expressaoSomaESub = []
    for (let i = 0; i < listaDeCaracteres.length; i++) {
        if (isNaN(parseFloat(listaDeCaracteres[i]))) {
            listaNumerosEOp.push(listaDeCaracteres[i])
        } else {
            if (isNaN(listaNumerosEOp[listaNumerosEOp.length - 1])) {
                listaNumerosEOp.push(listaDeCaracteres[i])
            } else {
                listaNumerosEOp[listaNumerosEOp.length - 1] += listaDeCaracteres[i]
            }
        }
    }
    for (let i = 0; i < listaNumerosEOp.length; i++) {
        if (listaNumerosEOp[i] === ".") {
            listaNumerosEOp.splice(i, 1)
            listaNumerosEOp[i - 1] += ("." + listaNumerosEOp[i])
            listaNumerosEOp.splice(i, 1)
        }
    } return listaNumerosEOp
}

function resolveSomaESub(listaComSomaESub) {

    for (let i = 0; i < listaComSomaESub.length; i++) {
        switch (listaComSomaESub[i]) {
            case "+":
                listaComSomaESub[i - 1] = parseFloat(listaComSomaESub[i - 1]) + parseFloat(listaComSomaESub[i + 1])
                listaComSomaESub.splice(i, 2)
                i = 0
                break;
            case "-":
                listaComSomaESub[i - 1] = parseFloat(listaComSomaESub[i - 1]) - parseFloat(listaComSomaESub[i + 1])
                listaComSomaESub.splice(i, 2)
                i = 0
                break;
            default:
                break;
        }
    }

    return parseFloat(listaComSomaESub)
}

function resolveMultEDiv(listaComExpressao) {
    for (let i = 0; i < listaComExpressao.length; i++) {
        switch (listaComExpressao[i]) {
            case "*":
                if (isNaN(listaComExpressao[i + 1])) {
                    listaComExpressao[i + 1] += listaComExpressao[i + 2]
                    listaComExpressao[i - 1] = parseFloat(listaComExpressao[i - 1]) * parseFloat(listaComExpressao[i + 1])
                    listaComExpressao.splice(i, 3)
                } else {
                    listaComExpressao[i - 1] = parseFloat(listaComExpressao[i - 1]) * parseFloat(listaComExpressao[i + 1])
                    listaComExpressao.splice(i, 2)
                    i = 0
                }
                break;
            case "/":
                if (isNaN(listaComExpressao[i + 1])) {
                    listaComExpressao[i + 1] += listaComExpressao[i + 2]
                    listaComExpressao[i - 1] = parseFloat(listaComExpressao[i - 1]) / parseFloat(listaComExpressao[i + 1])
                    listaComExpressao.splice(i, 3)
                } else {
                    listaComExpressao[i - 1] = parseFloat(listaComExpressao[i - 1]) / parseFloat(listaComExpressao[i + 1])
                    listaComExpressao.splice(i, 2)
                    i = 0
                }
                break;
            default:
                break;
        }
    }
    return listaComExpressao
}

function checkTelaEConta(tela) {
    if (tela.split("+").length > 1) {
        return true
    } else {
        if (tela.split("-").length > 1) {
            return true
        } else {
            if (tela.split("*").length > 1) {
                return true
            } else {
                if (tela.split("/").length > 1) {
                    return true
                } else {
                    return false
                }
            }
        }
    }
}

btn0.addEventListener("click", function (event) {
    event.preventDefault()
    digitacao.innerHTML += "0"
})

btn1.addEventListener("click", function (event) {
    event.preventDefault()
    digitacao.innerHTML += "1"
})

btn2.addEventListener("click", function (event) {
    event.preventDefault()
    digitacao.innerHTML += "2"
})

btn3.addEventListener("click", function (event) {
    event.preventDefault()
    digitacao.innerHTML += "3"
})

btn4.addEventListener("click", function (event) {
    event.preventDefault()
    digitacao.innerHTML += "4"
})

btn5.addEventListener("click", function (event) {
    event.preventDefault()
    digitacao.innerHTML += "5"
})

btn6.addEventListener("click", function (event) {
    event.preventDefault()
    digitacao.innerHTML += "6"
})

btn7.addEventListener("click", function (event) {
    event.preventDefault()
    digitacao.innerHTML += "7"
})

btn8.addEventListener("click", function (event) {
    event.preventDefault()
    digitacao.innerHTML += "8"
})

btn9.addEventListener("click", function (event) {
    event.preventDefault()
    digitacao.innerHTML += "9"
})

btnSoma.addEventListener("click", function (event) {
    event.preventDefault()
    digitacao.innerHTML += "+"
})

btnSub.addEventListener("click", function (event) {
    event.preventDefault()
    digitacao.innerHTML += "-"
})

btnMult.addEventListener("click", function (event) {
    event.preventDefault()
    digitacao.innerHTML += "*"
})

btnDiv.addEventListener("click", function (event) {
    event.preventDefault()
    digitacao.innerHTML += "/"
})

btnTotal.addEventListener("click", function (event) {
    event.preventDefault()
    let resultado = calculaTotal(digitacao.textContent)
    if (isNaN(resultado)) {
        document.getElementById("erro").innerHTML = "Sua expressão é inválida <br>Por favor, verifique e tente novamente"
    } else {
        document.getElementById("erro").innerHTML = ""
        tela.innerHTML = digitacao.textContent
        digitacao.innerHTML = resultado
    }
})

btnMSoma.addEventListener("click", function (event) {
    event.preventDefault()
    if (checkTelaEConta(digitacao.textContent)) {
        let resultado = calculaTotal(digitacao.textContent)
        if (isNaN(resultado)) {
            document.getElementById("erro").innerHTML = "Sua expressão é inválida <br>Por favor, verifique e tente novamente"
        } else {
            document.getElementById("erro").innerHTML = ""
            somaM += calculaTotal(digitacao.textContent)
        }
    } else {
        somaM += parseFloat(digitacao.textContent)
    }
    if (somaM == 0) {
        mNaTela.innerHTML = ""
    } else {
        mNaTela.innerHTML = "M"
    }
})

btnMSub.addEventListener("click", function (event) {
    event.preventDefault()
    if (checkTelaEConta(digitacao.textContent)) {
        let resultado = calculaTotal(digitacao.textContent)
        if (isNaN(resultado)) {
            document.getElementById("erro").innerHTML = "Sua expressão é inválida <br>Por favor, verifique e tente novamente"
        } else {
            document.getElementById("erro").innerHTML = ""
            somaM -= calculaTotal(digitacao.textContent)
        }
    } else {
        somaM -= parseFloat(digitacao.textContent)
    }
    if (somaM == 0) {
        mNaTela.innerHTML = ""
    } else {
        mNaTela.innerHTML = "M"
    }
})

btnMTotal.addEventListener("click", function (event) {
    event.preventDefault()
    tela.innerHTML = "M"
    digitacao.innerHTML = somaM
})

btnApaga.addEventListener("click", function (event) {
    event.preventDefault()
    tela.innerHTML = ""
    digitacao.innerHTML = ""
})

btnVirg.addEventListener("click", function (event) {
    event.preventDefault()
    digitacao.innerHTML += "."
})

