export interface Review {
    id: number;
    productId: number;
    userId: number;
    rating: number; // 1–5
    comment: string;
    date: string;
    time: string;
}

export const reviews: Review[] = [
    {
        id: 1,
        productId: 1,
        userId: 1,
        rating: 5,
        comment: "Vải đẹp, form chuẩn",
        date: "2026-01-05",
        time: "18:00"
    },
    {
        id: 2,
        productId: 1,
        userId: 2,
        rating: 4,
        comment: "Giá ổn, giao hàng nhanh",
        date: "2026-01-06",
        time: "15:30",
    },
    {
        id: 3,
        productId: 2,
        userId: 3,
        rating: 3,
        comment: "Màu hơi khác ảnh",
        date: "2026-01-06",
        time: "16:20",
    },
    {
        id: 4,
        productId: 3,
        userId: 1,
        rating: 4,
        comment: "Chất vải tốt, đường may chắc chắn",
        date: "2026-01-08",
        time: "09:20"
    },
    {
        id: 5,
        productId: 3,
        userId: 2,
        rating: 5,
        comment: "Mặc lên rất đẹp, đúng mô tả",
        date: "2026-01-08",
        time: "14:45"
    },

    // ===== Product 4 =====
    {
        id: 6,
        productId: 4,
        userId: 3,
        rating: 3,
        comment: "Áo ổn nhưng size hơi nhỏ",
        date: "2026-01-09",
        time: "11:00"
    },

    // ===== Product 5 =====
    {
        id: 7,
        productId: 5,
        userId: 1,
        rating: 5,
        comment: "Màu đẹp, giống hình",
        date: "2026-01-10",
        time: "16:40"
    },
    {
        id: 8,
        productId: 5,
        userId: 2,
        rating: 4,
        comment: "Form đẹp, mặc đi học rất hợp",
        date: "2026-01-10",
        time: "19:25"
    },

    // ===== Product 6 =====
    {
        id: 9,
        productId: 6,
        userId: 3,
        rating: 5,
        comment: "Áo nhẹ, thoáng, mặc cả ngày không nóng",
        date: "2026-01-11",
        time: "10:30"
    },

    // ===== Product 7 =====
    {
        id: 10,
        productId: 7,
        userId: 1,
        rating: 4,
        comment: "Ổn trong tầm giá",
        date: "2026-01-12",
        time: "13:15"
    },
    {
        id: 11,
        productId: 7,
        userId: 2,
        rating: 5,
        comment: "Áo đẹp hơn mong đợi",
        date: "2026-01-12",
        time: "17:50"
    },

    // ===== Product 8 =====
    {
        id: 12,
        productId: 8,
        userId: 3,
        rating: 4,
        comment: "Chất lượng tốt, giao hàng nhanh",
        date: "2026-01-13",
        time: "08:45"
    },

    // ===== Product 9 =====
    {
        id: 13,
        productId: 9,
        userId: 1,
        rating: 5,
        comment: "Rất hài lòng, sẽ mua thêm",
        date: "2026-01-14",
        time: "21:10"
    },

    // ===== Product 10 =====
    {
        id: 14,
        productId: 10,
        userId: 2,
        rating: 4,
        comment: "Mặc thoải mái, form chuẩn",
        date: "2026-01-15",
        time: "12:00"
    },
    {
        id: 15,
        productId: 2,
        userId: 3,
        rating: 5,
        comment: "Áo mặc rất thoải mái, đáng tiền",
        date: "2026-01-07",
        time: "20:10"
    },
    {
        id: 16,
        productId: 11,
        userId: 2,
        rating: 4,
        comment: "Mặc ổn, chất vải khá dày",
        date: "2026-01-16",
        time: "09:10"
    },
    {
        id: 17,
        productId: 12,
        userId: 1,
        rating: 5,
        comment: "Áo đẹp, mặc rất đứng form",
        date: "2026-01-16",
        time: "20:30"
    },
    {
        id: 18,
        productId: 11,
        userId: 3,
        rating: 3,
        comment: "Ổn nhưng giao hàng hơi chậm",
        date: "2026-01-17",
        time: "14:05"
    },
    {
        id: 19,
        productId: 13,
        userId: 2,
        rating: 5,
        comment: "Màu đẹp, giống hình quảng cáo",
        date: "2026-01-17",
        time: "18:45"
    },
    {
        id: 20,
        productId: 14,
        userId: 1,
        rating: 4,
        comment: "Form vừa người, dễ phối đồ",
        date: "2026-01-18",
        time: "10:20"
    },
    {
        id: 21,
        productId: 13,
        userId: 3,
        rating: 4,
        comment: "Chất lượng tốt trong tầm giá",
        date: "2026-01-18",
        time: "21:00"
    },
    {
        id: 22,
        productId: 15,
        userId: 2,
        rating: 5,
        comment: "Áo mặc rất mát, không bị bí",
        date: "2026-01-19",
        time: "08:40"
    },
    {
        id: 23,
        productId: 16,
        userId: 1,
        rating: 4,
        comment: "Đường may chắc chắn, mặc ổn",
        date: "2026-01-19",
        time: "16:15"
    },
    {
        id: 24,
        productId: 14,
        userId: 3,
        rating: 3,
        comment: "Mặc đẹp nhưng size hơi rộng",
        date: "2026-01-20",
        time: "11:50"
    },
    {
        id: 25,
        productId: 17,
        userId: 2,
        rating: 5,
        comment: "Rất hài lòng, sẽ mua lại",
        date: "2026-01-20",
        time: "19:30"
    },
    {
        id: 26,
        productId: 18,
        userId: 1,
        rating: 4,
        comment: "Áo nhẹ, mặc thoải mái",
        date: "2026-01-21",
        time: "13:10"
    },
    {
        id: 27,
        productId: 17,
        userId: 3,
        rating: 4,
        comment: "Form đẹp, đúng mô tả",
        date: "2026-01-21",
        time: "22:00"
    },
    {
        id: 28,
        productId: 19,
        userId: 2,
        rating: 5,
        comment: "Chất vải mềm, mặc rất thích",
        date: "2026-01-22",
        time: "09:35"
    },
    {
        id: 29,
        productId: 20,
        userId: 1,
        rating: 3,
        comment: "Áo ổn nhưng màu hơi khác hình",
        date: "2026-01-22",
        time: "17:20"
    },
    {
        id: 30,
        productId: 19,
        userId: 3,
        rating: 4,
        comment: "Mặc đẹp, giao hàng nhanh",
        date: "2026-01-23",
        time: "08:55"
    },
    {
        id: 31,
        productId: 21,
        userId: 2,
        rating: 5,
        comment: "Đáng tiền, chất lượng tốt",
        date: "2026-01-23",
        time: "15:40"
    },
    {
        id: 32,
        productId: 22,
        userId: 1,
        rating: 4,
        comment: "Mặc lên rất gọn gàng",
        date: "2026-01-24",
        time: "12:10"
    },
    {
        id: 33,
        productId: 21,
        userId: 3,
        rating: 4,
        comment: "Áo đẹp, phù hợp đi học",
        date: "2026-01-24",
        time: "20:45"
    },
    {
        id: 34,
        productId: 23,
        userId: 2,
        rating: 5,
        comment: "Form chuẩn, rất ưng",
        date: "2026-01-25",
        time: "09:00"
    },
    {
        id: 35,
        productId: 24,
        userId: 1,
        rating: 3,
        comment: "Mặc ổn nhưng không quá nổi bật",
        date: "2026-01-25",
        time: "18:25"
    },
    {
        id: 36,
        productId: 25,
        userId: 3,
        rating: 5,
        comment: "Áo mặc lên rất thoải mái, chất vải mềm và không bị xù sau vài lần giặt. Mình mặc đi học cả ngày vẫn thấy dễ chịu.",
        date: "2026-01-26",
        time: "10:15"
    },
    {
        id: 37,
        productId: 26,
        userId: 1,
        rating: 4,
        comment: "Form áo khá chuẩn, mặc gọn người. Tuy nhiên phần cổ hơi ôm, bạn nào không thích cổ sát thì nên cân nhắc.",
        date: "2026-01-26",
        time: "19:40"
    },
    {
        id: 38,
        productId: 25,
        userId: 2,
        rating: 4,
        comment: "Màu áo nhìn ngoài đẹp hơn trong hình, chất liệu ổn trong tầm giá. Giao hàng nhanh, đóng gói cẩn thận.",
        date: "2026-01-27",
        time: "08:50"
    },
    {
        id: 39,
        productId: 27,
        userId: 1,
        rating: 5,
        comment: "Áo rất đáng tiền, đường may chắc chắn, form mặc lên nhìn lịch sự. Mình đã mua thêm một chiếc cho em mình.",
        date: "2026-01-27",
        time: "14:30"
    },
    {
        id: 40,
        productId: 28,
        userId: 3,
        rating: 3,
        comment: "Chất vải mặc ổn nhưng màu hơi đậm hơn so với hình. Nếu shop điều chỉnh lại hình ảnh thì sẽ dễ chọn hơn.",
        date: "2026-01-28",
        time: "11:10"
    },
    {
        id: 41,
        productId: 26,
        userId: 2,
        rating: 5,
        comment: "Mặc lên rất đẹp, form đứng và không bị nhăn nhiều. Phù hợp mặc đi học hoặc đi chơi đều ổn.",
        date: "2026-01-28",
        time: "20:05"
    },
    {
        id: 42,
        productId: 29,
        userId: 1,
        rating: 4,
        comment: "Áo mặc khá mát, không bị bí. Tuy nhiên size hơi rộng so với mình, lần sau sẽ chọn size nhỏ hơn.",
        date: "2026-01-29",
        time: "09:25"
    },
    {
        id: 43,
        productId: 30,
        userId: 2,
        rating: 5,
        comment: "Rất hài lòng với sản phẩm, từ chất lượng đến đóng gói. Shop giao hàng nhanh hơn mình mong đợi.",
        date: "2026-01-29",
        time: "18:00"
    },
    {
        id: 44,
        productId: 28,
        userId: 1,
        rating: 4,
        comment: "Mặc lên nhìn ổn, dễ phối đồ với quần jean. Chất vải không quá dày nên mặc mùa nóng vẫn được.",
        date: "2026-01-30",
        time: "13:45"
    },
    {
        id: 45,
        productId: 31,
        userId: 3,
        rating: 5,
        comment: "Áo đẹp hơn mong đợi, mặc rất vừa người. Sau khi giặt không bị phai màu hay co rút.",
        date: "2026-01-30",
        time: "21:10"
    },
    {
        id: 46,
        productId: 32,
        userId: 2,
        rating: 4,
        comment: "Chất lượng ổn, form đẹp. Nếu giá mềm hơn một chút thì sẽ rất hoàn hảo.",
        date: "2026-01-31",
        time: "10:00"
    },
    {
        id: 47,
        productId: 33,
        userId: 1,
        rating: 5,
        comment: "Mình rất thích mẫu này, mặc lên nhìn gọn gàng và lịch sự. Rất phù hợp để mặc đi học hoặc đi làm thêm.",
        date: "2026-01-31",
        time: "16:35"
    },
    {
        id: 48,
        productId: 34,
        userId: 3,
        rating: 4,
        comment: "Áo đẹp, chất vải mềm và dễ chịu. Chỉ có điểm trừ nhỏ là phần tay hơi dài so với mình.",
        date: "2026-02-01",
        time: "08:20"
    },
    {
        id: 49,
        productId: 22,
        userId: 2,
        rating: 4,
        comment: "Áo mặc khá ổn, chất vải không quá dày nên mặc thoải mái cả ngày. Form áo gọn gàng, dễ phối với nhiều loại quần.",
        date: "2026-02-01",
        time: "14:10"
    },
    {
        id: 50,
        productId: 23,
        userId: 1,
        rating: 5,
        comment: "Sản phẩm đúng như mô tả, từ chất liệu đến form dáng đều rất ổn. Mình mua làm đồng phục lớp và ai cũng hài lòng.",
        date: "2026-02-01",
        time: "19:55"
    },
    {
        id: 51,
        productId: 24,
        userId: 3,
        rating: 3,
        comment: "Áo mặc được nhưng form hơi rộng so với mình. Bạn nào thích mặc thoải mái thì sẽ hợp hơn.",
        date: "2026-02-02",
        time: "09:30"
    },
    {
        id: 52,
        productId: 27,
        userId: 2,
        rating: 5,
        comment: "Mặc rất đẹp và lịch sự, chất vải đứng form. Mình đã mặc đi sự kiện và được nhiều người hỏi mua ở đâu.",
        date: "2026-02-02",
        time: "16:20"
    },
    {
        id: 53,
        productId: 29,
        userId: 1,
        rating: 4,
        comment: "Áo mặc mát, không bị bí. Tuy nhiên màu thực tế nhạt hơn một chút so với hình trên web.",
        date: "2026-02-03",
        time: "11:45"
    },
    {
        id: 54,
        productId: 30,
        userId: 3,
        rating: 5,
        comment: "Rất hài lòng với chất lượng sản phẩm. Giao hàng nhanh, áo được gấp gọn gàng và không bị nhăn.",
        date: "2026-02-03",
        time: "20:00"
    },
    {
        id: 55,
        productId: 31,
        userId: 2,
        rating: 4,
        comment: "Form áo đẹp, mặc vừa người. Chỉ tiếc là chưa có nhiều màu để lựa chọn.",
        date: "2026-02-04",
        time: "08:15"
    },
    {
        id: 56,
        productId: 32,
        userId: 1,
        rating: 5,
        comment: "Mình rất thích mẫu này, mặc lên nhìn gọn gàng và trẻ trung. Phù hợp mặc đi học hoặc đi chơi.",
        date: "2026-02-04",
        time: "17:40"
    },
    {
        id: 57,
        productId: 33,
        userId: 3,
        rating: 4,
        comment: "Áo mặc ổn, chất vải mềm và dễ chịu. Sau vài lần giặt vẫn giữ được form khá tốt.",
        date: "2026-02-05",
        time: "10:50"
    },
    {
        id: 58,
        productId: 34,
        userId: 2,
        rating: 5,
        comment: "Sản phẩm rất đáng tiền, form đẹp và mặc rất thoải mái. Mình sẽ ủng hộ shop thêm trong thời gian tới.",
        date: "2026-02-05",
        time: "21:05"
    },
    {
        id: 59,
        productId: 18,
        userId: 1,
        rating: 4,
        comment: "Áo mặc khá thoải mái, chất vải mềm và không gây khó chịu khi mặc lâu. Form hơi rộng nhẹ nhưng vẫn chấp nhận được.",
        date: "2026-02-06",
        time: "09:05"
    },
    {
        id: 60,
        productId: 20,
        userId: 2,
        rating: 5,
        comment: "Mình rất ưng mẫu này, mặc lên nhìn gọn gàng và lịch sự. Phù hợp mặc đi học, đi làm thêm hay đi chơi đều ổn.",
        date: "2026-02-06",
        time: "14:50"
    },
    {
        id: 61,
        productId: 21,
        userId: 3,
        rating: 3,
        comment: "Áo mặc ổn nhưng chất vải không dày như mình nghĩ. Nếu shop cải thiện thêm phần này thì sẽ tốt hơn.",
        date: "2026-02-07",
        time: "10:30"
    },
    {
        id: 62,
        productId: 22,
        userId: 1,
        rating: 5,
        comment: "Sản phẩm đúng như mô tả, từ màu sắc đến form dáng. Mặc lên nhìn rất chỉn chu và lịch sự.",
        date: "2026-02-07",
        time: "19:10"
    },
    {
        id: 63,
        productId: 24,
        userId: 2,
        rating: 4,
        comment: "Áo mặc khá mát, không bị bí. Tuy nhiên mình nghĩ form này sẽ hợp với người cao hơn một chút.",
        date: "2026-02-08",
        time: "08:40"
    },
    {
        id: 64,
        productId: 25,
        userId: 3,
        rating: 5,
        comment: "Chất lượng vượt mong đợi, áo mặc rất thoải mái và không bị xù lông sau khi giặt. Rất đáng tiền.",
        date: "2026-02-08",
        time: "16:55"
    },
    {
        id: 65,
        productId: 27,
        userId: 1,
        rating: 4,
        comment: "Form áo đẹp, mặc gọn gàng. Chỉ tiếc là shop chưa có nhiều màu để lựa chọn hơn.",
        date: "2026-02-09",
        time: "11:20"
    },
    {
        id: 66,
        productId: 28,
        userId: 2,
        rating: 5,
        comment: "Mình mua để mặc hằng ngày và thấy rất ổn. Chất vải mềm, dễ giặt và không bị nhăn nhiều.",
        date: "2026-02-09",
        time: "20:00"
    },
    {
        id: 67,
        productId: 30,
        userId: 3,
        rating: 4,
        comment: "Áo đẹp, mặc lên nhìn khá trẻ trung. Nếu form ôm hơn một chút nữa thì sẽ hoàn hảo.",
        date: "2026-02-10",
        time: "09:45"
    },
    {
        id: 68,
        productId: 32,
        userId: 1,
        rating: 5,
        comment: "Mặc rất thích, form chuẩn và chất vải dễ chịu. Mình đã giới thiệu cho bạn bè mua cùng.",
        date: "2026-02-10",
        time: "18:30"
    }

];
