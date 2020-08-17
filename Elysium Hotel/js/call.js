function call()
{
	var min=document.forms["call-form"]["min"].value;
	var bill=0;
	if(min>60)
	{
		bill=(min-60)/2;
	}
	window.alert("You talked " + min + " min. Your Total bill is Rs. " + bill);
	return false;
}