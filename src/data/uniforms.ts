
const uniforms = [
    {
        id: 1,
        name: "Áo Polo Đồng Phục Công Sở",
        price: 179000,
        description:
            "Áo polo chất liệu cotton 65/35, thoáng mát, phù hợp cho nhân viên văn phòng.",
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
        colors: ["Trắng", "Xanh Navy", "Đen"],
        genders: ["Nam", "Nữ"],
        allowLogoUpload: true,
    },

    {
        id: 2,
        name: "Áo Sơ Mi Đồng Phục Công Ty",
        price: 219000,
        description:
            "Áo sơ mi dài tay, form chuẩn, thích hợp môi trường công sở chuyên nghiệp.",
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
        colors: ["Trắng", "Xanh Nhạt"],
        genders: ["Nam", "Nữ"],
        allowLogoUpload: true,
    },

    {
        id: 3,
        name: "Quần Tây Đồng Phục Công Sở",
        price: 319000,
        description:
            "Quân tây dài, form chuẩn, thích hợp môi trường công sở chuyên nghiệp.",
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
        colors: ["Đen", "Xanh Đen"],
        genders: ["Nam", "Nữ"],
        allowLogoUpload: false,
    },

    {
        id: 4,
        name: "Chân Váy Đồng Phục Công Sở",
        price: 289000,
        description:
            "Chân váy ngắn, form chuẩn, thích hợp môi trường công sở chuyên nghiệp.",
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
        colors: ["Đen", "Xanh Đen"],
        allowLogoUpload: false,
    },

    {
        id: 5,
        name: "Đồng Phục Công Sở",
        price: 799000,
        description:
            "Đồng phục form chuẩn, thích hợp môi trường công sở chuyên nghiệp.",
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
        colors: ["Đen", "Xanh Đen"],
        genders:["Nam", "Nữ"],
        allowLogoUpload: true,
    },

    {
        id: 6,
        name: "Đồng Phục Học Sinh Trung Học Cở Sở,Phổ Thông",
        price: 269000,
        description:
            "Đồng phục học sinh vải kate, bền màu, dễ giặt ủi.",
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
        genders:["Nam", "Nữ"],
        allowLogoUpload: true,
    },

    {
        id: 7,
        name: "Đồng Phục Học Sinh Mầm Non",
        price: 159000,
        description:
            "Đồng phục học sinh vải kate, bền màu, dễ giặt ủi.",
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
        genders:["Nam", "Nữ"],
        allowLogoUpload: true,
    },

    {
        id: 8,
        name: "Đồng Phục Học Sinh Tiểu Học",
        price: 109000,
        description:
            "Đồng phục học sinh vải kate, bền màu, dễ giặt ủi.",
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
        genders: ["Nam", "Nữ"],
        allowLogoUpload: true,
    },

    {
        id: 9,
        name: "Áo Thanh Niên Việt Nam",
        price: 119000,
        description:
            "Áo Thanh Niên vải cotton, bền màu, dễ giặt ủi.",
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
        genders: ["Nam", "Nữ"],
        allowLogoUpload: false,
    },

    {
        id: 10,
        name: "Áo Dài",
        price: 499000,
        description:
            "Áo dài nữ vải đa dạng,thoải mái, dễ giặt ủi.",
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
        types:["Lụa", "Chiffon", "Voan"],
        allowLogoUpload: false,
    },

    {
        id: 11,
        name: "Đồng Phục Bảo Hộ Lao Động",
        price: 320000,
        description:
            "Đồng phục bảo hộ vải kaki dày, chống bám bụi, an toàn lao động.",
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
        colors: ["Cam", "Xanh Dương", "Xám"],
        genders:["Nam", "Nữ"],
        allowLogoUpload: true,
    },

    {
        id: 12,
        name: "Đồng Phục Công Nhân Nhà Máy",
        price: 310000,
        description:
            "Đồng phục bảo hộ vải cotton, chống bám bụi, an toàn lao động.",
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
        colors: ["Cam", "Xanh Dương", "Xám"],
        genders:["Nam", "Nữ"],
        allowLogoUpload: true,
    },

    {
        id: 13,
        name: "Đồng Phục Kỹ Sư Xây Dựng",
        price: 139000,
        description:
            "Đồng phục vải kate, chống bám bụi, an toàn lao động.",
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
        colors: ["Cam", "Xanh Dương", "Xám"],
        genders:["Nam", "Nữ"],
        allowLogoUpload: true,
    },
    {
        id: 14,
        name: "Đồng Phục Công Nhân Xây Dựng",
        price: 6990000,
        description:
            "Đồng phục bảo hộ vải kaki, chống bám bụi, an toàn lao động.",
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
        colors: ["Cam", "Xanh Dương", "Xám"],
        genders:["Nam", "Nữ"],
        types:["Nón","Giày","Quần","Áo"],
        allowLogoUpload: true,
    },

    {
        id: 15,
        name: "Đồng Phục Phòng Thí Nghiệm",
        price: 4290000,
        description:
            "Đồng phục bảo hộ vải polyeste, chống chất độc hại, vi sinh vật.",
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
        genders:["Nam", "Nữ"],
        types:["Áo", "Quần"],
        allowLogoUpload: true,
    },


    {
        id: 16,
        name: "Áo Thun Sự Kiện",
        price: 95000,
        description:
            "Áo thun cổ tròn dùng cho sự kiện, team building, in logo theo yêu cầu.",
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
        colors: ["Trắng", "Đỏ", "Xanh Lá", "Đen"],
        genders:["Nam","Nữ"],
        allowLogoUpload: true,
    },

    {
        id: 17,
        name: "Áo Polo Sự Kiện",
        price: 99000,
        description:
            "Áo polo tròn dùng cho sự kiện, team building, in logo theo yêu cầu.",
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
        colors: ["Trắng", "Đỏ", "Xanh Lá", "Đen"],
        genders:["Nam","Nữ"],
        allowLogoUpload: true,
    },

    {
        id: 18,
        name: "Áo Vest Sự Kiện",
        price: 599000,
        description:
            "Áo vest dùng cho dịp đặc biệt, thể hiện sự sang trọng, chuyên nghiệp",
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
        colors: ["Đen","Xanh Đen"],
        genders:["Nam","Nữ"],
        allowLogoUpload: false,
    },

    {
        id: 19,
        name: "Áo Gile Sự Kiện",
        price: 399000,
        description:
            "Áo gile dùng cho dịp đặc biệt, thể hiện sự sang trọng, chuyên nghiệp",
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
        colors: ["Đen","Xanh Đen"],
        genders:["Nam","Nữ"],
        allowLogoUpload: false,
    },

    {
        id: 20,
        name: "Áo Sơ Mi Sự Kiện",
        price: 259000,
        description:
            "Áo sơ mi dùng cho dịp cần sang trọng,lịch sự, chuyên nghiệp",
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
        colors: ["Đen","Xanh Nhạt"],
        genders:["Nam","Nữ"],
        allowLogoUpload: false,
    },

    {
        id: 21,
        name: "Áo Thể Thao",
        price: 119000,
        description:
            "Áo thể thao vải tổng hợp, thoáng mát, co giãn tốt",
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
        colors: ["Đen", "Trắng", "Xanh","Xám"],
        genders:["Nam","Nữ"],
        allowLogoUpload: false,
    },

    {
        id: 22,
        name: "Áo Croptop Thể Thao Dành Cho Nữ",
        price: 89000,
        description:
            "Áo croptop nữ vải tổng hợp, thoáng mát, co giãn tốt",
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
        colors: ["Đen", "Trắng", "Xanh","Xám"],
        allowLogoUpload: false,
    },

    {
        id: 23,
        name: "Quần Dài Thể Thao ",
        price: 139000,
        description:
            "Quần Dài thể thao vải tổng hợp, thoáng mát, co giãn tốt",
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
        colors: ["Đen", "Xám"],
        genders:["Nam", "Nữ"],
        allowLogoUpload: false,
    },
    {
        id: 24,
        name: "Chân Váy Thể Thao",
        price: 149000,
        description:
            "Chân váy thể thao vải tổng hợp, thoáng mát, co giãn tốt",
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
        colors: ["Đen", "Trắng", "Xanh","Xám"],
        allowLogoUpload: false,
    },

    {
        id: 25,
        name: "Quần Short Thể Thao Nam",
        price: 99000,
        description:
            "Quần short thể thao vải tổng hợp, thoáng mát, co giãn tốt",
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
        colors: ["Đen","Xám"],
        allowLogoUpload: false,
    },

    {
        id: 26,
        name: "Áo Khoác Đầu Bếp",
        price: 229000,
        description:
            "Áo khoác đầu bếp vải cotton,cách nhiệt tốt, sử dụng trong nấu nướng. ",
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
        colors: ["Trắng"],
        genders: ["Nam", "Nữ"],
        allowLogoUpload: true,
    },

    {
        id: 27,
        name: "Đồng phục Phục Vụ",
        price: 149000,
        description:
            "Đồng phục vải cotton, ít nhăn, giữ màu tốt",
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
        colors: ["Đen", "Trắng", "Xanh","Xám"],
        genders: ["Nam","Nữ"],
        allowLogoUpload: true,
    },

    {
        id: 28,
        name: "Đồng phục Thẩm Mỹ Viện",
        price: 399000,
        description:
            "Đồng phục vải cotton,áo vest lịch sự, giữ màu tốt",
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
        colors: ["Đen", "Trắng", "Hồng","Đỏ"],
        genders: ["Nam","Nữ"],
        allowLogoUpload: true,
    },

    {
        id: 29,
        name: "Áo Khoác Giao Hàng",
        price: 139000,
        description:
            "Áo khoác cách nhiệt, chống nắng tốt",
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
        allowLogoUpload: false,
    },

    {
        id: 30,
        name: "Đồng phục Nhà Hàng",
        price: 279000,
        description:
            "Đồng phục vải kaki, ít nhăn, giữ màu tốt",
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
        colors: ["Vàng", "Trắng", "Đỏ","Xanh"],
        genders: ["Nam","Nữ"],
        allowLogoUpload: true,
    },

    {
        id: 31,
        name: "Sản phẩm thiết kế riêng",
        price: 450000,
        description:
            "Sản phẩm được làm theo theo yêu cầu của khách hàng.",
        category: "cac-san-pham-khac",
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
        types: ["Theo Yêu Cầu"],
        allowLogoUpload: true,
    },


];

export default uniforms;

