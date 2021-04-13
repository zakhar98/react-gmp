import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomepageHeader from "../../components/HomepageHeader/HomepageHeader.js";
import MovieDetailsHeader from "../../components/MovieDetailsHeader/MovieDetailsHeader.js";
import PageLayout from "../PageLayout/PageLayout.js";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
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
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}
