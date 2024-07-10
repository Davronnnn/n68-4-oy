const books = [
    {
        title: "Sariq devni minib",
        author: "Xudoyberdi To'xtaboyev",
        year: 2100,
        genre: "fiction",
    },
    {
        title: "Kichkina shahzoda",
        author: "Antuan de sent",
        year: 1800,
        genre: "comedy",
    },
    {
        title: "Qo'rqma",
        author: "Javlon Jovliyev",
        year: 2018,
        genre: "horror",
    },
    {
        title: "Mehrobdan chayon",
        author: "Abdulla Qodiriy",
        year: 2015,
        genre: "fiction",
    },
];

function getNewBooks(elements) {
    const newElements = [];

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].year > 2010) {
            newElements.push(elements[i]);
        }
    }
    return newElements;
}
