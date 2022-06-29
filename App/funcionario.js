const funcionario = {
    nome:"Fulano",
    idade:26,
    salario:1212.50,
    getSalario(){
        return this.salario
    },
    setSalario(valor){
        if(valor < 0){
            return valor
        }
        else{
            this.salario = valor
            return true
        }
    }
}

module.exports = funcionario