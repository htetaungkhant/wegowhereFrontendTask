// import from third-party libraries
import { useSelector } from "react-redux";

// import from local files
import { charge } from "@/api/paymentRoutes";
import { selectUserToken } from "@/store";
import { chargeApiRequest } from "@/types";

export const usePaymentGateway = () => {
    const token = useSelector(selectUserToken);

    const chargeAmountAsync = async (data: chargeApiRequest) => {
        const result = await charge(token, data);
        return result;
    }

    return {
        chargeAmountAsync,
    }
}