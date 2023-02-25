import React from 'react'

const Book = (props) => {
    const { img, title, author, children, getBook, id, index } = props;
    const getSingleBook = () => {
      getBook(id);
    }
    return (
        <article className='book'>
        <img
          src={img}
          alt={title}
        />
        <h2>{title}</h2>
        <button onClick={getSingleBook}>display title</button>
        <h4>{author.toLocaleUpperCase()} </h4>
        <span className='number'>#{index + 1}</span>
        <p>{children}</p>
      </article>
    );
  }

export default Book