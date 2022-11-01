import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppConvert from './App/AppConvert';
import AppItems from './App/AppItems'
import AppHistory from './App/AppHistory';
import AppStatistics from './App/AppStatistics';
import { Provider } from 'react-redux';
import store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<AppConvert />}/>
          <Route path='/Home' element={<AppItems />}/>
          <Route path='/History' element={<AppHistory />}/>
          <Route path='/Statistics' element={<AppStatistics />}/>
        </Routes>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);