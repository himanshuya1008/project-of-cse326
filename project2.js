document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    stripe.createToken(card).then(function(result) {
      if (result.error) {
        // Handle error
        console.error(result.error.message);
      } else {
        // Send the token to your server for processing
        var token = result.token.id;
        // You can send the token to your server using AJAX or any other method
      }
    });
  });
  