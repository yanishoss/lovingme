import { App } from "./containers/App";
import React from "react";
import ReactDOM from "react-dom";
import { register } from "./serviceWorker";

import "normalize.css/normalize.css";
import "typeface-roboto-slab";

ReactDOM.render(<App/>, document.querySelector("#root"));

register();