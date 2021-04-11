import React from 'react';
import './ContentInfo.css';

const ContentInfo = ({contentText}) =>(
    <h3 data-test-id="contentInfoText" id="contentText">{contentText}</h3>
);

export default ContentInfo;