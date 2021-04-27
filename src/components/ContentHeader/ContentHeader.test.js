import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ContentHeader from './ContentHeader';

const contentHeaderText = "Text";

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it("Render content header with text", () => {
    act(() => {
        render(<ContentHeader contentHeaderText={contentHeaderText} />, container);
    })
    expect(container.querySelector("[data-test-id='headerText']").textContent).toBe(contentHeaderText);
})