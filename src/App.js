import "./App.css";

const Hotels = {
  id: crypto.randomUUID(),
  image: "./images/hotel.png",
  name: "Bangkok & Pattaya",
  desc: "Airfare, 2 Nights Bangkok, 3 Nights Pattaya, Breakfast, Bangkok City Tour, Coral Island Tour, Underwater World tour Pattaya, Transfers & All Taxes",
  valid: "10th Dec 2022",
  price: "₹34,999",
  slashedPrice: "₹32,999",
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
    <div className="package">
      <div>
        <img src={Hotels.image} alt="Hotel" />
      </div>
      <div>
        <h1>{Hotels.name}</h1>
        <p>{Hotels.desc}</p>
        <p>Travel Vallid Till: {Hotels.valid}</p>
        <p>
          Starting From <span>{Hotels.price}</span> {Hotels.slashedPrice}
        </p>
        <p></p>
        <p>{Hotels.discount}</p>
      </div>
      <button>Book Now</button>
    </div>
  );
}

function InspirationPage() {
  return (
    <div className="container inspiration">
      <h1>Inspiration for future getaways packages</h1>
      <div></div>
    </div>
  );
}
