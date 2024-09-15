// Query form elements
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var skillsInput = document.getElementById('skills');
var educationInput = document.getElementById('education');
var contactnoInput = document.getElementById('contactno');
var addressInput = document.getElementById('address');
var experienceInput = document.getElementById('experience');
var generateButton = document.getElementById('generate-resume');
var shareLinkElement = document.getElementById('share-link');
// Query resume display elements
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displaySkills = document.getElementById('display-skills');
var displayEducation = document.getElementById('display-education');
var displayContactNo = document.getElementById('display-contactno');
var displayAddress = document.getElementById('display-address');
var displayExperience = document.getElementById('display-experience');
// Add event listener to generate button
generateButton.addEventListener('click', function () {
    // Get values from form
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var skills = skillsInput.value.trim().split(',').map(function (skill) { return skill.trim(); });
    var education = educationInput.value.trim();
    var contactno = contactnoInput.value.trim();
    var address = addressInput.value.trim();
    var experience = experienceInput.value.trim();
    // Validate form inputs
    if (!name || !email || !skills.length || !education || !contactno || !address || !experience) {
        alert('Please fill in all fields.');
        return;
    }
    // Simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email.');
        return;
    }
    // Generate unique resume URL
    var username = name.toLowerCase().replace(/\s+/g, '-');
    var resumeURL = "https://".concat(username, ".vercel.app/resume");
    // Display shareable link
    shareLinkElement.innerHTML = "Shareable link: <a href=\"".concat(resumeURL, "\" target=\"_blank\">").concat(resumeURL, "</a>");
    // Update the resume display with form values
    displayName.textContent = "Name: ".concat(name);
    displayEmail.textContent = "Email: ".concat(email);
    displayContactNo.textContent = "Contact No: ".concat(contactno);
    displayAddress.textContent = "Address: ".concat(address);
    displayExperience.textContent = "Experience: ".concat(experience);
    // Clear previous skills and add new ones
    displaySkills.innerHTML = '';
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill;
        displaySkills.appendChild(li);
    });
    displayEducation.textContent = "Education: ".concat(education);
});
// Make the resume display editable directly on the page
var resumeDisplay = document.getElementById('resume-display');
resumeDisplay.contentEditable = 'true';
//Make the link shareable
var shareableLink = document.getElementById("shareable-link");
shareableLink === null || shareableLink === void 0 ? void 0 : shareableLink.addEventListener("click", function () {
});
//Download PDF
var downloadpdf = document.getElementById("downloadpdf");
downloadpdf === null || downloadpdf === void 0 ? void 0 : downloadpdf.addEventListener("click", function () {
    window.print();
});
