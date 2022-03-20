import React, { Fragment } from 'react';
import Header from  "./components/Header";
import Footer  from "./components/Footer";
import SearchFoodDishes from "./components/SearchFoodDishes";


const App = () => (
 
    <Fragment>
      <Header />
      <SearchFoodDishes />
      <Footer />
    </Fragment>
    
  );
export default App;
