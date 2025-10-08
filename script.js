const foodCalories = {
    roti: 120,
    rice: 200,
    dal: 150,
    paneer: 265,
    chicken: 239
};

function calculateCalories() {
    const food = document.getElementById("food").value;
    const quantity = parseFloat(document.getElementById("quantity").value);

    if (quantity <= 0) {
        document.getElementById("result").innerText = "Please enter a valid quantity!";
        return;
    }

    const calories = foodCalories[food] * quantity;
    document.getElementById("result").innerText = `Total Calories: ${calories} kcal`;
}
