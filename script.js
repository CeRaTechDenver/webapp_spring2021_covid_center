function updateCountryView() {
    var ddCountry = document.getElementById("ddCountry");
    var divCountry1 = document.getElementById("divCountry1")
    var divCountry2 = document.getElementById("divCountry2")


    if (ddCountry.value == "Yes") {
        divCountry1.classList.remove("invisibleClass");
        divCountry2.classList.remove("invisibleClass");
    }

    if (ddCountry.value == "No") {
        divCountry1.classList.add("invisibleClass");
        divCountry2.classList.add("invisibleClass");
    }
}

function validateForm() {

    //Check 1
    var DoB = document.querySelector("#txtDOB");
    var divDobError = document.querySelector("#divDobError");

    var formIsValid1 = true;
    var formIsValid2 = true;
    var formIsValid3 = true;

    var formIsValidFinal = true;


    if (DoB.value == "") {
        divDobError.classList.remove("invisibleClass");
        divDobError.innerHTML = "The date of birth can not be empty";
        DoB.classList.add("hasError");
        formIsValid1 = false;
    }

    else {

        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();


        if (DoBDate >= todayDate) {

            divDobError.classList.remove("invisibleClass");
            divDobError.innerHTML = "The date of birth must be before today";
            DoB.classList.add("hasError");
            formIsValid1 = false;
        }

        if (DoBDate < todayDate) {

            divDobError.classList.add("invisibleClass");
            divDobError.innerHTML = "";
            DoB.classList.remove("hasError");
            formIsValid1 = true;

        }

    }


    //Check 2
    var ddCountryBox = document.getElementById("ddCountry");
    var ddCountry = document.querySelector("#txtCountry");


    var divCountError = document.querySelector("#divCountryError");

    if (ddCountryBox.value == "Yes") {

        if (ddCountry.value == "") {

            ddCountry.classList.add("hasError");
            divCountError.classList.remove("invisibleClass");
            divCountError.innerHTML = "List atleast one country";
            divCountError.classList.add("hasError");
            formIsValid2 = false;
        }
        else {

            divCountError.classList.add("invisibleClass");
            divCountError.innerHTML = "";
            divCountError.classList.remove("hasError");
            formIsValid2 = true;

        }
    }

    //check 3

    var elements = document.getElementsByTagName("input");
    var invalidChars = ['&', '<', '>', '#', '!', '`', '"', '~'];
    var containsElement = false;


    for (let i = 0; i < elements.length; i++) {

        elements[i].classList.remove("hasError");
        elements[i].classList.remove("errorMessage");

        for (let j = 0; j < invalidChars.length; j++) {
            if (elements[i].value.indexOf(invalidChars[j]) != -1) {
                console.log("NOT VALID");
                elements[i].classList.add("hasError");
                elements[i].classList.add("errorMessage");
                containsElement = true;

                if (containsElement==true){
                formIsValid3 = false;
            }


            }  

            
        }

}




    console.log(formIsValid1);
    console.log(formIsValid2);
    console.log(formIsValid3);


    if ((formIsValid1 == true) && (formIsValid2 == true) && (formIsValid3 == true)){
        formIsValidFinal = true;
    }
    else{
        formIsValidFinal = false;
    }


    return formIsValidFinal ;
}