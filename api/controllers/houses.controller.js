async function getHouses( req, res ) {
    return res.status(200).json(Houses);
}

async function getHouseByID( req, res ) {
    const { id } = req.params;
    const house = Houses.filter( (data) => data.id == id );
    return res.status(200).json(house);
}

module.exports = { getHouses, getHouseByID };

const Houses = [
    {
        "id": 1,
        "name": "Stark",
        "settlement": "Invernalia",
        "region": "Norte",
        "alliances": ["Targaryen", "Mormont"],
        "religions": ["Antiguos Dioses del Bosque"],
        "foundation": "04/05/-300",
        "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694604401/GoT/01_awwbp5.webp" 
      },
      {
        "id": 2,
        "name": "Lannister",
        "settlement": "Roca Casterly",
        "region": "Tierras del Oeste",
        "alliances": ["Baratheon", "Tyrell"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-1000",
        "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694604401/GoT/02_gaioqf.webp" 
      },
      {
        "id": 3,
        "name": "Baratheon",
        "settlement": "Bastión de Tormentas",
        "region": "Las Tormentas",
        "alliances": ["Lannister", "Stark"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-500",
        "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694604402/GoT/03_n1ugjp.webp" 
      },
      {
        "id": 4,
        "name": "Targaryen",
        "settlement": "Roca Dragón",
        "region": "Islas del Mar Angosto",
        "alliances": ["Martell", "Stark"],
        "religions": ["Valyrio", "Fe de los Siete"],
        "foundation": "01/01/-126",
        "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694604402/GoT/04_rhpdpo.webp" 
      },
      {
        "id": 5,
        "name": "Tyrell",
        "settlement": "Altojardín",
        "region": "El Dominio",
        "alliances": ["Lannister", "Baratheon"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-1",
        "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694604397/GoT/05_oehxll.webp" 
      },
      {
        "id": 6,
        "name": "Greyjoy",
        "settlement": "Pyke",
        "region": "Islas del Hierro",
        "alliances": ["Lannister", "Bolton"],
        "religions": ["Ahogados Dioses"],
        "foundation": "01/01/-1000",
        "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694604397/GoT/06_zj7kwd.webp" 
      },
      {
        "id": 7,
        "name": "Martell",
        "settlement": "Lanza del Sol",
        "region": "Dorne",
        "alliances": ["Targaryen", "Tyrell"],
        "religions": ["R'hllor"],
        "foundation": "01/01/-300",
        "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694604398/GoT/07_qcv7ie.webp" 
      },
      {
        "id": 8,
        "name": "Tully",
        "settlement": "Aguasdulces",
        "region": "El Valle",
        "alliances": ["Stark", "Arryn"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-650",
        "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694604398/GoT/08_emjzcy.webp" 
      },
      {
        "id": 9,
        "name": "Arryn",
        "settlement": "Nido de Águilas",
        "region": "El Valle",
        "alliances": ["Tully", "Stark"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-1000",
        "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694604398/GoT/09_atl35y.webp" 
      },
      {
        "id": 10,
        "name": "Bolton",
        "settlement": "Fuerte Terror",
        "region": "Norte",
        "alliances": ["Lannister", "Greyjoy"],
        "religions": ["Antiguos Dioses del Bosque"],
        "foundation": "01/01/-600",
        "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694604398/GoT/10_deywnn.webp" 
      },
      {
        "id": 11,
        "name": "Frey",
        "settlement": "Los Gemelos",
        "region": "El Norte",
        "alliances": ["Lannister", "Bolton"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-600",
        "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694604399/GoT/11_lycgaa.webp" 
      },
      {
        "id": 12,
        "name": "Mormont",
        "settlement": "Isla del Oso",
        "region": "El Norte",
        "alliances": ["Stark", "Targaryen"],
        "religions": ["Antiguos Dioses del Bosque"],
        "foundation": "01/01/-700",
        "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694604399/GoT/12_wdvrwz.webp" 
      },
      {
        "id": 13,
        "name": "Tarly",
        "settlement": "Altojardín",
        "region": "El Dominio",
        "alliances": ["Tyrell", "Lannister"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-500",
        "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694604400/GoT/13_oi2adv.webp" 
      },
      {
        "id": 16,
        "name": "Seaworth",
        "settlement": "Puerto Blanco",
        "region": "Las Tormentas",
        "alliances": ["Stark", "Baratheon"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-500",
        "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694604400/GoT/14_nmkq7s.webp" 
      },
      {
        "id": 17,
        "name": "Tarth",
        "settlement": "Isla de Tarth",
        "region": "Las Tormentas",
        "alliances": ["Baratheon"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-600",
        "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694604400/GoT/15_zsfumr.webp" 
      }
]