let wrongAttempts = 0;

function checkInput() {
  const input = document.getElementById("secretInput").value.toLowerCase();

  if (input === "megumi") {
    window.location.href = "nextpage.html"; 
  } else {
    if (wrongAttempts % 2 === 0) {
      alert("pano mo pa namali yan mhen hahahaha");
    } else {
      alert("are we deadass rn gang 💔🥀");
    }
    wrongAttempts++;
  }
}