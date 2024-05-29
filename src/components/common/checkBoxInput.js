import React from "react";

const CheckBoxInput = ({  name  ,formik , checkBoxOption}) => {
    return ( 
        <div className="flex justify-center gap-4">
            {
                checkBoxOption.map((item)=>(
                    <React.Fragment key={item.value}>
                        <label htmlFor={item.value}
                        className="flex gap-3"
                        >
                            {item.label}                       
                        <input 
                            type="checkbox"
                            name={name}
                            id={item.value}
                            value={item.value}
                            onChange={formik.handleChange}
                            checked={formik.values[name].includes(item.value)}
                        />
                    </label>       
                        {
                                formik.errors[name] && formik.touched[name] && (
                                <div className="text-sm text-red-600 mr-5 text-end">
                                    {formik.errors[name]}
                                </div>
                                )
                            }
                    </React.Fragment>
                ))
            }
           
        </div>
     );
}
 
export default CheckBoxInput;