document.getElementById('submit-form').addEventListener('submit', SendMail);

function SendMail(event) {
  event.preventDefault();

  var name = document.getElementById('fname').value;
  var email = document.getElementById('lname').value;
  var phone = document.getElementById('phone').value;
  var message_me = document.getElementById('subject').value;

  if (fname === '' || lname === '' || phone === '' || subject === '') {
    alert('Please fill in all the fields.');
    return;
  }

  if (!validateEmail(lname)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!validatePhone(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    return;
  }
  if (!validateName(fname)) {
    alert('Please enter a valid name.');
    return ; 
}


  var templateParams = {
    name: fname,
    email: lname,
    phone: phone,
    message_me: subject
  };
  
  // emailjs.send('service_uxigsxo', 'template_v3kry6m', templateParams).then(
  //   (response) => {
  //     console.log('SUCCESS!', response.status, response.text);
  //     alert('success!');
  //   },
  //   (error) => {
  //     console.log('FAILED...!', error);
  //     alert("failed");
  //   },
  // );

function validateEmail(lname) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  return /^\d{10}$/.test(phone);
}

function validateName(fname) {
  const nameRegex = /^[A-Za-z\s]+$/;
  return nameRegex.test(name) && name.trim().length > 0;
}

}
