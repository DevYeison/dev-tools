import React from 'react';
import './ContentHeader.css';

const ContentHeader = ({ contentHeaderText }) => (
    <h2 data-test-id="headerText" id="contentHeader">{contentHeaderText}</h2>
);

export default ContentHeader;