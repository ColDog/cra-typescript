import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./service-worker";

const App = () => <h2>Hello</h2>;

ReactDOM.render(<App />, document.getElementById("root"));

// Register the service worker.
serviceWorker.register({});
