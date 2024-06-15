function getGreetingMessage() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;
  
    if (hours<11) 
         {
      greeting="Good morning sir!,Have a Nice day";
         } 
    else if (hours<16)
         {
      greeting="Good afternoon sir!";
         } 
    else if(hours<20)
        {
            greeting="Good evening sir!";
        }
    else
    {
        greeting="Good night sir!";
    }
  
    return greeting;
  }
  
  function showAlert() {
    const alertBox = document.getElementById('alert-box');
    const greetingMessage = document.getElementById('greeting-message');
  
    greetingMessage.innerText = getGreetingMessage();
    alertBox.style.display = 'block';
  }
  
  function closeAlert() {
    const alertBox = document.getElementById('alert-box');
    alertBox.style.display = 'none';
  }
  
  window.onload = showAlert;
  