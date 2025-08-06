/* first */
const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle())
// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"

/* ------------------------------------ */

/* 2 1-use arrow function */
const formHandler = {
  value: 'initial',
  onChange:(newValue) =>{
	 formHandler.value = newValue;
  }
}
function simulateInputChange(callback) {
  callback('updated');
}
simulateInputChange(formHandler.onChange)


/* 1-Predict what formHandler.value will be */
console.log(formHandler.value)

/* 2 1-use bind  */
const formHandler1 = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};
function simulateInputChange(callback) {
  callback('updated');
}
simulateInputChange(formHandler1.onChange.bind(formHandler1));
console.log(formHandler1.value)

/* use bind to save write "onChange" as a method 
inside const formHandler1 to make this alawys refer 
to   formHandler1*/





/* ------------------------------------ */


const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};
function logLanguageInfo(getter){
	console.log(getter())
}
logLanguageInfo(()=>translator.getLanguage());
