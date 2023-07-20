import { Link } from "react-router-dom";
import { IBook } from "../type/bookType";

interface IProp{
    book:IBook
}
const CardBook = ({book}:IProp) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure className="w-full h-64">
        <img
          src={book.imageUrl}
          alt="Shoes"
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.genre}</p>
       <Link to={`/books/${book._id}`}>
       <div className="card-actions justify-end">
          <button className="btn btn-primary">Book details</button>
        </div></Link>
      </div>
    </div>
  );
};

export default CardBook;
