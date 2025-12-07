// 1. DATA (Knowledge Base)

// List of ingredients and their density (g/ml)
const ingredients = [
    { 
        id: "maka-pszenna", 
        density: 0.64, 
        nutrition: { kcal: 364, protein: 10, fat: 1, carbs: 76 }, 
        names: {
            pl: "Mąka pszenna",        
            pl_recipe: "Mąki pszennej", 
            en: "Wheat flour", 
            el: "αλεύρι σίτου"
        }
    },
    { 
        id: "jajko", 
        density: 1.03,
        hideInConverter: true, 
        nutrition: { kcal: 155, protein: 13, fat: 11, carbs: 1.1 }, 
        names: {
            pl: "Jajka", 
            pl_recipe: "Jajek",        
            en: "Eggs", 
            el: "Αυγά"
        }
    },
    { 
        id: "mleko", 
        density: 1.03, 
        nutrition: { kcal: 42, protein: 3.4, fat: 1.5, carbs: 5 }, 
        names: {
            pl: "Mleko", 
            pl_recipe: "Mleka",        
            en: "Milk", 
            el: "Γάλα"
        }
    },
    { 
        id: "oliwa", 
        density: 0.92, 
        nutrition: { kcal: 884, protein: 0, fat: 100, carbs: 0 }, 
        names: {
            pl: "Oliwa", 
            pl_recipe: "Oliwy",         
            en: "Olive Oil", 
            el: "Ελαιόλαδο"
        }
    }
];

// Unit definitions
const units = {
    volume: [
        { id: 'ml', val: 1, names: { pl: 'Mililitry (ml)', en: 'Milliliters (ml)', el: 'ml' } },
        { id: 'tsp', val: 5, names: { pl: 'Łyżeczka (5ml)', en: 'Teaspoon', el: 'Κουταλάκι' } },
        { id: 'tbsp', val: 15, names: { pl: 'Łyżka (15ml)', en: 'Tablespoon', el: 'Κουταλιά' } },
        { id: 'cup', val: 250, names: { pl: 'Szklanka (250ml)', en: 'Cup', el: 'Φλιτζάνι' } }
    ],
    weight: [
        { id: 'g', val: 1, names: { pl: 'Gramy (g)', en: 'Grams (g)', el: 'Γραμμάρια' } },
        { id: 'kg', val: 1000, names: { pl: 'Kilogramy (kg)', en: 'Kilograms (kg)', el: 'Κιλά' } },
        { id: 'dag', val: 10, names: { pl: 'Dekagramy (dag)', en: 'Decagrams', el: 'dag' } }
    ]
};

// Interface translations
const uiTranslations = {
    pl: { 
        titleConverter: 'Przelicznik Składników', lblIngredient: 'Wybierz składnik:', lblAmount: 'Ilość:', 
        lblUnitFrom: 'Z jednostki:', lblUnitTo: 'Na jednostkę:', 
        titlePortions: 'Zmiana liczby porcji', lblPortionsOrig: 'Stara liczba porcji:', lblPortionsNew: 'Nowa liczba porcji:', lblAmountRecipe: 'Ilość składnika:',
        resNeed: 'Potrzebujesz:',
        recipeTitle: 'Przepis: Naleśniki',
        lblPortionsCount: 'Liczba porcji:',
        nutrTitle: 'Wartości odżywcze (Całość):',
        nutrKcal: 'Kcal', nutrProtein: 'Białko', nutrFat: 'Tłuszcze', nutrCarbs: 'Węgle',
        nutrInfo: '* Wartości przybliżone'
    },
    en: { 
        titleConverter: 'Ingredient Converter', lblIngredient: 'Select ingredient:', lblAmount: 'Amount:', 
        lblUnitFrom: 'From unit:', lblUnitTo: 'To unit:', 
        titlePortions: 'Portion Scaler', lblPortionsOrig: 'Original portions:', lblPortionsNew: 'New portions:', lblAmountRecipe: 'Ingredient amount:',
        resNeed: 'You need:',
        recipeTitle: 'Recipe: Pancakes',
        lblPortionsCount: 'Servings:',
        nutrTitle: 'Nutrition Facts (Total):',
        nutrKcal: 'Kcal', nutrProtein: 'Protein', nutrFat: 'Fat', nutrCarbs: 'Carbs',
        nutrInfo: '* Approximate values'
    },
    el: { 
        titleConverter: 'Μετατροπέας Συστατικών', lblIngredient: 'Επιλέξτε συστατικό:', lblAmount: 'Ποσότητα:', 
        lblUnitFrom: 'Από μονάδα:', lblUnitTo: 'Σε μονάδα:', 
        titlePortions: 'Αλλαγή Μερίδων', lblPortionsOrig: 'Αρχικές μερίδες:', lblPortionsNew: 'Νέες μερίδες:', lblAmountRecipe: 'Ποσότητα υλικού:',
        resNeed: 'Χρειάζεστε:',
        recipeTitle: 'Συνταγή: Τηγανίτες',
        lblPortionsCount: 'Μερίδες:',
        nutrTitle: 'Διατροφικά Στοιχεία (Σύνολο):',
        nutrKcal: 'Θερμίδες', nutrProtein: 'Πρωτεΐνη', nutrFat: 'Λιπαρά', nutrCarbs: 'Υδατάνθρακες',
        nutrInfo: '* Κατά προσέγγιση'
    }
};

// Dictionary of inflections for units [For 1, For 2-4, For 5+ and the rest]
const unitDeclensions = {
    pl: {
        cup: ["Szklanka", "Szklanki", "Szklanek"],
        tbsp: ["Łyżka", "Łyżki", "Łyżek"],
        tsp: ["Łyżeczka", "Łyżeczki", "Łyżeczek"],
        g: ["Gram", "Gramy", "Gramów"],
        ml: ["Mililitr", "Mililitry", "Mililitrów"],
        szt: ["Sztuka", "Sztuki", "Sztuk"],
        pcs: ["Sztuka", "Sztuki", "Sztuk"]
    },
    en: {
        cup: ["Cup", "Cups", "Cups"],
        tbsp: ["Tablespoon", "Tablespoons", "Tablespoons"],
        tsp: ["Tablespoon", "Tablespoons", "Tablespoons"],
        g: ["Gram", "Grams", "Grams"],
        ml: ["Milliliter", "Milliliters", "Milliliters"],
        szt: ["Piece", "Pieces", "Pieces"],
        pcs: ["Piece", "Pieces", "Pieces"]
    },
    el: {
        cup: ["Φλιτζάνι", "Φλιτζάνια", "Φλιτζάνια"],
        tbsp: ["Κουταλιά", "Κουταλιές", "Κουταλιές"],
        tsp: ["Κουταλάκι", "Κουταλάκια", "Κουταλάκια"],
        g: ["Γραμμάριο", "Γραμμάρια", "Γραμμάρια"],
        ml: ["ml", "ml", "ml"],
        szt: ["Τεμάχιο", "Τεμάχια", "Τεμάχια"],
        pcs: ["Τεμάχιο", "Τεμάχια", "Τεμάχια"]
    }
};

let currentLang = 'pl';

// 2. LOGIC AND INITIALIZATION

const BASE_PORTIONS = 4; 

function init() {
    populateSelects();
    setLanguage('pl');
    calculate();
}

function populateSelects() {
    const ingSelect = document.getElementById('ingredient-select');
    const unitFromSelect = document.getElementById('unit-from');
    const unitToSelect = document.getElementById('unit-to');

    ingSelect.innerHTML = '';
    unitFromSelect.innerHTML = '';
    unitToSelect.innerHTML = '';

    ingredients.forEach(ing => {
        if (ing.hideInConverter) return; 
        let opt = new Option(ing.names[currentLang], ing.id);
        opt.setAttribute('data-density', ing.density);
        ingSelect.add(opt);
    });

    const allUnits = [...units.volume, ...units.weight];
    allUnits.forEach(u => {
        unitFromSelect.add(new Option(u.names[currentLang], u.id));
        unitToSelect.add(new Option(u.names[currentLang], u.id));
    });

    unitFromSelect.value = 'cup'; 
    unitToSelect.value = 'g';   
}

function setLanguage(lang) {
    currentLang = lang;
    
    // 1. Button operation
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    // 2. Static text update (UI)
    const t = uiTranslations[lang];
    
    document.getElementById('title-converter').innerText = t.titleConverter;
    document.getElementById('lbl-ingredient').innerText = t.lblIngredient;
    document.getElementById('lbl-amount').innerText = t.lblAmount;
    document.getElementById('lbl-unit-from').innerText = t.lblUnitFrom;
    document.getElementById('lbl-unit-to').innerText = t.lblUnitTo;
    
    document.getElementById('txt-recipe-title').innerText = t.recipeTitle;
    document.getElementById('lbl-portions-count').innerText = t.lblPortionsCount;
    document.getElementById('txt-nutr-title').innerText = t.nutrTitle;
    document.getElementById('txt-nutr-kcal').innerText = t.nutrKcal;
    document.getElementById('txt-nutr-protein').innerText = t.nutrProtein;
    document.getElementById('txt-nutr-fat').innerText = t.nutrFat;
    document.getElementById('txt-nutr-carbs').innerText = t.nutrCarbs;
    document.getElementById('txt-nutr-info').innerText = t.nutrInfo;

    // 3. Application logic
    populateSelects();
    
    // Refresh the view
    calculate();
    if (typeof updateRecipe === "function") updateRecipe();
    if (typeof translateRecipe === "function") translateRecipe();
}

// Helper function: Returns the correct form of a word (e.g. 1 Glass, 5 Glasses
function getUnitLabel(unitId, count) {
    if (!unitDeclensions[currentLang] || !unitDeclensions[currentLang][unitId]) {
        return unitId; 
    }

    const forms = unitDeclensions[currentLang][unitId];
    const n = Math.abs(count); 

    // LOGIC FOR POLISH
    if (currentLang === 'pl') {
        if (n === 1) return forms[0]; 
        if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
            return forms[1]; 
        }
        return forms[2];
    }

    // LOGIC FOR OTHER LANGUAGES
    if (n === 1) return forms[0];
    return forms[1];
}

// 3. CONVERSION ALGORITHM 

function getUnitType(unitId) {
    if (units.volume.find(u => u.id === unitId)) return 'volume';
    if (units.weight.find(u => u.id === unitId)) return 'weight';
    return null;
}

function getUnitValue(unitId, type) {
    if (type === 'volume') return units.volume.find(u => u.id === unitId).val;
    if (type === 'weight') return units.weight.find(u => u.id === unitId).val;
    return 1;
}

function calculate() {
    const amount = parseFloat(document.getElementById('input-amount').value);
    const fromUnitId = document.getElementById('unit-from').value;
    const toUnitId = document.getElementById('unit-to').value;
    const ingredientId = document.getElementById('ingredient-select').value;
    
    if (isNaN(amount)) return;

    const ingredient = ingredients.find(i => i.id === ingredientId);
    const density = ingredient.density; 

    const fromType = getUnitType(fromUnitId);
    const toType = getUnitType(toUnitId);
    
    const fromVal = getUnitValue(fromUnitId, fromType); 
    const toVal = getUnitValue(toUnitId, toType);      

    let result = 0;
    let baseValue = amount * fromVal; 

    if (fromType === toType) {
        result = baseValue / toVal;
    } 
    else if (fromType === 'volume' && toType === 'weight') {
        let grams = baseValue * density;
        result = grams / toVal;
    } 
    else if (fromType === 'weight' && toType === 'volume') {
        let ml = baseValue / density;
        result = ml / toVal;
    }

    // Display: We use the new getUnitLabel function
    const fromName = getUnitLabel(fromUnitId, amount); 
    
    let displayedResult = parseFloat(result.toFixed(2));
    const toName = getUnitLabel(toUnitId, displayedResult);
    
    document.getElementById('result-display').innerText = `${amount} ${fromName} = ${displayedResult} ${toName}`;
}

// 4. PORTION ALGORITHM 
function changePortions(delta) {
    const input = document.getElementById('recipe-portions');
    let val = parseInt(input.value) || 0;
    val += delta;
    if (val < 1) val = 1;
    input.value = val;
    updateRecipe();
}

// The main logic of recipe scaling
function updateRecipe() {
    const input = document.getElementById('recipe-portions');
    const newPortions = parseFloat(input.value);
    if (!newPortions || newPortions <= 0) return;
    
    const ratio = newPortions / BASE_PORTIONS;
    const items = document.querySelectorAll('.recipe-item');

    items.forEach(item => {
        // 1. Change the number
        const qtySpan = item.querySelector('.qty');
        const baseAmount = parseFloat(qtySpan.getAttribute('data-base'));
        let newAmount = baseAmount * ratio;
        
        if (newAmount % 1 !== 0) newAmount = parseFloat(newAmount.toFixed(2)); 
        qtySpan.innerText = newAmount;

        // 2. Changing the name of the unit (Variant)
        const unitCode = item.getAttribute('data-unit');
        const unitSpan = item.querySelector('.unit-name');
        
        if (unitSpan && unitCode) {
            const newUnitName = getUnitLabel(unitCode, newAmount);
            unitSpan.innerText = newUnitName;
        }
    });

    calculateNutrition();
}

// NUTRITIONAL VALUES COUNTING FUNCTION
function calculateNutrition() {
    let total = { kcal: 0, protein: 0, fat: 0, carbs: 0 };
    const items = document.querySelectorAll('.recipe-item');

    items.forEach(item => {
        const id = item.getAttribute('data-id');
        const unit = item.getAttribute('data-unit');
        
        const qtySpan = item.querySelector('.qty');
        const currentAmount = parseFloat(qtySpan.innerText);

        const product = ingredients.find(i => i.id === id);
        
        if (product && product.nutrition) {
            let weightInGrams = 0;

            if (unit === 'g') {
                weightInGrams = currentAmount;
            } else {
                let unitVol = 1; 
                if (unit === 'tbsp') unitVol = 15;
                if (unit === 'tsp') unitVol = 5;
                if (unit === 'cup') unitVol = 250;
                if (unit === 'ml') unitVol = 1;

                const volumeML = currentAmount * unitVol;
                weightInGrams = volumeML * product.density;
            }

            const factor = weightInGrams / 100;

            total.kcal += product.nutrition.kcal * factor;
            total.protein += product.nutrition.protein * factor;
            total.fat += product.nutrition.fat * factor;
            total.carbs += product.nutrition.carbs * factor;
        }
    });

    document.getElementById('total-kcal').innerText = Math.round(total.kcal);
    document.getElementById('total-protein').innerText = Math.round(total.protein);
    document.getElementById('total-fat').innerText = Math.round(total.fat);
    document.getElementById('total-carbs').innerText = Math.round(total.carbs);
}

function translateRecipe() {
    const items = document.querySelectorAll('.recipe-item');

    items.forEach(item => {
        const id = item.getAttribute('data-id');
        const product = ingredients.find(i => i.id === id);
        
        if (product) {
            const nameSpan = item.querySelector('.ing-name');
            if (nameSpan) {
                if (currentLang === 'pl' && product.names.pl_recipe) {
                    nameSpan.innerText = product.names.pl_recipe;
                } else {
                    nameSpan.innerText = product.names[currentLang];
                }
            }
        }
    });
    document.querySelectorAll('.dynamic-note').forEach(note => {
        const text = note.getAttribute(`data-${currentLang}`);
        if (text) note.innerText = text;
    });
}

// Start
init();