document.getElementById("saveBtn").addEventListener("click", () => {
  chrome.storage.sync.set({
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    skills: document.getElementById("skills").value
  });
});