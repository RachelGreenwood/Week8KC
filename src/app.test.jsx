import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from './App.jsx';
import Header from'./components/header.jsx';
import Item from './components/item.jsx';
import Form from './components/form.jsx'

describe("Testing the Header", () => {
    test("The Header renders", () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId("header")).toBeDefined();
    })

    test("Ensures header has correct text", () => {
        const {getByText} = render(<App/>);
        expect(getByText("Hello Techtonica!")).toBeDefined();
    })
})

describe("Testing the list", () => {
    test("List items render", () => {
        const item = {text: "Gratitude item"}
        const { getByTestId } = render(<Item item={item} />);
        expect(getByTestId("item")).toBeDefined();
    })
})

describe("Testing the form", () => {
    test("Form renders and is functional", () => {
        const { getByTestId } = render(<Form />);
        expect(getByTestId("form")).toBeDefined();
    })
})