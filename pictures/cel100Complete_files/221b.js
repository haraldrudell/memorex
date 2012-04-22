
// cs:a|b,fa:c|d,slots:X
var slots = 1;
var dimensions = _bizo_url_fragment.split(",");
var bkId = 918;
for (var i = 0; i < dimensions.length; i++) {
  var parts = dimensions[i].split(":");
  if (parts.length == 2) {
    if (parts[0] == "slots") {
      slots = parts[1];
    } else {
      var dimension = parts[0];
      var values = parts[1].split("|");
      for (var j = 0; j < values.length; j++) {
        bk_addUserCtx(dimension, values[j]);
        if(values[j]=="uk") {
          bkId = 4773;
        }
      }
    }
  }
}
bk_doJSTag(bkId, slots);
