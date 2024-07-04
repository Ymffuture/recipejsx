import React from 'react';
import './page1.scss';

export default function Page1() {
  const ingredients = [
    { amount: "2 cups", weight: "260 grams", item: "all-purpose flour", note: "or 2 1/4 cups pastry flour, sifted" },
    { amount: "1/2 cup", item: "sugar" },
    { amount: "1 tablespoon", item: "baking powder" },
    { amount: "1/2 teaspoon", item: "salt" },
    { amount: "1/4 teaspoon", item: "ground cinnamon" },
    { amount: "1/8 teaspoon", item: "freshly ground nutmeg" },
    { amount: "1 cup", item: "whole milk" },
    { amount: "1 teaspoon", item: "pure vanilla extract" },
    { amount: "1", item: "large egg" },
    { amount: "4 tablespoons", weight: "2 ounces", item: "unsalted butter" }
  ];

  const steps = [
    "Gather the ingredients. Preheat your oven to 400 F.",
    "Combine the flour, baking powder, cinnamon, nutmeg, and salt.",
    "Heat the butter in the microwave, in a microwave-safe bowl, for about a minute, until it's thoroughly melted. Set it aside at room temperature to cool, but don't let it solidify again.",
    "Beat the eggs in a separate bowl and then add the sugar, milk, and vanilla.",
    "Thoroughly grease and flour a 12-cup muffin pan (or use paper muffin liners).",
    "Ensure that the melted butter is warm, but not hot. Pour a tiny bit of the butter into the egg-vanilla-milk mixture and stir it in. Repeat a few more times, adding a slightly larger amount of the liquid butter each time until it's all incorporated.",
    "Now add the liquid ingredients to the dry ones and mix just until the dry ingredients are barely incorporated. Don't mix too long—10 to 15 seconds at the most! The batter will be visibly lumpy, and you may see pockets of dry flour, but that's okay. Overmixing the batter will cause your muffins to be rubbery.",
    "Let the batter rest for 10 to 15 minutes, to allow the glutens in the flour to relax, and some of those pockets of dry flour to dissolve.",
    "Gently pour the batter into the prepared muffin pan and bake immediately.",
    "Bake 20 minutes or until a toothpick inserted into the center of a muffin comes out clean.",
    "Serve and enjoy."
  ];

  return (
    <div className="bread-page">
      <h1>Basic Muffin Recipe for Dozens of Muffin Options</h1>
      <p>
        Welcome to our bread section! Here you can find all kinds of freshly baked bread, made with the finest ingredients. Our bread is baked daily to ensure the best quality and taste. Whether you prefer whole grain, sourdough, or a classic baguette, we have something for everyone.
      </p>
      <img src="https://www.thespruceeats.com/thmb/HFlJi-AjjiAR_Ek6s5MvnFHwhM8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basic-muffin-recipe-simple-and-easy-995207-11-9_preview-5b105f2443a1030036685f01.jpeg" alt="Delicious freshly baked bread" />

      <div>
        <h1>Ingredients</h1>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.amount} {ingredient.weight && `(${ingredient.weight})`} {ingredient.item}
              {ingredient.note && `, ${ingredient.note}`}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1>Steps to Make It</h1>
        <ol className="recipe-steps">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
