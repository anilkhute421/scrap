import React from 'react'

const FormControl = ({label, name, placeholder, type, value, onChange}) => {
  return (
    <>
    {type === 'text' && <div className='myFormGroup'>
        <label>{label}</label>
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}></input>
    </div> }
    {type === 'number' && <div className='myFormGroup'>
        <label>{label}</label>
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}></input>
    </div> }
    {type === 'textarea' && <div className='myFormGroup'>
        {label.length > 0 && <label>{label}</label>}
        <textarea name={name} placeholder={placeholder} rows={3} value={value} onChange={onChange}></textarea>
    </div> }

    </>
  )
}

export default FormControl
