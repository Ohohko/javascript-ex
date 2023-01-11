const book = {
  title : 'How to write a book',
  editor:'Mark brainy',
  expenditure: 'THG LTD 2001',
  Length: '120 pages',
  rating: '5 stars',
};

const DesBook = (book) => {
    return `The book ${book.title} was written by ${book.editor} & ${book.expenditure}`;
  };