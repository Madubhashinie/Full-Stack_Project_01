
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import HomePage from './pages/home.page';
import SignUpPage from './pages/sign-up.page';
import SignInPage from './pages/sign-in.page';

import { store } from "@/lib/store";
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  //<StrictMode>

  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignUpPage />} />
        <Route path="/sign-up" element={<SignInPage/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
  //</StrictMode>
)
