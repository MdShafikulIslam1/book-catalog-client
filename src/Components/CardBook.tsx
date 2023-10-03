import { Link } from "react-router-dom";
import { IBook } from "../type/bookType";

interface IProp {
  book: IBook;
}
const CardBook = ({ book }: IProp) => {
  return (
    <div className="relative p-2 m-2 overflow-hidden rounded-lg shadow-xl h-96">
      <div className="flex items-center justify-center h-52">
        <img
          src={book.imageUrl}
          alt=""
          className="object-center w-full h-full rounded-xl"
        />
      </div>
      <h2 className="mt-2 text-xl font-medium text-center ">{book.title}</h2>

      <p className="font-medium">
        Author : <span className="ml-2 ">{book.author}</span>
      </p>
      <p className="font-medium">
        Genre : <span className="ml-2 ">{book.genre}</span>
      </p>
      <p className="font-medium">
        Date : <span className="ml-2">{book.publication_date}</span>
      </p>

      <Link to={`/books/${book._id}`}>
        <div className="text-center">
          <button className="absolute bottom-0 left-0 block w-full btn btn-primary btn-outline">
            Book details
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CardBook;
