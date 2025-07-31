const editor = {
  title: "my first blog",
  getUpperTitle() {
    return this.title.toUpperCase();
  },
};

// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"
const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());

// -----------------------------------------------------------------------------------------

const formHandler = {
  value: "initial",
  onChange(newValue) {
    this.value = newValue;
  },
};

function simulateInputChange(callback) {
  callback("updated");
}

// simulateInputChange(formHandler.onChange.bind(formHandler));
simulateInputChange((value) => formHandler.onChange(value));

// ❓ Now log formHandler.value
console.log(formHandler.value);

/*
i used bind(formHandler), so in this case 'this' will always refer to value from the object 'formHandler'
so 'value' prop will be changed to 'updated', so in 'onChange' 'this.value' will be refer to the value inside the object.
*/

// -----------------------------------------------------------------------

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
