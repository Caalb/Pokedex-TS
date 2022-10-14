import { Outlet, useParams } from "react-router";

const HomePage = () => {
  const { id } = useParams();
  return (
    <div>
      Olá Mundo! <br />
      {id}
      <Outlet />
    </div>
  );
};

export default HomePage;