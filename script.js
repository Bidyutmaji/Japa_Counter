var clicks = 0;

function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

document.addEventListener('volumeupbutton', () => {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    //Do something here
  }, false);