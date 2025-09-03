let product = 1200
let onsell =  product - (product * 0.10)

if (onsell <= 0) {
    console.log("0");
}else if(onsell <= 500) {
    console.log(onsell + 50);
}else if(onsell > 500) {
    let sellmore = onsell - (onsell * 0.10)
    console.log("คุณได้รับส่วนลดพิเศษ 10% : ", sellmore);
}