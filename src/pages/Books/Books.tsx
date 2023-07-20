import CardBook from "../../Components/CardBook";
import { useGetAllBookQuery } from "../../redux/api/api";
import { IBook } from "../../type/bookType";

const Books = () => {
  const { data } = useGetAllBookQuery(undefined);
  const booksData: IBook[] = data?.data;
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
      {booksData?.map((book: IBook) => (
        <CardBook key={book._id} book={book} />
      ))}
    </div>
  );
};

export default Books;
