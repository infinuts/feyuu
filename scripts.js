document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("script-modal");
    var btn = document.getElementById("show-script-btn");
    var closeBtn = document.querySelector(".close-button");
    var copyBtn = document.getElementById("copy-button");
    var scriptContent = document.getElementById("script-content");

    btn.addEventListener("click", function() {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    copyBtn.addEventListener("click", function() {
        var range = document.createRange();
        range.selectNode(scriptContent);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
    });

    modal.style.display = "none";
});
