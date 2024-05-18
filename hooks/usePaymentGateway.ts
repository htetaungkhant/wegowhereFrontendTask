// import from third-party libraries
import { selectOmiseSecretKey } from "@/store";
import { CreditCardProps } from "@/types";
import { useSelector } from "react-redux";

const omisePublicKey = process.env.EXPO_PUBLIC_OMISE_PUBLIC_KEY;
const createTokenUrl = process.env.EXPO_PUBLIC_OMISE_CREATE_TOKEN_URL;
const chargeUrl = process.env.EXPO_PUBLIC_OMISE_CHARGE_URL;

export const usePaymentGateway = () => {
    const omiseSecretKey = useSelector(selectOmiseSecretKey);
    if (!omisePublicKey || !omiseSecretKey || !createTokenUrl || !chargeUrl) {
        throw new Error('Omise keys are not set');
    }

    const createToken = (data: CreditCardProps) => {
        const credentials = btoa(`${omisePublicKey}:${''}`);

        let body = `card[name]=${data.cardHolder}&card[number]=${data.cardNumber}&card[security_code]=${data.cvv}&card[expiration_month]=${parseInt(data.expiryDate.split('/')[0])}&card[expiration_year]=20${data.expiryDate.split('/')[1]}`;

        if (data.city) {
            body += `&card[city]=${data.city}`;
        }

        if (data.postalCode) {
            body += `&card[postal_code]=${data.postalCode}`;
        }

        // create token
        return fetch(createTokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${credentials}`,
            },
            body,
        })
    }

    const createTokenPromise = (data: CreditCardProps) => {
        return new Promise((resolve, reject) => {
            createToken(data)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    const chargeAmount = (data: { amount: number, cardToken: string }) => {
        const credentials = btoa(`${omiseSecretKey}:${''}`);

        let body = `amount=${data.amount}&currency=THB&card=${data.cardToken}`;

        // create charge
        return fetch(chargeUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${credentials}`,
            },
            body,
        })
    }

    return {
        createToken,
        createTokenPromise,
        chargeAmount,
    }
}