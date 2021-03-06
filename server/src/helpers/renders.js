import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import Routes from "../client/Routes";

export default (req, store) => {
  <Provider store={store}>
    <StaticRouter location={req.path} context={{}}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
  </Provider>;

  return `
    <html>
      <head />
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js" />
      </body>
    </html>
  `;
};
