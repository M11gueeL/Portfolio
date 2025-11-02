import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
	const location = useLocation();

	// On every route change, scroll to top so new page starts at the top
	useEffect(() => {
		try {
			window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
		} catch (e) {
			// fallback
			window.scrollTo(0, 0);
		}
	}, [location.pathname]);

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}