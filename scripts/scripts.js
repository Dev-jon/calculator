function calcular() {
    var n1 = Number.parseFloat(document.getElementById("n1").value)
    var n2 = Number.parseFloat(document.getElementById("n2").value)
    var calculo = null
    selector = document.getElementById("selector").value

    switch (selector) {
        case '+':
            calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} e = ${calculo}`
            break


        case '-':
            calculo = (n1 - n2)
            document.getElementById("resultado").innerHTML = `O resultado da subtracao de ${n1} - ${n2} e = ${calculo}`
            break

        case '*':
            calculo = (n1 * n2)
            document.getElementById("resultado").innerHTML = `O resultado da subtracao de ${n1} * ${n2} e = ${calculo}`
            break


        case '/':
            calculo = Math.round((n1 / n2))
            if (calculo == NaN) {
                document.getElementById("resultado").innerHTML = `insira um divisivel valido`
            } else {
                document.getElementById("resultado").innerHTML = `O resultado da subtracao de ${n1} / ${n2} e = ${calculo}`
                break
            }
    }
}