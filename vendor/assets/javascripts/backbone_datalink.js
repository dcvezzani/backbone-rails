(function($) {
  return $.extend($.fn, {
    backboneLink: function(model) {
      return $(this).find(":input").each(function() {
        var el, name;
        el = $(this);
        name = el.attr("name");
        model.bind("change:" + name, function() {
          return el.val(model.get(name));
        });
        return $(this).bind("change", function() {
          var attrs;
          el = $(this);
          attrs = {};

          if(el.attr("type") == "radio"){
            // value is set for *all* radios in a group; this causes all values to be the same for a given radio button group
          } else {
            attrs[el.attr("name")] = el.val();
          }

          return model.set(attrs);
        });
      });
    }
  });
})(jQuery);
