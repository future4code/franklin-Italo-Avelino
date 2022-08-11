// 1.a) Utilizamos process.argv e o indice do parametro que foi passado na linha de comando

// 1.b)
console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`)

// 1.c)
console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${Number(process.argv[3]) + 7}`)