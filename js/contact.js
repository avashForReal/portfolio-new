(function contactForm() {
    const formDom = document.getElementById("contact-form");
    console.log(formDom.children)
    const submitBtn = formDom.children[6];

    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const nameError = formDom.children[0]
      const emailError = formDom.children[0]
      const messageError = formDom.children[0]

      const name = formDom.children[1].value;
      const email = formDom.children[3].value;
      const message = formDom.children[5].value;
      const emailRe =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
      if (!name || !email || !message) {
        alert("please fill all the input");
      } else if (!email.match(emailRe)) {
        alert("email is invalid");
      } else {
        alert(name)
        alert(email)
        alert(message)
      }
    });
  })();
  