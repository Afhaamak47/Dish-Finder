const btn = document.getElementById("btn");
const display = document.getElementById("recipe");

btn.addEventListener("click", function () {
  const input = document.getElementById("input").value.trim();
  if (!input) {
    alert("Please enter a value.");
    return;
  } else {
    getDish(input);
  }
});

const getDish = async (input) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
  );
  const data = await response.json();
  if (data.meals) {
    const meal = data.meals[0];
    display.innerHTML = `
            <img src="${meal.strMealThumb}" width="400" />
            <h2>${meal.strMeal}</h2>
            <p>${meal.strInstructions.slice(0, 300)}...</p>
            <a href = "${
              meal.strYoutube
            }" style="text-decoration: none;">YouTube Link</a>`;
  } else {
    alert("No recipe found for that dish.");
  }
};
