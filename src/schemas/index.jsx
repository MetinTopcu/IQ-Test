import * as yup from 'yup';

export const advancedSchema = yup.object().shape({
    // username:yup.string().min(3,'Username must be at least 3 characters').required('Username is required '),
    // university:yup.string().oneOf(['bogazici','gsu','odtü','itü'],'Please select your university').required('Please select your university'),
    // isAccepted:yup.boolean().oneOf([true],'Please accept the terms of use ')
    age:yup.number().positive('Please enter positive age').integer('Please enter integer age')
    .max(100,"Please enter your real age!").min(5,"Please enter your real age!"),
});