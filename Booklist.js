import react from "react";
import { ReactDOM } from "react-dom";

const Books = [
  {
    author: "L. G. Shen",
    title: "The Wolf",
    img: "https://m.media-amazon.com/images/I/41+D-N-H6LL._SY346_.jpg",
    id: 0,
  },
  {
    author: " L.J. Shen ",
    title: "Boston Belles",
    img: "https://m.media-amazon.com/images/I/51fhBQKpW2L._CLa%7C581,500%7C41gP8g17dvL.jpg,51gGSAwLeoL.jpg%7C0,0,264,500+317,0,264,500+132,0,317,500_._SY300_.jpg",
    id: 1,
  },
  {
    author: "Laura S. Wild ",
    title: "Bodyguards",
    img: "https://m.media-amazon.com/images/I/419zabU62cL._SY346_.jpg",
    id: 2,
  },
];

function BookList() {
  return (
    <section className="Booklist">
      {Books.map((book) => {
        return <Book {...book} key={book.id}></Book>;
      })}
    </section>
  );
}
const Book = (props) => {
  const { title, author, img } = props;
  return (
    <article className="Book">
      <img src={img} alt={title}></img>
      <h1>{title}</h1>
      <h3>{author}</h3>
    </article>
  );
};
export default BookList;
