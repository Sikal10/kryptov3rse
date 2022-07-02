import './App.css';
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Transactions from "./components/Transactions";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className={"gradient-bg-welcome"}>
                <Navbar/>
                <Welcome/>
            </div>
            <Services/>
            <Transactions />
            <Footer />
        </>
    );
}

export default App;