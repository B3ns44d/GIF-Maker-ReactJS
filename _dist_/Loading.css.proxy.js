// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".loading{\n    font-family: 'Courier New', Courier, monospace;\n    position:absolute;\n    height: 50%;\n    bottom:0px;\n    right:25%;\n    left:50%;\n    margin-left:-150px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}