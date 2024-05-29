const SelectOption = ({selectOption , name , formik , label}) => {
    return ( 
        <div name={name} >
            <label htmlFor={name} className="text-xl">
                {label}
            {
                formik.errors[name] && formik.touched[name] && (
                <div className="text-sm text-red-600 mr-5 text-end"> {formik.errors[name]} </div>
                )
            }       
            </label>
            <select {...formik.getFieldProps(name)}
                 className="w-400 px-12 py-1 block bg-slate-20 text-gray-500 border border-x-gray-300 rounded-lg"
            >
                {
                     selectOption.map((item)=>(
                        <option value={item.value}>{item.label}</option>
                     ))
                }
                
            </select>
        </div>
     );
}
 
export default SelectOption;