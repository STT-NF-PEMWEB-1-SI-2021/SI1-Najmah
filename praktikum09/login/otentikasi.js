function cek_dulu() {
    let uname = document.getElementById("username").value;
    let pwd = document.getElementById("password").value;
    if (uname == "najm21028si" && pwd == "novelty"){
        location.replace("sukses.html");
        window.alert("Selamat! Login berhasil");
       
    } else {
        window.alert("Login gagal. Silakan coba lagi!");
    }
}