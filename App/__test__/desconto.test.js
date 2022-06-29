const calcularDesconto = require("../desconto")

test("Testa se o valor é verdadeiro se for maior que 150",()=>{
    expect(calcularDesconto(1200)).toBeTruthy()// espero rceber um valor que seja verdadeiro
})
test("Testa se é Falso para valores menores que 150", ()=>{
    expect(calcularDesconto(100)).toBeFalsy()
})