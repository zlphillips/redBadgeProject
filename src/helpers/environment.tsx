let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1' :
        APIURL = 'http://localhost:3002';
        break;
    case 'fourofour.herokuapp.com' :
        APIURL = 'https://four-oh-four.herokuapp.com/'
}

export default APIURL;