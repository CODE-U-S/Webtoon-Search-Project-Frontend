import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import WebToon from './components/WebToon';
import Favorite from './components/Favorite';
import Signup from './pages/auth/Signup';


import { ThemeProvider } from './context/themeProvider';
import { GlobalStyle } from './theme/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Suspense fallback={<div>...loading</div>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/WebToon" component={WebToon}/>
            <Route exact path="/Favorite" component={Favorite}/>
            <Route exact path="/Signup" component={Signup}/>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
