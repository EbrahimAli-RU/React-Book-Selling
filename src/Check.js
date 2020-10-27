import dumyImage from './assets/CoverPhoto/coverPhoto.jpg'

export const aboutBook = () => {
    return {
        coverphoto: {
            elementType: 'input',
            elementConfig: {
                type: 'file',
                accept: 'image/*'
            },
            value: '',
            value1: dumyImage,
            validation: {
                // required: true,
                // length: 11
            },
            valid: true,
            isTouched: false
        },
        photo: {
            elementType: 'input',
            elementConfig: {
                type: 'file',
                accept: 'image/*'
            },
            value: '',
            value1: dumyImage,
            validation: {
                // required: true,
                // length: 11
            },
            valid: true,
            isTouched: false
        },
        bookName: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Book name'
            },
            value: '',
            validation: {
                required: true,
                minLength: 8
            },
            valid: false,
            isTouched: false
        },
        authorName: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Author Name'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            isTouched: false
        },
        publication: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Publication'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            isTouched: false
        },
        edition: {
            elementType: 'select',
            elementConfig: {
                option: [
                    { value: "", displayValue: "Edition" },
                    { value: "first", displayValue: "First" },
                    { value: "second", displayValue: "Second" },
                    { value: "third", displayValue: "Third" },
                    { value: "fourth", displayValue: "Fourth" },
                    { value: "fifth", displayValue: "Fitth" },
                    { value: "sixth", displayValue: "Sixth" },
                    { value: "seventh", displayValue: "Seventh" },
                    { value: "eighth", displayValue: "Eighth" },
                ],
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            isTouched: false
        },
        language: {
            elementType: 'select',
            elementConfig: {
                option: [
                    { value: "", displayValue: "Select Language" },
                    { value: "english", displayValue: "English" },
                    { value: "bangla", displayValue: "Bangla" },
                ],
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            isTouched: false
        },
        numberOfPage: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'Number of Page'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            isTouched: false
        },
        price: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'Price'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            isTouched: false
        },
    }
}

export const sellerInfo = () => {
    return {
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your name'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            isTouched: false
        },
        mobile: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'Your Mobile Number'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            isTouched: false
        },
        division: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Division'
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
                placeholder: 'Distinct'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            isTouched: false
        },
        subDistict: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Sub-Division'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            isTouched: false
        },
    }
}
