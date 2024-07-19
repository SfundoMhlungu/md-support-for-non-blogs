// import "https://cdn.jsdelivr.net/npm/markdown-it@14.1.0/dist/markdown-it.min.js"
// console.log(markdownIt)
import markdownIt from './markdown-it.min.js'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import C from 'highlight.js/lib/languages/c.js';
import 'highlight.js/styles/dark.min.css';



hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('c', C);
// import "./Highlight/languages/javascript.js"
// import "./Highlight/styles/dark.min.css"
console.log(markdownIt)

function loadCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    document.head.appendChild(link);
  }
  
  loadCSS(chrome.runtime.getURL('./Highlight/styles/dark.min.css'));
  

// hljs.registerLanguage('javascript', javascript);
// hljs.registerLanguage('python', python);


const styles = `

pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}
.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}

`

const md = markdownIt({
  highlight: function (str, lang) {
    console.log("highlight js", lang);
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code class="hljs">${hljs.highlight(str, { language: lang }).value}</code></pre>`;
      } catch (__) {}
    }
    return ''; // use external default escaping
  }
});

const result = md.render('# markdown-it rulezz!');
console.log(result, "MARKDOWN RESULT")
// Wait for the DOM to load

function copyTextToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
      // Navigator clipboard api method'
      navigator.clipboard.writeText(text).then(() => {
          console.log('Text copied to clipboard');
      }).catch(err => {
          console.error('Error in copying text: ', err);
      });
  } else {
      // Fallback method for older browsers
      let textArea = document.createElement("textarea");
      textArea.value = text;
      
      // Set the textArea position and style to make it invisible
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      document.execCommand('copy');
      textArea.remove();
      console.log('Text copied to clipboard (fallback)');
  }
}






console.log("content script")
// document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        console.log("trying to find div element")
        const targetDiv_ = document.querySelector('.article-host.article-body.center-block');
        const shadowRoot = targetDiv_.shadowRoot
       
        const targetDiv =  shadowRoot.querySelector('.fr-view.article-body');
        console.log(targetDiv)
        // setTimeout(() => {
        //     console.log(t)
        // }, 10000);
        
        if (targetDiv) {
          let textBlob = "";
      
          // Get all p elements
          // const paragraphs = targetDiv.getElementsByTagName('p');
          targetDiv.childNodes.forEach((e)=> {
            // console.log(e, "child nodes")
            e.childNodes.forEach(m=> {
              if (m.nodeType === Node.TEXT_NODE) {
                // Append the text content
                textBlob += m.textContent;
            } else if (m.nodeName === 'BR') {
                // Append an empty line for <br> elements
                console.log("adding white space")
                textBlob += '\n';
            }
           
            })
             textBlob += '\n'
          })
          // console.log(paragraphs, "paragraphs")
          // for (let p of paragraphs) {
          //   const text = p.textContent.trim();
          //   // if (text.startsWith("kofi::code::start") && text.endsWith("kofi::code::end")) {
          //     textBlob += text + "\n";
          //   // }
          // }
      
          console.log(textBlob, "blob")
          copyTextToClipboard(textBlob);
          // Parse markdown using a markdown library (e.g., marked.js)
          const parsedMarkdown = md.render(textBlob);
          console.log(parsedMarkdown, "helllow")
      
          // Create a new div with the parsed content
          const newDiv = document.createElement('div');
          const css = document.createElement("style")
          css.type = 'text/css';
          css.innerHTML = styles
          shadowRoot.appendChild(css)
          newDiv.innerHTML = parsedMarkdown;
          
          // Replace the old div with the new one
          targetDiv.parentNode.replaceChild(newDiv, targetDiv);
        }
    }, 3000);
  
//   });
  