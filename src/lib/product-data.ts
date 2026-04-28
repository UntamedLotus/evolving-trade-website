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
		description:
			"Farm-fresh, crisp, and nutrient-dense vegetables sourced directly from sustainable farms.",
		image: "/images/products/vegetables/vegetables-banner.webp",
	},
	{
		id: "fruits",
		name: "Fruits",
		slug: "fruits",
		description:
			"Sun-ripened, juicy, and flavorful tropical fruits packed with natural goodness.",
		image: "/images/products/fruits/fruits-banner.webp",
	},
	{
		id: "rice",
		name: "Rice",
		slug: "rice",
		description:
			"Premium aromatic Basmati and high-quality Non-Basmati rice for every culinary need.",
		image: "/images/products/rice/rice-banner.webp",
	},
	{
		id: "spices",
		name: "Spices",
		slug: "spices",
		description:
			"Pure and aromatic Indian spices that bring authentic flavor and health benefits to your kitchen.",
		image: "/images/products/spices/spices-banner.webp",
	},
	{
		id: "aayush",
		name: "Aayush Products",
		slug: "aayush-products",
		description:
			"Ancient Ayurvedic wellness products including Moringa and Ashwagandha for a healthy lifestyle.",
		image: "/images/products/aayush-products/aayush-products-banner.webp",
	},
];

export const products: Product[] = [
	// Vegetables
	{
		id: "green-chilly",
		name: "Green Chilly",
		description:
			"Fresh, spicy, and vibrant green chillies to add heat and flavor to your dishes.",
		image: "/images/products/vegetables/green-chilly.webp",
		category: "vegetables",
	},
	{
		id: "onion",
		name: "Onion",
		description:
			"Premium quality red onions, known for their sharp flavor and crisp texture.",
		image: "/images/products/vegetables/onion.webp",
		category: "vegetables",
	},
	{
		id: "ginger",
		name: "Ginger",
		description:
			"Aromatic and pungent fresh ginger root, essential for culinary and medicinal uses.",
		image: "/images/products/vegetables/ginger.webp",
		category: "vegetables",
	},
	{
		id: "sugar-suran",
		name: "Suran (Elephant Foot Yam)",
		description:
			"Highly nutritious and versatile tuber, popular in traditional Indian cuisine.",
		image: "/images/products/vegetables/suran.webp",
		category: "vegetables",
	},
	{
		id: "drumstick",
		name: "Drumstick",
		description:
			"Fresh and tender drumsticks, rich in vitamins and minerals, perfect for sambar and curries.",
		image: "/images/products/vegetables/moringa.webp",
		category: "vegetables",
	},

	// Fruits
	{
		id: "banana",
		name: "Banana",
		description:
			"Naturally sweet and energy-packed fresh bananas, sourced from the best plantations.",
		image: "/images/products/fruits/banana.webp",
		category: "fruits",
	},
	{
		id: "pomegranate",
		name: "Pomegranate",
		description:
			"Premium quality pomegranates with juicy, ruby-red arils full of antioxidants.",
		image: "/images/products/fruits/pomegranate.webp",
		category: "fruits",
	},
	{
		id: "mango",
		name: "Mango",
		description:
			"The king of fruits - delicious, sweet, and aromatic mangoes available in peak season.",
		image: "/images/products/fruits/raw-mango.webp",
		category: "fruits",
	},
	{
		id: "husk-coconut",
		name: "Husk Coconut",
		description:
			"These coconuts are known for their thick layers of fiber, which keep the inner shell intact and moist.",
		image: "/images/products/fruits/husk-coconut.webp",
		category: "fruits",
	},
	{
		id: "tender-coconut",
		name: "Tender Coconut",
		description:
			"These coconuts are harvested when they are young and immature, making them tender and juicy.",
		image: "/images/products/fruits/tender-coconut.webp",
		category: "fruits",
	},

	// Rice
	{
		id: "basmati-rice",
		name: "Basmati Rice",
		description:
			"Extra-long grain, aromatic Basmati rice that adds a touch of royalty to every meal.",
		image: "/images/products/rice/basmati-rice.webp",
		category: "rice",
	},
	{
		id: "non-basmati-rice",
		name: "Non-Basmati Rice",
		description:
			"High-quality everyday rice varieties, perfect for a wide range of dishes.",
		image: "/images/products/rice/non-basmati-rice.webp",
		category: "rice",
	},

	// Spices
	{
		id: "chilly-spice",
		name: "Chilly Powder",
		description:
			"Pure and pungent dried chillies/powder, essential for authentic spice blends.",
		image: "/images/products/spices/chilly-powder.webp",
		category: "spices",
	},
	{
		id: "turmeric",
		name: "Turmeric",
		description:
			"High-curcumin turmeric, known for its vibrant yellow color and healing properties.",
		image: "/images/products/spices/turmeric.webp",
		category: "spices",
	},
	{
		id: "cardamom",
		name: "Cardamom",
		description:
			"Queen of spices - aromatic green cardamom pods for a refreshing flavor.",
		image: "/images/products/spices/cardamom.webp",
		category: "spices",
	},
	{
		id: "black-pepper",
		name: "Black Pepper",
		description:
			"King of spices - premium bold black pepper with an intense aroma.",
		image: "/images/products/spices/black-pepper.webp",
		category: "spices",
	},

	// Aayush Products
	{
		id: "moringa-powder",
		name: "Moringa Powder",
		description:
			"Superfood powder made from dried moringa leaves, packed with nutrients.",
		image: "/images/products/aayush-products/moringa-powder.webp",
		category: "aayush",
	},
	{
		id: "ashwagandha",
		name: "Ashwagandha",
		description:
			"Traditional Ayurvedic herb known for its stress-relieving and health-boosting properties.",
		image: "/images/products/aayush-products/ashwagandha.webp",
		category: "aayush",
	},
];
