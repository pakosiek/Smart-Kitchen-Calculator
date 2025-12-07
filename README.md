# Smart Kitchen Converter 🍳

A dynamic Single Page Application (SPA) designed to help home cooks convert ingredients between volume (cups, spoons) and weight (grams) units, taking ingredient density into account. It also features a recipe portion scaler and real-time nutrition calculation.

[Link to Live Demo]([https://pakosiek.github.io/Smart-Kitchen-Calculator/])

## 🚀 Key Features

* **Density-Based Conversion:** Unlike standard calculators, this tool distinguishes between ingredients (e.g., converting a cup of flour gives a different weight than a cup of sugar).
* **Recipe Scaler:** Dynamic adjustment of ingredient portions based on the desired number of servings.
* **Internationalization (i18n):** Full support for 3 languages: English, Polish, and Greek.
* **Nutrition Calculator:** Real-time calculation of macro-nutrients (Kcal, Protein, Fat, Carbs) based on current ingredient amounts.
* **Smart Grammatical Inflection:** Handles plural forms correctly for different languages (e.g., "1 łyżka", "5 łyżek").

## 🛠 Tech Stack

* **Core:** Vanilla JavaScript (ES6+)
* **UI/UX:** HTML5, CSS3 (Responsive Design)
* **Data Structure:** JSON-like objects for storing ingredient properties (density, nutrition facts).

## 💡 How it works

The core logic relies on an `ingredients` database where each item has a specific density factor (g/ml).
```javascript
// Example logic snippet
if (fromType === 'volume' && toType === 'weight') {
    let grams = baseValue * density; //Density is crucial here
    result = grams / toVal;

}
