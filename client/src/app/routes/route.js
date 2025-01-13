import ROUTES from './names';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../../pages/home';
import Trackopedie from '../../pages/trackopedie';
const AppRoute = () => {
    return (
      <Routes>
         <Route path={ROUTES.HOME} element={<Home />} />
         <Route path={ROUTES.TRACKOPEDIE} element={<Trackopedie />} />
      </Routes>
      
      
    );
  };
  
  export default AppRoute;