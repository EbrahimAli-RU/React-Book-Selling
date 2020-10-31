export const layout = () => {
    return {
        division: {
            elementType: 'select',
            elementConfig: {
                option: [
                    { value: "", displayValue: "Division" },
                    { value: "dhaka", displayValue: "Dhaka" },
                    { value: "rajshahi", displayValue: "Rajshahi" },
                    { value: "khulna", displayValue: "Khulna" },
                    { value: "barisal", displayValue: "Barisal" },
                    { value: "chittagong", displayValue: "Chittagong" },
                    { value: "mymensingh", displayValue: "Mymensingh" },
                    { value: "rangpur", displayValue: "Rangpur" },
                    { value: "sylhet", displayValue: "Sylhet" },
                ],
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            isTouched: false
        },
        distict: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Distict'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            isTouched: false
        },
        subDivision: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Sub-Distict'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            isTouched: false
        }
    }
}