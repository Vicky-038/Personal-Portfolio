var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu=document.getElementById   ("sidemenu")     
function openmenu(){
  sidemenu.style.right="0";
}
function closemenu(){
  sidemenu.style.right="-200px";
}   

var typed = new Typed('#element', {
  strings: ['Web Developer', 'Programmer'],
  typeSpeed: 50,
});

document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting normally
  var formData = new FormData(this); // Create a FormData object to send form data

  // Send form data to the server using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'form.php', true);
  xhr.onload = function () {
      if (xhr.status === 200) {
          // On successful submission, display success message
          document.getElementById('message').innerHTML = '<div style="color: green;">Message  submitted successfully.</div>';
          // Clear form fields
          document.getElementById('myForm').reset();
          // Hide the success message after 3 seconds
          setTimeout(function () {
              document.getElementById('message').innerHTML = '';
          }, 3000);
      } else {
          // On error, display error message
          document.getElementById('message').innerHTML = '<div style="color: red;">Error occurred. Please try again later.</div>';
      }
  };
  xhr.send(formData); // Send form data
});
