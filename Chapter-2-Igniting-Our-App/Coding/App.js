import React from "react"
import ReactDOM from "react-dom/client"

const heading1 = React.createElement(
  "h1",
  { id: "heading1" },
  "React Heading 1"
)

console.log(heading1)

const heading2 = React.createElement("h1", {}, "React Heading 2")

const container = React.createElement("div", {}, [heading1, heading2])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(container)
