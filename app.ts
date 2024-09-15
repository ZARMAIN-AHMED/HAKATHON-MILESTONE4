const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Handle profile picture
    const profilePicInput = document.getElementById('profilePic') as HTMLInputElement;
    let profilePicURL = '';
    if (profilePicInput.files && profilePicInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profilePicURL = e.target?.result as string;

            // Generate resume HTML with profile picture
            const resumeHTML = `
                <h2><b>Editable Resume</b></h2>
                <img src="${profilePicURL}" alt="Profile Picture" style="width:150px; height:150px; border-radius:50%;"><br/>
                <h3>Personal Information</h3>
                <p><b>Full Name:</b><span contenteditable="true"> ${name}</span></p>
                <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
                <p><b>Phone:</b><span contenteditable="true"> ${phone}</span></p>
                <h3>Education:</h3>
                <p<span contenteditable="true">${education}</span></p>

                <h3>Experience:</h3>
                <p<span contenteditable="true">${experience}</span></p>
                
                <h3>Skills:</h3>
                <p<span contenteditable="true">${skills}</span></p>
            `;

            // Display the generated resume
            if (resumeDisplayElement) {
                resumeDisplayElement.innerHTML = resumeHTML;
            }
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    } else {
        console.error('Profile picture file is missing.');
    }
});
