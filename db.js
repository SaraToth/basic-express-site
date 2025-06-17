const authors = [
    { id: 1, name: "Bryan" },
    { id: 2, name: "Christian" },
    { id: 3, name: "Jason" },
];

async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId);
}; 

async function getAuthors() {
    const authorList = [];
    authors.forEach(author => authorList.push(author.name));
    return authorList.join(", ");
};

module.exports = { getAuthorById, getAuthors };