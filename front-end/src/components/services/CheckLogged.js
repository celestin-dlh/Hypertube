export function CheckLogged() {
    const token = localStorage.getItem('token')
    console.log(token)
    if (!token) {
        return (false)
    }
    else {
        return (true)
    }
}