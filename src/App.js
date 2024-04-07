import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./context/themeProvider";
import { GlobalStyle } from "./theme/GlobalStyles";
import Home from "./components/Home";
import WebToon from "./components/WebToon";
import Favorite from "./components/Favorite";
import Signup from "./pages/auth/Signup";
import DetailPage from "./pages/DetailPage";

// WebToon
import MrBlue from "./pages/webtoon/MrBlue";
import AnyToon from "./pages/webtoon/AnyToon";
import RidiBooks from "./pages/webtoon/RidiBooks";
import Naver from "./pages/webtoon/Naver";
import KakaoPage from "./pages/webtoon/KakaoPage";
import KakaoWebToon from "./pages/webtoon/KakaoWebToon";
import Login from "./pages/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Suspense fallback={<div>...loading</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/webtoon" component={WebToon} />
            <Route exact path="/favorite" component={Favorite} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/content/:webtoonId" component={DetailPage} />

            <Route exact path="/webToon/mrblue" component={MrBlue} />
            <Route exact path="/webToon/anytoon" component={AnyToon} />
            <Route exact path="/webToon/ridibooks" component={RidiBooks} />
            <Route exact path="/webToon/naver" component={Naver} />
            <Route exact path="/webToon/kakaopage" component={KakaoPage} />
            <Route
              exact
              path="/webToon/kakaowebtoon"
              component={KakaoWebToon}
            />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
