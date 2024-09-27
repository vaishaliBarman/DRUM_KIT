 
// List of local sound files
const sounds = [
    'sound/drum1.mp3',
    'sound/drum2.mp3',
    'sound/drum3.mp3',
    'sound/drum4.mp3',
    'sound/drum5.mp3',
    'sound/drum6.mp3',
    'sound/drum7.mp3',
    'sound/drum8.mp3',
    'sound/drum9.mp3',
    'sound/drum10.mp3',
    'sound/drum11.mp3'
    // Add more sound files if needed
];

// Variable to store the currently playing audio and timeout
let currentAudio = null;
let audioTimeout = null;

// Function to get a random sound from the array
function getRandomSound() {
    return sounds[Math.floor(Math.random() * sounds.length)];
}
function hideParagraph() {
    document.getElementById("paragraph").style.display = "none";
}


// Function to play sound for 5 seconds and stop previous audio
function playSound(sound) {
    // Stop the currently playing sound if there is one
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        clearTimeout(audioTimeout);
    }

    // Create a new Audio object and play the new sound
    currentAudio = new Audio(sound);
    currentAudio.play();

    // Stop the sound after 5 seconds
    audioTimeout = setTimeout(() => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
        }
    }, 5000);
}

// Add event listeners to each drum button
const drums = document.querySelectorAll(".drum");

drums.forEach(drum => {
    drum.addEventListener("click", () => {
        const sound = getRandomSound();
        playSound(sound); // Play a random local sound
    });
});

// Play the sound when a key is pressed
document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    const drum = document.querySelector(`.drum[data-key="${key}"]`);

    if (drum) {
        const sound = getRandomSound();
        playSound(sound); // Play a random local sound
    }
});


