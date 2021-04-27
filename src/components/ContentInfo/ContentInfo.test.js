import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ContentInfo from './ContentInfo';

const contentInfoText = "Text";

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

it("Render content info with text", () => {
    act(() => {
        render(<ContentInfo contentText={contentInfoText} />, container);
    })
    expect(container.querySelector("[data-test-id='contentInfoText']").textContent).toBe(contentInfoText);
})