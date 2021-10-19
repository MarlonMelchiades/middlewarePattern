// middleware pattern (chain of responsibility)
const passo1 = (contex, next) => {
    contex.valor1 = 'stepMid1'
    next()
}

const passo2 = (contex, next) => {
    contex.valor2 = 'stepMid2'
    next()
}

const passo3 = contex => contex.valor3 = 'stepMid3'

const exec = (contex, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](contex, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const contex = {}
exec(contex, passo1, passo2, passo3)
console.log(contex)