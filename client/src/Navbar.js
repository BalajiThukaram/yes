import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Homepage";
import Kitchen from "./Kitchen";
import Room from "./Room";
import Hall from "./Hall";
import MessageSender from "./Alert"
function Navbar() {
  return (
    <Router>
      <nav className="navbar" style={{ backgroundColor: "#20b8d8" }}>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "space-around",
            padding: "0.5rem",
            margin: "0",
          }}
        >
          <li
            style={{
              textDecoration: "none",
            }}
          >
            <Link
              to="/"
              style={{
                color: "#000000",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              Home
            </Link>
          </li>
          <li
            style={{
              textDecoration: "none",
            }}
          >
            <Link
              to="/room"
              style={{
                color: "#000000",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              Room
            </Link>
          </li>
          <li
            style={{
              textDecoration: "none",
            }}
          >
            <Link
              to="/hall"
              style={{
                color: "#000000",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              Hall
            </Link>
          </li>
          <li
            style={{
              textDecoration: "none",
            }}
          >
            <Link
              to="/kitchen"
              style={{
                color: "#000000",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              Kitchen
            </Link>
          </li>
          <li
            style={{
              textDecoration: "none",
            }}
          >
            <Link
              to="/alert"
              style={{
                color: "#000000",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              Alert
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/hall" element={<Hall />} />
        <Route path="/room" element={<Room />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/alert" element={<MessageSender />}/>
      </Routes>
    </Router>
  );
}

export default Navbar;
