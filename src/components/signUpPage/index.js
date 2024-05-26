import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
    name:"",
    email:"",
    phonenumber:"",
    password:"",
    passwordConfrim:"",
}

const validationSchema = Yup.object({
    name : Yup.string().required("لطفا نام خود را وارد نمایید ").min(4,"طول نام کمتر از 4 کارکتر نباید باشد"),
    email :Yup.string().email("ایمیل را بدرستی وارد نمایید").required("لطفا ایمیل خود را وارد نمایید"),
    phonenumber:Yup.string().required("وارد کرد نتلفن همراه اجباری است")
    .matches(/^[0-9]{11}$/ , "شماره همراه نا معتبر می باشد").nullable(),
    password:Yup.string().required("لطفا پسورد خود را وارد نمایید")
    ,
    passwordConfrim:Yup.string().required("وارد کرد این فیلد اجباری است")
    .oneOf([Yup.ref('password') , null] , "با رمز عبور متفاوت است ") ,
});

const SignUpPage = () => {

    const onSubmit=(value)=>{
        console.log(value);
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount:true,
    }) ;

    return (
        <div className="flex">
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-10 p-10">
             
                    <label className="text-xl">نام</label>
                    <input type="text" 
                    className="w-400 px-12 py-1 block bg-slate-20 text-gray-500 border border-x-gray-300 rounded-lg"
                        // onChange={formik.handleChange} 
                        // onBlur={formik.handleBlur}
                        // value={formik.values.name} 
                        {...formik.getFieldProps("name")}
                        name="name"/>
                    {
                        formik.errors.name && formik.touched.name && (<div className="text-sm text-red-600 mr-5 text-end"> {formik.errors.name} </div>)
                    }
               
                
                    <label className="text-xl">ایمیل</label>
                    <input type="email"
                    className="w-400 px-12 py-1 block bg-slate-20 text-gray-500 border border-x-gray-300 rounded-lg"
                    {...formik.getFieldProps("email")}
                    name="email"/>
                    {
                        formik.errors.email && formik.touched.email && (<div className="text-sm text-red-600 mr-5"> {formik.errors.email} </div>)
                    }
              
                
                    <label className="text-xl">تلفن همراه</label>
                    <input type="text"
                    className="w-400 px-12 py-1 block bg-slate-20 text-gray-500 border border-x-gray-300 rounded-lg"
                    {...formik.getFieldProps("phonenumber")}
                    name="phonenumber"/>
                    {
                        formik.errors.phonenumber && formik.touched.phonenumber && (<div className="text-sm text-red-600 mr-5"> {formik.errors.phonenumber} </div>)
                    }
                
                
                    <label className="text-xl">رمز عبور</label>
                    <input type="password"
                    className="w-400 px-12 py-1 block bg-slate-20 text-gray-500 border border-x-gray-300 rounded-lg"
                    {...formik.getFieldProps("password")}
                    name="password"/>
                    {
                        formik.errors.password && formik.touched.password && (<div className="text-sm text-red-600 mr-5"> {formik.errors.password} </div>)
                    }
           
         
                    <label className="text-xl">تکرار رمز عبور</label>
                    <input type="password"
                    className="w-400 px-12 py-1 block bg-slate-20 text-gray-500 border border-x-gray-300 rounded-lg"
                    {...formik.getFieldProps("passwordConfrim")}
                    name="passwordConfrim"/>
                    {
                        formik.errors.passwordConfrim && formik.touched.passwordConfrim && (<div className="text-sm text-red-600 mr-5"> {formik.errors.passwordConfrim} </div>)
                    }
            
                <button 
                type="submit"
                className="bg-white text-white px-5 py-1 bg-blue-600 hover:bg-blue-500 hover:text-black"
                disabled={!formik.isValid}
                >ارسال</button>
            </form>
        </div>
      );
}
 
export default SignUpPage;