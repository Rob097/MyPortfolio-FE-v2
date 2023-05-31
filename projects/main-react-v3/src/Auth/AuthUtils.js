import decodeToken from '../../../../libs/auth-lib/src/lib/auth.utils';

const myAuthUtilsComponent = function(){
    const token = localStorage.getItem('accessToken');
    console.log(decodeToken(token));
}

export default myAuthUtilsComponent;