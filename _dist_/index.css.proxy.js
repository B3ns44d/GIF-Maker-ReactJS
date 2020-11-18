// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background: -webkit-gradient(linear, left top, right top, from(#4568dc), to(#b06ab3));\n  background: linear-gradient(to right, #4568dc, #b06ab3);\n  color: #D7D7EF;\n  font-family: 'Lato', sans-serif;\n}\n\nh2 {\n  margin: 50px 0;\n}\n\nsection {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\na{\n  text-decoration: none;\n  color: white;\n}\n.button {\n  margin: 20px;\n  display: inline-block;\n  padding: 15px;\n  margin-right: 5px;\n  height: 50px;\n  min-width: 100px;\n  background: #348AA7;\n  border: none;\n  outline: none;\n  color: white;\n  font-family: inherit;\n  font-weight: 400;\n  font-size: 20px;\n  border-radius: 3px;\n  box-shadow: 0 5px 0px #348aa7;\n  border-bottom: 2px solid #30809b;\n  text-decoration: none;\n}\n.button:hover {\n  background: #2e7a94;\n  box-shadow: 0 4px 1px #2e7a94;\n  border-bottom: 2px solid #2a7088;\n  transition: all 0.1s ease-in;\n}\n.button:active {\n  transform: translateY(4px);\n  border-bottom-width: 2px;\n  box-shadow: none;\n}\n.file-drop-area {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 450px;\n  max-width: 100%;\n  padding: 25px;\n  border: 1px dashed rgba(255, 255, 255, 0.4);\n  border-radius: 3px;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.file-drop-area.is-active {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n\n.fake-btn {\n  flex-shrink: 0;\n  background-color: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n  padding: 8px 15px;\n  margin-right: 10px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.file-msg {\n  font-size: small;\n  font-weight: 300;\n  line-height: 1.4;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.file-input {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n  opacity: 0;\n}\n.file-input:focus {\n  outline: none;\n}\n\n\nfooter {\n  margin-top: 50px;\n}\nfooter a {\n  color: rgba(255, 255, 255, 0.4);\n  font-weight: 300;\n  font-size: 14px;\n  text-decoration: none;\n}\nfooter a:hover {\n  color: white;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}