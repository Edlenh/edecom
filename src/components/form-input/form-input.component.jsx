import './form-input.style.scss'

// generalizing form input
//instead of making different sign up / log in forms
const FormInput = ({ label, ...otherProps }) =>{
    return (
        <div className="group">
             <input className="form-input" {...otherProps}/>
            { label && (
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
        {label}</label>
            )}
        </div>
    )
}


export default FormInput