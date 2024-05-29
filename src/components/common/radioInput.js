import React from "react";

const RadioInput = ({formik , type , name , radioOption , label}) => {
    return ( 
        <>
            {
                radioOption.map((item)=>(
                    <React.Fragment key={item.value}>
                        <label htmlFor={item.value}>{item.label}</label>       
                        <input 
                            type={type}
                            name={name}
                            id={item.value}
                            value={item.value}
                            onChange={formik.handleChange}
                            checked={formik.values[name] === item.value}
                        />
                        {
                            formik.errors[name] && formik.touched[name] && (<div className="text-sm text-red-600 mr-5 text-end"> {formik.errors[name]} </div>)
                        }
                    </React.Fragment>
                ))
            }
        </>
     );
}
 
export default RadioInput;