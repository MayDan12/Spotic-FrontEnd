import "./App.css";
import { useState } from "react";

const destinationArtCulture = [
  { country: "Phoenix", city: "Arizona" },
  { country: "Hot Springs", city: "Arkansas" },
  { country: "Los Angeles", city: "California" },
  { country: "San Diego", city: "California" },
  { country: "San Fransico", city: "California" },
  { country: "Barcelona", city: "California" },
  { country: "Prague", city: "Czechia" },
  { country: "Washington", city: "District of Columbia" },
  { country: "Scarborough", city: "England" },
  { country: "London", city: "England" },
  { country: "Keswick", city: "England" },
];

const destinationOutdoorAdventure = [
  { country: "Paris", city: "France" },
  { country: "Berlin", city: "Germany" },
  { country: "Tokyo", city: "Japan" },
  { country: "Osaka", city: "Japan" },
  { country: "Kyoto", city: "Japan" },
  { country: "Madrid", city: "Spain" },
  { country: "Vienna", city: "Austria" },
  { country: "Amsterdam", city: "Netherlands" },
  { country: "Sydney", city: "Australia" },
  { country: "Melbourne", city: "Australia" },
  { country: "Brisbane", city: "Australia" },
];

const mountainCabins = [
  { country: "Banff", city: "Canada" },
  { country: "Aspen", city: "USA" },
  { country: "Zermatt", city: "Switzerland" },
  { country: "Chamonix", city: "France" },
  { country: "Innsbruck", city: "Austria" },
  { country: "Queenstown", city: "New Zealand" },
  { country: "Nagano", city: "Japan" },
  { country: "Grindelwald", city: "Switzerland" },
  { country: "Whistler", city: "Canada" },
  { country: "Gatlinburg", city: "USA" },
  { country: "Cortina d'Ampezzo", city: "Italy" },
];

const beachDestinations = [
  { country: "Malibu", city: "USA" },
  { country: "Waikiki", city: "USA" },
  { country: "Bondi Beach", city: "Australia" },
  { country: "Phuket", city: "Thailand" },
  { country: "Bora Bora", city: "French Polynesia" },
  { country: "Maui", city: "USA" },
  { country: "Cancun", city: "Mexico" },
  { country: "Goa", city: "India" },
  { country: "Nice", city: "France" },
  { country: "Barceloneta", city: "Spain" },
  { country: "Copacabana", city: "Brazil" },
];

const popularDestinations = [
  { country: "New York", city: "USA" },
  { country: "Paris", city: "France" },
  { country: "Rome", city: "Italy" },
  { country: "London", city: "England" },
  { country: "Tokyo", city: "Japan" },
  { country: "Dubai", city: "United Arab Emirates" },
  { country: "Istanbul", city: "Turkey" },
  { country: "Bangkok", city: "Thailand" },
  { country: "Barcelona", city: "Spain" },
  { country: "Singapore", city: "Singapore" },
  { country: "Sydney", city: "Australia" },
];

const uniqueStays = [
  { country: "Reykjavik", city: "Iceland" },
  { country: "Petra", city: "Jordan" },
  { country: "Marrakech", city: "Morocco" },
  { country: "Hobbiton", city: "New Zealand" },
  { country: "Santorini", city: "Greece" },
  { country: "Machu Picchu", city: "Peru" },
  { country: "Cusco", city: "Peru" },
  { country: "Kyoto", city: "Japan" },
  { country: "Queenstown", city: "New Zealand" },
  { country: "Salar de Uyuni", city: "Bolivia" },
  { country: "Lapland", city: "Finland" },
];

const hotelImg = [
  { img: "./images/hotel.png" },
  { img: "./images/hotel2.png" },
  { img: "./images/hotel3.png" },
  { img: "./images/hotel4.png" },
  { img: "./images/hotel5.png" },
  { img: "./images/hotel6.png" },
];

const Hotels = {
  id: crypto.randomUUID(),
  image: "./images/hotel.png",
  name: "Bangkok & Pattaya",
  desc: "Airfare, 2 Nights Bangkok, 3 Nights Pattaya, Breakfast, Bangkok City Tour, Coral Island Tour, Underwater World tour Pattaya, Transfers & All Taxes",
  valid: "10th Dec 2022",
  price: 34999,
  slashedPrice: 32999,
  discount: true,
};
export default function App() {
  return (
    <>
      <Header />
      <Home />
      <PopularPackages />
      <PackagesList />
      <InspirationPage />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <nav className="nav-bar">
      <div></div>
    </nav>
  );
}

function Home() {
  return (
    <div className="section-home">
      <div className="img">
        <div className="text-desc">
          <h1>Explore the world</h1>
        </div>
      </div>
    </div>
  );
}

function PopularPackages() {
  return (
    <div className="container packages-box">
      <div className="">
        <h1>Popular Packages</h1>
      </div>
      <div className="sortbar">
        <label>Sort By</label>
        <select>
          <option>Popularity</option>
          <option></option>
          <option></option>
          <option></option>
        </select>
      </div>
    </div>
  );
}

function PackagesList() {
  return (
    <div className="container">
      <div className="packages-list">
        <Package />
        <Package />
        <Package />
        <Package />
        <Package />
        <Package />
      </div>
    </div>
  );
}

function Package() {
  return (
    <div className="pack-img">
      <div>
        <img src={Hotels.image} alt="Hotel" />
      </div>
      <div className="package">
        <h1>{Hotels.name}</h1>
        <p>{Hotels.desc}</p>
        <p>Travel Vallid Till: {Hotels.valid}</p>
        <p>
          Starting From <span>₹{Hotels.price}</span> ₹{Hotels.slashedPrice}
        </p>
        <p></p>
        <p>{Hotels.discount}</p>
      </div>
      <div className="btn">
        <button>Book Now</button>
      </div>
    </div>
  );
}

function InspirationPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container inspiration">
      <h1>Inspiration for Future Getaways Packages</h1>
      <div className="inspiration-tab">
        <TabButton index={0} activeTab={activeTab} setActiveTab={setActiveTab}>
          Destinations for arts & culture
        </TabButton>
        <TabButton index={1} activeTab={activeTab} setActiveTab={setActiveTab}>
          Destinations for outdoor adventure
        </TabButton>
        <TabButton index={2} activeTab={activeTab} setActiveTab={setActiveTab}>
          Mountain cabins
        </TabButton>
        <TabButton index={3} activeTab={activeTab} setActiveTab={setActiveTab}>
          Beach destinations
        </TabButton>
        <TabButton index={4} activeTab={activeTab} setActiveTab={setActiveTab}>
          Popular destinations
        </TabButton>
        <TabButton index={5} activeTab={activeTab} setActiveTab={setActiveTab}>
          Unique Stays
        </TabButton>
      </div>

      <div className="inspiration-content">
        {activeTab === 0 && <DestintionArtCulture />}
        {activeTab === 1 && <DestinationOutdoorAdventure />}
        {activeTab === 2 && <MountainCabins />}
        {activeTab === 3 && <BeachDestinations />}
        {activeTab === 4 && <PopularDestinations />}
        {activeTab === 5 && <UniqueStays />}
      </div>
    </div>
  );
}

function TabButton({ index, activeTab, setActiveTab, children }) {
  return (
    <div>
      <span
        onClick={() => setActiveTab(index)}
        href="https://"
        className={`insp-btn ${activeTab === index ? "active" : ""}`}
      >
        {children}
      </span>
    </div>
  );
}

function Destinations({ children }) {
  return (
    <div>
      <div className="dest">
        {children.map((dest) => (
          <Destination key={dest.city} dest={dest} />
        ))}
      </div>
    </div>
  );
}

function Destination({ dest }) {
  return (
    <div className="box">
      <h2>{dest.country}</h2>
      <p>{dest.city}</p>
    </div>
  );
}

function DestintionArtCulture() {
  return (
    <div>
      <Destinations children={destinationArtCulture} />
    </div>
  );
}

function DestinationOutdoorAdventure() {
  return (
    <div>
      <Destinations children={destinationOutdoorAdventure} />
    </div>
  );
}

function MountainCabins() {
  return (
    <div>
      <Destinations children={mountainCabins} />
    </div>
  );
}

function BeachDestinations() {
  return (
    <div>
      <Destinations children={beachDestinations} />
    </div>
  );
}

function PopularDestinations() {
  return (
    <div>
      <Destinations children={popularDestinations} />
    </div>
  );
}

function UniqueStays() {
  return (
    <div>
      <Destinations children={uniqueStays} />
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-bg">
      <div className="container">
        <div className="footer">
          <div className="footer-box">
            <h2>Support</h2>
            <ul>
              <li>
                <a href="https://">Help Center</a>
              </li>
              <li>
                <a href="https://">Safety Information</a>
              </li>
              <li>
                <a href="https://">Cancellation Options</a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h2>Packages</h2>
            <ul>
              <li>
                <a href="https://">Budget Package</a>
              </li>
              <li>
                <a href="https://">Package by days</a>
              </li>
              <li>
                <a href="https://">Honeymoon package</a>
              </li>
              <li>
                <a href="https://">Family Trip</a>
              </li>
              <li>
                <a href="https://">Get Away Package</a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h2>About</h2>
            <ul>
              <li>
                <a href="https://">Newsroon</a>
              </li>
              <li>
                <a href="https://">Learn about new features</a>
              </li>
              <li>
                <a href="https://">Careers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="line"></div>
          <div className="flex">
            <div className="flex">
              <p>© {currentYear} Travel Surity. All rights reserved</p>
              <a href="https://">Privacy</a>
              <a href="https://">Terms</a>
              <a href="https://">Sitemap</a>
            </div>
            <div>
              <a href="https://github.com/MayDan12">
                <ion-icon class="footer-icon" name="logo-github"></ion-icon>
              </a>
              <a href="https://twitter.com/Mayowadan12">
                <ion-icon class="footer-icon" name="logo-twitter"></ion-icon>
              </a>
              <a href="https://instagram.com/mayowa_dan">
                <ion-icon class="footer-icon" name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterBox({ children }) {
  return { children };
}
