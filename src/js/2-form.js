const formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");
const formEmail = form.elements.email;
const formMessage = form.elements.message;
const key = "feedback-form-state";

form.addEventListener("input", (event) => {
    const { name, value } = event.target;
    if (name === "email" || name === "message") {
      formData[name] = value.trim();
      localStorage.setItem(key, JSON.stringify(formData));
    }
  });

function localData() {
    const storage = localStorage.getItem(key);
    if (storage) {
        const parsedData = JSON.parse(storage);
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";
        formEmail.value = formData.email;
        formMessage.value = formData.message;
    }
}

localData();

form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);   

    localStorage.removeItem(key);
    formData.email = "";
    formData.message = "";
    form.reset();
})
