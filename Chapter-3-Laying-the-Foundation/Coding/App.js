import React from "react"
import ReactDOM from "react-dom/client"

const heading1 = React.createElement(
  "h1",
  { id: "heading1", key: "h1" },
  "React Heading 1"
)

console.log(heading1)

const heading2 = React.createElement(
  "h1",
  { id: "heading2", key: "h2" },
  "React Heading 2"
)

const container = React.createElement("div", {}, [heading1, heading2])

const Title = (props) => (
  <div>
    <h1>React Heading</h1>
    {props.children}
  </div>
)

const HeaderComponent = () => (
  <div>
    {/* {Title} */}
    <Title />
    <Title>
      <h1>Whats is sum of 2 + 2 = {2 + 2} (I'm a children)</h1>
    </Title>
    <h1 className="h1">React Heading 10</h1>
    <h1 className="h1">React Heading 20</h1>
  </div>
)

const HeaderComponent2 = () => (
  <div
    style={{
      background: "#f00",
      display: "flex",
      justifyContent: "space-between",
      color: "white",
      padding: "1rem",
    }}
  >
    <img
      style={{ width: "50px", objectFit: "cover" }}
      src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
      alt=""
    />

    <input style={{ width: "50%" }} type="text" />
    <img
      style={{ width: "50px", objectFit: "cover" }}
      src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
      alt=""
    />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeaderComponent2 />)
