(function($) {
  return $.extend($.fn, {
    backboneLink: function(model) {
      return $(this).find(":input").each(function() {
        var el, name;
        el = $(this);
        name = el.attr("name");
        model.bind("change:" + name, function() {

          //dcv;20130117; value is set for *all* radios in a group; this causes all values to be the same for a given radio button group
          //  we only want the selected radio button value to be applied to the model and
          //  when the model is updated, we only want to trigger that a change took place on a single radio button, not all of them
          //  at the same time
         
          var input_value = null;
          var model_value = model.get(name);

          if(el.attr("type") == "radio" && el.val() != model_value){
            input_value = el.val()
          } else {
            input_value = el.val(model_value);
          }
          
          return input_value
        });
        return $(this).bind("change", function() {
          var attrs;
          el = $(this);
          attrs = {};

          attrs[el.attr("name")] = el.val();

          return model.set(attrs);
        });
      });
    }
  });
})(jQuery);

