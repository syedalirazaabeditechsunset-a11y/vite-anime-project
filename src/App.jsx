import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">MyShop</h2>
        <ul className="navLinks">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
        <button className="loginBtn">Login</button>
      </nav>
      <main>
        <div className="container">
          <div className="box box1">
            <button className="styleButton">Click to buy</button>
          </div>
          <div className="box box2">
            <button className="styleButton">Click to buy</button>
          </div>
          <div className="box box3">
            <button className="styleButton">Click to buy</button>
          </div>
          <div className="box box4">
            <button className="styleButton">Click to buy</button>
          </div>
          <div className="box box5">
            <button className="styleButton">Click to buy</button>
          </div>
          <div className="box box6">
            <button className="styleButton">Click to buy</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
