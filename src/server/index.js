/**
 * Created by qtj929 on 20/12/2016.
 */

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import AppComponent from '../components/App';
import reducer from '../reducers/index';
import config from '../config/server.config';
import Html from '../components/Html'

const serverSideRender = () => {
    var preloadedState = {};
    console.log('preLoad state=', preloadedState);

    return handleRender(preloadedState);
};

/**
 * Handles the initial server-side render
 * @param state
 * @returns {Promise}
 */
const handleRender = (state) => {
    // Create a new Redux store instance
    const store = createStore(
        reducer,
        state
    );

    const content = renderToString(
        <Provider store={store}>
            <AppComponent />
        </Provider>);


    let stateString = JSON.stringify(store.getState());

    // Render the component to a string
    let html = renderToStaticMarkup(
        <Html bundle={config.app.bundleName} title={config.app.title} state={stateString} css={config.app.css}>injectContent</Html>
    );
    html = html.replace('injectContent', content);

    html = html.replace('injectContent', content);

    return `<!DOCTYPE html>${html}`;
};

export default serverSideRender;
