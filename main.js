// filepath: /d:/Folder/love-calculator/scripts/main.js
document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateMatch");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function() {
        const maleName = document.getElementById("maleName").value.trim().toLowerCase();
        const femaleName = document.getElementById("femaleName").value.trim().toLowerCase();

        if (maleName === "jenil" && femaleName === "shruti") {
            resultDiv.innerHTML = "100% match! It is a perfect match! ❤️❤️❤️ <br> I love you shruti";
        } else {
            resultDiv.innerHTML = "80% match!";
        }
    });
});