function bill()
{
    "use strict";
    var final=0;
    var initialTime = document.getElementById("cin").value;
    var initialTimeFormat = moment(initialTime);
    var endTime = document.getElementById("cout").value;
    var endTimeFormat = moment(endTime);
    var totalDays = endTimeFormat.diff(initialTimeFormat,"days");
    var suite = document.getElementById("suite").value;
    var dine = document.getElementsByName("dining").value;
    var tour = document.getElementsByName("tour").value;
    if(dine === "EP")
    {
        if(suite === "deluxe")
        {
            final += 4650;
        }
        if(suite === "superior")
        {
            final += 5750;
        }
        if(suite === "executive")
        {
            final += 6600;
        }
        if(suite === "pacific")
        {
            final += 6950;
        }
        if(suite === "continental")
        {
            final += 8200;
        }
        final *= totalDays;
    }
    if(dine === "CP")
    {
        if(suite === "deluxe")
        {
            final += 4950;
        }
        if(suite === "superior")
        {
            final += 6050;
        }
        if(suite === "executive")
        {
            final += 6900;
        }
        if(suite === "pacific")
        {
            final += 7250;
        }
        if(suite === "continental")
        {
            final += 9000;
        }
        final *= totalDays;
    }
    if(dine === "AP")
    {
        var days = Math.floor(totalDays/3);
        var fday=totalDays;
        var f1;
        var f2;
        var f3;
        if(suite === "deluxe")
        {
            f1 += 17250;
        }
        if(suite === "superior")
        {
            f1 += 20850;
        }
        if(suite === "executive")
        {
            f1 += 23100;
        }
        if(suite === "pacific")
        {
            f1 += 24150;
        }
        if(suite === "continental")
        {
            f1 += 32775;
        }
        f1 *= days;
        fday -= (fday%3);
        days = Math.floor(fday/2);
        if(suite === "deluxe")
        {
            f2 += 11500;
        }
        if(suite === "superior")
        {
            f2 += 13900;
        }
        if(suite === "executive")
        {
            f2 += 15400;
        }
        if(suite === "pacific")
        {
            f2 += 16100;
        }
        if(suite === "continental")
        {
            f2 += 21850;
        }
        f2 *= days;
        fday -= (fday%2);
        if(suite === "deluxe")
        {
            f3 += 5850;
        }
        if(suite === "superior")
        {
            f3 += 6950;
        }
        if(suite === "executive")
        {
            f3 += 7850;
        }
        if(suite === "pacific")
        {
            f3 += 8150;
        }
        if(suite === "continental")
        {
            f3 += 11000;
        }
        f3 *= days;
        final = f1 + f2 + f3;
    }
    if (tour === "sight")
    {
        final += 2000;
    }
    if (tour === "adventure")
    {
        final += 2500;
    }
    if (tour === "religious")
    {
        final += 1800;
    }
    if (tour === "heritage")
    {
        final += 1500;
    }
    window.alert("Please Pay Rs."+ final+". Thank you");
    return false;
}