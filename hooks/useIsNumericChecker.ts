interface checkFnType {
    (value: string): { result: boolean }
}

export const useIsNumericChecker = (): { isNumeric: checkFnType } => {
    const isNumeric: checkFnType = (value: string) => {
        const result = /^[0-9]*$/.test(value);

        return { result };
    }

    return { isNumeric };
}