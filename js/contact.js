(function contactForm() {
  const formDom = document.getElementById("contact-form");
  const submitBtn = formDom.children[6];

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const nameError = formDom.children[0]
    const emailError = formDom.children[2]
    const messageError = formDom.children[4]

    const name = formDom.children[1].value;
    const email = formDom.children[3].value;
    const message = formDom.children[5].value;


    nameError.style.visibility = "hidden"
    emailError.style.visibility = "hidden"
    messageError.style.visibility = "hidden"


    const emailRe =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!name) {
      // alert("please fill all the input");
      nameError.style.visibility = "visible"
    }
    if (!email) {
      emailError.style.visibility = "visible"
    }
    if (!message) {
      messageError.style.visibility = "visible"
    }
    if (!email.match(emailRe)) {
      emailError.style.visibility = "visible"
      // alert("email is invalid");
    } else {
      alert(name)
      alert(email)
      alert(message)
    }
  });
})();
