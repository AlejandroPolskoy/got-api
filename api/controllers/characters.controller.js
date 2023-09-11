async function getCharacters( req, res ) {
    return res.status(200).json(Characters);
}

async function getCharacterByID( req, res ) {
    const { id } = req.params;
    const character = Characters.filter( (data) => data.id == id );
    return res.status(200).json(character);
}

// async function findCharacterByName( req, res ) {
//     const { name } = req.params;
//     const characters = Characters.filter( (data)=> {
//         data.name.includes( name );
//     });
//     return res.status(200).json(characters);
// }

module.exports = { getCharacters, getCharacterByID };

const Characters = [
    {
      "id": 1,
      "name": "Jon Snow",
      "house": "Stark",
      "parents": ["Rhaegar Targaryen", "Lyanna Stark"],
      "siblings": ["Daenerys Targaryen"],
      "titles": ["King in the North"],
      "alliances": ["House Stark", "House Targaryen"],
      "episodes": ["Winter Is Coming", "The Kingsroad", "Lord Snow", "Cripples, Bastards, and Broken Things"],
      "age": 23,
      "image":"/images/characters/01.jpg"
    },
    {
      "id": 2,
      "name": "Daenerys Targaryen",
      "house": "Targaryen",
      "parents": ["Aerys II Targaryen", "Rhaella Targaryen"],
      "siblings": ["Rhaegar Targaryen", "Viserys Targaryen"],
      "titles": ["Queen of the Andals and the First Men"],
      "alliances": ["House Targaryen", "Dothraki"],
      "episodes": ["Winter Is Coming", "The Kingsroad", "Lord Snow", "Cripples, Bastards, and Broken Things"],
      "age": 25,
      "image":"/images/characters/02.jpeg"
    },
    {
      "id": 3,
      "name": "Tyrion Lannister",
      "house": "Lannister",
      "parents": ["Tywin Lannister", "Joanna Lannister"],
      "siblings": ["Cersei Lannister", "Jaime Lannister"],
      "titles": ["Hand of the Queen"],
      "alliances": ["House Lannister", "House Targaryen"],
      "episodes": ["Winter Is Coming", "The Kingsroad", "Lord Snow", "Cripples, Bastards, and Broken Things"],
      "age": 40,
      "image":"/images/characters/03.webp"
    },
    {
      "id": 4,
      "name": "Arya Stark",
      "house": "Stark",
      "parents": ["Eddard Stark", "Catelyn Stark"],
      "siblings": ["Robb Stark", "Sansa Stark", "Bran Stark", "Rickon Stark"],
      "titles": ["Lady of Winterfell"],
      "alliances": ["House Stark"],
      "episodes": ["Winter Is Coming", "The Kingsroad", "Lord Snow", "Cripples, Bastards, and Broken Things"],
      "age": 20,
      "image":"/images/characters/04.jpg"
    },
    {
      "id": 5,
      "name": "Cersei Lannister",
      "house": "Lannister",
      "parents": ["Tywin Lannister", "Joanna Lannister"],
      "siblings": ["Jaime Lannister", "Tyrion Lannister"],
      "titles": ["Queen of the Andals and the First Men"],
      "alliances": ["House Lannister"],
      "episodes": ["Winter Is Coming", "The Kingsroad", "Lord Snow", "Cripples, Bastards, and Broken Things"],
      "age": 45,
      "image":"/images/characters/05.webp"
    },
    {
      "id": 6,
      "name": "Sansa Stark",
      "house": "Stark",
      "parents": ["Eddard Stark", "Catelyn Stark"],
      "siblings": ["Robb Stark", "Arya Stark", "Bran Stark", "Rickon Stark"],
      "titles": ["Queen in the North"],
      "alliances": ["House Stark"],
      "episodes": ["The Wolf and the Lion", "A Golden Crown", "You Win or You Die", "The Pointy End"],
      "age": 24,
      "image":"/images/characters/06.webp"
    },
    {
      "id": 7,
      "name": "Jaime Lannister",
      "house": "Lannister",
      "parents": ["Tywin Lannister", "Joanna Lannister"],
      "siblings": ["Cersei Lannister", "Tyrion Lannister"],
      "titles": ["Lord Commander of the Kingsguard"],
      "alliances": ["House Lannister"],
      "episodes": ["The Wolf and the Lion", "A Golden Crown", "You Win or You Die", "The Pointy End"],
      "age": 40,
      "image":"/images/characters/07.jpg"
    },
    {
      "id": 8,
      "name": "Margaery Tyrell",
      "house": "Tyrell",
      "parents": ["Mace Tyrell", "Alerie Tyrell"],
      "siblings": ["Loras Tyrell", "Willas Tyrell", "Garlan Tyrell"],
      "titles": ["Queen of the Seven Kingdoms"],
      "alliances": ["House Tyrell", "House Baratheon"],
      "episodes": ["The Wolf and the Lion", "A Golden Crown", "You Win or You Die", "The Pointy End"],
      "age": 28,
      "image":"/images/characters/08.webp"
    },
    {
      "id": 9,
      "name": "Stannis Baratheon",
      "house": "Baratheon",
      "parents": ["Steffon Baratheon", "Cassana Baratheon"],
      "siblings": ["Robert Baratheon", "Renly Baratheon"],
      "titles": ["Lord of Dragonstone"],
      "alliances": ["House Baratheon"],
      "episodes": ["The Wolf and the Lion", "A Golden Crown", "You Win or You Die", "The Pointy End"],
      "age": 47,
      "image":"/images/characters/09.webp"
    },
    {
      "id": 10,
      "name": "Oberyn Martell",
      "house": "Martell",
      "parents": ["Doran Martell", "Melaria Martell"],
      "siblings": ["Doran Martell", "Elia Martell"],
      "titles": ["Prince of Dorne"],
      "alliances": ["House Martell", "House Targaryen"],
      "episodes": ["The Wolf and the Lion", "A Golden Crown", "You Win or You Die", "The Pointy End"],
      "age": 41,
      "image":"/images/characters/10.webp"
    },
    {
      "id": 11,
      "name": "Brienne of Tarth",
      "house": "Tarth",
      "parents": ["Selwyn Tarth"],
      "siblings": [],
      "titles": ["Knight of the Seven Kingdoms"],
      "alliances": ["House Stark"],
      "episodes": ["The Mountain and the Viper", "The Watchers on the Wall", "The Children", "The Wars to Come"],
      "age": 35,
      "image":"/images/characters/11.webp"
    },
    {
      "id": 12,
      "name": "Tormund Giantsbane",
      "house": null,
      "parents": [],
      "siblings": [],
      "titles": ["Leader of the Free Folk"],
      "alliances": ["Free Folk", "House Stark"],
      "episodes": ["Hardhome", "The Door", "Battle of the Bastards", "The Dragon and the Wolf"],
      "age": 45,
      "image":"/images/characters/12.jpg"
    },
    {
      "id": 13,
      "name": "Samwell Tarly",
      "house": "Tarly",
      "parents": ["Randyll Tarly", "Melessa Tarly"],
      "siblings": ["Dickon Tarly"],
      "titles": ["Grand Maester of the Seven Kingdoms"],
      "alliances": ["Night's Watch", "House Targaryen"],
      "episodes": ["The Children", "High Sparrow", "Book of the Stranger", "The Winds of Winter"],
      "age": 32,
      "image":"/images/characters/13.webp"
    },
    {
      "id": 14,
      "name": "Jorah Mormont",
      "house": "Mormont",
      "parents": ["Jeor Mormont"],
      "siblings": [],
      "titles": ["Knight", "Lord of Bear Island"],
      "alliances": ["House Targaryen"],
      "episodes": ["The Kingsroad", "A Golden Crown", "You Win or You Die", "The Pointy End"],
      "age": 52,
      "image":"/images/characters/14.jpg"
    },
    {
      "id": 15,
      "name": "Gendry Baratheon",
      "house": "Baratheon",
      "parents": ["Robert Baratheon"],
      "siblings": [],
      "titles": ["Lord of Storm's End"],
      "alliances": ["House Baratheon", "House Stark"],
      "episodes": ["The Spoils of War", "Eastwatch", "Beyond the Wall", "The Dragon and the Wolf"],
      "age": 34,
      "image":"/images/characters/15.jpg"
    },
    {
      "id": 16,
      "name": "Davos Seaworth",
      "house": "Seaworth",
      "parents": [],
      "siblings": [],
      "titles": ["Lord of the Rainwood", "Hand of the King"],
      "alliances": ["House Stark", "House Baratheon"],
      "episodes": ["Blackwater", "The Lion and the Rose", "The Children", "The Iron Throne"],
      "age": 50,
      "image":"/images/characters/16.jpg"
    },
    {
      "id": 17,
      "name": "Melisandre",
      "house": null,
      "parents": [],
      "siblings": [],
      "titles": ["Red Priestess of R'hllor"],
      "alliances": ["House Baratheon", "Brotherhood Without Banners"],
      "episodes": ["The North Remembers", "The Ghost of Harrenhal", "Blackwater", "The Climb"],
      "age": 400,
      "image":"/images/characters/17.webp"
    },
    {
      "id": 18,
      "name": "Bronn",
      "house": null,
      "parents": [],
      "siblings": [],
      "titles": ["Ser", "Lord of Highgarden"],
      "alliances": ["House Lannister", "House Tyrell"],
      "episodes": ["The Wolf and the Lion", "Blackwater", "The Laws of Gods and Men", "The Spoils of War"],
      "age": 40,
      "image":"/images/characters/18.jpg"
    },
    {
      "id": 19,
      "name": "Theon Greyjoy",
      "house": "Greyjoy",
      "parents": ["Balon Greyjoy"],
      "siblings": ["Yara Greyjoy"],
      "titles": ["Prince of the Iron Islands", "Lord of Winterfell"],
      "alliances": ["House Stark", "House Targaryen"],
      "episodes": ["The Pointy End", "The Old Gods and the New", "Mhysa", "Winterfell"],
      "age": 31,
      "image":"/images/characters/19.webp"
    },
    {
      "id": 20,
      "name": "Jaqen H'ghar",
      "house": null,
      "parents": [],
      "siblings": [],
      "titles": ["Faceless Man"],
      "alliances": ["The Faceless Men"],
      "episodes": ["A Man Without Honor", "The Ghost of Harrenhal", "Valar Morghulis", "No One"],
      "age": null,
      "image":"/images/characters/20.webp"
    }
];