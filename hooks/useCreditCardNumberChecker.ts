import { CreditCardTypes } from "@/types";

interface checkFnType {
    (cardNumber: string): { state: CreditCardTypes, last4Digits: string }
}

export const useCreditCardNumberChecker = (): { check: checkFnType } => {
    const check: checkFnType = (cardNumber: string) => {
        let cardState: CreditCardTypes = "INVALID";
        let last4Digits: string = "";
    
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
                    last4Digits = cardNumber.slice(-4);
                }
                else if(cardNumberArray[0] === 5) {
                    cardState = "Mastercard";
                    last4Digits = cardNumber.slice(-4);
                }
                else if(cardNumberArray[0] === 3) {
                    cardState = "JCB";
                    last4Digits = cardNumber.slice(-4);
                }
                else {
                    cardState = "INVALID";
                }
            }
            else {
                cardState = "INVALID";
            }
        }
    
        return { state: cardState, last4Digits };
    }

    return { check };
};