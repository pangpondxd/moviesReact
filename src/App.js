import React, {lazy, Suspense} from 'react'
import { Switch, Route } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";


const Movie = lazy (() => import('./pages/Movie'))
const Cart = lazy (() => import('./pages/Cart'))
const Navbar = lazy (() => import('./components/navbar/Navbar'))
const App = () => {

  return (
      <Suspense
      fallback={
        <div className="col text-center p-5">
          __ Movies
          <LoadingOutlined />
          Hitz __
        </div>
      }>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Movie} />
      <Route exact path="/cart" component={Cart} />
      </Switch> 
      </Suspense>
  );
}

export default App;
