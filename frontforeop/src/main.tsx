import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddGradePage, LoginPage, ShowGradesPage } from "./pages/index.tsx";
import { MyNavBar } from "./components/index.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
	},
	{
		path: "/addgrade",
		element: <AddGradePage />,
	},
	{
		path: "/showgrades",
		element: <ShowGradesPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MyNavBar />
		<div id="main">
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>
);
