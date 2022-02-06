import { render, screen } from "@testing-library/react";

import Main from "./Main";

describe("Testing Main", () => {

    test("Renders", () => {

        render(<Main />);
    })

    test("Elements exist", () => {

        let result,
            main,
            nav,
            table;

        result = render(<Main />);

        main = screen.getByText((content, element) => element.tagName.toLowerCase() === 'main');
        expect(main).toBeInTheDocument();

        nav = screen.getByText((content, element) => element.tagName.toLowerCase() === 'nav');
        expect(nav).toBeInTheDocument();

        table = result.container.querySelector('#cities-table-wrapper');
        expect(table).toBeInTheDocument();
    })

})
