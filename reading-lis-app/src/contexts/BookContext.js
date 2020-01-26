import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    { title: 'the final empire', author: 'brandon sanderson', id: 2 }
  ]);
  const addBooks = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  const deleteBooks = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBooks, deleteBooks }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
