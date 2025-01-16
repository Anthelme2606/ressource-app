import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/components/sidebar.css";
import BuyCard from './cards/BuyCard'
import ROUTES from "../app/routes/names";
import useActiveLink from "../hooks/UseActiveLink";

const Sidebar = () => {
  const sedeLinks = [
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
    <aside className="sidebar-container">
      <div className="sidebar">
        <ul className="nav-side">
          {/* Search Input */}
          <li className="side-item search-item">
            <div className="search-input">
              <div className="icon-container">
                <i className="bi bi-search"></i>
              </div>
              <input type="text" className="search-input-field" placeholder="Search..." />
            </div>
          </li>
          {/* Menu Items */}
         
          <li className={`side-item ${trackopédieActive ? "active" : ""}`} key={ROUTES.TRACKOPEDIE}>
              <NavLink
                to={ROUTES.TRACKOPEDIE}
                className={({ isActive }) =>
                  `side-link ${isActive ? "text-orange-primary" : ""}`
                }
              >
                <div className="icon-circle">
                <i className="bi bi-house"></i>
              </div>
                <span className="sidebar-text">Pour toi</span>
              </NavLink>
            </li>
          <li className="side-item">
            <NavLink to="/subjects" className="side-link">
              <div className="icon-circle">
                <i className=" bi bi-collection"></i>
              </div>
              <span className="sidebar-text">Cours</span>
            </NavLink>
          </li>
          <li className="side-item">
            <NavLink to="/subjects" className="side-link">
              <div className="icon-circle">
                <i className="bi bi-book"></i>
              </div>
              <span className="sidebar-text">Sujets</span>
            </NavLink>
          </li>
          <li className="side-item">
            <NavLink to="/exams" className="side-link">
              <div className="icon-circle">
                <i className="bi bi-clipboard"></i>
              </div>
              <span className="sidebar-text">Examens</span>
            </NavLink>
          </li>
          <li className="side-item">
            <NavLink to="/add-track" className="side-link">
              <div className="icon-circle">
                <i className="bi bi-plus"></i>
              </div>
              <span className="sidebar-text">Ajouter un track</span>
            </NavLink>
          </li>
          <li className="side-item">
            <NavLink to="/profile" className="side-link">
              <div className="icon-circle">
                <i className="bi bi-person"></i>
              </div>
              <span className="sidebar-text">Profile</span>
            </NavLink>
          </li>
          <li className="side-item">
            <NavLink to="/settings" className="side-link">
              <div className="icon-circle">
                <i className="bi bi-gear"></i>
              </div>
              <span className="sidebar-text">Parametre</span>
            </NavLink>
          </li>
        </ul>
       
      </div>
      <div className="w-100">
            <BuyCard
            quantity={1}
            netPrice={200}
            promotion={1}
            />
        </div>
    </aside>
  );
};

export default Sidebar;
