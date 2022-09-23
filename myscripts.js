var n = 0;

function charact(input_val)
{
	document.getElementById("data_input").value = input_val;
}

function func(input_val)
{
	if (n == 1)
	{
		empty();	
		n = 0;
	}
	document.getElementById("data_input").value += input_val;
}

function empty()
{
	document.getElementById("data_input").value = "";
}

function bckspace()
{
	var strng = document.getElementById("data_input").value;
	document.getElementById("data_input").value = strng.substring(0,strng.length-1)
}


function equal()
{
	try 
	{ 
	  charact(eval(document.getElementById("data_input").value)) 
	} 
	catch(e) 
	{
	  charact('Error') 
	} 	
	n = 1;
}


