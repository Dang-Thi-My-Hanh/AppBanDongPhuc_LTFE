
const uniforms = [
    {
        id: 1,
        name: "Office Uniform Polo Shirt",
        price: 179000,
        description:
            "65/35 cotton polo shirt, breathable, suitable for office staff.",
        category: "Company",
        images: [
            "/images/polo_front_main.jpg",
            "/images/polo_side_view.jpg",
            "/images/polo_logo_zoom.jpg",
        ],
        minimumOrderQuantity: 20,
        sizes: [
            { size: "S", stock: 342 },
            { size: "M", stock: 111 },
            { size: "L", stock: 445 },
            { size: "XL", stock: 231 },
        ],
        colors: ["White", "Navy Blue", "Black"],
        genders: ["Male", "Female"],
        style: "Polo",
        allowLogoUpload: true
    },

    {
        id: 2,
        name: "Company Uniform Shirt",
        price: 219000,
        description:
            "Long-sleeved shirt, standard fit, suitable for a professional office environment.",
        category: "Company",
        images: [
            "/images/shirt_front.jpg",
            "/images/shirt_back.jpg",
        ],
        minimumOrderQuantity: 30,
        sizes: [
            { size: "M", stock: 153 },
            { size: "L", stock: 165 },
            { size: "XL", stock: 346 },
            { size: "XXL", stock: 328 },
        ],
        colors: ["White", "Light Blue"],
        genders: ["Male", "Female"],
        style: "Shirt",
        allowLogoUpload: true
    },

    {
        id: 3,
        name: "Office Uniform Trousers",
        price: 319000,
        description:
            "Long trousers, standard fit, suitable for a professional office environment.",
        category: "Company",
        images: [
            "/images/pants_front.jpg",
            "/images/pants_back.jpg",
        ],
        minimumOrderQuantity: 30,
        sizes: [
            { size: "M", stock: 124 },
            { size: "L", stock: 148 },
            { size: "XL", stock: 219 },
            { size: "XXL", stock: 523 },
        ],
        colors: ["Black", "Dark Blue"],
        genders: ["Male", "Female"],
        style: "Pants",
        allowLogoUpload: false
    },

    {
        id: 4,
        name: "Office Uniform Skirt",
        price: 289000,
        description:
            "Short skirt, standard fit, suitable for a professional office environment.",
        category: "Company",
        images: [
            "/images/skirt_front.jpg",
            "/images/Skirt_back.jpg",
        ],
        minimumOrderQuantity: 20,
        sizes: [
            { size: "M", stock: 156 },
            { size: "L", stock: 142 },
            { size: "XL", stock: 89 },
            { size: "XXL", stock: 52 },
        ],
        colors: ["Black", "Dark Blue"],
        style: "Skirt",
        allowLogoUpload: false
    },

    {
        id: 5,
        name: "Full Office Uniform Set",
        price: 799000,
        description:
            "Standard fit uniform set, suitable for a professional office environment.",
        category: "Company",
        images: [
            "/images/man_front.jpg",
            "/images/man_back.jpg",
            "/images/women_front.jpg",
            "/images/women_back.jpg",
        ],
        minimumOrderQuantity: 30,
        sizes: [
            { size: "M", stock: 147 },
            { size: "L", stock: 248 },
            { size: "XL", stock: 389 },
            { size: "XXL", stock: 223 },
        ],
        colors: ["Black", "Dark Blue"],
        genders:["Male", "Female"],
        style: "Set",
        allowLogoUpload: true,
    },

    {
        id: 6,
        name: "Middle & High School Student Uniform",
        price: 269000,
        description:
            "Student uniform made of Kate fabric, colorfast, easy to wash and iron.",
        category: "School",
        images: [
            "/images/studentgirl_uniform_front.jpg",
            "/images/studentgirl_uniform_back.jpg",
            "/images/studentboy_uniform_front.jpg",
            "/images/studentboy_uniform_back.jpg",
        ],
        minimumOrderQuantity: 50,
        sizes: [
            { size: "XS", stock: 342 },
            { size: "S", stock: 490 },
            { size: "M", stock: 355 },
            { size: "L", stock: 256 },
        ],
        genders:["Male", "Female"],
        style: "Shirt",
        allowLogoUpload: true,
    },

    {
        id: 7,
        name: "Kindergarten Student Uniform",
        price: 159000,
        description:
            "Student uniform made of Kate fabric, colorfast, easy to wash and iron.",
        category: "School",
        images: [
            "/images/studentgirl_uniform_front.jpg",
            "/images/studentgirl_uniform_back.jpg",
            "/images/studentboy_uniform_front.jpg",
            "/images/studentboy_uniform_back.jpg",
        ],
        minimumOrderQuantity: 50,
        sizes: [
            { size: "XS", stock: 241 },
            { size: "S", stock: 132 },
            { size: "M", stock: 557 },
            { size: "L", stock: 362 },
        ],
        genders:["Male", "Female"],
        style: "Set",
        allowLogoUpload: true,
    },

    {
        id: 8,
        name: "Primary School Student Uniform",
        price: 109000,
        description:
            "Student uniform made of Kate fabric, colorfast, easy to wash and iron.",
        category: "School",
        images: [
            "/images/studentgirl_uniform_front.jpg",
            "/images/studentgirl_uniform_back.jpg",
            "/images/studentboy_uniform_front.jpg",
            "/images/studentboy_uniform_back.jpg",
        ],
        minimumOrderQuantity: 50,
        sizes: [
            {size: "XS", stock: 339},
            {size: "S", stock: 450},
            {size: "M", stock: 372},
            {size: "L", stock: 199},
        ],
        genders: ["Male", "Female"],
        style: "Shirt",
        allowLogoUpload: true,
    },

    {
        id: 9,
        name: "Vietnamese Youth Union Shirt",
        price: 119000,
        description:
            "Youth Union shirt, cotton fabric, colorfast, easy to wash and iron.",
        category: "School",
        images: [
            "/images/Shirt_uniform_front.jpg",
            "/images/Shirt_uniform_back.jpg",
        ],
        minimumOrderQuantity: 50,
        sizes: [
            {size: "XS", stock: 330},
            {size: "S", stock: 405},
            {size: "M", stock: 351},
            {size: "L", stock: 203},
        ],
        genders: ["Male", "Female"],
        style: "Shirt",
        allowLogoUpload: false,
    },

    {
        id: 10,
        name: "Ao Dai (Traditional Dress)",
        price: 499000,
        description:
            "Women's Ao Dai in diverse fabrics, comfortable, easy to wash.",
        category: "School",
        images: [
            "/images/Shirt_uniform_front.jpg",
            "/images/Shirt_uniform_back.jpg",
        ],
        minimumOrderQuantity: 4,
        sizes: [
            {size: "XS", stock: 323},
            {size: "S", stock: 440},
            {size: "M", stock: 352},
            {size: "L", stock: 247},
        ],
        types:["Silk", "Chiffon", "Voile"],
        style: "Set",
        allowLogoUpload: false
    },

    {
        id: 11,
        name: "Labor Protection Uniform",
        price: 320000,
        description:
            "Protective uniform made of thick kaki, dust-resistant, ensures work safety.",
        category: "Factory",
        images: [
            "/images/baoho_front.jpg",
            "/images/baoho_detail.jpg",
            "/images/baoho_back.jpg",
            "/images/baoho_total.jpg",
        ],
        minimumOrderQuantity: 40,
        sizes: [
            { size: "M", stock: 106 },
            { size: "L", stock: 126 },
            { size: "XL", stock: 112 },
            { size: "XXL", stock: 442 },
        ],
        colors: ["Orange", "Blue", "Grey"],
        genders:["Male", "Female"],
        style: "Jacket",
        allowLogoUpload: true,
    },

    {
        id: 12,
        name: "Factory Worker Uniform",
        price: 310000,
        description:
            "Protective uniform made of cotton, dust-resistant, ensures work safety.",
        category: "Factory",
        images: [
            "/images/baoho_front.jpg",
            "/images/baoho_detail.jpg",
            "/images/baoho_back.jpg",
            "/images/baoho_total.jpg",
        ],
        minimumOrderQuantity: 30,
        sizes: [
            { size: "M", stock: 214 },
            { size: "L", stock: 124 },
            { size: "XL", stock: 121 },
            { size: "XXL", stock: 412 },
        ],
        colors: ["Orange", "Blue", "Grey"],
        genders:["Male", "Female"],
        style: "Jacket",
        allowLogoUpload: true,
    },

    {
        id: 13,
        name: "Construction Engineer Uniform",
        price: 139000,
        description:
            "Uniform made of Kate fabric, dust-resistant, ensures work safety.",
        category: "Factory",
        images: [
            "/images/baoho_front.jpg",
            "/images/baoho_detail.jpg",
            "/images/baoho_back.jpg",
            "/images/baoho_total.jpg",
        ],
        minimumOrderQuantity: 20,
        sizes: [
            { size: "M", stock: 170 },
            { size: "L", stock: 124 },
            { size: "XL", stock: 112 },
            { size: "XXL", stock: 90 },
        ],
        colors: ["Orange", "Blue", "Grey"],
        genders:["Male", "Female"],
        style: "Shirt",
        allowLogoUpload: true,
    },
    {
        id: 14,
        name: "Construction Worker Uniform Set",
        price: 6990000,
        description:
            "Protective uniform made of kaki, dust-resistant, ensures work safety.",
        category: "Factory",
        images: [
            "/images/baoho_front.jpg",
            "/images/baoho_detail.jpg",
            "/images/baoho_back.jpg",
            "/images/baoho_total.jpg",
        ],
        minimumOrderQuantity: 10,
        sizes: [
            { size: "M", stock: 150 },
            { size: "L", stock: 160 },
            { size: "XL", stock: 114 },
            { size: "XXL", stock: 68 },
        ],
        colors: ["Orange", "Blue", "Grey"],
        genders:["Male", "Female"],
        types:["Hat","Shoes","Pants","Shirt"],
        style: "Set",
        allowLogoUpload: true,
    },

    {
        id: 15,
        name: "Laboratory Uniform",
        price: 4290000,
        description:
            "Protective uniform made of polyester, resistant to toxic substances and microorganisms.",
        category: "Factory",
        images: [
            "/images/baoho_front.jpg",
            "/images/baoho_detail.jpg",
            "/images/baoho_back.jpg",
            "/images/baoho_total.jpg",
        ],
        minimumOrderQuantity: 10,
        sizes: [
            { size: "M", stock: 100 },
            { size: "L", stock: 120 },
            { size: "XL", stock: 110 },
            { size: "XXL", stock: 60 },
        ],
        genders:["Male", "Female"],
        //types:["Shirt", "Pants"],
        style: "Jacket",
        allowLogoUpload: true,
    },


    {
        id: 16,
        name: "Event T-Shirt",
        price: 95000,
        description:
            "Round neck T-shirt for events, team building, custom logo printing available.",
        category: "Event",
        images: [
            "/images/event_tshirt_front.jpg",
            "/images/event_tshirt_back.jpg",
        ],
        minimumOrderQuantity: 100,
        sizes: [
            { size: "S", stock: 553 },
            { size: "M", stock: 560 },
            { size: "L", stock: 544 },
            { size: "XL", stock: 400 },
        ],
        colors: ["White", "Red", "Green", "Black"],
        genders:["Male","Female"],
        style: "T-shirt",
        allowLogoUpload: true,
    },

    {
        id: 17,
        name: "Event Polo Shirt",
        price: 99000,
        description:
            "Polo shirt for events, team building, custom logo printing available.",
        category: "Event",
        images: [
            "/images/event_polo_front.jpg",
            "/images/event_polo_back.jpg",
        ],
        minimumOrderQuantity: 100,
        sizes: [
            { size: "S", stock: 352 },
            { size: "M", stock: 561 },
            { size: "L", stock: 125 },
            { size: "XL", stock: 655 },
        ],
        colors: ["White", "Red", "Green", "Black"],
        genders:["Male","Female"],
        style: "Polo",
        allowLogoUpload: true,
    },

    {
        id: 18,
        name: "Event Suit Jacket (Vest)",
        price: 599000,
        description:
            "Suit jacket for special occasions, demonstrating luxury and professionalism.",
        category: "Event",
        images: [
            "/images/event_vest_front.jpg",
            "/images/event_vest_back.jpg",
        ],
        minimumOrderQuantity: 10,
        sizes: [
            { size: "S", stock: 633 },
            { size: "M", stock: 544 },
            { size: "L", stock: 534 },
            { size: "XL", stock: 367 },
        ],
        colors: ["Black","Dark Blue"],
        genders:["Male","Female"],
        style: "Vest",
        allowLogoUpload: false,
    },

    {
        id: 19,
        name: "Event Waistcoat / Gile",
        price: 399000,
        description:
            "Waistcoat for special occasions, demonstrating luxury and professionalism.",
        category: "Event",
        images: [
            "/images/event_gile_front.jpg",
            "/images/event_gile_back.jpg",
        ],
        minimumOrderQuantity: 10,
        sizes: [
            { size: "S", stock: 556 },
            { size: "M", stock: 535 },
            { size: "L", stock: 543 },
            { size: "XL", stock: 512 },
        ],
        colors: ["Black","Dark Blue"],
        genders:["Male","Female"],
        style: "Vest",
        allowLogoUpload: false,
    },

    {
        id: 20,
        name: "Event Dress Shirt",
        price: 259000,
        description:
            "Shirt for occasions requiring luxury, politeness, and professionalism.",
        category: "Event",
        images: [
            "/images/event_shirt_front.jpg",
            "/images/event_shirt_back.jpg",
        ],
        minimumOrderQuantity: 20,
        sizes: [
            { size: "S", stock: 453 },
            { size: "M", stock: 312 },
            { size: "L", stock: 341 },
            { size: "XL", stock: 241 },
        ],
        colors: ["Black","Light Blue"],
        genders:["Male","Female"],
        style: "Shirt",
        allowLogoUpload: false,
    },

    {
        id: 21,
        name: "Sports T-Shirt",
        price: 119000,
        description:
            "Sports shirt, synthetic fabric, breathable, good elasticity.",
        category: "Sport",
        images: [
            "/images/sport_shirt_front.jpg",
            "/images/sport_shirt_back.jpg",
        ],
        minimumOrderQuantity: 20,
        sizes: [
            { size: "S", stock: 527 },
            { size: "M", stock: 513 },
            { size: "L", stock: 542 },
            { size: "XL", stock: 328 },
        ],
        colors: ["Black", "White", "Blue","Grey"],
        genders:["Male","Female"],
        style: "T-shirt",
        allowLogoUpload: false,
    },

    {
        id: 22,
        name: "Women's Sports Croptop",
        price: 89000,
        description:
            "Women's croptop, synthetic fabric, breathable, good elasticity.",
        category: "Sport",
        images: [
            "/images/sport_croptop_front.jpg",
            "/images/sport_croptop_back.jpg",
        ],
        minimumOrderQuantity: 20,
        sizes: [
            { size: "S", stock: 554 },
            { size: "M", stock: 668 },
            { size: "L", stock: 534 },
            { size: "XL", stock: 475 },
        ],
        colors: ["Black", "White", "Blue","Grey"],
        style: "T-shirt",
        allowLogoUpload: false,
    },

    {
        id: 23,
        name: "Sports Pants",
        price: 139000,
        description:
            "Long sports pants, synthetic fabric, breathable, good elasticity.",
        category: "Sport",
        images: [
            "/images/sport_pants_front.jpg",
            "/images/sport_pants_back.jpg",
        ],
        minimumOrderQuantity: 20,
        sizes: [
            { size: "S", stock: 543 },
            { size: "M", stock: 251 },
            { size: "L", stock: 164 },
            { size: "XL", stock: 462 },
        ],
        colors: ["Black", "Grey"],
        genders:["Male", "Female"],
        style: "Pants",
        allowLogoUpload: false,
    },
    {
        id: 24,
        name: "Sports Skirt",
        price: 149000,
        description:
            "Sports skirt, synthetic fabric, breathable, good elasticity.",
        category: "Sport",
        images: [
            "/images/sport_skirt_front.jpg",
            "/images/sport_shirt_back.jpg",
        ],
        minimumOrderQuantity: 20,
        sizes: [
            { size: "S", stock: 536 },
            { size: "M", stock: 599 },
            { size: "L", stock: 549 },
            { size: "XL", stock: 399 },
        ],
        colors: ["Black", "White", "Blue","Grey"],
        style: "Skirt",
        allowLogoUpload: false,
    },

    {
        id: 25,
        name: "Men's Sports Shorts",
        price: 99000,
        description:
            "Sports shorts, synthetic fabric, breathable, good elasticity.",
        category: "Sport",
        images: [
            "/images/sport_short_front.jpg",
            "/images/sport_short_back.jpg",
        ],
        minimumOrderQuantity: 20,
        sizes: [
            { size: "S", stock: 291 },
            { size: "M", stock: 342 },
            { size: "L", stock: 242 },
            { size: "XL", stock: 403 },
        ],
        colors: ["Black","Grey"],
        style: "Short-Pants",
        allowLogoUpload: false,
    },

    {
        id: 26,
        name: "Chef Jacket",
        price: 229000,
        description:
            "Chef jacket, cotton fabric, good heat insulation, used in cooking.",
        category: "Service",
        images: [
            "/images/sport_jacket_front.jpg",
            "/images/sport_jacket_back.jpg",
        ],
        minimumOrderQuantity: 20,
        sizes: [
            { size: "S", stock: 504 },
            { size: "M", stock: 403 },
            { size: "L", stock: 492 },
            { size: "XL", stock: 294 },
        ],
        colors: ["White"],
        genders: ["Male", "Female"],
        style: "Jacket",
        allowLogoUpload: true,
    },

    {
        id: 27,
        name: "Server Uniform",
        price: 149000,
        description:
            "Uniform made of cotton, wrinkle-resistant, good color retention.",
        category: "Service",
        images: [
            "/images/service_girl'suniform_front.jpg",
            "/images/service_girl'suniform_back.jpg",
            "/images/service_boy'suniform_front.jpg",
            "/images/service_boy'suniform_back.jpg",
        ],
        minimumOrderQuantity: 20,
        sizes: [
            { size: "S", stock: 241 },
            { size: "M", stock: 124 },
            { size: "L", stock: 351 },
            { size: "XL", stock: 392 },
        ],
        colors: ["Black", "White", "Blue","Grey"],
        genders: ["Male","Female"],
        style: "Shirt",
        allowLogoUpload: true,
    },

    {
        id: 28,
        name: "Beauty Salon / Spa Uniform",
        price: 399000,
        description:
            "Uniform made of cotton, polite vest style, good color retention.",
        category: "Service",
        images: [
            "/images/service_girl'suniform_front.jpg",
            "/images/service_girl'suniform_back.jpg",
            "/images/service_man'suniform_front.jpg",
            "/images/service_man'suniform_back.jpg",
        ],
        minimumOrderQuantity: 20,
        sizes: [
            { size: "S", stock: 529 },
            { size: "M", stock: 601 },
            { size: "L", stock: 549 },
            { size: "XL", stock: 389 },
        ],
        colors: ["Black", "White", "Pink","Red"],
        genders: ["Male","Female"],
        style: "Set",
        allowLogoUpload: true,
    },

    {
        id: 29,
        name: "Delivery Driver Jacket",
        price: 139000,
        description:
            "Jacket with heat insulation and good sun protection.",
        category: "Service",
        images: [
            "/images/service_grab_front.jpg",
            "/images/service_grab_back.jpg",
            "/images/service_be_front.jpg",
            "/images/service_be_back.jpg",
            "/images/service_xanhsm_front.jpg",
            "/images/service_xanhsm_back.jpg",
            "/images/service_shopeefood_front.jpg",
            "/images/service_shopeefood_back.jpg",
            "/images/service_ahamove_front.jpg",
            "/images/service_ahamove_back.jpg",

        ],
        minimumOrderQuantity: 10,
        sizes: [
            { size: "S", stock: 325 },
            { size: "M", stock: 609 },
            { size: "L", stock: 324 },
            { size: "XL", stock: 501 },
        ],
        types:["Grab","Be","Xanh SM","ShopeeFood","Ahamove"],
        style: "Jacket",
        allowLogoUpload: false,
    },

    {
        id: 30,
        name: "Restaurant Uniform",
        price: 279000,
        description:
            "Uniform made of kaki, wrinkle-resistant, good color retention.",
        category: "Service",
        images: [
            "/images/service_girl'suniform_front.jpg",
            "/images/service_girl'suniform_back.jpg",
            "/images/service_man'suniform_back.jpg",
            "/images/service_man'suniform_back.jpg",

        ],
        minimumOrderQuantity: 20,
        sizes: [
            { size: "S", stock: 504 },
            { size: "M", stock: 608 },
            { size: "L", stock: 553 },
            { size: "XL", stock: 398 },
        ],
        colors: ["Yellow", "White", "Red","Blue"],
        genders: ["Male","Female"],
        style: "Set",
        allowLogoUpload: true,
    },

    {
        id: 31,
        name: "Custom Design Product",
        price: 450000,
        description:
            "Product made according to customer requirements.",
        category: "other-products",
        images: [
            "/images/design.jpg",
            "/images/design.jpg",
        ],
        minimumOrderQuantity: 50,
        sizes: [
            { size: "S", stock: 5605 },
            { size: "M", stock: 6430 },
            { size: "L", stock: 5280 },
            { size: "XL", stock: 3970 },
        ],
        types: ["On Request"],
        style: "Custom",
        allowLogoUpload: true,
    },


];

export default uniforms;

