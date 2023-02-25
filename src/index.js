import React from "react";
import ReactDOM from "react-dom/client"
import './index.css';
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  const displayValue = () => {
    console.log("Title");
  }
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log("BOOK", book);
  }
  return (
    <>
    <h1>Amazon Best Sellers</h1>
    <section className="booklist">
      {books.map((book, index) => {
        return (
          <Book {...book} key={book.id} displayValue={displayValue} getBook={getBook} index={index} />
        );
      })}
    </section>
    </>
  );
}
// const displayValue = (title) => {
//   console.log("Title", title);
// }
const EventExamples = () => {
  const handleFormInput = () => {
    console.log("handle form input");
  };
  const handleButtonClick = () => {
    console.log("handle button click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }} />
      </form>
      <button onClick={handleFormSubmission}>Submit</button>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}
// const BookList = () => {
  //   return (
//     <section className="booklist">
      {/* {books.map((book) => {
        const { author, img, title, id } = book;
        return (
          <Book author={author} img={img} title={title} key={id} />
        );
      })} */}
      // {books.map((book) => {
      //   {/* const { author, img, title, id } = book; */}
      //   return (
      //     <Book book={book} key={book.id} />
      //   );
      // })}
      {/* <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
      </Book>
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} /> */}
//     </section>
//   );
// }


// const Book = () => {
//   return (
//     <article className="book">
//       <Title />
//       <Image />
//       <Author/>
//     </article>
//   );
// }
// const Image = () => {
//   return (
//     <img src="https://images-na.ssl-images-amazon.com/images/I/61E29imvhEL._AC_UL600_SR600,400_.jpg"/>
//   );
// }
// const Title = () => {
//   return (
//     <h2>Stone Maidens</h2>
//   );
// }
// const Author = () => {
  // return (
  //   <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
  //     Stone Maidens
  //   </h4>
  // );
  // const inlineHeadingStyles = {
  //   color: '#617d98',
  //   fontSize: '0.75rem',
  //   marginTop: '0.5rem',
  // };
  // return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>);