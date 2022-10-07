listaCompra = ["Chocolate", "Azucar", "Manzana", "Cafe"];

listaCompra.push("Aceite de Girasol")

listaCompra.pop()

console.log(listaCompra);

const pelis = [
    {
        titulo: "Chappie",
        director: "Neill Blomkamp",
        fecha: new Date("march, 06, 2015")        
    },
    {
        titulo: "Bienvenidos al ayer",
        director: "Dean Israelite",
        fecha: new Date("january, 28, 2015")
    },
    {
        titulo: "Ready Player One",
        director: "Steven Spielberg",
        fecha: new Date("march, 29, 2018")
    }
]

const peliFilter = pelis.filter(pelis => pelis.fecha > new Date(2010, 0, 1));

const directores = pelis.map(pelis => {
    return pelis.director
})

const titulos = pelis.map(pelis => {
    return pelis.titulo
})

const directores_titulos = directores.concat(titulos);

const directores_titulos_prop = [...directores, ...titulos];
