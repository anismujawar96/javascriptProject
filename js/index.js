document.getElementById("valid").addEventListener("click", validation);
document.getElementById("res").addEventListener("click", reset);


function validation() {
	var textName,name,age,textAge;
	name=document.getElementById('firstname').value;
	age=document.getElementById('age').value;
	if(isNaN(name))
	{
		if(name.length > 6)
		{
			textName="Name length should be less than 6 character"
		}
		else
		{
			textName="Input Valid";
		}
	}
	else
	{
		textName="Input is not valid";
	}

	if(isNaN(age) && age.length > 0)
	{
		textAge="Not Valid Format";
	}
	else
	{
		if(age > 18)
		{
			textAge="Valid";
		}
		else
		{
			textAge="Age Should be above 18";
		}
	}


    document.getElementById('entrydiv_firstnamePara').innerHTML = textName;
    document.getElementById('entrydiv_agepara').innerHTML = textAge;
}

function reset(){
	document.location.reload();
}