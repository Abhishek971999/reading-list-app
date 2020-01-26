import React, { useContext } from 'react';
import { BookContext } from '../contexts//BookContext';
const BookDetails = ({ book }) => {
  const { deleteBooks } = useContext(BookContext);
  return (
    <li
      onClick={() => {
        deleteBooks(book.id);
      }}
    >
      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
    </li>
  );
};

export default BookDetails;
