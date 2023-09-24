import { useAppSelector } from "../../redux/hook";
import { useGetAllBookQuery } from "../../redux/api/api";
import CardBook from "../../Components/CardBook";
import { IBook } from "../../type/bookType";

const Home = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { data } = useGetAllBookQuery({ limit: 10 });
  const booksData: IBook[] = data?.data;

  return (
    <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-4">
      {booksData?.map((book: IBook) => (
        <CardBook key={book._id} book={book} />
      ))}
    </div>
  );
};

export default Home;
