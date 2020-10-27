export const signUp = () => {
    return {
        firstName: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'First name'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            isTouched: false
        },
        lastName: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'last name'
            },
            validation: {},
            value: ''
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'E-Mail'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            isTouched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 8
            },
            valid: false
        },
        confirmPassword: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Confirm Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 8
            },
            valid: false
        }
    }
}