import { Link } from "react-router-dom";
import { Routes } from "../routes/routes";

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <header>
        <Link to={Routes.login}>Login</Link>
      </header>
      <article>
        <section>
          <div>
            <h1>Home Page</h1>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Home;
