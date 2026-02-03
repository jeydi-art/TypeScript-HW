type Author = { name: string, age: number };
type Book_1 = {
    title: string,
    pageCount: number,
    genre: string,
    authors: Author[]
};

let book1: Book_1 = {
    title: 'A',
    pageCount: 23,
    genre: 'AA',
    authors: [{name: 'vasja', age: 20}, {name: 'cdscs', age: 24}]
};
let book2: Book_1 = {
    title: 'B',
    pageCount: 213,
    genre: 'BB',
    authors: [{name: 'katja', age: 20}, {name: 'cdsddcs', age: 24}]
};
let book3: Book_1 = {
    title: 'C',
    pageCount: 255,
    genre: 'CC',
    authors: [{name: 'pupkin', age: 20}, {name: 'csadascs', age: 24}]
};