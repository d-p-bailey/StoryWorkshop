const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Temporary array to store generated story details
let generatedDetails = [];

// Route to generate story details
app.get('/generate', (req, res) => {
    // Call function to generate story details
    const storyDetails = generateStoryDetails();
    
    // Add generated details to temporary array
    generatedDetails.push(storyDetails);
    
    // Respond with generated story details
    res.json(storyDetails);
});

// Route to get all generated story details
app.get('/generated', (req, res) => {
    res.json(generatedDetails);
});

// Function to generate story details
function generateStoryDetails() {
    // Define story details
    const story = {
        narrativePerspective: getRandomPerspective(),
        theme: getRandomTheme(),
        setting: getRandomSetting(),
        conflict: getRandomConflict(),
        // Add more story details here
    };
    return story;
}

// Function to generate a random narrative perspective
function getRandomPerspective() {
    // Fill in logic to generate a random perspective
    const perspectives = ['First person', 'Third person limited', 'Third person omniscient'];
    return perspectives[Math.floor(Math.random() * perspectives.length)];
}

// Function to generate a random theme
function getRandomTheme() {
    // Fill in logic to generate a random theme
    const themes = ['Love', 'Friendship', 'Betrayal', 'Redemption'];
    return themes[Math.floor(Math.random() * themes.length)];
}

// Function to generate a random setting
function getRandomSetting() {
    // Fill in logic to generate a random setting
    const settings = ['Medieval castle', 'Futuristic city', 'Small town', 'Fantasy world'];
    return settings[Math.floor(Math.random() * settings.length)];
}

// Function to generate a random conflict
function getRandomConflict() {
    // Fill in logic to generate a random conflict
    const conflicts = ['Man vs. Nature', 'Man vs. Self', 'Man vs. Society', 'Man vs. Machine'];
    return conflicts[Math.floor(Math.random() * conflicts.length)];
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
