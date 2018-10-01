import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./service-worker";
import { Hello } from '@app/lib';

interface AppProps {
  name: string
}

export const App = (props: AppProps) => <h2>Hello {props.name}</h2>;

ReactDOM.render(<App name={Hello} />, document.getElementById('root'));

// Register the service worker.
serviceWorker.register({});
