// MarkdownRenderer.js
import React from 'react';
import { marked } from 'marked';
import '../styles/markdownStyles.css';

const MarkdownRenderer = ({ markdownText }) => {
 
  const htmlContent = marked(markdownText.solution);

  return (
    <div>
        <p>You : {markdownText.prompt}</p>
        <span>TolkToME :</span>
    <div
      className="markdown-body max-h-3/5 overflow-auto"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      </div>
  );
};

export default MarkdownRenderer;
