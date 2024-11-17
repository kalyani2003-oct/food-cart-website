const menuItems = {
    appetizers: {
      vegetarian: [
        { name: "Vegetable Spring Rolls", price: 199 },
        { name: "Paneer Tikka", price: 249 },
        { name: "Mushroom Soup", price: 149 },
      ],
      nonVegetarian: [
        { name: "Chicken Wings", price: 299 },
        { name: "Fish Fingers", price: 349 },
        { name: "Prawn Cocktail", price: 399 },
      ],
    },
    mainCourse: {
      vegetarian: [
        { name: "Vegetable Biryani", price: 299 },
        { name: "Paneer Butter Masala", price: 349 },
        { name: "Aloo Gobi", price: 249 },
      ],
      nonVegetarian: [
        { name: "Chicken Tikka Masala", price: 399 },
        { name: "Fish Curry", price: 449 },
        { name: "Mutton Rogan Josh", price: 499 },
      ],
    },
    desserts: [
      { name: "Ice Cream", price: 99 },
      { name: "Chocolate Lava Cake", price: 149 },
      { name: "Fruit Salad", price: 129 },
    ],
  };
  
  function generateMenu(menuSectionId, categoryName, items) {
    const menuSection = document.getElementById(menuSectionId);
    const categoryHeader = document.createElement("h3");
    categoryHeader.textContent = categoryName;
    menuSection.appendChild(categoryHeader);
  
    const itemList = document.createElement("ul");
    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - ₹${item.price}`;
      itemList.appendChild(listItem);
    });
  
    menuSection.appendChild(itemList);
  }
  
  // Generate the menu
  const menuItemsSection = document.getElementById("menu-items");
  
  // Appetizers
  generateMenu(menuItemsSection, "Vegetarian Appetizers", menuItems.appetizers.vegetarian);
  generateMenu(menuItemsSection, "Non-Vegetarian Appetizers", menuItems.appetizers.nonVegetarian);
  
  // Main Course
  generateMenu(menuItemsSection, "Vegetarian Main Course", menuItems.mainCourse.vegetarian);
  generateMenu(menuItemsSection, "Non-Vegetarian Main Course", menuItems.mainCourse.nonVegetarian);
  
  // Desserts
  generateMenu(menuItemsSection, "Desserts", menuItems.desserts);