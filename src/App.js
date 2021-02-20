import React from 'react'; 
import './App.css';
import chip from './images/IMG_4933.JPG';
import rosie from './images/IMG_4932.JPG';
import insta_logo from './images/insta_logo.png';
import fb_logo from './images/fb_logo.png';
import penguin from './images/penguin.png';
import Navbar from './components/Navbar/Navbar';
import Igloo from './Igloo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 

function App() {
  const growPenguin = () => {
    var penguin1 = document.getElementById('penguin1')
    penguin1.style.transform = 'scale(1.1)'
    penguin1.style.transition = "transform 0.25s ease"
    document.getElementById("penguinButton").style.display = "none"
  }
  const onChangeFunction = (event) => {
    var text = event.target.value
    document.getElementById('penguinName').innerHTML = "This penguin's name is " + text
  }
  const foodList = ["bacon", "pizza", "cookie", "fries"]
  const foodMap = foodList.map((food) => {
    return(
      <p>I like to eat <i className={'em em-'+ food} aria-role="presentation" aria-label={food}></i></p>
    ) 
  });
  return (
    <div className="background">
      <link rel="stylesheet" href="style.css" />
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet" />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Home"> 
            <h1 className="synthwave">Hello! My name is Camden Hao and welcome to my website!</h1>
            <p className="synthwave"><b>A little more about me: I'm a '23 from the DC/Northern Virginia area. 
                I love playing chess, working out, and struggling to figure out which html tags do what. 
                I've seen Friends and How I Met Your Mother 7 times each. My favorite book is <i>Kane and Abel
                </i> by Jeffrey Archer. My favorite animal is the 
                <i className="em em-penguin" aria-role="presentation" aria-label="BIRD" />
                , and I have two dogs!</b></p>
            <div className="flex-container">
                <figure>
                  <img src={rosie} alt="This is Rosie!" className="dogImg"/>
                  <figcaption>This is Rosie!</figcaption>
                </figure> 
              <div>
                <figure>
                  <img src={chip} alt="And this is Chip!" className="dogImg"/>
                  <figcaption>And this is Chip!</figcaption> 
                </figure>
              </div> 
              <div>
                <figure>
                  <div id = "penguin1">
                    <input type = "text" onChange = {onChangeFunction} className = "input"/>
                    <img src={penguin} className="penguinImg" />
                    <h3 id = "penguinName">This penguin's name is _____</h3>
                    <figcaption><button id="penguinButton" onClick = {growPenguin} className = 'button'>Click me to make the penguin bigger!</button>
                    </figcaption>
                  </div>
                </figure>
              </div>          
            </div>
            <h3>These are the classes I'm taking this term:</h3>
              <ul>
                <li><a href="https://www.cs.dartmouth.edu/~deepc/Courses/S20/CS31.html" target="_blank">CS 31</a></li>
                <li><a href="http://www.dartmouth.edu/~boolzhu/cosc70.01.html" target="_blank">CS 70</a></li>
                <li><a href="https://dartmouth.smartcatalogiq.com/en/current/orc/Departments-Programs-Undergraduate/Middle-Eastern-Studies/MES-Middle-Eastern-Studies/MES-16-07" target="_blank">Arabian Nights</a></li>
              </ul>
          </Route>
          <Route path="/Igloo">
            <div className="igloo">
              <Igloo className="igloo"/>
            </div>
          </Route>
          <Route path="/Foods">
            <h3>Here are my favorite Foods!</h3>
            {foodMap}
          </Route>
          <Route path="/Socials">
            <h3>Here are my socials!</h3> 
            <div className="flex-container">
                <a href="https://www.instagram.com/cam_hao/?hl=en" target="_blank">
                  <figure> 
                    <img src={insta_logo} className='logo' /> 
                    <figcaption style={{color: 'white', fontSize: '11.5px'}}>My Instagram</figcaption> 
                  </figure>
                </a>
              <div>
                <a href="https://www.facebook.com/profile.php?id=100010491014285" target="_blank">
                  <figure> 
                    <img src={fb_logo} className='logo'/> 
                    <figcaption style={{color: 'white', fontSize: '11.5px'}}>My Facebook</figcaption> 
                  </figure>
                </a>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>  
    </div>
  );
 }
 

export default App;
