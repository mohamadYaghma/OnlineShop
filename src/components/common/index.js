const Input = ({label , name  ,formik , type="text"}) => {
    return ( 
        <div>
            <label htmlFor={name} className="text-xs md:text-base text-gray-500">
                {label}
                {
                    formik.errors[name] && formik.touched[name] && (
                    <div className="text-sm text-red-600 mr-5 text-end"> {formik.errors[name]} </div>
                    )
                }
                </label>
                    <input
                        type={type}
                        id={name}
                        name={name}
                        {...formik.getFieldProps(name)}
                        className="w-400 px-12 py-1 block bg-slate-20 text-gray-500 border border-x-gray-300 rounded-lg"
                        />
                  
        </div>
     );
}
 
export default Input;