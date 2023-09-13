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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603966/GoT/01_kdohaq.jpg"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603966/GoT/02_mvevyu.jpg"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603963/GoT/03_yyed2t.webp"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603963/GoT/04_uxe1i2.jpg"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603963/GoT/05_pnioos.webp"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603964/GoT/06_wzzq5g.webp"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603963/GoT/07_jpduim.jpg"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603963/GoT/08_ywiikd.webp"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603964/GoT/09_kty3cf.webp"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603964/GoT/10_yxu5gd.webp"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603964/GoT/11_li7vj9.webp"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603964/GoT/12_edfexi.jpg"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603964/GoT/13_jteufj.webp"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603964/GoT/14_ghox4n.jpg"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603964/GoT/15_gnsyjt.jpg"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603965/GoT/16_gmqi9r.jpg"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603965/GoT/17_ewkd0s.webp"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603965/GoT/18_gyzstt.jpg"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603965/GoT/19_lfslij.webp"
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
      "image":"https://res.cloudinary.com/dy6tv0thr/image/upload/v1694603966/GoT/20_of9ppa.webp"
    }
];