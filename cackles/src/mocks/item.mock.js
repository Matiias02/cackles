// imagenes
// ***JORDAN4***
import j4Levis from "../assets/img/jordan4/Air-Jordan-4-Retro-Levis-White-GS-Product.webp"
import j4Black from "../assets/img/jordan4/Air-Jordan-4-Retro-Black-Cat-2020-Product.webp"
import j4Psg from "../assets/img/jordan4/Air-Jordan-4-Retro-PSG-Paris-Saint-Germain-GS.webp"
// ***JORDAN1***
import j1Smoke from "../assets/img/jordan1/Air-Jordan-1-Mid-Light-Smoke-Grey-Product.webp"
import j1Travis from "../assets/img/jordan1/Air-Jordan-1-Retro-High-Travis-Scott-Product.webp"
import j1Unc from "../assets/img/jordan1/Air-Jordan-1-Retro-Mid-UNC-Product.webp"

// ***DUNKS***
import dunkGulf from "../assets/img/dunk/Nike-SB-Dunk-Low-Club-58-Gulf-Product.webp"
import dunkOff from "../assets/img/dunk/Nike-Dunk-Low-Off-White-Lot-37.webp"
import dunkBen from "../assets/img/dunk/Nike-SB-Dunk-Low-Ben-Jerrys-Chunky-Dunky.webp"

export const productos = [
    {
        id: 1,
        name: "Air Jordan 4 levis",
        category: "jordan4",
        description: "Talles 7.5us - 10us ",
        detail: 'El Levis x Air Jordan 4 Retro White Denim reúne a dos marcas estadounidenses icónicas para una edición reinventada de la silueta clásica.',
        price: "35.600 UYU",
        stock: 3,
        img: j4Levis,
    },
    {
        id: 2,
        name: "Air Jordan 4 Black Cats",
        category: "jordan4",
        description: "Talles 7.5us - 10us ",
        detail: 'Silueta clásica. Al igual que el lanzamiento original de 2006, este par utiliza una parte superior de ante negro monocromático con una entresuela negra a juego.',
        price: "30.600 UYU",
        stock: 4,
        img: j4Black,
    },
    {
        id: 3,
        name: "Air Jordan 4 PSG",
        category: "jordan4",
        description: "Talles 8us - 10us ",
        detail: 'Vestido con un esquema de color blanco, gris neutro, negro y burdeos. Este Air Jordan 4 presenta una base blanca y gris con detalles en burdeos y detalles en negro. Los detalles de acabado incluyen una etiqueta de texto "PANAME" en el antepié lateral completada con la insignia "PSG" en los talones.',
        price: "32.600 UYU",
        stock: 6,
        img: j4Psg,
    },
    {
        id: 4,
        name: "Nike Air Jordan 1 smoke grey",
        category: "jordan1",
        description: "Talles 7us - 12us",
        detail: 'A través de las superposiciones, el tono de gris toma el control y se superpone a un fondo igualmente discreto. El blanco se usa en la sección media y la puntera.',
        price: "5.400 UYU",
        stock: 7,
        img: j1Smoke,
    },
    {
        id: 5,
        name: "Nike Air Jordan 1 Travis Scott",
        category: "jordan1",
        description: "Talles 7us - 9us",
        detail: 'El Travis Scott x Air Jordan 1 Retro High presenta una nueva apariencia en la silueta icónica, gracias a un Swoosh de gran tamaño que mira hacia atrás en el lateral.',
        price: "19.000 UYU",
        stock: 5,
        img: j1Travis,
    },
    {
        id: 6,
        name: "Nike Air Jordan 1 University Blue",
        category: "jordan1",
        description: "Talles 7us - 10.5us",
        detail: 'El Air Jordan 1 Retro High OG "University Blue" hace uso de una paleta familiar que da un guiño al alma mater UNC de Michael Jordan. La parte superior de cuero presenta una base blanca con superposiciones de color azul claro y un Swoosh característico negro.',
        price: "13.000 UYU",
        stock: 7,
        img: j1Unc,
    },
    {
        id: 7,
        name: "Nike Dunk Gulf",
        category: "dunk",
        description: "Talles 8us - 11.5us",
        detail:'Inspirados en un auto de carrera Porsche 917 de 1970, el próximo par cuenta con una llamativa paleta de colores "Blue Chill/Safety Orange".',
        price: "15.360 UYU",
        stock: 2,
        img: dunkGulf,
    },
    {
        id: 8,
        name: " Nike Dunk Off-White lot 37",
        category: "dunk",
        description: "Talles 9us - 11.5us",
        detail:'Nike Dunk Low Off-White Lot 26 es parte del 48 Dunk con tono gris, a diferencia del número 1 y 50 de las diferentes iteraciones (llamadas "Lotes") de la colaboración entre Nike y Virgil Abloh.',
        price: "22.000 UYU",
        stock: 2,
        img: dunkOff,
    },
    {
        id: 9,
        name: "Nike SB Dunk Low Ben&Jerrys ",
        category: "dunk",
        description: "Talles 7us - 9.5us",
        detail:'Nike y la marca de helados han querido trasladar el icónico packaging a esta silueta en la que no falta ninguno de los datalles que engloban la experiencia Ben & Jerry’s.',
        price: "18.300 UYU",
        stock: 3,
        img: dunkBen,
    },
];