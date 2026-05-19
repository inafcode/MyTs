function cekLogin(username: string, password: string) {
    if (username == "admin" && password == "12345") {
        return "Login Berhasil";
    } else if (username == "user" && password == "12345") {
        return "Login Berhasil";
    } else {
        return "Login Gagal";
    }
}

function cekAkses(role: string, statusLogin: string) {
    if (statusLogin == "Login Berhasil") {
        if (role == "admin") {
            return "Berhasil Akses Dashboard Admin";
        } else if (role == "user") {
            return "Berhasil Akses Dashboard User";
        } else {
            return "Role Tidak Terdaftar";
        }
    } else {
        return "Akses Gagal";
    }
}

const username = "user";
const password = "12345";
const role = "user";

const statusLogin = cekLogin(username, password);
const akses = cekAkses(role, statusLogin);

console.log(`Username: ${username}`);
console.log(`Role: ${role}`);
console.log(`Akses: ${akses}`);
console.log(`Status Login: ${statusLogin}`);