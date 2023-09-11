import { useAppSelector } from "../../redux/hook";

const Home = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div>
      <h1>This is Home page.</h1>
    </div>
  );
};

export default Home;
