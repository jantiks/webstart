$('#brif-form').validate({
   rules: {
      username: {
         required: true,
         minlength: 2,
         maxlength: 15
      },
      email: {
         required: true,
         email: true
      },
      phone: {
         required: true,

      }
   },
   messages: {
      email: "Введите корректный email",
      username: "заполните поле",
      phone: "заполните поле"
   }
});
