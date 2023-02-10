import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  //nunca poner un hook dentro de un if
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (
      !categories.findIndex(
        (category) => category.toLowerCase() === newCategory.toLowerCase()
      )
    )
      return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp </h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category}/>
      ))}
      
    </>
  );
};
