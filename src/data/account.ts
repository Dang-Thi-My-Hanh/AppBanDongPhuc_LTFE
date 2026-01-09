import avatar1 from "../assets/images/ImageHome/avarta/av1.jpg";
import avatar2 from "../assets/images/ImageHome/avarta/av2.jpg";
import map from "../assets/images/ImageHome/avarta/map.png";

export const accountData = {
    users: [
        {
            id: 1,
            name: "hanh",
            email: "hanh12345@gmail.com",
            avatar: avatar1,
            pass: "123456",
            address: {
                text: "Khu pho 6, Linh Trung, Thu Duc, TP.HCM",
                map: map,
            },
            contact: {
                phone: "+84 7755 xxx xxx",
            },
            payment: "bank",
        },
        {
            id: 2,
            name: "linh",
            email: "linh@gmail.com",
            avatar: avatar2,
            pass: "123456",
            address: {
                text: "Quan 1, TP.HCM",
                map: map,
            },
            contact: {
                phone: "+84 8888 xxx xxx",
            },
            payment: "cod",
        },
        {
            id: 3,
            name: "cac",
            email: "cac@gmail.com",
            avatar: avatar2,
            pass: "123456",
            address: {
                text: "Quan 7, TP.HCM",
                map: map,
            },
            contact: {
                phone: "+84 9999 xxx xxx",
            },
            payment: "bank",
        },
    ],
};
