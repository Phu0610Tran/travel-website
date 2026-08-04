// DATA SYSTEM - PHÚ TRẦN TRAVEL JOURNEYS
const travelData = {
    destinations: [
        {
            id: 'dalat',
            name: 'Đà Lạt',
            subTitle: 'Thành Phố Sương Mờ & Đồi Thông',
            dates: '26/07 - 28/07/2026 (3N2Đ)',
            active: true,
            coverImage: 'images/1785856050100_2224797881829335097_2419330006741937226_7068096bf25a1328d248ea5a123359fa.jpg',
            badge: 'Hành Trình Đã Đi',
            stats: {
                days: '3N2Đ',
                distance: '~160 km',
                costPerPerson: '2.730.000 đ',
                totalCost: '5.460.000 đ'
            }
        },
        {
            id: 'phanthiet',
            name: 'Phan Thiết',
            subTitle: 'Biển Cát Trắng & Nắng Vàng',
            dates: 'Sắp ra mắt',
            active: false,
            comingSoon: true,
            coverImage: '',
            badge: 'Kế Hoạch Tiếp Theo'
        },
        {
            id: 'mangden',
            name: 'Măng Đen',
            subTitle: 'Nàng Thơ Tây Nguyên',
            dates: 'Sắp ra mắt',
            active: false,
            comingSoon: true,
            coverImage: '',
            badge: 'Kế Hoạch Tiếp Theo'
        },
        {
            id: 'phuochai',
            name: 'Phước Hải',
            subTitle: 'Làng Chài & Biển Vắng',
            dates: 'Sắp ra mắt',
            active: false,
            comingSoon: true,
            coverImage: '',
            badge: 'Kế Hoạch Tiếp Theo'
        }
    ],

    dalat: {
        title: 'Hành Trình Khám Phá Đà Lạt 3 Ngày 2 Đêm',
        dates: '26/07/2026 - 28/07/2026',
        hotel: 'An Mai Boutique Đà Lạt (11A Lữ Gia, P.9, TP. Đà Lạt)',
        transport: 'Xe giường nằm khứ hồi Đà Lạt Ơi (Bình Dương ⇄ Đà Lạt)',
        totalBudget: 5460000,
        perPersonBudget: 2730000,
        
        maps: [
            { id: 'day1-map', title: 'Sơ đồ Lịch trình Ngày 1', image: 'images/day1.png' },
            { id: 'day2-map', title: 'Sơ đồ Lịch trình Ngày 2', image: 'images/day2.png' }
        ],

        days: [
            {
                dayNumber: 1,
                dayTitle: 'NGÀY 1 - CHỦ NHẬT (26/07/2026)',
                summary: 'Thung Lũng Hồng - Mì Bò Thảo Mộc - Hoàng Hôn Xóm Lèo - Chợ Đêm',
                estimatedCost: '1.400.000 đ (2 người ~700k/người)',
                events: [
                    {
                        time: '06:00',
                        title: 'Tới bến xe Liên Tỉnh Đà Lạt',
                        location: 'Bến xe Liên Tỉnh Đà Lạt',
                        notes: 'Xuống xe giường nằm đi từ Bình Dương (~6:00 sáng)',
                        mapQuery: 'Bến xe Liên Tỉnh Đà Lạt',
                        type: 'transport'
                    },
                    {
                        time: '06:30',
                        title: 'Trung chuyển về khách sạn',
                        location: 'An Mai Boutique Đà Lạt (11A Lữ Gia)',
                        notes: 'Đi xe trung chuyển của hãng xe (~3km về 11A Lữ Gia)',
                        mapQuery: 'An Mai Boutique Đà Lạt 11A Lữ Gia',
                        type: 'hotel'
                    },
                    {
                        time: '07:00',
                        title: 'Gửi đồ tại lễ tân, makeup & Nhận xe máy',
                        location: 'An Mai Boutique Đà Lạt',
                        notes: 'Thuê xe máy Vision/Air Blade tại khách sạn (120k/ngày)',
                        type: 'info'
                    },
                    {
                        time: '08:00',
                        title: 'Ăn sáng bánh căn nóng hổi',
                        location: 'Bánh căn Lệ (Hẻm 27 Yersin)',
                        notes: 'Cách khách sạn 2.3km (~7 phút đi xe máy). Chi phí ~100k/2 người',
                        cost: 100000,
                        mapQuery: 'Bánh căn Lệ 27 Yersin Đà Lạt',
                        type: 'food'
                    },
                    {
                        time: '09:00 - 11:30',
                        title: 'Tham quan & Ngâm chân hoa hồng',
                        location: 'Pink Valley (Thung Lũng Hồng)',
                        notes: 'Cách khách sạn 11km hướng Vạn Thành (~25 phút). Vé 120k/người gồm nước',
                        cost: 240000,
                        mapQuery: 'Pink Valley Thung Lũng Hồng Đà Lạt',
                        type: 'sightseeing'
                    },
                    {
                        time: '12:00',
                        title: 'Ăn trưa mì bò hầm thảo mộc',
                        location: 'Tiệm mì Yên Đà Lạt (Đường Ngô Thì Nhậm)',
                        notes: 'Cách Pink Valley ~10km, tiện đường về trung tâm. Chi phí ~200k/2 người',
                        cost: 200000,
                        mapQuery: 'Tiệm mì Yên Đà Lạt Ngô Thì Nhậm',
                        type: 'food'
                    },
                    {
                        time: '14:00',
                        title: 'Về khách sạn nhận phòng & Nghỉ ngơi',
                        location: 'An Mai Boutique Đà Lạt',
                        notes: 'Tắm rửa, nghỉ ngơi phục hồi sức sau buổi sáng di chuyển',
                        type: 'hotel'
                    },
                    {
                        time: '15:00 - 16:00',
                        title: 'Dạo chơi Hồ Xuân Hương & Quảng trường',
                        location: 'Quảng trường Lâm Viên & Hồ Xuân Hương',
                        notes: 'Cách KS 2km, check-in nụ hoa Atisô & dạo mát',
                        mapQuery: 'Quảng trường Lâm Viên Đà Lạt',
                        type: 'sightseeing'
                    },
                    {
                        time: '16:15 - 19:30',
                        title: 'Ăn tối BBQ & Săn hoàng hôn thung lũng',
                        location: 'Tiệm nướng Xóm Lèo (Huỳnh Tấn Phát, P.11)',
                        notes: 'Cách trung tâm ~7km (~15 phút). Thưởng thức BBQ & ngắm thung lũng lồng kính',
                        cost: 600000,
                        mapQuery: 'Tiệm nướng Xóm Lèo Huỳnh Tấn Phát Đà Lạt',
                        type: 'food'
                    },
                    {
                        time: '20:00 - 22:00',
                        title: 'Dạo chơi Chợ đêm & Hồ Xuân Hương',
                        location: 'Chợ đêm Đà Lạt',
                        notes: 'Thưởng thức bánh tráng nướng, sữa đậu nành nóng (~100k)',
                        cost: 100000,
                        mapQuery: 'Chợ đêm Đà Lạt',
                        type: 'sightseeing'
                    },
                    {
                        time: '22:00',
                        title: 'Về khách sạn nghỉ ngơi',
                        location: 'An Mai Boutique Đà Lạt',
                        notes: 'Cách chợ đêm ~3km. Nghỉ ngơi sớm mai săn mây 4:00',
                        type: 'hotel'
                    }
                ]
            },

            {
                dayNumber: 2,
                dayTitle: 'NGÀY 2 - THỨ HAI (27/07/2026)',
                summary: 'Săn Mây Cầu Đất - Vườn Hoa Euro Garden - Bún Bò O Cúc - Cà Phê Chênh Vênh',
                estimatedCost: '690.000 đ (2 người ~345k/người)',
                events: [
                    {
                        time: '04:00 - 05:00',
                        title: 'Dậy sớm xuất phát đi săn mây',
                        location: 'Đồi chè Cầu Đất (QL20)',
                        notes: 'Cách KS 24km (~45 phút đi xe máy). Đường tối & chú ý sương mù',
                        mapQuery: 'Đồi chè Cầu Đất Đà Lạt',
                        type: 'sightseeing'
                    },
                    {
                        time: '05:00 - 07:00',
                        title: 'Săn mây tự do & Đón bình minh',
                        location: 'Tuabin quạt gió đồi chè Cầu Đất',
                        notes: 'Ngắm biển mây bồng bềnh & tuabin gió khổng lồ',
                        type: 'sightseeing'
                    },
                    {
                        time: '07:00 - 08:30',
                        title: 'Check-in vườn hoa phong cách Châu Âu',
                        location: 'Euro Garden (Cầu Đất Farm)',
                        notes: 'Cách tuabin 1.5km. Vé cổng 80k/người (chi phí 160k/2 người)',
                        cost: 160000,
                        mapQuery: 'Euro Garden Cầu Đất Farm',
                        type: 'sightseeing'
                    },
                    {
                        time: '08:30 - 09:30',
                        title: 'Di chuyển QL20 về lại trung tâm',
                        location: 'Đường QL20 ➔ Khách sạn',
                        notes: 'Khoảng cách 24km từ Cầu Đất về lại trung tâm (~40 phút)',
                        type: 'transport'
                    },
                    {
                        time: '09:30 - 11:30',
                        title: 'Về khách sạn nghỉ ngơi bù',
                        location: 'An Mai Boutique Đà Lạt',
                        notes: 'Tắm rửa, ngủ bù phục hồi sức khỏe sau buổi sớm săn mây',
                        type: 'hotel'
                    },
                    {
                        time: '12:00',
                        title: 'Ăn trưa bún bò Huế nóng hổi',
                        location: 'Bún bò Huế O Cúc (12bis Xô Viết Nghệ Tĩnh)',
                        notes: 'Cách KS 3km (~8 phút đi xe máy). Chi phí ~100k/2 người',
                        cost: 100000,
                        mapQuery: 'Bún bò Huế O Cúc 12bis Xô Viết Nghệ Tĩnh Đà Lạt',
                        type: 'food'
                    },
                    {
                        time: '13:30 - 14:30',
                        title: 'Về khách sạn nghỉ ngơi nhẹ',
                        location: 'An Mai Boutique Đà Lạt',
                        notes: 'Thư giãn chuẩn bị cho buổi cà phê chiều ngắm thung lũng',
                        type: 'hotel'
                    },
                    {
                        time: '14:30 - 18:30',
                        title: 'Thư giãn & Ngắm hoàng hôn thung lũng',
                        location: 'Chênh Vênh Coffee & Chill (Huỳnh Tấn Phát, P.12)',
                        notes: 'Cách KS ~7km (~15 phút). Dành trọn buổi chiều ngắm hoàng hôn buông xuống thung lũng',
                        cost: 120000,
                        mapQuery: 'Chênh Vênh Coffee Huỳnh Tấn Phát Đà Lạt',
                        type: 'food'
                    },
                    {
                        time: '19:00 - 20:30',
                        title: 'Ăn tối bình dân tự chọn',
                        location: 'Quán ăn bình dân khu vực trung tâm / Chợ Đà Lạt',
                        notes: 'Cơm / Mì / Hủ tiếu nóng hổi (~100k/2 người)',
                        cost: 100000,
                        type: 'food'
                    },
                    {
                        time: '20:30 - 22:00',
                        title: 'Dạo mát Chợ đêm & Hồ Xuân Hương',
                        location: 'Chợ đêm Đà Lạt',
                        notes: 'Dạo chơi ngắm thành phố lên đèn về đêm',
                        type: 'sightseeing'
                    },
                    {
                        time: '22:00',
                        title: 'Về khách sạn nghỉ ngơi',
                        location: 'An Mai Boutique Đà Lạt',
                        notes: 'Nghỉ ngơi lấy lại năng lượng cho ngày cuối',
                        type: 'hotel'
                    }
                ]
            },

            {
                dayNumber: 3,
                dayTitle: 'NGÀY 3 - THỨ BA (28/07/2026)',
                summary: 'Thư Giãn - Ăn Đặc Sản - Langfarm Mua Quà - Miền Du Mục Cafe - Về Bình Dương',
                estimatedCost: '1.080.000 đ (2 người ~540k/người)',
                events: [
                    {
                        time: '08:00 - 11:00',
                        title: 'Nghỉ ngơi & Thư giãn buổi sáng',
                        location: 'An Mai Boutique Đà Lạt',
                        notes: 'Thong thả thức dậy, chuẩn bị dọn dẹp hành lý',
                        type: 'hotel'
                    },
                    {
                        time: '11:30',
                        title: 'Trả phòng khách sạn & Gửi lại hành lý',
                        location: 'An Mai Boutique Đà Lạt',
                        notes: 'Làm thủ tục trả phòng 12:00, gửi vali tại lễ tân khách sạn',
                        type: 'hotel'
                    },
                    {
                        time: '12:00 - 13:15',
                        title: 'Ăn trưa đặc sản Đà Lạt',
                        location: 'Bánh ướt lòng gà Long / Quán Cơm Lam Gà Nướng',
                        notes: 'Thưởng thức món đặc sản nóng hổi thơm ngon (~200k/2 người)',
                        cost: 200000,
                        mapQuery: 'Bánh ướt lòng gà Long Đà Lạt',
                        type: 'food'
                    },
                    {
                        time: '13:30 - 14:45',
                        title: 'Dạo phố & Mua sắm quà lưu niệm',
                        location: 'Chợ Đà Lạt / Cửa hàng Langfarm',
                        notes: 'Mua sắm mứt sấy, trà atisô, dâu tây tươi làm quà cho gia đình',
                        type: 'sightseeing'
                    },
                    {
                        time: '15:00 - 17:30',
                        title: 'Cà phê chiều ngắm hoàng hôn đồi thông',
                        location: 'Miền Du Mục Cafe (Đường Lâm Văn Thạnh, P.11)',
                        notes: 'Cách trung tâm ~7.5km. Thưởng thức đồ uống & ngắm đồi thông thơ mộng',
                        cost: 200000,
                        mapQuery: 'Miền Du Mục Cafe Lâm Văn Thạnh Đà Lạt',
                        type: 'food'
                    },
                    {
                        time: '18:00',
                        title: 'Về khách sạn lấy hành lý & Trả xe máy',
                        location: 'An Mai Boutique Đà Lạt',
                        notes: 'Từ Miền Du Mục về KS ~6.5km (~15 phút, trả xe máy lúc 18:00)',
                        type: 'transport'
                    },
                    {
                        time: '18:30 - 19:45',
                        title: 'Ăn tối nhẹ bình dân trước khi ra xe',
                        location: 'Quán ăn bình dân khu vực bến xe',
                        notes: 'Thưởng thức hủ tiếu / bún mì nóng hổi (~100k)',
                        cost: 100000,
                        type: 'food'
                    },
                    {
                        time: '20:00 - 21:30',
                        title: 'Taxi di chuyển ra Bến xe Liên Tỉnh',
                        location: 'Bến xe Liên Tỉnh Đà Lạt',
                        notes: 'Đi taxi từ KS ra bến xe (~3.5km). Chuẩn bị lên xe khách',
                        cost: 100000,
                        mapQuery: 'Bến xe Liên Tỉnh Đà Lạt',
                        type: 'transport'
                    },
                    {
                        time: '22:02',
                        title: 'Lên xe giường nằm khởi hành về Bình Dương',
                        location: 'Bến xe Liên Tỉnh ➔ Aeon Bình Dương',
                        notes: 'Khởi hành chuyến xe đêm về lại Bình Dương. Kết thúc chuyến đi trọn vẹn!',
                        type: 'transport'
                    }
                ]
            }
        ],

        expenses: [
            { category: 'fixed', name: 'Tiền xe khách khứ hồi (2 người)', cost: 1417000, note: 'Xe giường nằm Đà Lạt Ơi (Bình Dương ⇄ Đà Lạt)' },
            { category: 'fixed', name: 'Tiền phòng khách sạn 3N2Đ (2 người)', cost: 1100000, note: 'An Mai Boutique Đà Lạt (11A Lữ Gia)' },
            { category: 'transport', name: 'Thuê xe máy 3 ngày', cost: 360000, note: 'Vision / Air Blade (120k/ngày)' },
            { category: 'transport', name: 'Tiền xăng xe máy (3 ngày ~160km)', cost: 120000, note: 'Ước tính di chuyển Cầu Đất, Vạn Thành, P.11, P.12' },
            { category: 'sightseeing', name: 'Vé tham quan Pink Valley', cost: 240000, note: 'Đã bao gồm 1 phần nước & ngâm chân (120k/người)' },
            { category: 'sightseeing', name: 'Vé tham quan Euro Garden Cầu Đất', cost: 160000, note: 'Vườn hoa Châu Âu (80k/người)' },
            { category: 'food', name: 'Ăn sáng Bánh căn Lệ (Ngày 1)', cost: 100000, note: 'Bánh căn hẻm Yersin (50k/người)' },
            { category: 'food', name: 'Ăn trưa Mì bò hầm Tiệm mì Yên (Ngày 1)', cost: 200000, note: '100k/người gồm nước' },
            { category: 'food', name: 'Ăn tối BBQ Tiệm nướng Xóm Lèo (Ngày 1)', cost: 600000, note: '300k/người ngắm thung lũng đèn' },
            { category: 'food', name: 'Ăn vặt chợ đêm Đà Lạt (Ngày 1)', cost: 100000, note: 'Bánh tráng nướng, sữa đậu nành (50k/người)' },
            { category: 'food', name: 'Ăn trưa Bún bò Huế O Cúc (Ngày 2)', cost: 100000, note: '50k/người' },
            { category: 'food', name: 'Cà phê Chênh Vênh Coffee & Chill (Ngày 2)', cost: 120000, note: '60k/người ngắm hoàng hôn' },
            { category: 'food', name: 'Ăn tối bình dân (Ngày 2)', cost: 100000, note: '50k/người' },
            { category: 'food', name: 'Ăn trưa Bánh ướt lòng gà / Cơm lam (Ngày 3)', cost: 200000, note: '100k/người' },
            { category: 'food', name: 'Vé & nước Miền Du Mục Cafe (Ngày 3)', cost: 200000, note: '100k/người ngắm đồi thông' },
            { category: 'food', name: 'Ăn tối nhẹ gần bến xe (Ngày 3)', cost: 100000, note: '50k/người' },
            { category: 'transport', name: 'Taxi di chuyển ra bến xe (Ngày 3)', cost: 100000, note: 'Từ KS đi ăn & ra bến xe' },
            { category: 'other', name: 'Dự phòng & Gửi xe tham quan', cost: 150000, note: 'Gửi xe các điểm & nước uống thêm' }
        ],

        gallery: [
            { type: 'image', url: 'images/1785856050100_2224797881829335097_2419330006741937226_7068096bf25a1328d248ea5a123359fa.jpg', caption: 'Khung cảnh thung lũng sương mờ Đà Lạt' },
            { type: 'image', url: 'images/1785856050143_2224797881829335097_2419330006741937226_ce7616fd5fa1e1542e35569643f09929.jpg', caption: 'Hoàng hôn rực rỡ trên đồi thông' },
            { type: 'image', url: 'images/1785856050166_2224797881829335097_2419330006741937226_34d4744fd5140d2fa231dd83a829a741.jpg', caption: 'Đồi chè Cầu Đất rợp sắc xanh' },
            { type: 'image', url: 'images/1785856050183_2224797881829335097_2419330006741937226_ab2ac77dbd5a8fef56a13189b1406e96.jpg', caption: 'Check-in biển mây bồng bềnh 5:00 sáng' },
            { type: 'video', url: 'images/1785856050197_2224797881829335097_2419330006741937226.mp4', caption: 'Video khoảnh khắc săn mây cực chất tại Cầu Đất' },
            { type: 'image', url: 'images/1785856050205_2224797881829335097_2419330006741937226_03551df82651e26391e97eff0e157449.jpg', caption: 'Thung Lũng Hồng Pink Valley mộng mơ' },
            { type: 'image', url: 'images/1785856050218_2224797881829335097_2419330006741937226_0e0037b3fecbc92fe06a9ffdab927f78.jpg', caption: 'Góc chụp hoa hồng & hồ nước tại Pink Valley' },
            { type: 'image', url: 'images/1785856050231_2224797881829335097_2419330006741937226_2a56b6f2b900c81bbbbcb27e43b3685e.jpg', caption: 'Vườn hoa phong cách Châu Âu Euro Garden' },
            { type: 'image', url: 'images/1785856050244_2224797881829335097_2419330006741937226_755bd7dd50503bae6f12021650f96ed6.jpg', caption: 'Tô mì bò hầm thảo mộc thơm phức Tiệm Mì Yên' },
            { type: 'image', url: 'images/1785856050257_2224797881829335097_2419330006741937226_cb95753332a89dc905deaf1f4de7ef98.jpg', caption: 'Tiệc nướng BBQ thung lũng lồng kính Xóm Lèo' },
            { type: 'image', url: 'images/1785856050270_2224797881829335097_2419330006741937226_e920b723e543e5e563c3940f187c2c8d.jpg', caption: 'Chợ đêm Đà Lạt rực rỡ ánh đèn' },
            { type: 'image', url: 'images/1785856050283_2224797881829335097_2419330006741937226_4ae8ac19f7b707bdd31e9bf0aff727cf.jpg', caption: 'Chồng bánh căn Lệ giòn rụm nhân trứng' },
            { type: 'image', url: 'images/1785856050297_2224797881829335097_2419330006741937226_94f19ca296ac3fcfb33e7017b82e8604.jpg', caption: 'Tô bún bò Huế O Cúc cay nồng ấm bụng' },
            { type: 'image', url: 'images/1785856050312_2224797881829335097_2419330006741937226_50d736fc9bb01cf5da4916c50baf036f.jpg', caption: 'Góc chill ngắm thung lũng tại Chênh Vênh Coffee' },
            { type: 'image', url: 'images/1785856050326_2224797881829335097_2419330006741937226_892f1861e028199787c45f8797b2020c.jpg', caption: 'Đĩa bánh ướt lòng gà Long đậm vị' },
            { type: 'image', url: 'images/1785856050340_2224797881829335097_2419330006741937226_1e62eec87b94a75b5150c4b485b82e1b.jpg', caption: 'Không gian thơ mộng Miền Du Mục Cafe' },
            { type: 'image', url: 'images/1785856050355_2224797881829335097_2419330006741937226_9b2cbb43b0bdadb9ec13444f6e596a6e.jpg', caption: 'Phòng nghỉ xinh xắn tại An Mai Boutique Đà Lạt' },
            { type: 'video', url: 'images/1785856169483_2224797881829335097_2419330006741937226.mp4', caption: 'Video chill hoàng hôn chiều thung lũng lồng kính' },
            { type: 'video', url: 'images/1785856368238_2224797881829335097_2419330006741937226.mp4', caption: 'Video trải nghiệm không gian đồi thông Miền Du Mục' }
        ]
    }
};
