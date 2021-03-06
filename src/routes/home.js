/**
 * Created by qtj929 on 20/12/2016.
 */

import serverRender from '../server/index';


const config = (app) => {
    app.get('/home', handle);
};

/**
 * Handles a request to the home route
 * @param req
 * @param res
 * @param next
 */
const handle = (req, res, next) => {

    let html = serverRender({});
    res.send(html);
    next();
};

export default {config, handle};
