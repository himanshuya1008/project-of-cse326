// For Stripe
var stripe = Stripe('your_public_key');
var elements = stripe.elements();
var card = elements.create('card');

card.mount('#card-element');
