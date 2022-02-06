import { render, screen } from "@testing-library/react";

import Table from "./Table";

describe("Testing Table", () => {

    test("Renders", () => {
        render(<Table />)
    });

    test("Elements exist", () => {

        let result,
            mainDiv,
            table;

        result = render(<Table />);

        mainDiv = result.container.querySelector('#cities-table-wrapper');
        expect(mainDiv).toBeInTheDocument();

        table = screen.getByText((content, element) => element.tagName.toLowerCase() === 'table');
        expect(table).toBeInTheDocument();
    })
})
