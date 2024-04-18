const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const formValue = {};

const input = form.elements.email;
const textarea = form.elements.message;


if (JSON.parse(localStorage.getItem(localStorageKey)) === null) {
}
else if (JSON.parse(localStorage.getItem(localStorageKey)).email !== undefined && JSON.parse(localStorage.getItem(localStorageKey)).message !== undefined) {
    input.value = (JSON.parse(localStorage.getItem(localStorageKey))).email;
    formValue.email = (JSON.parse(localStorage.getItem(localStorageKey))).email;
    textarea.value = (JSON.parse(localStorage.getItem(localStorageKey))).message;
    formValue.message = (JSON.parse(localStorage.getItem(localStorageKey))).message;
} else if (JSON.parse(localStorage.getItem(localStorageKey)).email === undefined) {
    textarea.value = (JSON.parse(localStorage.getItem(localStorageKey))).message;
    formValue.message = (JSON.parse(localStorage.getItem(localStorageKey))).message;
} else {
    input.value = (JSON.parse(localStorage.getItem(localStorageKey))).email;
    formValue.email = (JSON.parse(localStorage.getItem(localStorageKey))).email;
};


form.addEventListener("input", (ivent) => {
    
    formValue[ivent.target.name] = ivent.target.value
    localStorage.setItem(localStorageKey, JSON.stringify(formValue));
    
});

form.addEventListener("submit", (ivent) => {
    ivent.preventDefault();
    
    if (formValue.email === undefined || formValue.message === undefined) {
        alert("All fields must be filled!");
    
    } else {
        console.log(formValue);
        localStorage.removeItem(localStorageKey);
        form.reset();
        delete formValue.email;
        delete formValue.message;
    } 
});