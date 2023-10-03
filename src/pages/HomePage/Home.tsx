import { useGetAllBookQuery } from "../../redux/api/api";
import CardBook from "../../Components/CardBook";
import { IBook } from "../../type/bookType";

const Home = () => {
  const { data } = useGetAllBookQuery({ limit: 10 });
  const booksData: IBook[] = data?.data;

  return (
    <div className="my-8">
      <h1 className="my-4 text-3xl font-bold text-center">
        Latest Top Selling 10 Books
      </h1>
      <div className="divider"></div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {booksData?.map((book: IBook) => (
          <CardBook key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
