import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing App", () => {
	
	test("renders sidebar title", () => {
    	render(<App />);
    	const sidebarTitle = screen.getByText(/cities app/i);
    	expect(sidebarTitle).toBeInTheDocument();
  	});

	test("Elements Exist", () => {

		let result,
			aside,
			sidebar,
			searcher,
			table;

		result = render(<App />);

		aside = screen.getByText((content, element) => element.tagName.toLowerCase() === 'aside');
		expect(aside).toBeInTheDocument();

		sidebar = result.container.querySelector('#sidebar');
		expect(sidebar).toBeInTheDocument();

		searcher = screen.getByText((content, element) => element.tagName.toLowerCase() === 'nav');
        expect(searcher).toBeInTheDocument();

        table = result.container.querySelector('#cities-table-wrapper');
        expect(table).toBeInTheDocument();
	})
});
