import React from "react";
import "./src/css/style.css";
import logo from "./src/images/logo.png";
import img1 from "./src/images/4.jpg";
import order from "./src/images/order.png";
import icecream from "./src/images/ice-cream.png";
import phone from "./src/images/phone.png";
import play from "./src/images/play.webp";
import IOS from "./src/images/iOS.webp";
import Typed from "react-typed";


function Home() {
    const alertFunction = () => {
        window.alert("App is in development... or is it?");
      }

  return (
    <section className="membership-menu">
      <div class="landing">
      <div class="landing-interact">
        <div class="navbar">
          <div class="branding">
            <div><img class="logo" src={logo} /></div>
            <div class="logo-title">SWIGGY</div>
          </div>
          
                <div class="links">
                    <div>
                        <button class="nav-button login">Login</button>
                    </div>
                    <div>
                        <button class="nav-button sign">Sign up</button>
                    </div>
                </div>
               
        </div>
        <div class="title">
          
          <div class="sub-title">Find awesome restaurants near you.</div>
          <div id="typewriter" class="changing">
          
                  <Typed
                    strings={[
                      "Feeling hungry?",
                      "Unexpected guests?",
                      "Cooking gone wrong?",
                      "Game night?",
                      "Movie marathon?",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />    
          </div>
        </div>
        <div class="search">
          <input
            id="selection"
            onchange="updateSelection(); document.getElementById('search').href=`./static/list.html?q=${this.value}`;"
            class="search-bar"
            type="text"
            placeholder="Enter your delivery location"
          >
           {/*  <option value="" selected style={{display:"none" }}
              >Select your location</option
            >
            <option value="11">Ahmedabad</option>
            <option value="3">Bangalore</option>
            <option value="7">Chennai</option>
            <option value="1">Delhi</option>
            <option value="6">Hyderabad</option>
            <option value="2">Kolkata</option>
            <option value="3">Mumbai</option>
            <option value="5">Pune</option> */}
          </input>
          <a id="search" href="#"
            ><button
              disabled
              id="search-button"
              class="search-bar search-submit"
              type="submit"
            >
              FIND FOOD
            </button></a
          >
          <script>
            {function updateSelection() {
              console.log("lol");
              if (document.getElementById("selection").value == "") {
                document.getElementById("search-button").disabled = true;
              } else {
                document.getElementById("search-button").disabled = false;
              }
            }
            }
          </script>
        </div>
        <div class=" cities ">
          <div class="cities-title">CITIES SERVED IN INDIA</div>
          <div class="cities-sub-title">
            Ahmedabad, Bangalore, Chennai, Delhi, Hyderabad, Kolkata, Mumbai, &
            Pune
          </div>
        </div>
      </div>
      <div class="landing-images ">
        <img class="landing-image " src={img1} />
      </div>
    </div>
    <div class="features">
      <div class="feature">
        <div><img class="feature-image" src={order} /></div>
        <div class="feature-title">Variety & Choices</div>
        <div class="feature-desc">
          Loathing for Italian, Thai, Indian or Chinese food? We got restaurants
          covering many cuisines.
        </div>
      </div>
      <div class="feature">
        <div><img class="feature-image" src={icecream} /></div>
        <div class="feature-title">Close To You</div>
        <div class="feature-desc">
          Get to know awesome resturants near you. Find out what they offer and
          see customer reviews.
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="mob-1">
        <img class="mobile-image" src={phone} />
      </div>
      <div class="mob-2">
        <div class="changing">Restaurants in your pocket</div>
        <div class="sub-title">
          Discover new restaurants near you on the go, with the all-new Foodcubo
          app.
        </div>
        <div class="stores">
          <img
            class="store-image"
            onClick="alertFunction()"
            src={play}
          /><img class="store-image" src={IOS} onClick="alertFunction()"/>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="credits">Made by Gnanamozhi | Inspired by Swiggy</div>
    </div>

    <script>
      {
     
      }
    </script>
    <script src="./src/js/core.js"></script>
    {/* <script type="text/javascript">
        {
                const instance = new Typewriter("#typewriter", {
                  strings: [
                    "Feeling hungry?",
                    "Unexpected guests?",
                    "Cooking gone wrong?",
                    "Game night?",
                    "Movie marathon?"
                  ],
                  autoStart: true,
                  loop: true
                }); 
        }
      
    </script> */}
    </section>
  );
}
export default Home;
