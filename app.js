//1st way create form,

// var formContainer = document.getElementById("formContainer")
// var startContainer = document.getElementById("startContainer")


// function formSubmitHandler() {
//     var name = document.getElementById("name")
//     var email = document.getElementById("email")
//     var nameError = document.getElementById("nameError")
//     var emailError = document.getElementById("emailError")


//     if (!name.value) {
//         nameError.className = "show"
//         nameError.style.color = "red"
//         console.log(nameError)
//         return
//     }

//     if (!email.value) {
//         emailError.className = " show"
//         emailError.style.color = "red"
//         return



//     }



//     localStorage.setItem("name", name.value)
//     localStorage.setItem("email", email.value)

//     formContainer.className = " hide"
//     startContainer.className = "show"
//     // console.log("form submitted!")

// }






//2nd way creat corm

function formSubmitHandler(event) { //event parameter form submit event ko represent karta hai.
    event.preventDefault(); // Yeh line form ke default submit behavior ko rokti hai (jo page ko reload kar sakta hai).


    // Get the form elements and variables mein store kar rahi hain taake hum unko use kar sakein. 
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const formContainer = document.getElementById('formContainer');

    // Basic validation
    let valid = true; //Yeh variable initially true set kiya gaya hai taake form valid ho.


    // Agar naam ka field khali hai toh: nameError.classList.remove('hide'); - Error message show karein.
    if (nameInput.value === '') {
        nameError.classList.remove('hide');
        nameError.style.color = "red"
        valid = false;
    } else {
        nameError.classList.add('hide'); //Agar naam ka field bhara hua hai toh: nameError.classList.add('hide'); - Error message hide karein.
    }

    // Email field ke liye bhi wahi steps follow kiye gaye hain jo naam field ke liye hain.
    if (emailInput.value === '') {
        emailError.classList.remove('hide');
        emailError.style.color = "red"

        valid = false;
    } else {
        emailError.classList.add('hide');
    }


    // Agar form valid hai:
    if (valid) {


        // Show the start container & element store in variable
        const startContainer = document.getElementById('startContainer');

        //local storage mein save karein.
        localStorage.setItem("name", nameInput.value)
        localStorage.setItem("email", emailInput.value)

        startContainer.classList.remove('hide'); //Start container ko show karein. hide class remove kare
        startContainer.classList.add('show'); //Start container ko show class den.
        formContainer.style.display = "none" //Form container ko hide karein.



    }
}


// Attach the form submit handler to the form
// Yeh line pehla <form> element jo HTML document mein milta hai, usko select karti hai. querySelector method sa. addEventListener select kiya hua form element ke saath submit event listener ko attach karti hai.
//'submit' event form submit hone par trigger hota hai. formSubmitHandler ek callback function hai jo event trigger hone par call hota hai.
document.querySelector('form').addEventListener('submit', formSubmitHandler);
