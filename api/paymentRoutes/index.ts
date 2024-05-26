// import from local files
import { chargeApiRequest, chargeApiResponse } from "@/types";

const backendApi = process.env.EXPO_PUBLIC_BACKEND_API;


const charge = async(token: string, { amount, cardNumber, cardHolder, expiryDate, cvv, city, postalCode }: chargeApiRequest) => {
    try {
        const response = await fetch(`${backendApi}/payment/charge`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}1`,
            },
            body: JSON.stringify({ amount, cardNumber, cardHolder, expiryDate, cvv, city, postalCode }),
        });

        const data: chargeApiResponse = await response.json();

        if (response.ok && data.status === 200) {
            return data;
        } else {
            console.error('Error while making payment', data);
            return { status: data?.code || data?.status || response?.status, message: data?.message || 'Error while making payment' };
        }
    } catch (error: any) {
        console.error(`${error?.staus || 500} Error while making payment`, error);
        return { status: error?.status || 500, message: `${error?.staus || 500} Error while making payment`};
    }
}

export {
    charge
};
