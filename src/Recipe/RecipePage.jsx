// src/RecipePage.jsx

import React from 'react';

function RecipePage() {
return (
<>
    {/* The DOCTYPE declaration is not needed in React */}
    <html>
    <head>
        {/* The title of the webpage */}
        <title>The Odin Recipes</title>
    </head>
    <body>
        {/* Header section with the main recipe title */}
        <header>
        <h1>Creamy Chocolate Fudge</h1>
        </header>

        {/* Image section with an alt attribute for accessibility */}
        <img src="path/to/your/image.jpg" alt="Chocolate Fudge" />

        {/* Description section */}
        <h2>Description</h2>
        <p>Description of the creamy chocolate fudge recipe goes here.</p>

        {/* Ingredients section */}
        <h2>Ingredients</h2>
        <ul>
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        {/* Add more ingredients as needed */}
        </ul>

        {/* Steps section */}
        <h2>Steps</h2>
        <ol>
        <li>Step 1: Do something</li>
        <li>Step 2: Do something else</li>
        {/* Add more steps as needed */}
        </ol>

        {/* More Recipes section */}
        <h2>More Recipes</h2>
        <ul>
        <li><a href="#">Recipe 1</a></li>
        <li><a href="#">Recipe 2</a></li>
        {/* Add more recipe links as needed */}
        </ul>
    </body>
    </html>
</>
);
}

export default RecipePage;
