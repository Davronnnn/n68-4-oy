var age = prompt("Yoshingizni kiriting");
// || yoki
// Agar chap taraf truthy qiymat bo'lsa chap tarafni qaytaradi aks holda o'ng tarafni qaytaradi
// && va
// Agar chap taraf truthy qiymat bo'lsa o'ng tarafni qaytaradi aks holda chap tarafni qaytaradi

console.log(false || true);
// and &&

// true true -> true
// true false -> false
// false true -> false
// false false -> false

// yoki ||

// true true -> true
// true false -> true
// false true -> true
// false false -> false

if (age >= 20) {
    var sum = prompt("Pulingizni kiriting");
    
    if (sum > 2000) {
        console.log("Siz konsertga kira olasiz");
    }else{
        console.log("Siz bilet sotib ola olmaysiz");
    }
} else {


    console.log("Siz konsertga kira olmaysiz");
}
