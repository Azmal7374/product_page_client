import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider,} from "react-router-dom";
import router from "./routes/Routes";
import AuthProvider from "./provider/Authprovider";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <AuthProvider>
 <HelmetProvider>
 <div className=" ">
        <RouterProvider router={router}></RouterProvider>
      </div>
 </HelmetProvider>
 
 </AuthProvider>
  </React.StrictMode>
);
