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
        "image":"/images/houses/01.webp" 
      },
      {
        "id": 2,
        "name": "Lannister",
        "settlement": "Roca Casterly",
        "region": "Tierras del Oeste",
        "alliances": ["Baratheon", "Tyrell"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-1000",
        "image":"/images/houses/02.webp" 
      },
      {
        "id": 3,
        "name": "Baratheon",
        "settlement": "Bastión de Tormentas",
        "region": "Las Tormentas",
        "alliances": ["Lannister", "Stark"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-500",
        "image":"/images/houses/03.webp" 
      },
      {
        "id": 4,
        "name": "Targaryen",
        "settlement": "Roca Dragón",
        "region": "Islas del Mar Angosto",
        "alliances": ["Martell", "Stark"],
        "religions": ["Valyrio", "Fe de los Siete"],
        "foundation": "01/01/-126",
        "image":"/images/houses/04.webp" 
      },
      {
        "id": 5,
        "name": "Tyrell",
        "settlement": "Altojardín",
        "region": "El Dominio",
        "alliances": ["Lannister", "Baratheon"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-1",
        "image":"/images/houses/05.webp" 
      },
      {
        "id": 6,
        "name": "Greyjoy",
        "settlement": "Pyke",
        "region": "Islas del Hierro",
        "alliances": ["Lannister", "Bolton"],
        "religions": ["Ahogados Dioses"],
        "foundation": "01/01/-1000",
        "image":"/images/houses/06.webp" 
      },
      {
        "id": 7,
        "name": "Martell",
        "settlement": "Lanza del Sol",
        "region": "Dorne",
        "alliances": ["Targaryen", "Tyrell"],
        "religions": ["R'hllor"],
        "foundation": "01/01/-300",
        "image":"/images/houses/07.webp" 
      },
      {
        "id": 8,
        "name": "Tully",
        "settlement": "Aguasdulces",
        "region": "El Valle",
        "alliances": ["Stark", "Arryn"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-650",
        "image":"/images/houses/08.webp" 
      },
      {
        "id": 9,
        "name": "Arryn",
        "settlement": "Nido de Águilas",
        "region": "El Valle",
        "alliances": ["Tully", "Stark"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-1000",
        "image":"/images/houses/09.webp" 
      },
      {
        "id": 10,
        "name": "Bolton",
        "settlement": "Fuerte Terror",
        "region": "Norte",
        "alliances": ["Lannister", "Greyjoy"],
        "religions": ["Antiguos Dioses del Bosque"],
        "foundation": "01/01/-600",
        "image":"/images/houses/10.webp" 
      },
      {
        "id": 11,
        "name": "Frey",
        "settlement": "Los Gemelos",
        "region": "El Norte",
        "alliances": ["Lannister", "Bolton"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-600",
        "image":"/images/houses/11.webp" 
      },
      {
        "id": 12,
        "name": "Mormont",
        "settlement": "Isla del Oso",
        "region": "El Norte",
        "alliances": ["Stark", "Targaryen"],
        "religions": ["Antiguos Dioses del Bosque"],
        "foundation": "01/01/-700",
        "image":"/images/houses/12.webp" 
      },
      {
        "id": 13,
        "name": "Tarly",
        "settlement": "Altojardín",
        "region": "El Dominio",
        "alliances": ["Tyrell", "Lannister"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-500",
        "image":"/images/houses/13.webp" 
      },
      {
        "id": 16,
        "name": "Seaworth",
        "settlement": "Puerto Blanco",
        "region": "Las Tormentas",
        "alliances": ["Stark", "Baratheon"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-500",
        "image":"/images/houses/14.webp" 
      },
      {
        "id": 17,
        "name": "Tarth",
        "settlement": "Isla de Tarth",
        "region": "Las Tormentas",
        "alliances": ["Baratheon"],
        "religions": ["Fe de los Siete"],
        "foundation": "01/01/-600",
        "image":"/images/houses/15.webp" 
      }
]