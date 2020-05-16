//
const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");

const result = document.querySelector(".result");
//attach event listner
form.addEventListener("submit", (e) => {
  e.preventDefault(); //default action is to refresh the page we dont want that

  let score = 0;
  //user answers from each input field weve cycled through those and
  //for each anwer we have an index to compare it
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //check answers if they are the same as index add 25 poitns if not default to 0
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // show resutls on page
  //get the text content of the span inside the result div
  scrollTo(0, 0);
  result.querySelector("span").textContent = `${score}%`;
  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(()=>{
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    }else{
      output++;
    }
  }, 10);
});

//window object(global object)
