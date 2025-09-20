function copyEmail() {
    var copyText = "angiel.4work@gmail.com";
  
    // Copy the text
    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    alert("Copied the text: " + copyText);
}

function updateTime() {
    var date = new Date();
    var time = date.toLocaleTimeString();

    document.getElementById('time').innerHTML = time;

    setInterval(updateTime, 1000);
}

// Start the time updates
window.onload = function() {
    updateTime();
};

  