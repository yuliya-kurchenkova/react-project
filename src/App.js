import './assets/scss/style.scss';
import routes from '../src/routes/routes';
import { Route } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useHistory } from "react-router"

const App = () => {
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token) {
      // history.push("/posts")
    } else {
      history.push("/")
    }
  },[])

  return (
    <div>
      {
        Object.values(routes).map(route =>
            <Route
                exact
                key={route.component}
                path={route.url}
                component={route.component}
            />
        )
      }
    </div>
  );
}
export default App;
