const setCookie = (name, data, days) => {
    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + data + ";path=/;expires=" + date.toGMTString();
    return true; 
}

const getCookie = (name) => {
    const cookie = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return cookie ? cookie[2] : null;
}

const deleteCookie = (name) => {
    setCookie(name, '', -1);
}

export {
    setCookie,
    getCookie,
    deleteCookie,
}