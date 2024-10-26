// MarkdownRenderer.js
import React from 'react';
import { marked } from 'marked';
import '../styles/markdownStyles.css';

const MarkdownRenderer = ({ markdownText }) => {
 
  const htmlContent = marked(markdownText);

  return (
    <div
      className="markdown-body max-h-3/5 overflow-auto"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      />  
  );
};

export default MarkdownRenderer;
