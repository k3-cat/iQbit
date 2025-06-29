import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "@/layout/default";
import { Pages } from "@/Pages";
import { useIsLargeScreen } from "@/utils/screenSize";

export const LoggedInRoutes = () => {
	const isLarge = useIsLargeScreen();

	return (
		<MemoryRouter>
			<Routes>
				{Pages.map((page) => (
					<Route
						key={page.url}
						path={page.url}
						element={
							page.layout ? (
								page.layout({ children: page.component })
							) : (
								<DefaultLayout>
									{isLarge && page.url === "/" ? Pages.find((page) => page.label === "Search")?.component : page.component}
								</DefaultLayout>
							)
						}
					/>
				))}
			</Routes>
		</MemoryRouter>
	);
};
