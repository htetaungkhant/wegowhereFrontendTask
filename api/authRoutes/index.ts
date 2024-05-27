// import from local files
import { loginApiRequest, loginApiResponse, registerApiRequest, registerApiResponse } from "@/types";

const backendApi = process.env.EXPO_PUBLIC_BACKEND_API;

const login = async({ email, password }: loginApiRequest) => {
    try {
        const response = await fetch(`${backendApi}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data: loginApiResponse = await response.json();
        
        if (response.ok && data.status === 200) {
            return data;
        } else {
            console.error('Error while logging in', data);
            return { status: response.status, message: data?.message || 'Error while logging in' };
        }
    } catch (error: any) {
        console.error(`${error?.status || 500} Error while logging in`, error);
        return { status: error?.status || 500, message: `${error?.status || 500} Error while logging in`};
    }
}

const register = async({ name, email, password }: registerApiRequest) => {
    try {
        const response = await fetch(`${backendApi}/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data: registerApiResponse = await response.json();
        
        if (response.ok && data.status === 200) {
            return data;
        } else {
            console.error('Error while registering', data);
            return { status: data?.status || response?.status, message: data?.message || 'Error while registering' };
        }
    } catch (error: any) {
        console.error(`${error?.status || 500} Error while registering`, error);
        return { status: error?.status || 500, message: `${error?.status || 500} Error while registering`};
    }
}

export {
    login,
    register
};
