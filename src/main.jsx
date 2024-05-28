import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from "react-redux";
import store from "./store.js";
import { AuthProvider } from './contexts/authContext.jsx';
// import { ConfigProvider } from "antd";
// import theme from "./theme.ts";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        {/* <ConfigProvider theme={theme}> */}
        <App />
        {/* </ConfigProvider> */}
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
