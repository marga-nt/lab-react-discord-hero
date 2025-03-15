import Button from "./componentes/button/button";
import "./App.css";

function App() {
  return (
    <div className="hero">
      <header className="header">
        <img src="/discord-logo.svg" alt="Discord Logo" className="logo" />
        <div className="menu-icon">☰</div>
      </header>

      <div className="content">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a worldwide art community.
          Where just you and a handful of friends can spend time together. A place that makes it easy
          to talk every day and hang out more often.
        </p>

        <div className="buttons">
          <Button type="download" text="Download for Mac" />
          <Button type="browser" text="Open Discord in your browser" />
        </div>
      </div>

      <img src="/illustration.png" alt="Illustration" className="illustration" />
    </div>
  );
}

export default App;
