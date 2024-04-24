import Details from "./components/Details";
import EditProfile from "./components/EditProfile";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Ticket from "./components/Tickets";
import Wallet from "./components/Wallet";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="md:px-32 ">
      <Profile/>
      </div>
      <Details/>
      {/* <EditProfile/> */}
      {/* <Ticket/> */}
      {/* <Wallet/> */}
      <Footer/>
      
    </div>
  );
}

export default App;
