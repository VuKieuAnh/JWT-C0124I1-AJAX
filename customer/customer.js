// dang dung dc token lay san tu postmane
// let token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNzQ3MTUxOSwiZXhwIjoxNzE3NTU3OTE5fQ._4JNEiaMUdmgYwnc_BqX686nFf5OzTlh0_KLM2mmK8o";
let us = docLocalStorage();
// neu chua dang nhap thi doc localstorage null
if (us ==null){
    // chuyen ve trang dang nhap
    window.location.href = "../login/login.html"
}
let token = us.token;
function showAllCustomer(){
    $.ajax({
        // bo sung headers o ajax, gan author cho request se dung dc phan quyen
        // bo sung them header o ajax de thuc hien gan token
        headers:{
            "Authorization": "Bearer " + token
        },
        method: "GET",
        url: "http://localhost:8080/api/customers",
        success: function (data){
            console.log(data)
        }
    })
}
// goi Ajax thong thuong -> khong dc
showAllCustomer();
function docLocalStorage(){
    let userString = localStorage.getItem("u");
    let user = JSON.parse(userString);
    return user;
}


