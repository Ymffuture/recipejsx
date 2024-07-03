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
    </div>
  );
}

