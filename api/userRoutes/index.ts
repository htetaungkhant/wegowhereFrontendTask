// import from local files
import { getAllUsersApiResponse } from "@/types";

const backendApi = process.env.EXPO_PUBLIC_BACKEND_API;

const getAllUsers = async(token: string) => {
    try {
        const response = await fetch(`${backendApi}/user/getAllUsers`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        const data: getAllUsersApiResponse = await response.json();
        
        if (response.ok && data.status === 200) {
            return data;
        } else {
            console.error('Error while getting all users', data);
            return { status: data?.code || data?.status || response?.status, message: data?.message || 'Error while getting all users' };
        }
    } catch (error: any) {
        console.error(`${error?.status || 500} Error while getting all users`, error);
        return { status: error?.status || 500, message: `${error?.status || 500} Error while getting all users`};
    }
};

export {
    getAllUsers
};
