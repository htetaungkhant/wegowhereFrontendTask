import { CreditCardTypes } from "@/types";

export const useCreditCardNumberChecker = (cardNumber: string): { state: CreditCardTypes } => {
    let cardState: CreditCardTypes = "INVALID";

    const cardNumberWithoutSpaces = cardNumber.replace(/\s/g, '');
    const cardNumberArray = cardNumberWithoutSpaces.split('').map(Number);
    const cardNumberLength = cardNumberArray.length;

    if (cardNumberLength !== 16) {
        cardState = "INVALID";
    }
    else {
        const lastDigit = cardNumberArray[cardNumberLength - 1];
        const cardNumberArrayWithoutLastDigit = cardNumberArray.slice(0, cardNumberLength - 1);

        const reversedCardNumberArrayWithoutLastDigit = cardNumberArrayWithoutLastDigit.reverse();

        const doubledCardNumberArray = reversedCardNumberArrayWithoutLastDigit.map((digit, index) => {
            if (index % 2 === 0) {
                return digit * 2;
            }

            return digit;
        });

        const sumOfDigits = doubledCardNumberArray.reduce((acc, curr) => {
            if (curr > 9) {
                return acc + curr - 9;
            }

            return acc + curr;
        }, 0);

        const sumOfDigitsWithLastDigit = sumOfDigits + lastDigit;

        if(sumOfDigitsWithLastDigit % 10 === 0) {
            if(cardNumberArray[0] === 4) {
                cardState = "Visa";
            }
            else if(cardNumberArray[0] === 5) {
                cardState = "Mastercard";
            }
            else if(cardNumberArray[0] === 3) {
                cardState = "JCB";
            }
            else {
                cardState = "INVALID";
            }
        }
        else {
            cardState = "INVALID";
        }
    }

    return { state: cardState };
};