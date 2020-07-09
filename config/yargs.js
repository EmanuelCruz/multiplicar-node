const options = {
  base: {
    demand: true, //obligatorio
    alias: "b",
  },
  limite: {
    alias: "l",
    default: 10,
  },
}
const argv = require("yargs")
  .command("listar", "Imprime en consola la tabla de multlicar", options)
  .command("crear","Genera un archivo con la tabla de multiplicar",options)
  .help() //crea una lista de los comandos validos
  .argv; 

module.exports = {
  argv
}