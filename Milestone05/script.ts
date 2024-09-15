// Query form elements
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLInputElement;
const contactnoInput = document.getElementById('contactno') as HTMLInputElement;
const addressInput = document.getElementById('address') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLInputElement;
const generateButton = document.getElementById('generate-resume') as HTMLButtonElement;
const shareLinkElement = document.getElementById('share-link') as HTMLElement;

// Query resume display elements
const displayName = document.getElementById('display-name') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displaySkills = document.getElementById('display-skills') as HTMLElement;
const displayEducation = document.getElementById('display-education') as HTMLElement;
const displayContactNo = document.getElementById('display-contactno') as HTMLElement;
const displayAddress = document.getElementById('display-address') as HTMLElement;
const displayExperience = document.getElementById('display-experience') as HTMLElement;

// Add event listener to generate button
generateButton.addEventListener('click', () => {
    // Get values from form
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const skills = skillsInput.value.trim().split(',').map(skill => skill.trim());
    const education = educationInput.value.trim();
    const contactno = contactnoInput.value.trim();
    const address = addressInput.value.trim();
    const experience = experienceInput.value.trim();

    // Validate form inputs
    if (!name || !email || !skills.length || !education || !contactno || !address || !experience) {
        alert('Please fill in all fields.');
        return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email.');
        return;
    }

    // Generate unique resume URL
    const username = name.toLowerCase().replace(/\s+/g, '-');
    const resumeURL = `https://${username}.vercel.app/resume`;

    // Display shareable link
    shareLinkElement.innerHTML = `Shareable link: <a href="${resumeURL}" target="_blank">${resumeURL}</a>`;

    // Update the resume display with form values
    displayName.textContent = `Name: ${name}`;
    displayEmail.textContent = `Email: ${email}`;
    displayContactNo.textContent = `Contact No: ${contactno}`;
    displayAddress.textContent = `Address: ${address}`;
    displayExperience.textContent = `Experience: ${experience}`;
    
    // Clear previous skills and add new ones
    displaySkills.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        displaySkills.appendChild(li);
    });

    displayEducation.textContent = `Education: ${education}`;
});

// Make the resume display editable directly on the page
const resumeDisplay = document.getElementById('resume-display') as HTMLElement;
resumeDisplay.contentEditable = 'true';

//Make the link shareable
const shareableLink = document.getElementById("shareable-link") as HTMLAnchorElement;
shareableLink?.addEventListener("click",()=>{

})

//Download PDF
const downloadpdf = document.getElementById("downloadpdf") as HTMLButtonElement;
downloadpdf?.addEventListener("click",()=>{
    window.print();
})