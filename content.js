console.log("ZobsAI Autofill loaded");

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "AUTOFILL_FORM") {

    const DATA = {
      fullName: "Aman Verma",
      email: "aman@gmail.com",
      phone: "9870438103",
      skills: "Frontend Developer, JavaScript, React"
    };

    document.querySelectorAll("input, textarea").forEach((field) => {
      const key = (
        (field.placeholder || "") +
        (field.name || "") +
        (field.id || "")
      ).toLowerCase();

      if (field.value) return;

      if (key.includes("name")) field.value = DATA.fullName;
      else if (key.includes("email")) field.value = DATA.email;
      else if (key.includes("phone") || key.includes("mobile")) field.value = DATA.phone;
      else if (key.includes("skill") || key.includes("experience")) field.value = DATA.skills;

      field.dispatchEvent(new Event("input", { bubbles: true }));
      field.dispatchEvent(new Event("change", { bubbles: true }));
    });

    alert("✅ Autofill Done");
  }
});
