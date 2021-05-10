import Header from "./components/Header";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Advertisement from "./components/Advertisement";

const App = () => {

    return (
        <>
            <Advertisement/>
            <Header/>
            <Menu/>
            <Shop/>
            {/*<Hero/>*/}
            <Footer/>
        </>
    );
}

export default App;
