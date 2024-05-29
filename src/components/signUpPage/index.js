import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Input from "../common";
import RadioInput from "../common/radioInput";
import SelectOption from "../common/select";
import CheckBoxInput from "../common/checkBoxInput";
import MainLayote from "@/src/pages/MainLayote";
import Head from "next/head";


const checkBoxOption=[
    {label:"هیچکدام" , value:"ziro"},
    {label:"reactJs" , value:"reactJs"},
    {label:"nextJs" , value:"nextJs"},
    {label:"javaScript" , value:"javaScript"},
];
const radioOption=[
    {label:"زن" , value:"0"},
    {label:"مرد" , value:"1"},
];
const selectOption=[
    {label:"انتخاب کنید..." , value:""},
    {label:"ایران" , value:"IR"},
    {label:"آلمان" , value:"GR"},
    {label:"آمریکا" , value:"US"},

];
const initialValues = {
    name:"",
    email:"",
    phonenumber:"",
    password:"",
    passwordConfrim:"",
    gender:"",
    nationnality:"",
    proficiency:[],
    terms:false,
}
const saveData = {
    name:"mohamad",
    email:"mohamad@yahoo.com",
    phonenumber:"09999999999",
    password:"123",
    passwordConfrim:"123",
    gender:"0",
    nationnality:"",
    proficiency:"",
    terms:false,
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
    gender:Yup.string().required("لطفا جنسیت خود را انتخاب نمایید"),
    nationnality:Yup.string().required("انخاب کشور اجباری می باشد"),
    proficiency:Yup.array().min(1).required("انتخاب هنر اجباری است"),
    terms:Yup.boolean().required("قوانین سایت اجباری می باشد").oneOf([true],"قوانین سایت اجباری می باشد" )
});

const SignUpPage = () => {
    
    const [formValues , setFormValues]=useState(null);
    
    const onSubmit=(value)=>{
        console.log(value);
    }
    const formik = useFormik({
        initialValues: formValues || initialValues,
        onSubmit,
        validationSchema,
        validateOnMount:true,
        enableReinitialize:true,
    }) 

    return (
        <MainLayote >
            <Head>
                <title>جواهری ویرگول - ورود</title>
            </Head>
            <div  className="md:max-w-md px-4 md:px-4 container mx-auto ">
                <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4 pt-5">
                
                <Input 
                    formik={formik} 
                    label="نام"  
                    name="name" 
                />
                <Input 
                    formik={formik} 
                    label="ایمیل"  
                    name="email" 
                />
                <Input 
                    formik={formik} 
                    label="تلفن همراه"  
                    name="phonenumber" 
                />
                <Input 
                    formik={formik} 
                    label="رمز عبور"  
                    name="password" 
                    type="password"
                />
                <Input
                    formik={formik}
                    label="تکرار رمز عبور"  
                    name="passwordConfrim" 
                    type="password"
                />

                <div className="inline-flex gap-3">
                    <RadioInput 
                        formik={formik} 
                        type="radio" 
                        name="gender" 
                        label={radioOption.label}  
                        radioOption={radioOption}
                    />
                </div>

                <SelectOption 
                    name="nationnality"
                    label="انتخاب کشور"
                    formik={formik} 
                    selectOption={selectOption}
                />

                <CheckBoxInput
                    name="proficiency"
                    label="مهارتهای من" 
                    formik={formik} 
                    checkBoxOption={checkBoxOption}
                />

                <div className="flex gap-2">
                    <label htmlFor="terms">قوانین</label>
                    <input  
                        type="checkbox"
                        name="terms"
                        id="terms"
                        value={true}
                        onChange={formik.handleChange}
                        checked={formik.values.terms}
                        
                    />
                    {
                        formik.errors.terms && formik.touched.terms && (
                        <div className="text-sm text-red-600 mr-5 text-end">
                            {formik.errors.terms}
                        </div>
                        )
                    }
                </div>


                <button onClick={()=>{setFormValues(saveData)}}>یادآوری اطلاعات</button>
                <button 
                    type="submit"
                    disabled={!formik.isValid}
                    className="text-white px-5 py-1 bg-blue-600 hover:bg-blue-500 hover:text-black ">
                                ارسال
                    </button>
                </form>
            </div>
        </MainLayote>
      );
}
 
export default SignUpPage;