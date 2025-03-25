import { Link } from "react-router-dom";


const Home = () => {
    return (
      <div>
        <h2>Unemployment Checker</h2>
        <p>Welcome to the Unemployment Checker. In this app, I will analyze the rate of unemployment in America since the 1970's to create a hypothesis on the rise of unemployment in America.. Use the navigation to view data.</p>
        <Link to="csv1">
        <button>To Beginning</button>
      </Link>
      <Link to="csv5">
        <button>To End</button>
      </Link>
      </div>
    );
  }

export default Home;