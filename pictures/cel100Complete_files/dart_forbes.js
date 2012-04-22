var forbes_dart = (function() {
  var ord = Math.floor(Math.random() * 1E10),
    conf, tile = 3, specialslotwithyear = /^(specialslot=.*)-\d{2}$/;

  function sitezone() {
    var sitezone = conf.site;
    if( conf.hasOwnProperty('zone') ) sitezone += "/" + conf.zone;
    return sitezone;
  }

  function keyvalues(additional) {
    var myTile;
    if('top' == additional.pos) myTile = 1;
    else if('rec' == additional.pos) myTile = 2;
    else myTile = tile++;

    var keyvalues = [];
    for(var key in additional) {
      keyvalues.push(key+'='+additional[key]);
    }

    return ";" + conf.keyvalues.concat(keyvalues,["tile="+myTile,"ord="+ord]).join(';');
  }

  return {
    ad: function(pos,sz) {
      var docwrite = true;
      if( arguments.length >= 3) docwrite = arguments[2];
      var tag = '<script type="text/javascript" src="http://ad.doubleclick.net/N7175/adj/' + sitezone() + keyvalues({pos:pos,sz:sz}) + '?"></script>';
      if( docwrite ) document.write(tag);
      else return tag;
    },
    config: function(config) {
      if( ! config.hasOwnProperty( 'site' ) ) config.site = 'fdc.forbes';
      if( ! config.hasOwnProperty( 'keyvalues' ) ) config.keyvalues = [];
      conf = config;
      for(var i=0;i<config.keyvalues.length;i++) {
        config.keyvalues[i] = config.keyvalues[i].replace(specialslotwithyear, "$1");
      }
    }
  };
})();
