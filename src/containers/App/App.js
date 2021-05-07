import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import {Provider} from 'react-redux';
import HomepageHeader from "../../components/HomepageHeader/HomepageHeader.js";
import MovieDetailsHeader from "../../components/MovieDetailsHeader/MovieDetailsHeader.js";
import PageLayout from "../PageLayout/PageLayout.js";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";

export default function App({
  Router, location, context, store,
}) {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router location={location} context={context}>
          <Switch>
            <Route exact path="/film/:id">
              <PageLayout>
                <MovieDetailsHeader />
              </PageLayout>
            </Route>
            <Route exact path="/search/:searchQuery">
              <PageLayout>
                <HomepageHeader />
              </PageLayout>
            </Route>
            <Route exact path="/">
              <PageLayout>
                <HomepageHeader />
              </PageLayout>
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </ErrorBoundary>
    </Provider>
  );
}
