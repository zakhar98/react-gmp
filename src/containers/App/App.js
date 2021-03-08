import React from "react";
import HomepageHeader from "../../components/HomepageHeader/HomepageHeader.js";
import PageLayout from "../PageLayout/PageLayout.js";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary.js";

export default function App() {
  return (
    <ErrorBoundary>
      <PageLayout>
        <HomepageHeader />
      </PageLayout>
    </ErrorBoundary>
  );
}
