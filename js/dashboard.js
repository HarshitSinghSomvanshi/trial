const user = JSON.parse(localStorage.getItem("user"));

document.getElementById("welcome").innerText =
  `Welcome ${user.name} (${user.role})`;

const data = getUserData(user.role);

// Skills
const skillsDiv = document.getElementById("skills");
for (let skill in data.skills) {
  skillsDiv.innerHTML += `<p>${skill}: ${data.skills[skill]}%</p>`;
}

// Salary
document.getElementById("salary").innerText =
  `Average Monthly Salary: ₹${Math.round(data.salary / 12)}`;

// Roadmap
const roadmapUl = document.getElementById("roadmap");
generateRoadmap(user.role).forEach(step => {
  roadmapUl.innerHTML += `<li>${step}</li>`;
});
