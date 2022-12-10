import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Details = lazy(() => import("./components/Details"));
const App = lazy(() => import("./App"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <div className="loading-pane">
            <h2 className="loader">😀 HIIHIHIHIHIHIHI</h2>
          </div>
        }
      >
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Suspense>
    </QueryClientProvider>
  </BrowserRouter>
);
