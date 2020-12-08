import React, { useState } from "react";
import './css/cards.css';
import './css/navbar.css';
import './css/footer.css';



function App() {

const [isActive, SetActive] = useState (false);
const handleToggle = () => {
  SetActive(!isActive);
};

const CardButton = ({ visible, setVisible }) => {
  return (
    <button onClick={() => setVisible(!visible)} className="card-button">
      {!visible ? "show" : "hide"} card
    </button>
  );
};



const cardText ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  return (
    <div className="content">
        <nav>
            <ul>
                <li className = {`items ${isActive ? "show" : "hide"}`} ><a href="#"> CSS Layout</a></li>
                <li className = {`items ${isActive ? "show" : "hide"}`} ><a href="#"> CSS Layout</a></li>
                <li className = {`items ${isActive ? "show" : "hide"}`} ><a href="#"> CSS </a></li>
                <li className = {`items ${isActive ? "show" : "hide"}`} ><a href="#"> CSS Layout</a></li>
                <li className = {`items ${isActive ? "show" : "hide"}`} ><a href="#"> CSS Layout</a></li>
                <li className = {`btn ${isActive ? "show" : "hide"}`} onCLick ={handleToggle}><a href="#"><i className="fas fa-bars"/></a></li>
               
            </ul>
        </nav>

        
      <div className="container">
        <div className="cards">
          <div className="card-item">
            <div className="card-info">
                <h2 ClassName="card-title">Card 1</h2>
                <p ClassName="card-body">{cardText}</p>
               
            </div>
          </div>
        </div>
        

        <div className="cards">
          <div className="card-item">
            <div className="card-info">
                <h2 ClassName="card-title">Card 2</h2>
                <p ClassName="card-body">{cardText}</p>
            </div>
          </div>
        </div>
  
        <div className="cards">
          <div className="card-item">
            <div className="card-info">
                <h2 ClassName="card-title">Card 3</h2>
                <p ClassName="card-body">{cardText}</p>
            </div>
          </div>
        </div>
</div>
   
    <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
