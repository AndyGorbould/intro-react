import "./App.css";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import ToDo from "./components/ToDo/ToDo";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <InputForm />
      <ToDo />
      <Footer />
    </div>
  );
}

export default App;
