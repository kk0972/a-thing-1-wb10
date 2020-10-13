// 1. chương trình tạo số ngẫu nhiên
// 2. tạo prompt để nhập số
// 3. Nếu người dùng nhập đúng thì yeah alerted
// 4. nếu nhập sai bạn quá buồn, số này lớn hơn/ nhỏ hơn alerted + số cần tìm là ...

let num = Math.floor(Math.random() * 11); // trả về số từ 1 - 10
let stupiduser = prompt("nó là các thứ số")
stupiduser = Number(stupiduser)
console.log(num + " is random")
console.log(stupiduser + " your stupid thing")
if (num == stupiduser) {
    alert("pẻfect")
} else if (num > stupiduser) {
    alert("sad :( nó hơi bé hơn " + num)
} else if (num < stupiduser) {
    alert("sad :( nó hơi to hơn " + num)
} else {
    alert("kys")
}