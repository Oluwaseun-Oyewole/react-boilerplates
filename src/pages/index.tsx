import Navigation from "../components/custom/nav";
import { navLinks } from "../helper/constants";
import useCounter from "../hooks/useContext";

const Home = () => {
  const contextValue = useCounter();
  // the height [80vh] is just for testing purpose
  return (
    <>
      <Navigation routes={navLinks} />
      <main className="max-w-7xl m-auto flex items-center justify-center h-[80vh]">
        <section>
          <h1>Home Page</h1>
          <h2>{contextValue?.count}</h2>
          <button onClick={contextValue?.increment}>Increment</button>
        </section>
      </main>
    </>
  );
};

export default Home;
