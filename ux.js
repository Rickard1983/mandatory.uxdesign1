

function textField(element) {
  let selectInput = element.querySelector(".mds-text-field__input");
  let label = element.querySelector(".mds-text-field__label");

  selectInput.addEventListener("focus", function() {
    label.classList.remove("mds-text-field__label--active__color");
    if (selectInput) {
      label.classList.add("mds-text-field__label--active");
    }
  });

selectInput.addEventListener("blur", function() {
  label.classList.add("mds-text-field__label--active__color");
  if (selectInput.value === "") {
    label.classList.remove("mds-text-field__label--active");
  }
  });
}

window.mds = {
  textField: textField,
  switch: empty,
  checkbox: empty,
  radioButton: empty,
};


function empty() {
}
