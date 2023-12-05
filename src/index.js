import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-tailwind/react";
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
=======
>>>>>>> 758f2be69888acb3bb3391ed70608c45ba2a26c2


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 

  <React.StrictMode>
    <ThemeProvider>
<<<<<<< HEAD
   <BrowserRouter>
            <App/>
     </BrowserRouter>
=======
   
            <App/>
       
>>>>>>> 758f2be69888acb3bb3391ed70608c45ba2a26c2
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
