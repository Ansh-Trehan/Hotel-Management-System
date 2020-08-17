var user = ["anshtrehan@gmail.com","jayantubha@gmail.com","rahulhussain@gmail.com","kashishahuja@gmail.com"];
var pass = ["ansh/2018","jayant/2018","rahul/2018","kashish/2018"];
var i=0;

function searchEmail()
{
    var email = document.forms["email-form"]["email"].value;
    var flag=0;
    for(i=0;i<user.length;i++)
    {
		if(email == user[i])
        {
            flag = 1;
            break;
        }
    }          
    if(flag == 1)
    { 
        document.getElementById("login-window").style.display = "none";
        document.getElementById("loginNext").style.display = "block";
        document.getElementById("viewEmail").innerHTML = email;
        return false;
    }	
    else
    {
        document.getElementById("email-check-info").innerHTML = "Invalid Email-ID";
        return false;
    }
}
        
function searchPassword()
{
    var password = document.forms["pass-form"]["pass"].value;
    if(password == pass[i])
    { 
        return true;
    }
    else
    {
        document.getElementById("password-check-info").innerHTML = "Invalid Password";
        return false;
    }
}