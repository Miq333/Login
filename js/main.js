let arr = [];
function f1(fullname,username,email,phonenumber,password,confirmpassword){
    this.fullname = fullname;
    this.username = username;
    this.email = email;
    this.phonenumber = phonenumber;
    this.password = password;
    this.confirmpassword = confirmpassword;
}

let fullname = document.getElementById("fname").value ;
  arr.push(fullname)
  console.log(arr);

let person = new f1("Aram","Anna")

alert(person.email)