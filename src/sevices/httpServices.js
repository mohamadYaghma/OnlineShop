import axios from "axios";

// const baseUrl = 
//     process.env.NODE_ENV === "development"
//      ? "http://localhost:5000/api" 
//      : "https://api.domain.ie/api";

const app  =axios.create({
    baseURL : process.env.BASE_API_URL ,
    withCredentials :true 
});

const http   = {
    get : app.get ,
    post : app.post ,
    put : app.put,
    delete : app.delete ,
}

export default http ;