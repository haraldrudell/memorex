var trusteId = 18;
var popdiv = ("pop-div"+Math.random()).replace(".","");
var popdiv2 = ("pop-div2"+Math.random()).replace(".",""); 
if(typeof TRUSTeWidget == 'undefined'){ var TRUSTeWidget={}; }
if(typeof TRUSTeWidget.Tab == 'undefined') {
	TRUSTeWidget.Tab={
    		id:"TRUSTeWidget-feedback-tab",
    		link: function(options) {
			TRUSTePrefview(trusteId);
    		},
		close: function(options) {
			TRUSTePrefclosebox();
    		}

	};
}

function TRUSTePrefview(id) {
	var o = document.createElement('div');
	o.setAttribute("id", popdiv);
	var b = document.createElement('div');
	b.setAttribute("id", popdiv2);
	var i = document.createElement('div');
	var c = document.createElement('div'); 
	var f = document.createElement('iframe');

	o.className = 'overlay';
	b.className = 'box_overlay';
	c.className = 'close';
	i.className = 'box_overlay_inner';

//set overlay styles
	o.style.backgroundColor = '#000';
	o.style.opacity = '0.8';
	o.style.position = 'fixed';
	o.style.zIndex = '1000000';
	o.style.width = '100%';
	o.style.height = '100%';
	o.style.top = '0';
	o.style.left = '0';
	o.style.overflow = 'hidden';
	o.style.filter = 'Alpha(Opacity: 80)';//ie fix

//set box_overlay styles
	b.style.position = 'absolute';
	b.style.zIndex = '2000000';
	b.style.top = '10%';

	var windowWidth = (document.body.clientWidth / 2) - (890 / 2); 
    var windowWidthPX = windowWidth + 'px'; 
	if( parseFloat(navigator.appVersion.split('MSIE')[1]) == 7) { 

	} 

    var frameWidth = 890;
    frameWidth = -frameWidth/2;
	b.style.left = '50%'; 
	b.style.marginLeft = frameWidth+'px';

	c.innerHTML = '<a href="javascript:TRUSTeWidget.Tab.close()" style="cursor:pointer;"><img src="https://preferences.truste.com/images/close.png" border="0" /></a>';
	c.style.position = 'absolute';
	c.style.top = '-20px';
	c.style.right = '-20px';

//set box_overlay_inner styles
	i.style.backgroundColor = '#fff';
	i.style.position = 'relative';
	i.style.left = '0px';

	i.style.width = '890px';
	i.style.padding ='10px';	

	i.style.border = '5px solid #92c53f';

// set iframe attributes
  f.src = 'http://preferences-mgr.truste.com/?type=pop&affiliateId=18';
  f.id = 'tframe';
  f.width = '890';	//width of frame


	f.height = '637';
	f.frameBorder = '0';
	f.scrolling = 'no';
	f.style.border = '0';

//append elements to document
	document.body.appendChild(o);
	document.body.appendChild(b);
	b.appendChild(i);
	i.appendChild(c);
	i.appendChild(f);
	var objects = document.getElementsByTagName("object");

	for( var i=0; i<objects.length; ++i)
	{
		var obj = objects[i];
		obj.style.visibility = "hidden";
	}
	scrollTo(0,0);
} 

function TRUSTePrefclosebox() {
try
{
	document.body.removeChild(document.getElementById(popdiv));
	document.body.removeChild(document.getElementById(popdiv2));
	var objects = document.getElementsByTagName("object");

	for( var i=0; i<objects.length; ++i)
	{
		var obj = objects[i];
		obj.style.visibility = "visible";
	}
} catch(e) { alert(e.message); }

}

//LEGACY but will be removed soon
function view(trusteId) { TRUSTePrefview(trusteId); }