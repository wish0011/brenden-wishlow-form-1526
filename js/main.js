// event-target object
let btn = document.getElementById('button');

// reference to input that potentially contains data
let form = document.querySelector('form');
let fname = document.getElementById('full-name');
let email = document.getElementById('email');
let message = document.getElementById('message');

// Regular expression library:
// https://regexlib.com/?AspxAutoDetectCookieSupport=1
// Regex pattern that validates email
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// event-handler
function validateForm() {

    // clear the console
    console.clear();

    // bucket for collecting data
    let dataCollector = {};
    let errorCollector = [];

    // removing white space:
    fname.value = fname.value.trim();
    email.value = email.value.trim();
    message.value = message.value.trim();

    // validating full name
    if (fname.value !== '') {
        dataCollector.fullName = fname.value;
    } else {
        errorCollector.push('Please enter your full name.');
    }

    // validating email field
    if (email.value !== '') {

        // validate email format
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
        if (pattern.test(email.value)) {
            dataCollector.userEmail = email.value;
        } else {
            errorCollector.push('Email format is invalid');
        }

    } else {
        errorCollector.push('Please enter your email!');
    }

    // validating message field

    if (message.value !== '') {
        dataCollector.innerText = message.value;
    } else {
        errorCollector.push ('Please enter a message.')
    }

    // set the feedback/errors
    // if there is no errros
    if (errorCollector.length === 0) {
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
        
        // print data
        console.log(dataCollector);

        // clear the form
        form.reset();

    } else {
        // otherwise, print the error(s)
        console.log(errorCollector);
    }
}

// make validateForm listen for click event OR you could say
// register button btn for 'click' event
btn.addEventListener('click', validateForm);
