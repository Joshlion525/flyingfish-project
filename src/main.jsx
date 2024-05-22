import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HowToParticipateScreen from "./pages/HowToParticipateScreen.jsx";
import PrivacyPolicyScreen from "./pages/PrivacyPolicyScreen.jsx";
import RegisterFormScreen from "./pages/RegisterFormScreen.jsx";
import ThankyouScreen from "./pages/ThankyouScreen.jsx";
import HomeScreen from "./pages/HomeScreen.jsx";
import NotLegalScreen from "./pages/NotLegalScreen.jsx";
import RegisterScreen from "./pages/RegisterScreen.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/howtoparticipate",
		element: <HowToParticipateScreen />,
	},
	{
		path: "/privacypolicy",
		element: <PrivacyPolicyScreen />,
	},
	{
		path: "/registerform",
		element: <RegisterFormScreen />,
	},
	{
		path: "/thankyou",
		element: <ThankyouScreen />,
	},
	{
		path: "/home",
		element: <RegisterScreen />,
	},
	{
		path: "/notlegal",
		element: <NotLegalScreen />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
