import "./App.css";
import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/loading/LoadingSpinner.jsx";

const Login = lazy(() => import("./pages/login/Login.jsx"));
const HomePage = lazy(() => import("./pages/home/HomePage.jsx"));

function App() {
  return (
    <>
      <div className="font-promptRegu">
        <BrowserRouter>
          <Routes>
            <Route
              key="r0"
              path="/login"
              element={
                <Suspense key="s0" fallback={<LoadingSpinner />}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              key="r0"
              path="/homePage"
              element={
                <Suspense key="s0" fallback={<LoadingSpinner />}>
                  <HomePage />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
