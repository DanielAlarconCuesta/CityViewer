import { render, screen } from "@testing-library/react";

import Sidebar from "./Sidebar";

describe("Testing Sidebar", () => {

    test("Renders", () => {

        render(<Sidebar />);
    });

    test("Elements Exist", () => {

        let sidebar,
            ul,
            result;

        result = render(<Sidebar />);

        sidebar = result.container.querySelector('#sidebar');
        expect(sidebar).toBeInTheDocument();

        ul = screen.getByText((content, element) => element.tagName.toLowerCase() === 'ul');
        expect(ul).toBeInTheDocument();


    });

})