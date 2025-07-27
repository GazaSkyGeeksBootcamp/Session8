// Task 1
const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

const getTitle = editor.getUpperTitle.bind(editor); // Bind the getUpperTitle method to the editor object

console.log(getTitle()); // This will log "MY FIRST BLOG"

// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"
//-------------------------------------------------
// Task 2
const formHandler = {
  value: "initial",
  onChange(newValue) {
    this.value = newValue;
  },
};

function simulateInputChange(callback) {
  callback("updated");
}

simulateInputChange(formHandler.onChange); // initial cause this lost binding so the value is not updated
// ❓ Now log formHandler.value
console.log(formHandler.value); // "initial"

// Fix the bug using either .bind() or an arrow function (your choice).
simulateInputChange(formHandler.onChange.bind(formHandler));

// or using an arrow function
// as i exppect the arrow function keep the context of the formHandler object 
simulateInputChange(() => formHandler.onChange("updated"));


// Now log formHandler.value again
console.log(formHandler.value); // "updated"
// i use the bind method cause lost binding and choose it specifically cause we assign callback as a reference to the function

// Task 3
const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

function logLanguageInfo(getter) {
    console.log(getter.call(translator)); // i use the call method cause to ensure that 'this' refers to the translator object even pass jus getLanguage as an argument
}
// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.

logLanguageInfo(translator.getLanguage);