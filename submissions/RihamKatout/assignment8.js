// Task 1: Fix the Lost Context
const editor = {
  title: "my first blog",
  getUpperTitle() {
    return this.title.toUpperCase();
  },
};

// Problem: When we extract the method this becomes undefined
const getTitle = editor.getUpperTitle;

const fixedGetTitle = editor.getUpperTitle.bind(editor);

console.log(fixedGetTitle());

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
// 1. will stay "initial"
console.log("formHandler.value before:", formHandler.value);

simulateInputChange(formHandler.onChange);
console.log("formHandler.value after:", formHandler.value);

// 2. fix using bind
formHandler.value = "initial";
simulateInputChange(formHandler.onChange.bind(formHandler));
console.log("formHandler.value after bind fix:", formHandler.value);

// 3. I used bind because it explicitly binds the context to the formHandler object

// Task 3: Method Extraction Issue
const translator = {
  language: "Arabic",
  getLanguage() {
    return `Current language: ${this.language}`;
  },
};

function logLanguageInfo(getter) {
  const boundGetter = getter.bind(translator);
  console.log(boundGetter());
}

logLanguageInfo(translator.getLanguage);
