

// questions array ka har element ek object hai jo ek sawal, uske options aur correct answer ko store karta hai.
var questions = [
    {
        id: 1,
        question: "HTML stand for",
        options: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",
        },
        answer: "Hyper text markup Language"
    },
    {
        id: 2,
        question: "Which type of JavaScript Languages is",
        options: {
            a: "Object-Oriented ",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",
        },
        answer: "Object-Base"
    },
    {
        id: 3,
        question: "The 'function' and  'var' are known as:",
        options: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",
        },
        answer: "Declaration statements"
    },
    {
        id: 4,
        question: "why do we use ReactJs?",
        options: {
            a: "For building UI's",
            b: "For back-end",
            c: "For data-bases",
            d: "It's nothing.",
        },
        answer: "For building UI's"
    },
    {
        id: 5,
        question: "How to write an IF statement in JavaScript?",
        options: {
            a: "if i == 5 then",
            b: "if i = 5",
            c: "if i = 5 then",
            d: "if (i == 5)",
        },
        answer: "if (i == 5)"
    },
    {
        id: 6,
        question: "How do you create a function in JavaScript?",
        options: {
            a: "function myFunction()",
            b: "function:myFunction()",
            c: "function = myFunction()",
            d: "= myFunction()",
        },
        answer: "function myFunction()"
    },
    {
        id: 7,
        question: "How do you call a function named 'myFunction'?",
        options: {
            a: "myFunction()",
            b: "call myFunction()",
            c: "call function myFunction()",
            d: "function myFunction()",
        },
        answer: "myFunction()"
    },
    {
        id: 8,
        question: "JavaScript is the same as Java.",
        options: {
            a: "True",
            b: "False",
        },
        answer: "False"
    },
    {
        id: 9,
        question: "What is the correct way to write a JavaScript array?",
        options: {
            a: "var colors = ['red', 'green', 'blue']",
            b: "var colors = (1:'red', 2:'green', 3:'blue')",
            c: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
            d: "var colors = 'red', 'green', 'blue'",
        },
        answer: "var colors = ['red', 'green', 'blue']"
    },
    {
        id: 10,
        question: "Which event occurs when the user clicks on an HTML element?",
        options: {
            a: "onclick",
            b: "onchange",
            c: "onmouseover",
            d: "onmouseclick",
        },
        answer: "onclick"
    }
]

// get username & email
var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
// innerHTML property ka use karke, local storage se user name or user email set kia.
userName.innerHTML = localStorage.getItem("name");
userEmail.innerHTML = localStorage.getItem("email");

// htmlQues aur htmlOptions elements ko get kiya ja raha hai jo question aur options show karte hain.
var htmlQues = document.getElementById("htmlQues")
var htmlOptions = document.getElementById("htmlOptions")

//indexNum ko 0 pe set kiya gaya hai, jo current question ka index hai.
var indexNum = 0

//correctAnsCount aur wrongAnsCont variables ko initialize kiya gaya hai correct aur wrong answers count karne ke liye.
var correctAnsCount = 0
var wrongAnsCont = 0


// currentCount aur totalCount elements ko get kiya ja raha hai aur totalCount ko questions array ke length se set kiya ja raha hai.
var currentCount = document.getElementById("currentCount");
var totalCount = document.getElementById("totalCount");
totalCount.innerHTML = questions.length  // question ki lenth set ki gahi hai.

//startQuiz function ko call kiya gaya hai jab page load hota hai 
function startQuiz() {
    // Pehle current question ko show karne ke liye htmlQues element ki innerHTML ko set kar rahe hain
    //questions[indexNum].question se current question ka text get karte hain aur htmlQues.innerHTML me set kar dete hain.
    htmlQues.innerHTML = questions[indexNum].question

    // Ab options ko clear karne ke liye htmlOptions element ki innerHTML ko empty kar rahe hain
    htmlOptions.innerHTML = ""

    // Ab hum loop laga kar har option ko list me add karenge
    for (var key in questions[indexNum].options) {
        // Har option ko variable 'option' me store kar rahe hain
        var option = questions[indexNum].options[key]
        // htmlOptions me naya list item (<li>) add kar rahe hain aur onclick event ko checkAnswer function se bind kar rahe hain
        htmlOptions.innerHTML += `<li onclick="checkAnswer(this)">${option}</li>`;
    }
}

// resultContainer, correctAns aur wrongAns elements ko get kiya ja raha hai.
var resultContainer = document.getElementsByClassName("resultContainer")[0] //resultContainer: Result dikhane ke liye container.
var correctAns = document.getElementById("correctAns") //correctAns: Correct answers count dikhane ke liye.
var wrongAns = document.getElementById("wrongAns")  //wrongAns: Wrong answers count dikhane ke liye.
var nextQuesBtn = document.getElementById("nextQuesBtn")
var quizContainer = document.getElementById("quizContainer")
var timer = document.getElementById("timer")



// timer function
var timer;
var timeLeft = 10;
timer.innerHTML = timeLeft

// Timer start karne ka function


function startTimer() {
    // Timer display ko reset karen
    var timerDisplay = document.getElementById("timer");
    timerDisplay.innerHTML = timeLeft;

    // Pehle se chal raha timer clear karen
    clearInterval(timer);

    // Naya timer start karen
    timer = setInterval(function() {
        timeLeft--;
        timerDisplay.innerHTML = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQues();
        }
    }, 1000);
}



function nextQues() {
    //Agar indexNum (current question index) questions array ki length se chhota hai, to questions baqi hain.
    if (indexNum < questions.length - 1) {
        indexNum++
        currentCount.innerHTML++  //currentCount.innerHTML ko bhi increment karte hain question number update ho jaye.
        //console.log("nextQues", indexNum)
        nextQuesBtn.className = "hide" //nextQuesBtn.className = "hide" se next button ko hide kar dete hain.
        startQuiz()
    } else {
        //console.log("Not")
        quizContainer.style.display = "none"
        resultContainer.className = "show"  //resultContainer.className = "show" se result container ko show kar dete hain.

        //correctAns.innerHTML = correctAnsCount aur wrongAns.innerHTML = wrongAnsCont se correct aur wrong answers count ko display kar dete hain.
        correctAns.innerHTML = correctAnsCount
        correctAns.style.color = "green"
        wrongAns.innerHTML = wrongAnsCont
        wrongAns.style.color = "red"

        // Calculate percentage
        var percentage = (correctAnsCount / questions.length) * 100;
        var percentageElement = document.createElement("p");
        percentageElement.innerHTML = `You got ${percentage.toFixed(2)}% correct.`;
        resultContainer.appendChild(percentageElement);
    }
    // console.log(correctAnsCount, "correctAnsCount")
    // console.log(wrongAnsCont, "wrongAnsCount")
}




function checkAnswer(ele) {
    //     console.log("check", ele.innerHTML === questions[indexNum].answer)
    //      console.log("questions[indexNum]", questions[indexNum].answer)
    clearInterval(timer);

    var lioption = document.getElementsByTagName("li")  //lioption variable me sabhi <li> elements ko get kiya hai.
    var isCheck = ele.innerHTML === questions[indexNum].answer  //isCheck variable check karta hai ke clicked element
    // isCheck variable check karta hai ke clicked element ka inner HTML current question ke correct answer ke barabar hai ya nahi.

    if (isCheck) {
        console.log("correct");
        ele.className = "correctAns"
        correctAnsCount++ // correctAnsCount++ se correct answers count increment hota hai.
    } else {
        console.log("Incorrect!");
        ele.className = "wrongAns"
        wrongAnsCont++ //wrongAnsCont++ se wrong answers count increment hota hai.

        //Ek loop sabhi list items (lioption) pe chalti hai aur jo correct answer hai usko correctAns class milti hai taake correct answer highlight ho jaye.
        for (var li of lioption) {
            if (li.innerHTML == questions[indexNum].answer) {
                li.className = "correctAns"
            }
        }
    }

    //Ek aur loop sabhi list items (lioption) pe chalti hai:
    for (var li of lioption) {
        console.log(li)
        li.style.pointerEvents = "none" //li.style.pointerEvents = "none" se har list item ko disable kar dete hain taake user dubara click na kar sake
        li.style.cursor = "no-drop !important"  //li.style.cursor = "no-drop !important" se cursor style change kar dete hain taake ye show ho ke items clickable nahi hain.
    }

    // show next Ques btn the selection
    nextQuesBtn.className = "show"
}
