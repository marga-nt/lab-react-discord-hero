import "./button.css";

function Button({ type, text }) {
  return (
    <button className={`btn ${type === "download" ? "btn-download" : "btn-browser"}`}>
      {text}
    </button>
  );
}

export default Button;