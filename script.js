// Sample candidate data (replace with your own data or fetch from a backend)
const candidates = [
  { name: 'John Morrison', location: 'New York', jobRole: 'Software Developer' },
  { name: 'Will Smith', location: 'San Francisco', jobRole: 'UX Designer' },
  { name: 'Michael Jackson', location: 'London', jobRole: 'Project Manager' },
  { name: 'Emily Clark', location: 'Chicago', jobRole: 'Data Analyst' },
  { name: 'Adnan Sami', location: 'India', jobRole: 'Software Developer' },
  { name: 'Jack Hemsworth', location: 'California', jobRole: 'Dancer' },
];

// DOM elements
const searchForm = document.getElementById('search-form');
const locationInput = document.getElementById('location');
const jobRoleInput = document.getElementById('job-role');
const searchResultsTable = document.getElementById('search-results-table');

// Event listener for form submission
searchForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const locationValue = locationInput.value.trim().toLowerCase();
  const jobRoleValue = jobRoleInput.value.trim().toLowerCase();

  // Filter candidates based on location and job role
  const filteredCandidates = candidates.filter(candidate => {
    const candidateLocation = candidate.location.toLowerCase();
    const candidateJobRole = candidate.jobRole.toLowerCase();
    return (
      candidateLocation.includes(locationValue) && candidateJobRole.includes(jobRoleValue)
    );
  });

  // Clear previous search results
  searchResultsTable.innerHTML = '';

  // Display search results
  filteredCandidates.forEach(candidate => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${candidate.name}</td>
      <td>${candidate.location}</td>
      <td>${candidate.jobRole}</td>
      <td><button class="evaluate-btn">Evaluate</button></td>
    `;
    searchResultsTable.appendChild(row);
  });

  // Add event listeners to the "Evaluate" buttons
  const evaluateButtons = document.getElementsByClassName('evaluate-btn');
  for (let i = 0; i < evaluateButtons.length; i++) {
    evaluateButtons[i].addEventListener('click', function () {
      const candidateName = filteredCandidates[i].name;
      // Perform evaluation logic for the candidate
      console.log(`Evaluating candidate: ${candidateName}`);
    });
  }
});
