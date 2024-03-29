import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Info from "./components/info/Info";
import Games from "./components/games/Games";
import SocialToken from "./components/social_token/Social_Token";
import Buy from "./components/buy/Buy";
import Tokenomics from "./components/tokenomics/Tokenomics";
import Roadmap from "./components/roadmap/Roadmap";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">

      <Header />
      <Main />
      <Info />
      <Games />
      <SocialToken />
      <Tokenomics/>
      <Buy />
      <Roadmap />
      <Footer />
      
    </div>
  );
}

export default App;
