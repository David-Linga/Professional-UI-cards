// import logo from './logo.svg';
import "./App.css";
import Card from "./components/Card";

function App() {
  const handleButtonClick = () => {
    alert("button clicked");
  };

  return (
    <div className="App">
      <Card
      title="PROFESSIONAL UI CARDS"
        name="David Linga"
        role="Frontend Developer with a passion for React"
        imageUrl="https://www.placeholderimage.online/images/avatar/avatar-image-04.png"
        onButtonClick={handleButtonClick}
      />

    </div>
  );
}

export default App;
