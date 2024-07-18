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
            textBlob += '\n'
            })
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
          const parsedMarkdown = marked(textBlob);
      
          // Create a new div with the parsed content
          const newDiv = document.createElement('div');
          newDiv.innerHTML = parsedMarkdown;
      
          // Replace the old div with the new one
          targetDiv.parentNode.replaceChild(newDiv, targetDiv);
        }
    }, 3000);
  
//   });
  