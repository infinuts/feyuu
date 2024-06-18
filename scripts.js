document.addEventListener("DOMContentLoaded", function() {
    // Get the modal element and the button to show the modal
    var modal = document.getElementById("script-modal");
    var btn = document.getElementById("show-script-btn");
    var closeBtn = document.querySelector(".close-button");
    var copyBtn = document.getElementById("copy-button");
    var scriptContent = document.getElementById("script-content");

    // When the user clicks the button, display the modal
    btn.addEventListener("click", function() {
        modal.style.display = "block";
        // Ensure modal is centered
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
    });

    // When the user clicks on the close button or outside the modal, close it
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Copy script content to clipboard when copy button is clicked
    copyBtn.addEventListener("click", function() {
        // Create a range object to select text
        var range = document.createRange();
        range.selectNode(scriptContent);
        window.getSelection().removeAllRanges(); // Clear current selection
        window.getSelection().addRange(range); // Add range to selection
        document.execCommand("copy"); // Copy selected text
        window.getSelection().removeAllRanges(); // Clear selection again
    });

    // Initially hide the script modal on page load
    modal.style.display = "none";
});
