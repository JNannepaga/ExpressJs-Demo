module.exports = function LoginController(userName, password)
{
    if(userName == 'admin@gmail.com' && password == 'admin')
        return true;

    else
        return false;    
}
