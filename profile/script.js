// Profile picture functionality code

// Declaring HTML Elements

const imgDiv = document.querySelector('#profile-pic');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

// If user hovers on profile-pic div

imgDiv.addEventListener('mouseover', () => {
    uploadBtn.style.display = 'block';
});

// If user hovers out of profile-pic div

imgDiv.addEventListener('mouseleave', () => {
    uploadBtn.style.display = 'none';
});

//  Image showing functionality when we choose an image to upload

file.addEventListener('change', () => {  // or function()

    const chosenFile = file.files[0];  // or this.files[0]

    if (chosenFile) {
        
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(chosenFile);
    }
});

