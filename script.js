document.addEventListener("DOMContentLoaded", function () {
   const form_submit = document.getElementById('form-submit');
   form_submit.addEventListener("submit", function (event) {
      Swal.fire(
         'Good job!',
         'please, check your email!',
         'success'
      )
         
      const email_form = document.getElementById('email-form');
      email_form.value=""
      event.preventDefault();
   });
});