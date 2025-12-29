<script>
function openOnboard() {
  document.getElementById("onboard").classList.remove("hidden");
}

function startJourney() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;

  if (!name) {
    alert("Please enter your name");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ name, role }));

  // Elegant transition
  document.querySelector(".onboard-card").style.animation =
    "fadeOut 0.6s forwards";

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 600);
}
</script>
