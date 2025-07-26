/* -------------------- Task #1 -------------------- */
const editor = {
  title: "my first blog",
  getUpperTitle() {
    return this.title.toUpperCase();
  },
};

// this works fine, we can call the method directly without needing bind or anything else
// thats because we are calling it through the object so this stll refers to editor
console.log(editor.getUpperTitle()); // MY FIRST BLOG

// alternatively we can use bind to explicitly bind 'this' to the editor object
const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle()); // MY FIRST BLOG

// what felt weird at first is that the method works without bind but that's just because
// we are invoking it directly on the object so the context is preserved

/* -------------------- Task #2 -------------------- */
const formHandler = {
  value: "initial",
  onChange(newValue) {
    this.value = newValue;
  },
};

function simulateInputChange(callback) {
  callback("updated");
}

// here, we cant use the method directly like in Task #1
// because we are passing it as a callback, this gets lost
// so we need to bind it first to make sure this refers to formHandler
const boundOnChange = formHandler.onChange.bind(formHandler);
simulateInputChange(boundOnChange);
console.log(formHandler.value); // updated

// we use bind here to ensure this inside onChange still points to formHandler
// this way, the value gets updated correctly

/* -------------------- Task #3 -------------------- */
const translator = {
  language: "Arabic",
  getLanguage() {
    return `Current language: ${this.language}`;
  },
};

function logLanguageInfo(getter) {
  console.log(getter.call(translator));
}

// here we cant just pass getLanguage directly and expect it to work
// because its called inside another function, the this context will be lost
// so we use call to invoke the method with translator as the context
