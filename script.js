const form = document.querySelector(".contener");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#hig").value);
  const weigth = parseInt(document.querySelector("#wid").value);
  const data = document.querySelector(".data");
  const info = document.querySelector(".info");

  if (height === "" || height < 0 || isNaN(height)) {
    data.innerHTML = `Please give Your height ${height}`;
  } else if (weigth === "" || weigth < 0 || isNaN(weigth)) {
    data.innerHTML = `Please give Your weight ${weigth}`;
  } else {
    const bmi = (weigth / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      data.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
      info.innerHTML = `<span>Under Weight</span>`;
    }
    else if(bmi>18.6 || bmi<24.9){
      data.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
      info.innerHTML = `<span>Normal</span>`;
    }
    else{
      data.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
      info.innerHTML = `<span>Over Weight</span>`;
    }
  }
});

// Highlight navbar links on scroll
const navLinks = document.querySelectorAll('.nav-links li');
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');

const observerOptions = {
  root: null,
  rootMargin: '-50px 0px -50px 0px', // slightly offset so it doesn't trigger too early or late
  threshold: 0.4 // Trigger when 40% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to the correct link based on the section
      if (entry.target.classList.contains('page1')) {
        navLinks[0].classList.add('active'); // Calculator
      } else if (entry.target.classList.contains('page2')) {
        navLinks[1].classList.add('active'); // Weight Guide
      } else if (entry.target.classList.contains('page3')) {
        navLinks[2].classList.add('active'); // Health Tips
      }
    }
  });
}, observerOptions);

if (page1) observer.observe(page1);
if (page2) observer.observe(page2);
if (page3) observer.observe(page3);
