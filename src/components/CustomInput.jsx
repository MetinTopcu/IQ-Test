import { useField } from 'formik'
import React, { useState } from 'react'
import '../styles/Formik.css'

function CustomInput({...props}) {
  // console.log("CustomInput");
    const [field, meta] = useField(props);

  return (
    <>
    <input {...field} {...props} className={meta.error ? 'input-error':''}/>
      {meta.error && <div className='error'>{meta.error}</div>}
    </>
  )
}

export default React.memo(CustomInput);
