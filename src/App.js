import React,{Suspense} from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './03-reducers';

//styles
import './App.css';
//constants
import PATHS from './04-constants/paths';
import ICON_LIST from './04-constants/iconsList/index';
//components
import Header from './00-components/header/index';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
//pages
const Login = React.lazy(() => import('./01-pages/Login'));
const UserPage = React.lazy(()=>import('./01-pages/UserPage'));
const Home = React.lazy(()=>import('./01-pages/Home'));
const OutOfBounds = React.lazy(()=>import('./01-pages/OutOfBounds'));


const COMPONENT_PATHS = [
  {Component:Login,path:PATHS.LOGIN},
  {Component:UserPage,path:PATHS.USER},
  {Component:Home,path:PATHS.MAIN_PAGE},
  {Component:OutOfBounds,path:PATHS.OUT_OF_BOUNDS},
]

// const history = createBrowserHistory();

const createReduxStore = () => {
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === 'development') {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }
  return createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(thunk)));
};

function App() {
  return (
    <StoreProvider store={createReduxStore()}>
        <BrowserRouter>
          <Switch>
            {COMPONENT_PATHS.map(({path,Component})=>(
              <Route path={path} exact key={path}>
                {Component !== Login? <Header title='La Liga' icon={ICON_LIST.logo}/>:''}
                <Suspense fallback={<div>loading...</div>}>
                  <Component/>
                </Suspense>
              </Route>
            ))}
              <Redirect to={PATHS.OUT_OF_BOUNDS}/>
          </Switch>
        </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
