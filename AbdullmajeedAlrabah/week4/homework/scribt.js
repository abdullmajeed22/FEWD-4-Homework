function xname2()
{
    if(document.getElementById("Xname1").value % 3 == 0)
    {
      console.log("Pling");
    }
     if (document.getElementById("Xname1").value % 5 == 0)  
    {
        console.log("Plang");
    } 
     if (document.getElementById("Xname1").value  % 7 == 0)  
    {
        console.log("Plong");
    }

    if (document.getElementById("Xname1").value % 3 != 0 && document.getElementById("Xname1").value % 5 != 0 && document.getElementById("Xname1").value  % 7 != 0 )
    {
        console.log("string");
    }
}