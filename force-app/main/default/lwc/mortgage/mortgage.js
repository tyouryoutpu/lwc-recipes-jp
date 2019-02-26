const getTermOptions = () => {
    return [
        { label: '20 年', value: 20 },
        { label: '25 年', value: 25 },
        { label: '30 年', value: 30 },
        { label: '35 年', value: 35 },
        { label: '40 年', value: 40 },
    ];
};

const calculateMonthlyPayment = (principal, years, rate) => {
    if (principal && years && rate && rate > 0) {
        const monthlyRate = rate / 100 / 12;
        const monthlyPayment =
            (principal * monthlyRate) /
            (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
        return monthlyPayment;
    }
    return 0;
};

export { getTermOptions, calculateMonthlyPayment };
