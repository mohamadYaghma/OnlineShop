import { useState } from "react";
import { useFormik } from "formik";
const LoginPage = () => {
    const [userData , setUserData] = useState({name:"" ,email:"" , password:""});
    const chageHandler= ({target}) =>{
        // name , email , password
        // console.log(e.target.value);
        setUserData({...userData , [target.name] : target.value});
    }
    const submitHandler = (e) =>{
        console.log("submitHandler ...");
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="mb-10">
                    <label>name</label>
                    <input type="text"  onChange={chageHandler} value={userData.name} name="name"/>
                </div>
                <div className="mb-10">
                    <label>email</label>
                    <input type="email" onChange={chageHandler} value={userData.email} name="email"/>
                </div>
                <div className="mb-10">
                    <label>pass</label>
                    <input type="password" onChange={chageHandler} value={userData.password} name="password"/>
                </div>
                <button className="bg-white text-gray-600 px-5 py-1" >ورود</button>
            </form>
        </div>
      );
}
 
export default LoginPage;