// imagenes
// ***JORDAN4***
import j4Levis from "../assets/img/jordan4/Air-Jordan-4-Retro-Levis-White-GS-Product.webp"
import j4Black from "../assets/img/jordan4/Air-Jordan-4-Retro-Black-Cat-2020-Product.webp"
import j4Psg from "../assets/img/jordan4/Air-Jordan-4-Retro-PSG-Paris-Saint-Germain-GS.webp"
import j4Kaws from "../assets/img/jordan4/Air-Jordan-4-Retro-Kaws-Product.webp"
import j4Eminem from "../assets/img/jordan4/Air-Jordan-4-Retro-Eminem-Carhartt-Product.webp"
import j4Travis from "../assets/img/jordan4/Air-Jordan-4-Retro-Travis-Scott-Cactus-Jack-Product.webp"
// ***JORDAN1***
import j1Smoke from "../assets/img/jordan1/Air-Jordan-1-Mid-Light-Smoke-Grey-Product.webp"
import j1Travis from "../assets/img/jordan1/Air-Jordan-1-Retro-High-Travis-Scott-Product.webp"
import j1Unc from "../assets/img/jordan1/Air-Jordan-1-Retro-Mid-UNC-Product.webp"
import j1Dior from "../assets/img/jordan1/Air-Jordan-1-Retro-High-Dior-Product.webp"
import j1Hyper from "../assets/img/jordan1/Air-Jordan-1-Retro-High-Hyper-Royal-Smoke-Grey.webp"
import j1Red from "../assets/img/jordan1/img01.webp"

// ***DUNKS***
import dunkGulf from "../assets/img/dunk/Nike-SB-Dunk-Low-Club-58-Gulf-Product.webp"
import dunkOff from "../assets/img/dunk/Nike-Dunk-Low-Off-White-Lot-37.webp"
import dunkBen from "../assets/img/dunk/Nike-SB-Dunk-Low-Ben-Jerrys-Chunky-Dunky.webp"
import dunkAcg from "../assets/img/dunk/Nike-SB-Dunk-Low-ACG-Terra-Product.webp"
import dunkTravis from "../assets/img/dunk/Nike-SB-Dunk-Low-Travis-Scott-Product.webp"
import dunkAtlas from "../assets/img/dunk/Nike-Dunk-SB-Low-Atlas-35MM-Product.webp"

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
        name: "Air Jordan 4 Kaws",
        category: "jordan4",
        description: "Talles 9us - 10us ",
        detail: 'Vestido con un esquema de color blanco, gris neutro, negro y burdeos. Este Air Jordan 4 presenta una base blanca y gris con detalles en burdeos y detalles en negro. Los detalles de acabado incluyen una etiqueta de texto "PANAME" en el antepié lateral completada con la insignia "PSG" en los talones.',
        price: "90.000 UYU",
        stock: 3,
        img: j4Kaws,
    },
    {
        id: 5,
        name: "Air Jordan 4 Eminem",
        category: "jordan4",
        description: "Talles 8us - 10us ",
        detail: 'Vestido con un esquema de color blanco, gris neutro, negro y burdeos. Este Air Jordan 4 presenta una base blanca y gris con detalles en burdeos y detalles en negro. Los detalles de acabado incluyen una etiqueta de texto "PANAME" en el antepié lateral completada con la insignia "PSG" en los talones.',
        price: "660.000 UYU",
        stock: 5,
        img: j4Eminem,
    },
    {
        id: 6,
        name: "Air Jordan 4 Travis Scott",
        category: "jordan4",
        description: "Talles 8us - 10us ",
        detail: 'Vestido con un esquema de color blanco, gris neutro, negro y burdeos. Este Air Jordan 4 presenta una base blanca y gris con detalles en burdeos y detalles en negro. Los detalles de acabado incluyen una etiqueta de texto "PANAME" en el antepié lateral completada con la insignia "PSG" en los talones.',
        price: "23.000 UYU",
        stock: 4,
        img: j4Travis,
    },
    {
        id: 7,
        name: "Nike Air Jordan 1 smoke grey",
        category: "jordan1",
        description: "Talles 7us - 12us",
        detail: 'A través de las superposiciones, el tono de gris toma el control y se superpone a un fondo igualmente discreto. El blanco se usa en la sección media y la puntera.',
        price: "5.400 UYU",
        stock: 7,
        img: j1Smoke,
    },
    {
        id: 8,
        name: "Nike Air Jordan 1 Travis Scott",
        category: "jordan1",
        description: "Talles 7us - 9us",
        detail: 'El Travis Scott x Air Jordan 1 Retro High presenta una nueva apariencia en la silueta icónica, gracias a un Swoosh de gran tamaño que mira hacia atrás en el lateral.',
        price: "19.000 UYU",
        stock: 5,
        img: j1Travis,
    },
    {
        id: 9,
        name: "Nike Air Jordan 1 University Blue",
        category: "jordan1",
        description: "Talles 7us - 10.5us",
        detail: 'El Air Jordan 1 Retro High OG "University Blue" hace uso de una paleta familiar que da un guiño al alma mater UNC de Michael Jordan. La parte superior de cuero presenta una base blanca con superposiciones de color azul claro y un Swoosh característico negro.',
        price: "13.000 UYU",
        stock: 7,
        img: j1Unc,
    },
    {
        id: 10,
        name: "Nike Air Jordan 1 Hyper Royal Blue",
        category: "jordan1",
        description: "Talles 7us - 10.5us",
        detail: 'El Air Jordan 1 Retro High OG "University Blue" hace uso de una paleta familiar que da un guiño al alma mater UNC de Michael Jordan. La parte superior de cuero presenta una base blanca con superposiciones de color azul claro y un Swoosh característico negro.',
        price: "11.800 UYU",
        stock: 7,
        img: j1Hyper,
    },
    {
        id: 11,
        name: "Nike Air Jordan 1 Dior",
        category: "jordan1",
        description: "Talles 8us - 9us",
        detail: 'El Air Jordan 1 Retro High OG "University Blue" hace uso de una paleta familiar que da un guiño al alma mater UNC de Michael Jordan. La parte superior de cuero presenta una base blanca con superposiciones de color azul claro y un Swoosh característico negro.',
        price: "260.000 UYU",
        stock: 2,
        img: j1Dior,
    },
    {
        id: 12,
        name: "Nike Air Jordan 1 mid gym red",
        category: "jordan1",
        description: "Talles 8us - 12us",
        detail: 'El Air Jordan 1 Retro High OG "University Blue" hace uso de una paleta familiar que da un guiño al alma mater UNC de Michael Jordan. La parte superior de cuero presenta una base blanca con superposiciones de color azul claro y un Swoosh característico negro.',
        price: "7.900 UYU",
        stock: 7,
        img: j1Red,
    },
    {
        id: 13,
        name: "Nike Dunk Gulf",
        category: "dunk",
        description: "Talles 8us - 11.5us",
        detail:'Inspirados en un auto de carrera Porsche 917 de 1970, el próximo par cuenta con una llamativa paleta de colores "Blue Chill/Safety Orange".',
        price: "15.360 UYU",
        stock: 2,
        img: dunkGulf,
    },
    {
        id: 14,
        name: " Nike Dunk Off-White lot 37",
        category: "dunk",
        description: "Talles 9us - 11.5us",
        detail:'Nike Dunk Low Off-White Lot 26 es parte del 48 Dunk con tono gris, a diferencia del número 1 y 50 de las diferentes iteraciones (llamadas "Lotes") de la colaboración entre Nike y Virgil Abloh.',
        price: "22.000 UYU",
        stock: 2,
        img: dunkOff,
    },
    {
        id: 15,
        name: "Nike SB Dunk Low Ben&Jerrys ",
        category: "dunk",
        description: "Talles 7us - 9.5us",
        detail:'Nike y la marca de helados han querido trasladar el icónico packaging a esta silueta en la que no falta ninguno de los datalles que engloban la experiencia Ben & Jerry’s.',
        price: "18.300 UYU",
        stock: 3,
        img: dunkBen,
    },
    {
        id: 16,
        name: "Nike SB Dunk Low Atlas ",
        category: "dunk",
        description: "Talles 7us - 11.5us",
        detail:'Nike y la marca de helados han querido trasladar el icónico packaging a esta silueta en la que no falta ninguno de los datalles que engloban la experiencia Ben & Jerry’s.',
        price: "14.800 UYU",
        stock: 5,
        img: dunkAtlas,
    },
    {
        id: 17,
        name: "Nike SB Dunk Low Acg Terra ",
        category: "dunk",
        description: "Talles 9us - 11.5us",
        detail:'Nike y la marca de helados han querido trasladar el icónico packaging a esta silueta en la que no falta ninguno de los datalles que engloban la experiencia Ben & Jerry’s.',
        price: "10.000 UYU",
        stock: 3,
        img: dunkAcg,
    },
    {
        id: 18,
        name: "Nike SB Dunk Low Travis Scott ",
        category: "dunk",
        description: "Talles 9us - 11.5us",
        detail:'Nike y la marca de helados han querido trasladar el icónico packaging a esta silueta en la que no falta ninguno de los datalles que engloban la experiencia Ben & Jerry’s.',
        price: "55.560 UYU",
        stock: 3,
        img: dunkTravis,
    },
];