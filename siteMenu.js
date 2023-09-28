
  // let img = ['zombe.png'];
  // let timer = setTimeout(()=>{

  //   let image = document.createElement('img');
  //   image.setAttribute('src','img/slider/'+img);

  //   let out = document.querySelector('.out');
  //   out.appendChild(image);

  // },2000);

  // info login
  const btn = document.querySelector(".btn"),
    formContainer = document.querySelector(".form_container"),
    btnClose = document.querySelector(".button_close"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    result = document.querySelector(".result"),
    btnLogin = document.querySelector(".button"),
    checkBox = document.getElementById("check"),
    contBox = document.querySelector('.content_box');

  const registerLink = document.getElementById("signup"),
    loginLink = document.getElementById("login");

  registerLink.addEventListener("click", () => {
    formContainer.classList.add("activeLoginForm");
  });

  loginLink.addEventListener("click", () => {
    formContainer.classList.remove("activeLoginForm");
  });

  let regExpWeek = /[a-z]/,
    regExpMedium = /\d+/,
    regExpStrong = /.[!,@,#,$,%,^,&,*,?,-,~,-,(,)]/;

  btn.addEventListener("click", () => {
  contBox.innerHTML ="";
     formContainer.classList.add("active");

  });

  btnClose.addEventListener("click", () => {
    formContainer.classList.remove("active");
    document.location.reload();
  });

  function checkValidation() {
    let valPassword = password.value;

    if (valPassword == "") {
      result.innerHTML = `<h4>String cannot be empty!</h4>`;
    }

    if (
      valPassword.match(regExpWeek) ||
      valPassword.match(regExpMedium) ||
      valPassword.match(regExpStrong)
    ) {
      result.textContent = "Password is weak";
      result.style.color = "#FF7400";
    }
    if (
      valPassword.match(regExpWeek) &&
      valPassword.match(regExpMedium) &&
      valPassword.length >= 5
    ) {
      result.textContent = "Password is medium";
      result.style.color = "#006363";
    }
    if (
      valPassword.match(regExpWeek) &&
      valPassword.match(regExpMedium) &&
      valPassword.match(regExpStrong)
    ) {
      result.textContent = "Password is strong";
      result.style.color = "#007241";
    }
  }
  let storageData = [];
  btnLogin.addEventListener("click", () => {
    let emailStorage = email.value;
    let passwordStorage = password.value;

    if (password.value == "" && email.value == "") {
      result.textContent = "lines musn't be empty";
      result.style.color = "orangered";
      return;
    }
    if (checkBox.checked) {
      storageData.push(emailStorage);
      storageData.push(passwordStorage);

      localStorage.setItem("storageData", JSON.stringify(storageData));
    }
  });

  // info contacts
 
function contacts (){
  const links = document.querySelectorAll(".nav_link"),
     allContent = document.querySelectorAll(".content");

  links.forEach((link, ind) => {
    link.addEventListener("click", () => {
      links.forEach((link) => {
        link.classList.remove("activeContact");
      });
      link.classList.add("activeContact");

      allContent.forEach((content) => {
        content.classList.remove("activeContact");
      });
      allContent[ind].classList.add("activeContact");
    });
  });
}

contacts();
  // sliders

  const sliderImg = document.querySelector(".slider-img"),
        prevBtn = document.querySelector('.prev-btn'),
        nextBtn = document.querySelector('.next-btn');

        prevBtn.addEventListener('click',prev);
        nextBtn.addEventListener('click',next);

  const images = [
    "caption1.jpg",
    "caption2.jpg",
    "caption3.jpg",
    "caption4.jpg",
    "caption5.jpg",
  ];

  let sliderIndex = 0;

  function prev() {
    if (sliderIndex <= 0) sliderIndex = images.length;
    sliderIndex--;
    return showSlide();
  }

  function next() {
    if (sliderIndex >= images.length - 1) sliderIndex = -1;
    sliderIndex++;
    return showSlide();
  }

  function showSlide() {
    return sliderImg.setAttribute("src", "img/slider/" + images[sliderIndex]);
  }
