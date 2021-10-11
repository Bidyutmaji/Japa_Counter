var clicks = 0;


document.addEventListener('click', () => {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    //Do something here
  }, false);