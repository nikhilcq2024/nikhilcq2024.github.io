/*
document.addEventListener("DOMContentLoaded", () => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    const hostElement = document.querySelector("funeral-stream");
    const shadowRoot = hostElement.shadowRoot;
    const hostElement1 = shadowRoot.querySelector("share-menu");
    const shadowRoot1 = hostElement1.shadowRoot;
    const style1 = document.createElement("style");
    style1.textContent = `
        #dialog{background: transparent !important; transform: none !important; position: fixed; top: 0; z-index: 999; margin: 0 !important; right: 60px;}
        #title{text-align: center !important;}
        #backdrop{background: transparent !important;}
        `;
    shadowRoot1.appendChild(style1);
  }, 10000);
});
function checkShadowRoot2() {
  const shadowRoot2 = shareMenu.shadowRoot;
  if (shadowRoot2) {
    clearInterval(interval); // Stop checking once shadowRoot2 is created
    alert("shadowRoot2 has been created!");
  }
}
*/
if (navigator.platform.indexOf("Mac") > -1) {
    const interval = setInterval(checkShadowRoot1, 500);
    var isShadow1Created = false;
    var shadowRoot1 = null;
    function checkShadowRoot1() {
      const hostElement1 = document.querySelector("funeral-stream");
      if (hostElement1) {
        shadowRoot1 = hostElement1.shadowRoot;
      }
      if (shadowRoot1) {
        clearInterval(interval);
        isShadow1Created = true;
      }
    }
  
    function checkShadowRoot2() {
      var shadowRoot2 = null;
      const hostElement2 = shadowRoot1.querySelector("share-menu");
      if (isShadow1Created && hostElement2) {
        shadowRoot2 = hostElement2.shadowRoot;
      }
      if (shadowRoot2) {
        clearInterval(interval2);
        const style = document.createElement("style");
        style.textContent = `
            #dialog{background: #fff !important; transform: none !important; position: fixed; top: 0; z-index: 999; margin: 0 !important; right: 170px;border-radius:3px;overflow:hidden;box-shadow:0 5px 9px 0 #00000030}
            #title{text-align: center !important;}
            #backdrop{background: transparent !important;}
            `;
        shadowRoot2.appendChild(style);
      }
    }
    const interval2 = setInterval(checkShadowRoot2, 500);
  } else {
    console.log("Non MAC");
  }  