import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import CardWithImage from './CardWithImage';
import PriceImage from '../../assets/images/price.png';

let container = null;

let cardWithImage = {
    title: "Cotización",
    img: PriceImage,
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
        render(<CardWithImage img={cardWithImage.img} title={cardWithImage.title} description={cardWithImage.description}/>, container);
    })
    
    expect(container.querySelector("[data-test-id='cardImage']").getAttribute("src")).toBe(cardWithImage.img);
    expect(container.querySelector("[data-test-id='cardTitle']").textContent).toBe(cardWithImage.title);
    expect(container.querySelector("[data-test-id='cardText']").textContent).toBe(cardWithImage.description);
})