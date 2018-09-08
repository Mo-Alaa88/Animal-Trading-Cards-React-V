import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fish from './image/design-prototype.png'

class App extends Component {
  render() {
    return (
      <div>
        <div id="background" className="animal-cards">
          <header>
            <h3 className="animal-name">Nemo Fish</h3>
          </header>
          <img src={fish} class="cat-picture" alt="fish"/>
          <div className="cat-info">
            <p className="interesting-fact">A layer of mucus on the clownfish`s skin make it immune to the fish-eating aneone`s lethal sting.</p>

            <ul class="list-item">
              <li><span>scientific name</span> : Amphipioninae</li>
              <li><span>average length</span> : 11 centimeters.</li>
              <li><span>average lifespan</span> :7 years.</li>
              <li><span>habitat</span> : Tropical.</li>
            </ul>
            <p className="description">Bright orange with three distinctive with bars , clown anemonefish are among the most recognizable of all reffdwellers They reach about 11 centimeters in length , and are named for the multicolored sea anemone in which they make their homes.</p>
          </div>
        </div>
        <footer>Created By Mohammed Alaa <a href="https://github.com/Mo-Alaa88" target="_blank">See More Projects</a></footer>
      </div>
    );
  }
}

export default App;
