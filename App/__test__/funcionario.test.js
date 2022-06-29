const funcionario = require("../funcionario")
test("Salário não pode ser menor que 1000",()=>{
    expect(funcionario.getSalario()).toBeGreaterThan(1000)
})
test("Salário modificado tem que ser menor que zero",()=>{
    expect(funcionario.setSalario(-1)).toBeLessThan(0)
})
