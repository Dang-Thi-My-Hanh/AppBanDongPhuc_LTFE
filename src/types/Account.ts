export interface User {
    username: string;
    email: string;
    avatar: string;

    address: {
        text: string;
        map: string;
    };
    contact: {
        phone: string;
    };
    payment: "bank" | "online" | "cod";
    isLogin: boolean;
    isMock?: boolean;
}
