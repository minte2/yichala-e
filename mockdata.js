// mockdata.js

// =========================================================================
//  1. USER-SPECIFIC DATA (The story of our main user, Hana T.)
// =========================================================================

const userData = {
  name: "Hana T.",
  email: "hana.t@example.com",
  memberSince: "2023-05-15",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",

  enrolledCourses: [
    { courseId: 4, progress: 100, status: "Completed" }, // Completed Small Business Accounting
    { courseId: 6, progress: 60, status: "In Progress" }, // Learning Digital Marketing
  ],

  marketplaceListings: [
    { listingId: 108, status: "Active", views: 1240, orders: 15 },
  ],

  certifications: [{ courseId: 4, dateEarned: "2023-11-10" }],
};

const teacherData = {
  coursesTaught: [
    { courseId: 4, students: 1120, rating: 4.6, monthlyEarnings: 22000 },
    { courseId: 20, students: 650, rating: 4.8, monthlyEarnings: 15000 },
  ],
  totalStudents: 1770,
  averageRating: 4.7,
  totalEarnings: 95000,
};

// =========================================================================
//  2. PLATFORM-WIDE DATA (All available courses and listings)
// =========================================================================

const coursesData = [
  {
    id: 1,
    title: "Basic Mobile Phone Repair",
    description:
      "Learn to diagnose and repair common mobile phone issues, from screen replacements to battery problems.",
    long_description:
      "This course teaches you to diagnose and repair common mobile phone issues, from screen replacements to battery problems, with hands-on tutorials.",
    category: "Tech",
    instructor: "Samuel G.",
    image:
      "https://images.unsplash.com/photo-1603566234384-2154d926f7de?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    students: 1420,
    outcomes: [
      "Safely disassemble and reassemble phones.",
      "Diagnose software and hardware issues.",
      "Replace screens, batteries, and charging ports.",
      "Understand tools for a repair business.",
    ],
    requirements: [
      "No prior experience needed.",
      "A basic toolkit (list provided).",
    ],
    curriculum: [
      {
        title: "Module 1: Safety and Tools",
        lessons: [
          "Essential Toolkit Overview",
          "Anti-Static Precautions",
          "Handling Small Components",
        ],
      },
      {
        title: "Module 2: Common Repairs",
        lessons: [
          "Screen Replacement (iPhone & Android)",
          "Battery Replacement",
          "Fixing a Broken Charging Port",
        ],
      },
      {
        title: "Module 3: Diagnostics & Business",
        lessons: [
          "Troubleshooting Phones That Won't Turn On",
          "Water Damage Treatment",
          "Listing Your Service on Yichalal",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Handmade Jewelry Crafting",
    description:
      "Create beautiful jewelry using local materials like beads, wires, and threads. Perfect for a small business.",
    long_description:
      "Create beautiful and unique jewelry pieces using local materials like beads, wires, and threads. This course is perfect for starting a small business from home.",
    category: "Handcrafts",
    instructor: "Genet W.",
    image:
      "https://images.unsplash.com/photo-1611078489935-e84e008421ba?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    students: 530,
    outcomes: [
      "Master basic wire-wrapping techniques.",
      "Design beaded necklaces and bracelets.",
      "Create durable, sellable earrings.",
      "Learn how to price your handmade products.",
    ],
    requirements: [
      "A creative spirit!",
      "Basic jewelry pliers and wire cutters.",
    ],
    curriculum: [
      {
        title: "Module 1: Materials and Tools",
        lessons: [
          "Types of Beads and Wires",
          "Essential Pliers and Cutters",
          "Sourcing Local Materials",
        ],
      },
      {
        title: "Module 2: Core Techniques & Projects",
        lessons: [
          "Creating Simple Loops",
          "Wire Wrapping a Bead",
          "Project: Designing Drop Earrings",
        ],
      },
      {
        title: "Module 3: Selling Your Creations",
        lessons: [
          "Pricing Your Jewelry for Profit",
          "Taking Great Product Photos with a Phone",
          "Setting Up Your Yichalal Shop",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Basic Plumbing Skills",
    description:
      "Learn practical plumbing repairs for homes, including fixing leaks, unclogging drains, and installing simple fixtures.",
    long_description:
      "Don't wait for a plumber for small jobs. Learn practical plumbing repairs for homes, including fixing leaks, unclogging drains, and installing simple fixtures.",
    category: "Tech",
    instructor: "Abebe B.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    students: 890,
    outcomes: [
      "Identify and fix common faucet and shower leaks.",
      "Safely unclog drains.",
      "Understand your home's water system.",
      "Replace a basic tap or shower head.",
    ],
    requirements: ["Access to basic plumbing tools (wrench, pliers)."],
    curriculum: [
      {
        title: "Module 1: Plumbing Safety and Basics",
        lessons: [
          "Understanding Your Water Main",
          "Essential Tools for a Homeowner",
          "Safety First: Avoiding Water Damage",
        ],
      },
      {
        title: "Module 2: Fixing Leaks & Drains",
        lessons: [
          "Anatomy of a Faucet",
          "Replacing Washers",
          "Cleaning a P-Trap",
        ],
      },
      {
        title: "Module 3: Offering Your Services",
        lessons: [
          "How to Quote a Small Job",
          "Essential Customer Service",
          "Creating Your Plumber Profile on Yichalal",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Small Business Accounting",
    description:
      "Manage your business finances, bookkeeping, and taxes with simple, effective methods.",
    long_description:
      "Manage your business finances, bookkeeping, and taxes with simple, effective methods.",
    category: "Business",
    instructor: "Hana T.",
    image:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    students: 1120,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
  {
    id: 5,
    title: "Tailoring and Clothing Alterations",
    description:
      "Learn to sew and alter clothes for yourself and clients, using basic tailoring tools.",
    long_description:
      "Learn to sew and alter clothes for yourself and clients, using basic tailoring tools.",
    category: "Handcrafts",
    instructor: "Fatuma M.",
    image:
      "https://images.unsplash.com/photo-1599355812066-48525b6a16f5?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    students: 780,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
  {
    id: 6,
    title: "Digital Marketing for Small Businesses",
    description:
      "Practical ways to promote your business online using social media and SEO basics.",
    long_description:
      "Practical ways to promote your business online using social media and SEO basics.",
    category: "Business",
    instructor: "Dawit A.",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    students: 1300,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
  {
    id: 7,
    title: "Solar Panel Installation Basics",
    description:
      "Get hands-on training on installing and maintaining solar panels for homes and businesses.",
    long_description:
      "Get hands-on training on installing and maintaining solar panels for homes and businesses.",
    category: "Tech",
    instructor: "Abebe B.",
    image:
      "https://images.unsplash.com/photo-1508935633428-bff351b212f3?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    students: 670,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
  {
    id: 8,
    title: "Food Preservation & Packaging",
    description:
      "Learn methods to safely preserve and package food for sale and longer shelf life.",
    long_description:
      "Learn methods to safely preserve and package food for sale and longer shelf life.",
    category: "Business",
    instructor: "Lia K.",
    image:
      "https://images.unsplash.com/photo-1606859328219-4a5c0b642a84?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    students: 450,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
  {
    id: 9,
    title: "Photography & Photo Editing",
    description:
      "Master practical photography techniques and edit your images using free software.",
    long_description:
      "Master practical photography techniques and edit your images using free software.",
    category: "Creative",
    instructor: "Fatuma M.",
    image:
      "https://images.unsplash.com/photo-1510070112812-d85c57d3e33c?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    students: 920,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
  {
    id: 10,
    title: "Carpentry Basics",
    description:
      "Build and repair wooden furniture and fixtures with hands-on carpentry skills.",
    long_description:
      "Build and repair wooden furniture and fixtures with hands-on carpentry skills.",
    category: "Handcrafts",
    instructor: "Samuel G.",
    image:
      "https://images.unsplash.com/photo-1572991099604-9d58a5f3e4b2?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    students: 560,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
  {
    id: 11,
    title: "Electrical Wiring for Beginners",
    description:
      "Learn to safely wire homes and small buildings with basic electrical skills.",
    long_description:
      "Learn to safely wire homes and small buildings with basic electrical skills.",
    category: "Tech",
    instructor: "Abebe B.",
    image:
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    students: 710,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
  {
    id: 12,
    title: "Cake Baking and Decoration",
    description:
      "Create delicious cakes and decorate them professionally for events and sales.",
    long_description:
      "Create delicious cakes and decorate them professionally for events and sales.",
    category: "Creative",
    instructor: "Genet W.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    students: 480,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
  {
    id: 13,
    title: "Makeup Artistry Basics",
    description:
      "Learn practical makeup skills for personal use or to start a beauty business.",
    long_description:
      "Learn practical makeup skills for personal use or to start a beauty business.",
    category: "Creative",
    instructor: "Fatuma M.",
    image:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    students: 650,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
  {
    id: 14,
    title: "Basic Welding Techniques",
    description:
      "Learn welding fundamentals for repair and small construction projects.",
    long_description:
      "Learn welding fundamentals for repair and small construction projects.",
    category: "Tech",
    instructor: "Samuel G.",
    image:
      "https://images.unsplash.com/photo-1594371393664-9f893a05f009?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    students: 480,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
  {
    id: 15,
    title: "Soap Making for Beginners",
    description:
      "Create natural and scented soaps to sell or gift, with practical recipes and techniques.",
    long_description:
      "Create natural and scented soaps to sell or gift, with practical recipes and techniques.",
    category: "Handcrafts",
    instructor: "Genet W.",
    image:
      "https://images.unsplash.com/photo-1600857544200-b2f6aa720a3c?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    students: 300,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
  {
    id: 16,
    title: "Agricultural Techniques",
    description:
      "Learn sustainable farming methods and crop management for better yields.",
    long_description:
      "Learn sustainable farming methods and crop management for better yields.",
    category: "Business",
    instructor: "Lia K.",
    image:
      "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    students: 400,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
  {
    id: 17,
    title: "Graphic Design with Canva",
    description:
      "Use Canva to create marketing materials, social media posts, and more with practical steps.",
    long_description:
      "Use Canva to create marketing materials, social media posts, and more with practical steps.",
    category: "Creative",
    instructor: "Dawit A.",
    image:
      "https://images.unsplash.com/photo-1611162617213-aa4b899ca4a6?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    students: 720,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
  {
    id: 18,
    title: "Barista and Coffee Brewing",
    description:
      "Master espresso, latte art, and coffee brewing techniques for personal or business use.",
    long_description:
      "Master espresso, latte art, and coffee brewing techniques for personal or business use.",
    category: "Creative",
    instructor: "Fatuma M.",
    image:
      "https://images.unsplash.com/photo-1511920183276-542a53493594?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    students: 550,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
  {
    id: 19,
    title: "Auto Mechanics Essentials",
    description:
      "Basic car maintenance and repair skills to keep vehicles running smoothly.",
    long_description:
      "Basic car maintenance and repair skills to keep vehicles running smoothly.",
    category: "Tech",
    instructor: "Abebe B.",
    image:
      "https://images.unsplash.com/photo-1541899586351-a20f3a713902?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    students: 720,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
  {
    id: 20,
    title: "Event Planning & Management",
    description:
      "Practical skills to organize and manage events, from budgeting to logistics.",
    long_description:
      "Practical skills to organize and manage events, from budgeting to logistics.",
    category: "Business",
    instructor: "Hana T.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd51622?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    students: 650,
    outcomes: [],
    requirements: [],
    curriculum: [],
  },
];

const marketplaceData = [
  {
    id: 101,
    title: "Mobile Phone Screen Repair",
    seller: "Samuel G.",
    seller_image: "https://randomuser.me/api/portraits/men/33.jpg",
    price: 1500,
    category: "Tech",
    skillTag: "Phone Repair",
    image:
      "https://images.unsplash.com/photo-1598327105666-6d8253791307?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598327105666-6d8253791307?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b12?auto=format&fit=crop&w=800&q=80",
    ],
    long_description:
      "Cracked your screen? Don't worry! I provide fast and professional screen repair for most major smartphone models. Using high-quality replacement parts, I'll have your phone looking brand new again.",
    inclusions: [
      "Full screen replacement (part included)",
      "90-day warranty on the repair",
      "Device cleaning and testing",
    ],
    rating: 4.9,
    reviews: [
      {
        name: "Yonas T.",
        rating: 5,
        comment: "Fast service, my phone looks perfect.",
      },
      {
        name: "Meron A.",
        rating: 5,
        comment: "Very professional and a fair price. Thank you Samuel!",
      },
    ],
  },
  {
    id: 102,
    title: "Custom Beaded Bracelets",
    seller: "Genet W.",
    seller_image: "https://randomuser.me/api/portraits/women/45.jpg",
    price: 450,
    category: "Handcrafts",
    skillTag: "Jewelry Making",
    image:
      "https://images.unsplash.com/photo-1588444968576-f8497a7a4432?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1588444968576-f8497a7a4432?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588444968322-16e792f451f1?auto=format&fit=crop&w=800&q=80",
    ],
    long_description:
      "Order a beautiful, one-of-a-kind beaded bracelet, handmade with care. You can choose your colors and patterns. Perfect as a gift for yourself or a loved one.",
    inclusions: [
      "Custom color selection",
      "Durable stringing material",
      "Gift packaging",
    ],
    rating: 5.0,
    reviews: [
      {
        name: "Tigist B.",
        rating: 5,
        comment:
          "The bracelet is even more beautiful in person! Genet is so talented.",
      },
    ],
  },
  {
    id: 103,
    title: "Leaky Faucet & Tap Repair",
    seller: "Abebe B.",
    seller_image: "https://randomuser.me/api/portraits/men/32.jpg",
    price: 800,
    category: "Tech",
    skillTag: "Plumbing Basics",
    image:
      "https://images.unsplash.com/photo-1575824944445-56a9d19a42a0?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1575824944445-56a9d19a42a0?auto=format&fit=crop&w=800&q=80",
    ],
    long_description:
      "Don't let a small leak become a big problem. I provide reliable repair for leaky faucets and taps in your kitchen or bathroom. Service is quick and clean.",
    inclusions: [
      "Diagnosis of the leak",
      "Replacement of standard washers/seals",
      "Labor for the repair",
    ],
    rating: 4.8,
    reviews: [
      {
        name: "Kebede M.",
        rating: 5,
        comment:
          "Abebe fixed my kitchen tap in 20 minutes. Very honest and reliable.",
      },
      {
        name: "Eleni G.",
        rating: 4,
        comment:
          "Good service, but was a bit late. The repair itself is perfect.",
      },
    ],
  },
  {
    id: 104,
    title: "Business Logo Design Service",
    seller: "Dawit A.",
    seller_image: "https://randomuser.me/api/portraits/men/34.jpg",
    price: 2500,
    category: "Creative",
    skillTag: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555212697-36e308985984?auto=format&fit=crop&w=800&q=80",
    ],
    long_description:
      "Get a modern, memorable logo for your business. I specialize in minimalist and corporate designs that will make your brand stand out. Let's work together to create the perfect visual identity.",
    inclusions: [
      "2 initial logo concepts",
      "3 rounds of revisions",
      "Full vector and web-ready files (PNG, JPG, SVG)",
    ],
    rating: 4.9,
    reviews: [
      {
        name: "Ahmed I.",
        rating: 5,
        comment:
          "Dawit is a true design professional. He understood my vision perfectly.",
      },
    ],
  },
  {
    id: 105,
    title: "Custom Dress Alterations",
    seller: "Fatuma M.",
    seller_image: "https://randomuser.me/api/portraits/women/68.jpg",
    price: 600,
    category: "Handcrafts",
    skillTag: "Tailoring",
    image:
      "https://images.unsplash.com/photo-1595168019348-78c66e6b45f7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595168019348-78c66e6b45f7?auto=format&fit=crop&w=800&q=80",
    ],
    long_description:
      "Does your favorite dress not fit perfectly? I provide professional alteration services, including hemming, taking in the waist, and adjusting straps to give you the perfect fit.",
    inclusions: [
      "Consultation and measurement",
      "Hemming (shortening/lengthening)",
      "Basic waist/side adjustments",
    ],
    rating: 4.9,
    reviews: [
      {
        name: "Liya S.",
        rating: 5,
        comment:
          "Fatuma saved my dress for the wedding! The fit is perfect now. Thank you!",
      },
    ],
  },
  {
    id: 106,
    title: "Social Media Post Design",
    seller: "Dawit A.",
    seller_image: "https://randomuser.me/api/portraits/men/34.jpg",
    price: 300,
    category: "Creative",
    skillTag: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1611162616805-6a4058285515?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611162616805-6a4058285515?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&q=80",
    ],
    long_description:
      "Need eye-catching graphics for your social media? I will design a custom, high-quality post for your Instagram, Facebook, or Twitter, tailored to your brand's style.",
    inclusions: [
      "1 custom-designed social media graphic",
      "Sized for the platform of your choice",
      "Royalty-free images included",
    ],
    rating: 4.8,
    reviews: [
      {
        name: "Zenebech P.",
        rating: 5,
        comment:
          "The designs are always creative and professional. My social media looks so much better now.",
      },
    ],
  },
  {
    id: 107,
    title: "Handmade Scented Soap Bars",
    seller: "Genet W.",
    seller_image: "https://randomuser.me/api/portraits/women/45.jpg",
    price: 150,
    category: "Handcrafts",
    skillTag: "Soap Making",
    image:
      "https://images.unsplash.com/photo-1584225059942-c1a7a70a39f6?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584225059942-c1a7a70a39f6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600958932381-7057715b7470?auto=format&fit=crop&w=800&q=80",
    ],
    long_description:
      "Treat yourself to all-natural, handmade soap. Made with nourishing oils and scented with essential oils. Choose from lavender, eucalyptus, or unscented.",
    inclusions: [
      "One 120g bar of handmade soap",
      "Made with natural ingredients",
      "Eco-friendly packaging",
    ],
    rating: 5.0,
    reviews: [
      {
        name: "Aster T.",
        rating: 5,
        comment:
          "I love this soap! The lavender scent is so relaxing. My skin feels great.",
      },
      {
        name: "Betelhem K.",
        rating: 5,
        comment: "Best handmade soap I have ever bought.",
      },
    ],
  },
  {
    id: 108,
    title: "Small Business Bookkeeping",
    seller: "Hana T.",
    seller_image: "https://randomuser.me/api/portraits/women/44.jpg",
    price: 3000,
    category: "Business",
    skillTag: "Bookkeeping",
    image:
      "https://images.unsplash.com/photo-1632239522828-5d37662c7247?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1632239522828-5d37662c7247?auto=format&fit=crop&w=800&q=80",
    ],
    long_description:
      "Focus on running your business, and let me handle the books. This monthly service includes recording transactions, reconciling accounts, and providing a monthly financial snapshot.",
    inclusions: [
      "Recording up to 100 monthly transactions",
      "Bank account reconciliation",
      "Monthly Profit & Loss statement",
    ],
    rating: 4.7,
    reviews: [
      {
        name: "Daniel S.",
        rating: 5,
        comment:
          "Hana organized my finances and saved me so much time. Very trustworthy.",
      },
    ],
  },
];
