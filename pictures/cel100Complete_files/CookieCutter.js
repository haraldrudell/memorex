function Cookie( name, value, expire_date_millis, path, domain ) {
	this.constructor = Cookie;
	this.name = name;
	this.setValue( value );
	this.setPath( path );
	this.setDomain( domain );
	this.setExpireDate( expire_date_millis );
}

Cookie.prototype.setDomain = function( domain ) {
	this.domain = domain;
}

Cookie.prototype.setPath = function( path ) {
	this.path = path;
}

Cookie.prototype.setValue = function( value ) {
	this.value = value;
}

Cookie.prototype.setExpireDate = function( expire_date_millis ) {
	var now_date_millis = ( new Date() ).getTime();
	if( expire_date_millis <= now_date_millis ) { 
		this.constructor = null;
		this.name = null;
		this.value = null;
		this.expire_date = null;
	}
	else {
		this.expire_date_millis = expire_date_millis;
	}
}

Cookie.prototype.toString = function() {
	return this.constructor ? this.name + COOKIE_ATTRIB_SEP + this.value + COOKIE_ATTRIB_SEP + this.expire_date_millis : null;
}


	
//CookieMix class; cookie has name, value, expdate (encr?)
	
//constants:
COOKIE_SEP = ":";
COOKIE_ATTRIB_SEP = "=";
COOKIE_JAR_LABEL = "CookieMix";
IAB_EXPIRE_DAYS = 2 * 365;

CookieMix = {};


//Workaround function for inability to return a true null in the constructor
CookieMix.newCookie = function( name, value, expire_date_millis ) {
	var cookie_bit = new Cookie( name, value, expire_date_millis );
	return cookie_bit.constructor ? cookie_bit : null;
}


CookieMix.write = function() {
	var cookie_mix_expire_date = new Date();
	cookie_mix_expire_date.setTime( cookie_mix_expire_date.getTime() + ( IAB_EXPIRE_DAYS * 24 * 3600 * 1000 ));

	document.cookie = COOKIE_JAR_LABEL + "=" + CookieMix.toString() + "; path=/; domain=.forbes.com; expires=" + cookie_mix_expire_date.toGMTString();
}

CookieMix.read = function() {
	CookieMix.assoc = {};
	
	if( document.cookie.length > 0 ) {
		var begin = document.cookie.indexOf( COOKIE_JAR_LABEL + "=" ); 
		if( begin != -1 ) { 
			begin += COOKIE_JAR_LABEL.length + 1; 
			var end = document.cookie.indexOf( ";", begin );
			if( end == -1 ) end = document.cookie.length;
			var cookie_mix_str = document.cookie.substring( begin, end );

			CookieMix.parse( cookie_mix_str );
		} 
	}
	//return null; 

	//if read fails, cookie mix should be set to null
}

CookieMix.parse = function( str ) {
	
	if( str.length != 0 ) {
		arr = str.split( COOKIE_SEP );
		for( var i = 0; i < arr.length; i ++ ) {
			var cookie_bit_arr = arr[i].split( COOKIE_ATTRIB_SEP );
			var cookie_bit = CookieMix.newCookie( cookie_bit_arr[0], cookie_bit_arr[1], cookie_bit_arr[2] );
			CookieMix.put( cookie_bit_arr[0], cookie_bit );
		}
	}
}



//CookieMix methods can be static
CookieMix.get = function( name ) {
	return CookieMix.assoc[name];
}

CookieMix.put = function( name, cookie_bit ) {
	CookieMix.assoc[name] = cookie_bit;
	//maybe return something (like updated, deleted, unaffected)
}

CookieMix.del = function( name ) {
	CookieMix.assoc[name] = null;
}

CookieMix.toString = function() {
	var normalized_arr = new Array();
	for( var i in CookieMix.assoc ) {
		var cookie_bit = CookieMix.assoc[i];
		if( cookie_bit && cookie_bit.constructor ) {
			normalized_arr.push( cookie_bit );
		}
	}
	
	return normalized_arr.join( COOKIE_SEP );

}

function getCookie( name ) {
	CookieMix.read(); //cook might be changed by different client, so always read on get
	
	var cookie_bit = CookieMix.get( name );
	return cookie_bit ? unescape( cookie_bit.value ) : null;

}

function deleteCookie( name ) {
	CookieMix.read(); //might want to put a locking mechanism here

	CookieMix.del( name );
	
	CookieMix.write();
}

function deleteCookieBlogs( name ) {
	CookieMix.read(); //might want to put a locking mechanism here

	CookieMix.del( name );
	
	CookieMix.write();
}

//better default to .forbes.com domain; path?
function setCookie( name, value, expiredays ) {
	setCookieMillisec(name,value,expiredays*24*3600*1000);
}

function setCookieBlogs( name, value, expiredays ) {
	//alert("setCookie");
	setCookieMillisec(name,value,expiredays*24*3600*1000);
}

function setCookieMillisec( name, value, expireMilliseconds ) {
	CookieMix.read(); //might want to put a locking mechanism here

	var value_enc = escape( value );
	
	var cookie_bit_expire_date = new Date();
	cookie_bit_expire_date.setTime( cookie_bit_expire_date.getTime() + expireMilliseconds);

	//check if cookie bit exists
	var cookie_bit = CookieMix.get( name );
	if( cookie_bit == null ) {
		cookie_bit = CookieMix.newCookie( name, value_enc, cookie_bit_expire_date.getTime() );
		CookieMix.put( name, cookie_bit );
	}
	else {
		cookie_bit.setValue( value_enc );
		cookie_bit.setExpireDate( cookie_bit_expire_date.getTime() );
	}
	//alert("CookieMix:"+ CookieMix.toString() );

	CookieMix.write();
}



//for cookie porting
function getStandaloneCookie( NameOfCookie ) {
	if( document.cookie.length > 0 ) { 
		begin = document.cookie.indexOf( NameOfCookie+"=" ); 
		if( begin != -1 ) { 
			begin += NameOfCookie.length + 1; 
			end = document.cookie.indexOf( ";", begin );
			if( end == -1 ) end = document.cookie.length;
			return unescape( document.cookie.substring( begin, end ));
		} 
	}
	return null; 
}

function setStandaloneCookie( NameOfCookie, value, expiredays, path, domain ) {
	var ExpireDate = new Date();
	ExpireDate.setTime( ExpireDate.getTime() + ( expiredays * 24 * 3600 * 1000 ));
//domain and path MUST be set
	document.cookie = NameOfCookie + "=" + value + 
		(( expiredays == null ) ? "" : "; path=/; domain=.forbes.com; expires=" + ExpireDate.toGMTString() );
}

function delStandaloneCookie( NameOfCookie ) {
	if( getStandaloneCookie( NameOfCookie )) {
		document.cookie = NameOfCookie + "=" +"; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}







//reset select cookies to 2 years exp if they are not yet in CookieMix; standalone cooks are always
//set to .forbes.com; consider supplying path and domain as setup arguments, since js can't retrieve them
var reset_arr = ['forbesmemb','forbesmemb_confirm'];
for( var i in reset_arr ) {
	//retrieve standalone cookie
	var name = reset_arr[i];
	var standalone_value = getStandaloneCookie( name );
	if( standalone_value ) {
		var value = getCookie( name );
		if( ! value ) {
			setStandaloneCookie( name, standalone_value, IAB_EXPIRE_DAYS );

			//staging:
			//port cookies into CookieMix if they're not yet in there;
			//set both standalone and CookieMix cookies;
			//once all getters are converted for CookieMix, disable setting standalone cookies
		}
	}
}
 
function siteInvited(partnerName) {

  document.cookie = "forbesSurveyViewed=yes; path=/; domain=.forbes.com";

}



function sitePerformedInvite(partnerName) {

   if (getStandaloneCookie('forbesSurveyViewed') == "yes") {

    return true;

   } else {

    return false;

   }

}
