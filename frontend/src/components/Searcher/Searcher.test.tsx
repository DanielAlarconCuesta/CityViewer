import { render, screen, fireEvent } from "@testing-library/react";

import Searcher from "./Searcher";

describe("Testing Searcher", () => {
    
    test("Renders", () => {

        let onChange;

        onChange = () => {};
        render(<Searcher handleOnChange={onChange} />);
    });

    test("Elements exist", () => {

        let onChange,
            button,
            nav,
            input;
        
        
        onChange = () => {};
        render(<Searcher handleOnChange={onChange} />);

        button = screen.getByRole("button");
        expect(button).toBeInTheDocument();

        button = screen.getByText('Clean');
        expect(button).toBeInTheDocument();

        nav = screen.getByText((content, element) => element.tagName.toLowerCase() === 'nav');
        expect(nav).toBeInTheDocument();

        input = screen.getByText((content, element) => element.tagName.toLowerCase() === 'input');
        expect(input).toBeInTheDocument();

    });

    test("Input onChange works", () => {

        let input,
            onChange;

        onChange = () => {};

        render(<Searcher handleOnChange={onChange} />);

        input = screen.getByText((content, element) => element.tagName.toLowerCase() === 'input');

        fireEvent.change(input, {target: {value: 'Spain'}});
        expect(input.value).toBe("Spain");
    });
})
