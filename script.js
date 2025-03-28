const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

// Copy Markdown to Clipboard
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(markdownInput.value);
  alert("Markdown copied to clipboard!");
});

// Clear Markdown Input
clearBtn.addEventListener("click", () => {
  markdownInput.value = "";
  preview.innerHTML = "";
});

// Configure marked.js with highlight.js
marked.setOptions({
  highlight: function (code, lang) {
    return hljs.highlightAuto(code).value;
  },
  langPrefix: "hljs language-", // For highlight.js styling
});

// Function to update the preview
function updatePreview() {
  const markdownText = document.getElementById("markdownInput").value;
  document.getElementById("preview").innerHTML = marked.parse(markdownText);
}

// Add event listener for input changes
document
  .getElementById("markdownInput")
  .addEventListener("input", updatePreview);

// Initialize with sample markdown
document.getElementById("markdownInput").value =
  `# Markdown Previewer\n\n` +
  `This is a **live markdown previewer**. Type markdown in the left panel, and see the formatted output on the right.\n\n` +
  `## Features\n- Live Preview\n- Syntax Highlighting\n- Dark Mode\n- Mobile Responsive\n\n` +
  `### Code Block Example:\n\`\`\`javascript\nconsole.log("Hello, World!");\n\`\`\`\n`;

updatePreview();
