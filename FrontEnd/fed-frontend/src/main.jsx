
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";

import HomePage from "./pages/home.page";
import SignInPage from "./pages/sign-in.page";
import SignUpPage from "./pages/sign-up.page";
import CartPage from "./pages/cart.page";
import RootLayout from "./layouts/root.layout";
import AccountPage from "./pages/account.page";

import { store } from "@/lib/store";
import { Provider } from "react-redux";

import { ClerkProvider } from "@clerk/clerk-react";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file')
}

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
      <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop/cart" element={<CartPage />} />
            <Route path="/account" element={<AccountPage />} />
        </Route>
        
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  </ClerkProvider>
  // </StrictMode>
);