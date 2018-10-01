import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./service-worker";
import { Hello } from '@app/lib';

export const App = () => <h2>Hello {Hello}</h2>;

ReactDOM.render(<App />, document.getElementById('root'));

// Register the service worker.
serviceWorker.register({});
