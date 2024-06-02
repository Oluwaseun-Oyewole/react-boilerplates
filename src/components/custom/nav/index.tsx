import { Link } from "react-router-dom";
import { Routes } from "../../../routes/routes";
import { NavInterface } from "./type";

const Navigation = ({ routes }: NavInterface) => {
  return (
    <header className="w-full max-w-7xl m-auto sticky top-0 left-0 bg-white mb-2">
      <nav className="flex items-center justify-between py-5">
        <Link to={Routes.base}>logo</Link>
        <ul className="flex items-center gap-5 justify-end">
          {routes?.map((route, index) => {
            return (
              <li key={index}>
                <a href={route.link}>{route.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
