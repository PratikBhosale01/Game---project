let userScore =0;
let compscore =0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const opt = ["rk","pr","sr"];
    const rndIdx = Math.floor(math.random() * opt.length);
    return opt[rndIdx];
};


const playGame =( userChoiceId ) => {
 console.log(userChoiceId);
};

choices.forEach((choice) => {
     console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoiceId = choice.getAttribute("id");
          playGame(userChoiceId);
    })
});