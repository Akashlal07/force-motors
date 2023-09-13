
        $(function () {
          $("form[name='contactForm']").validate({
            // Define validation rules
            rules: {
              name: "required",
              email: "required",
              phone: "required",
              state: "required",
              Location: "required",
              name: {
                required: true,
              },
              email: {
                required: true,
                email: true
              },
              phone: {
                required: true,
                minlength: 10,
                maxlength: 10,
                number: true
              },
              state: {
                required: true
              },
              Location: {
                required: true
              }
            },
            
            messages: {
              name: "Please provide a valid name.",
              email: {
                required: "Please enter your email",
                minlength: "Please enter a valid email address"
              },
              phone: {
                required: "Please provide a phone number",
                minlength: "Phone number must be min 10 characters long",
                maxlength: "Phone number must not be more than 10 characters long"
              },
  
              state: {
                required: "Please enter your state",
              },
              Location: {
                required: "Please enter a location",
              }
  
  
            },
            submitHandler: function (form) {
              form.submit();
            }
          });
        });
     
        $(document).ready(function () {
          // Fetching the JSON data
          $.getJSON('./ContactFormJson/dealerenqury.json', function (data) {
            // Populating the state dropdown
            $.each(data.states, function (index, state) {
              $('#state').append($('<option>').text(state.name));
            });
  
            // Handling state dropdown change event
            $('#state').on('change', function () {
              var selectedState = $(this).val();
              var cities = [];
  
              // Finding the selected state in the JSON data
              $.each(data.states, function (index, state) {
                if (state.name === selectedState) {
                  cities = state.cities;
                  return false; // Exit the loop
                }
              });
  
              // Populating the city dropdown with cities of the selected state
              $('#Location').empty().append($('<option>').text('Select a city'));
              $.each(cities, function (index, city) {
                $('#Location').append($('<option>').text(city));
              });
            });
          });
        });
      