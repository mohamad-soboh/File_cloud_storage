import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DashboardComponent } from './Features/dashboard/dashboard.component';
import { NavBarComponent } from './Features/navBar/navBar.component';
import { BoxComponent } from './Features/widget/box.component';
import { SideBarComponent } from './Features/sideBar/sideBar.component';
import { FolderComponent } from './Features/folder/folder.component';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DashboardComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
