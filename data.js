const restaurants = [
  {
    id: 1,
    name: "Andhra Spice Kadapa",
    cuisine: "Biryani, Andhra",
    rating: 4.3,
    time: 30,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800",
    menu: [
      {
        name: "Chicken Biryani",
        price: 279,
        img: "https://images.unsplash.com/photo-1604908176997-4310dbe3b3e6?w=400",
      },
      {
        name: "Mutton Biryani",
        price: 349,
        img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400",
      },
    ],
  },
  {
    id: 2,
    name: "Rayalaseema Ruchulu",
    cuisine: "South Indian",
    rating: 4.1,
    time: 25,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
    menu: [
      {
        name: "Dosa",
        price: 79,
        img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Idli",
        price: 49,
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
      },
    ],
  },
  {
    id: 3,
    name: "Kadapa Tandoori House",
    cuisine: "North Indian",
    rating: 4.4,
    time: 35,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    menu: [
      {
        name: "Butter Chicken",
        price: 299,
        img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
      },
      {
        name: "Paneer Tikka",
        price: 249,
        img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400",
      },
    ],
  },
  {
    id: 4,
    name: "Spicy Street Eats",
    cuisine: "Fast Food",
    rating: 4.0,
    time: 20,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
    menu: [
      {
        name: "Veg Burger",
        price: 119,
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400",
      },
      {
        name: "French Fries",
        price: 99,
        img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400",
      },
    ],
  },
  {
    id: 5,
    name: "Hyderabad Dum Biryani",
    cuisine: "Biryani",
    rating: 4.5,
    time: 40,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800",
    menu: [
      {
        name: "Chicken Dum Biryani",
        price: 289,
        img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400",
      },
      {
        name: "Mutton Biryani",
        price: 349,
        img: "https://images.unsplash.com/photo-1563379091339-03246963d29d?w=400",
      },
    ],
  },

  // To keep response readable, remaining restaurants use same optimized stable pattern

  {
    id: 6,
    name: "Reddy Tiffins",
    cuisine: "Breakfast",
    rating: 4.2,
    time: 15,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800",
    menu: [
      {
        name: "Idli",
        price: 40,
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400",
      },
      {
        name: "Masala Dosa",
        price: 70,
        img: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400",
      },
    ],
  },
  {
    id: 7,
    name: "Pizza World Kadapa",
    cuisine: "Italian",
    rating: 4.3,
    time: 28,
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800",
    menu: [
      {
        name: "Margherita",
        price: 249,
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
      },
      {
        name: "Farmhouse",
        price: 299,
        img: "https://images.unsplash.com/photo-1601924582975-7e4c1d4f9e3f?w=400",
      },
    ],
  },

  {
    id: 8,
    name: "BBQ Nation Kadapa",
    cuisine: "Grill",
    rating: 4.6,
    time: 45,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800",
    menu: [
      {
        name: "Grilled Chicken",
        price: 349,
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400",
      },
      {
        name: "BBQ Wings",
        price: 299,
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
      },
    ],
  },

  {
    id: 9,
    name: "Royal Mughlai",
    cuisine: "Mughlai",
    rating: 4.4,
    time: 38,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
    menu: [
      {
        name: "Kebab Platter",
        price: 329,
        img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
      },
      {
        name: "Mutton Curry",
        price: 359,
        img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400",
      },
    ],
  },

  {
    id: 10,
    name: "Cafe Coffee Day Kadapa",
    cuisine: "Cafe",
    rating: 4.1,
    time: 20,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
    menu: [
      {
        name: "Cold Coffee",
        price: 149,
        img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400",
      },
      {
        name: "Chocolate Cake",
        price: 129,
        img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
      },
    ],
  },

  // Remaining restaurants (11–30) use same stable image style
  {
    id: 11,
    name: "Green Leaf Veg",
    cuisine: "Pure Veg",
    rating: 4.2,
    time: 27,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    menu: [
      {
        name: "Veg Thali",
        price: 199,
        img: "https://images.unsplash.com/photo-1604908177225-7a1d2d9f6e6d?w=400",
      },
      {
        name: "Paneer Curry",
        price: 219,
        img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
      },
    ],
  },

  {
    id: 12,
    name: "Chinese Wok",
    cuisine: "Chinese",
    rating: 4.0,
    time: 30,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800",
    menu: [
      {
        name: "Hakka Noodles",
        price: 179,
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400",
      },
      {
        name: "Manchurian",
        price: 189,
        img: "https://images.unsplash.com/photo-1604908177097-0f0c9f0d5c30?w=400",
      },
    ],
  },

  {
    id: 13,
    name: "Arabian Nights",
    cuisine: "Arabian",
    rating: 4.5,
    time: 35,
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800",
    menu: [
      {
        name: "Chicken Shawarma",
        price: 129,
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
      },
      {
        name: "Al Faham",
        price: 299,
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400",
      },
    ],
  },

  {
    id: 14,
    name: "Sweet Magic",
    cuisine: "Desserts",
    rating: 4.3,
    time: 18,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",
    menu: [
      {
        name: "Gulab Jamun",
        price: 99,
        img: "https://images.unsplash.com/photo-1599785209707-28d1e2c0c9e2?w=400",
      },
      {
        name: "Ice Cream",
        price: 89,
        img: "https://images.unsplash.com/photo-1505253210343-1f3c4a9c1b9e?w=400",
      },
    ],
  },

  {
    id: 15,
    name: "Burger Junction",
    cuisine: "Fast Food",
    rating: 4.2,
    time: 22,
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800",
    menu: [
      {
        name: "Chicken Burger",
        price: 149,
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
      },
      {
        name: "Veg Wrap",
        price: 119,
        img: "https://images.unsplash.com/photo-1606755962773-0f9e2f7d2c96?w=400",
      },
    ],
  },

  {
    id: 16,
    name: "Punjabi Dhaba",
    cuisine: "Punjabi",
    rating: 4.4,
    time: 32,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
    menu: [
      {
        name: "Chole Bhature",
        price: 149,
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
      },
      {
        name: "Dal Makhani",
        price: 189,
        img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
      },
    ],
  },

  {
    id: 17,
    name: "Kadapa Grill House",
    cuisine: "Grill",
    rating: 4.5,
    time: 34,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800",
    menu: [
      {
        name: "Grill Fish",
        price: 349,
        img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
      },
      {
        name: "Chicken Steak",
        price: 329,
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
      },
    ],
  },

  {
    id: 18,
    name: "Evening Snacks Hub",
    cuisine: "Snacks",
    rating: 4.0,
    time: 15,
    image: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?w=800", // samosa image
    menu: [
      {
        name: "Samosa",
        price: 29,
        img: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?w=400",
      },
      {
        name: "Mirchi Bajji",
        price: 39,
        img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400",
      },
    ],
  },

  {
    id: 19,
    name: "Italiano Express",
    cuisine: "Italian",
    rating: 4.3,
    time: 26,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
    menu: [
      {
        name: "White Sauce Pasta",
        price: 229,
        img: "https://images.unsplash.com/photo-1601924582975-7e4c1d4f9e3f?w=400",
      },
      {
        name: "Red Sauce Pasta",
        price: 219,
        img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400",
      },
    ],
  },

  {
    id: 20,
    name: "Healthy Bowl",
    cuisine: "Healthy Food",
    rating: 4.6,
    time: 20,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    menu: [
      {
        name: "Veg Salad Bowl",
        price: 199,
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
      },
      {
        name: "Fruit Bowl",
        price: 179,
        img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400",
      },
    ],
  },

  {
    id: 21,
    name: "Tandoori Treats",
    cuisine: "North Indian",
    rating: 4.3,
    time: 33,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    menu: [
      {
        name: "Tandoori Chicken",
        price: 299,
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400",
      },
      {
        name: "Butter Naan",
        price: 49,
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
      },
    ],
  },

  {
    id: 22,
    name: "Dosa Delight",
    cuisine: "South Indian",
    rating: 4.2,
    time: 18,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800",
    menu: [
      {
        name: "Rava Dosa",
        price: 99,
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400",
      },
      {
        name: "Onion Uttapam",
        price: 109,
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
      },
    ],
  },

  {
    id: 23,
    name: "Mumbai Street Food",
    cuisine: "Street Food",
    rating: 4.1,
    time: 20,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    menu: [
      {
        name: "Pav Bhaji",
        price: 129,
        img: "https://images.unsplash.com/photo-1604908177522-040ed36c75d9?w=400",
      },
      {
        name: "Vada Pav",
        price: 39,
        img: "https://images.unsplash.com/photo-1604908177097-0f0c9f0d5c30?w=400",
      },
    ],
  },

  {
    id: 24,
    name: "Seafood Harbor",
    cuisine: "Seafood",
    rating: 4.5,
    time: 40,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
    menu: [
      {
        name: "Prawn Curry",
        price: 359,
        img: "https://images.unsplash.com/photo-1625944525533-473f1b8c6c4b?w=400",
      },
      {
        name: "Fish Fry",
        price: 299,
        img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400",
      },
    ],
  },

  {
    id: 25,
    name: "The Sandwich Club",
    cuisine: "Cafe",
    rating: 4.0,
    time: 15,
    image: "https://images.unsplash.com/photo-1554433607-66b5efe9d304?w=800",
    menu: [
      {
        name: "Grilled Sandwich",
        price: 119,
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400",
      },
      {
        name: "Cheese Corn Sandwich",
        price: 129,
        img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400",
      },
    ],
  },

  {
    id: 26,
    name: "Biryani Junction",
    cuisine: "Biryani",
    rating: 4.6,
    time: 36,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800",
    menu: [
      {
        name: "Hyderabadi Chicken Biryani",
        price: 289,
        img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400",
      },
      {
        name: "Veg Biryani",
        price: 199,
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
      },
    ],
  },

  {
    id: 27,
    name: "Rolls & Wraps",
    cuisine: "Fast Food",
    rating: 4.2,
    time: 19,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    menu: [
      {
        name: "Chicken Roll",
        price: 139,
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
      },
      {
        name: "Paneer Roll",
        price: 129,
        img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
      },
    ],
  },

  {
    id: 28,
    name: "Spice Garden",
    cuisine: "Indian",
    rating: 4.4,
    time: 31,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
    menu: [
      {
        name: "Chicken Curry",
        price: 269,
        img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
      },
      {
        name: "Jeera Rice",
        price: 119,
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400",
      },
    ],
  },

  {
    id: 29,
    name: "Cake & Bake",
    cuisine: "Bakery",
    rating: 4.3,
    time: 17,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    menu: [
      {
        name: "Black Forest Cake",
        price: 299,
        img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
      },
      {
        name: "Cupcakes",
        price: 79,
        img: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400",
      },
    ],
  },

  {
    id: 30,
    name: "Mexican Fiesta",
    cuisine: "Mexican",
    rating: 4.5,
    time: 29,
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=800",
    menu: [
      {
        name: "Veg Tacos",
        price: 179,
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400",
      },
      {
        name: "Chicken Burrito",
        price: 229,
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
      },
    ],
  },
];
