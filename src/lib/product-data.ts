export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
}

export interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
    slug: string;
}

export const categories: Category[] = [
    {
        id: "vegetables",
        name: "Vegetables",
        slug: "vegetables",
        description: "Farm-fresh, crisp, and nutrient-dense vegetables sourced directly from sustainable farms.",
        image: "/table-full-vegetables-fruits.webp",
    },
    {
        id: "fruits",
        name: "Fruits",
        slug: "fruits",
        description: "Sun-ripened, juicy, and flavorful tropical fruits packed with natural goodness.",
        image: "/table-full-vegetables-fruits.webp",
    },
    {
        id: "rice",
        name: "Rice",
        slug: "rice",
        description: "Premium aromatic Basmati and high-quality Non-Basmati rice for every culinary need.",
        image: "/tai-rice-wooden-bowl.webp",
    },
    {
        id: "spices",
        name: "Spices",
        slug: "spices",
        description: "Pure and aromatic Indian spices that bring authentic flavor and health benefits to your kitchen.",
        image: "/flat-lay-delicious-indian-spices.webp",
    },
    {
        id: "aayush",
        name: "Aayush Products",
        slug: "aayush-products",
        description: "Ancient Ayurvedic wellness products including Moringa and Ashwagandha for a healthy lifestyle.",
        image: "/nature-and-supllies.webp",
    },
];

export const products: Product[] = [
    // Vegetables
    {
        id: "green-chilly",
        name: "Green Chilly",
        description: "Fresh, spicy, and vibrant green chillies to add heat and flavor to your dishes.",
        image: "/green chilly.webp",
        category: "vegetables",
    },
    {
        id: "onion",
        name: "Onion",
        description: "Premium quality red onions, known for their sharp flavor and crisp texture.",
        image: "/onion.webp",
        category: "vegetables",
    },
    {
        id: "ginger",
        name: "Ginger",
        description: "Aromatic and pungent fresh ginger root, essential for culinary and medicinal uses.",
        image: "/table-full-vegetables-fruits.webp",
        category: "vegetables",
    },
    {
        id: "sugar-suran",
        name: "Suran (Elephant Foot Yam)",
        description: "Highly nutritious and versatile tuber, popular in traditional Indian cuisine.",
        image: "/table-full-vegetables-fruits.webp",
        category: "vegetables",
    },
    {
        id: "drumstick",
        name: "Drumstick",
        description: "Fresh and tender drumsticks, rich in vitamins and minerals, perfect for sambar and curries.",
        image: "/table-full-vegetables-fruits.webp",
        category: "vegetables",
    },

    // Fruits
    {
        id: "banana",
        name: "Banana",
        description: "Naturally sweet and energy-packed fresh bananas, sourced from the best plantations.",
        image: "/banana.webp",
        category: "fruits",
    },
    {
        id: "pomegranate",
        name: "Pomegranate",
        description: "Premium quality pomegranates with juicy, ruby-red arils full of antioxidants.",
        image: "/pomogranate.webp",
        category: "fruits",
    },
    {
        id: "mango",
        name: "Mango",
        description: "The king of fruits - delicious, sweet, and aromatic mangoes available in peak season.",
        image: "/table-full-vegetables-fruits.webp",
        category: "fruits",
    },

    // Rice
    {
        id: "basmati-rice",
        name: "Basmati Rice",
        description: "Extra-long grain, aromatic Basmati rice that adds a touch of royalty to every meal.",
        image: "/tai-rice-wooden-bowl.webp",
        category: "rice",
    },
    {
        id: "non-basmati-rice",
        name: "Non-Basmati Rice",
        description: "High-quality everyday rice varieties, perfect for a wide range of dishes.",
        image: "/tai-rice-wooden-bowl.webp",
        category: "rice",
    },

    // Spices
    {
        id: "chilly-spice",
        name: "Chilly",
        description: "Pure and pungent dried chillies/powder, essential for authentic spice blends.",
        image: "/flat-lay-delicious-indian-spices.webp",
        category: "spices",
    },
    {
        id: "turmeric",
        name: "Turmeric",
        description: "High-curcumin turmeric, known for its vibrant yellow color and healing properties.",
        image: "/turmeric.webp",
        category: "spices",
    },
    {
        id: "cardamom",
        name: "Cardamom",
        description: "Queen of spices - aromatic green cardamom pods for a refreshing flavor.",
        image: "/flat-lay-delicious-indian-spices.webp",
        category: "spices",
    },
    {
        id: "black-pepper",
        name: "Black Pepper",
        description: "King of spices - premium bold black pepper with an intense aroma.",
        image: "/flat-lay-delicious-indian-spices.webp",
        category: "spices",
    },

    // Aayush Products
    {
        id: "moringa-powder",
        name: "Moringa Powder",
        description: "Superfood powder made from dried moringa leaves, packed with nutrients.",
        image: "/nature-and-supllies.webp",
        category: "aayush",
    },
    {
        id: "ashwagandha",
        name: "Ashwagandha",
        description: "Traditional Ayurvedic herb known for its stress-relieving and health-boosting properties.",
        image: "/nature-and-supllies.webp",
        category: "aayush",
    },
];

