import Input from "@/src/components/common";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import MainLayote from "./MainLayote";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth, useAuthAction } from "@/src/context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { userSignin } from "../redux/user/userAction";


const initialValues = {
    email:"",
    password:"",
}
const validationSchema = Yup.object({

    email :Yup.string().email("ایمیل را بدرستی وارد نمایید").required("لطفا ایمیل خود را وارد نمایید"),
    password:Yup.string().required("لطفا پسورد خود را وارد نمایید")
    ,
})

const LogIn = () => {
    const router = useRouter();
    const disatch = useDispatch();
    const userInfo = useSelector((state)=> state.userSignin);
    const { user } = userInfo;
    const [formValues , setFormValues]=useState(null);
    // OnSubmit
    const onSubmit=(values)=>{
        
        disatch(userSignin(values))
    }

    const formik = useFormik({
        initialValues: formValues || initialValues,
        onSubmit,
        validationSchema,
        validateOnMount:true,
        enableReinitialize:true,
    }) 
    useEffect(()=>{
        if(user) router.push("/");
    }, [user]);
    
    return ( 
        <MainLayote>
            <Head>
                <title>جواهری ویرگول - ثبت نام</title>
            </Head>
            <div className="flex justify-center items-center h-screen">
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-10 p-10 ">
                <h1 className="font-black text-2xl text-violet-700 mb-4">ورود</h1>
                <Input 
                        formik={formik} 
                        label="ایمیل"  
                        name="email" 
                    />
                    <Input 
                        formik={formik} 
                        label="رمز عبور"  
                        name="password" 
                        type="password"
                    />
                    <button 
                        type="submit"
                        disabled={!formik.isValid}
                        className="text-white px-5 py-1 bg-blue-600 hover:bg-blue-500 hover:text-black rounded-lg"
                        >
                    ارسال       
                    </button>
                    <Link href={"/signup"} >
                        <p className="mt-4 py-4 cursor-pointer">هنوز ثبت نام نکردی ؟</p>
                    </Link>
                </form>
            </div>
       
        
        </MainLayote>
     );
}
 
export default LogIn;