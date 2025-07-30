// Task 1: Fix the Lost Context
const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

const upperTitle = editor.getUpperTitle.bind(editor);
console.log(upperTitle());


// Task 2: Arrow or Regular?
const formHandler = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};

function simulateInputChange(callback) {
  callback('updated');
}

simulateInputChange(formHandler.onChange);

// ❓ Now log formHandler.value
console.log(formHandler.value); 

// 1. Predict what formHandler.value will be.
// still be "initial" because when onChange is passed as a callback, it loses its context and `this` becomes undefined, so it won't be changed

// 2. Fix the bug using either .bind() or an arrow function (your choice).
simulateInputChange(formHandler.onChange.bind(formHandler));
console.log(formHandler.value);

// 3. Explain which fix you used and why.
// I used .bind(formHandler) to keep the correct this context. When the method is passed as a callback, it loses its original this, so bind makes sure it still refers to formHandler. I used this fix because it's a simple and reliable way to control this in callbacks.


// Task 3: Method Extraction Issue
const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.
function logLanguageInfo(getter) {
  console.log(getter.call(translator));
}

logLanguageInfo(translator.getLanguage);
