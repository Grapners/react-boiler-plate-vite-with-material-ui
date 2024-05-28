import { fetchApi } from "./utils";

export const userService = {
    getUser: async () => {
        try {
            const res = await fetchApi("user", "GET");
            return res;
        } catch (error) {
            return error;
        }
    },
    updateUser: async (phone, email, fullname, gender) => {
        try {
            const res = await fetchApi("user", "PUT", {
                fullname: fullname,
                gender: gender,
                email: email,
                phone: phone,
            });
            return res;
        } catch (error) {
            return error;
        }
    }
}
