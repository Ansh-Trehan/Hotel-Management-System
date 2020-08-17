function internet()
{
	var data=document.forms["internet-form"]["data"].value;
	var bill=0;
	if(data>1024)
	{
		bill=(data-1024)/2;
	}
	window.alert("You used " + data + " MB. Your Total bill is Rs. " + bill);
	return false;
}