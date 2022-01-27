(function contactForm() {
    const formDom = document.getElementById("contact-form");
    const submitBtn = formDom.children[3];

    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const name = formDom.children[0].value;
      const email = formDom.children[1].value;
      const message = formDom.children[2].value;
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
  