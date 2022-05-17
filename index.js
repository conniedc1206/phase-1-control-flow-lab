//Use if and else if statements to return the correct greeting based on the distance the passenger desires to travel.
function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    return 'This one is on me!';
  } 
  else if (ride > 400 && ride < 2000) {
    return 'That will be twenty bucks.';
  } 
  else if (ride > 2000 && ride < 2500) {
    return 'I will gladly take your thirty bucks.';
  } 
  else if (ride > 2500) {
    return 'No can do.';
  }
}

//Use a ternary operator to return the correct response based on the desired destination of the passenger.
function ternaryCheckCity(city){
  return ((city === 'NYC') ? 'Ok, sounds good.' : 'No go.');
}

//Use a switch statement to return a different response based on the generosity of the passenger's tip.
function switchOnCharmFromTip(tip){
  
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    case 'thanks for everything':
      return 'Bye.';
      break;
  }
}