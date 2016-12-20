/**
 * Created by qtj929 on 20/12/2016.
 */

import react from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

const handleRender = (state) => {
    // Create a new Redux store instance
    const store = createStore(counterApp)

    // Render the component to a string
    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    // TODO: merge state.

    // Send the rendered page back to the client
    return renderFullPage(html, preloadedState);
};

const renderFullPage = (html, preloadedState)  => {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
};

export default handleRender;
