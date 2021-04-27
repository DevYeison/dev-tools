import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import CardWithImage from './CardWithImage';

let container = null;

let cardWithImage = {
    title: "Cotización",
    description: "herramienta"
}

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Render a card with image", () => {
    act(() => {
        render(<CardWithImage title={cardWithImage.title} description={cardWithImage.description}/>, container);
    })
    
    expect(container.querySelector("[data-test-id='cardTitle']").textContent).toBe(cardWithImage.title);
    expect(container.querySelector("[data-test-id='cardText']").textContent).toBe(cardWithImage.description);
})