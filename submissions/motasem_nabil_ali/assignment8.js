// Task 1: Fix the Lost Context
const editor = {
  title: "my first blog",
  getUpperTitle() {
    return this.title.toUpperCase();
  },
};

const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());

// Task 2: Arrow or Regular?
const formHandler = {
  value: "initial",
  onChange(newValue) {
    this.value = newValue;
  },
};

function simulateInputChange(callback) {
  callback("updated");
}

simulateInputChange((newValue) => formHandler.onChange(newValue));

// ❓ Now log formHandler.value
console.log(formHandler.value);
// 1. before correction, the value will be "initial" (no change)
// 2. after correction, the value will be "updated"
// 3. .bind() was used becuase we needed to ensure that "this" inside "onChange" refers to "formHandler", not the global context or the function caller's context.

// Task 3: Method Extraction Issue
const translator = {
  language: "Arabic",
  getLanguage() {
    return `Current language: ${this.language}`;
  },
};

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.

function logLanguageInfo(getter) {
  console.log(getter.call(translator));
}

logLanguageInfo(translator.getLanguage);
