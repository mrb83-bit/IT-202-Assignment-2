// Reverse String Function
function reverseString() {
  const input = document.getElementById("reverseInput").value;
  const reversed = input.split("").reverse().join("");
  document.getElementById("reverseResult").innerText = "Reversed String: " + reversed;
}

// Palindrome Check Function
function checkPalindrome() {
  const input = document.getElementById("palindromeInput").value;
  const normalized = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = normalized.split("").reverse().join("");
  const result = normalized === reversed ? "Palindrome ✅" : "Not a Palindrome ❌";
  document.getElementById("palindromeResult").innerText = result;
}

// Tip Calculator Function
function calculateTotal() {
  const subtotal = parseFloat(document.getElementById("subtotal").value);
  const tipPercent = parseFloat(document.getElementById("tipPercent").value);

  if (isNaN(subtotal) || isNaN(tipPercent)) {
    document.getElementById("tipResult").innerText = "Please enter valid numbers.";
    return;
  }

  const tipAmount = subtotal * (tipPercent / 100);
  const total = subtotal + tipAmount;

  document.getElementById("tipResult").innerText =
    `Tip: $${tipAmount.toFixed(2)} | Total: $${total.toFixed(2)}`;
}
