function displayScreen(screen_id)
{
  var screens = document.querySelectorAll('.screen')
  screens.forEach(scr => {
    console.log(scr.id, screen_id)
    if (scr.id == screen_id)
      scr.style.display = 'flex';
    else
      scr.style.display = 'none';
  })
}


document.addEventListener("DOMContentLoaded", function(){
  displayScreen('a');
});

document.getElementById('goA').addEventListener('click', () => {
  displayScreen('a');
})

document.getElementById('goB').addEventListener('click', () => {
  displayScreen('b');
})
