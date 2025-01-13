import "../assets/css/components/navbar.css";
import { NavLink } from "react-router-dom";
import ROUTES from "../app/routes/names";
import useActiveLink from "../hooks/UseActiveLink";

const Navbar = () => {
  const navLinks = [
    { path: ROUTES.HOME, label: "Accueil" },
    { path: ROUTES.TRACKOPEDIE, label: "Trackopédie" },
    { path: ROUTES.LOGIN, label: "Se connecter" },
    { path: ROUTES.SIGNUP, label: "S'inscrire" },
  ];

  // Call the hook directly for each link (outside of map)
  const homeActive = useActiveLink(ROUTES.HOME);
  const trackopédieActive = useActiveLink(ROUTES.TRACKOPEDIE);
  const loginActive = useActiveLink(ROUTES.LOGIN);
  const signupActive = useActiveLink(ROUTES.SIGNUP);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand learn-track" href="/">
          LearnTrack
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Render first 2 links */}
            <li className={`nav-item ${homeActive ? "active" : ""}`} key={ROUTES.HOME}>
              <NavLink
                to={ROUTES.HOME}
                className={({ isActive }) =>
                  `nav-link link font-bold ${isActive ? "text-orange-primary" : ""}`
                }
              >
                Accueil
              </NavLink>
            </li>
            <li className={`nav-item ${trackopédieActive ? "active" : ""}`} key={ROUTES.TRACKOPEDIE}>
              <NavLink
                to={ROUTES.TRACKOPEDIE}
                className={({ isActive }) =>
                  `nav-link link font-bold ${isActive ? "text-orange-primary" : ""}`
                }
              >
                Trackopédie
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Render last 2 links */}
            <li className={`nav-item ${loginActive ? "active" : ""}`} key={ROUTES.LOGIN}>
              <NavLink
                to={ROUTES.LOGIN}
                className={({ isActive }) =>
                  `nav-link btn-custom font-bold ${isActive ? "btn-active" : ""}`
                }
              >
                Se connecter
              </NavLink>
            </li>
            <li className={`nav-item ${signupActive ? "active" : ""}`} key={ROUTES.SIGNUP}>
              <NavLink
                to={ROUTES.SIGNUP}
                className={({ isActive }) =>
                  `nav-link btn-custom font-bold ${isActive ? "btn-active" : ""}`
                }
              >
                S'inscrire
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
