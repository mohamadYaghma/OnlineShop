export function toPersianDigits(n){
    const farsiDisits = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹",];
    return n.toString().replace(/\d/g , (x)=>farsiDisits[parseInt(x)]);
}