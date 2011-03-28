/*
 *
 * TODO:
 *   Change Choke/Spread to % of ??
 *   Add Quality Fieldset
 *   Blend Modes
 *   Text inputs for sliders
 *   Global Light
 *   Angles
 *   Change Colors for Color Overlay, Drop Shadows, Inner Shadows, Strokes
 *
 */


var e = $("#element");

// Try to come up with a base function to control some of this stuff...
// function doSomething(fx, options) {}

// Show selected effect
(function($){
    $("nav li").bind("click", function(){
        var t = $(this);
        if (t.hasClass("active")) {
            t.removeClass("active");
        } else {
            t.addClass("active");
        }
    });
})(jQuery);

// Drop Shadow
(function($){
    
    var opacity, distance, spread, size;

    // Enabled?
    $("#ds_enabled").bind("click", function(){
        if ($(this).is(":checked")) {
            opacity = $("#ds_opacity_range").val() * 0.01;
            distance = $("#ds_distance_range").val();
            spread = $("#ds_spread_range").val();
            size = $("#ds_size_range").val();
            e.css({
                "-webkit-box-shadow" : distance + "px " + distance + "px " + size + "px " + spread + "px rgba(0, 0, 0, " + opacity + ")",
                "-moz-box-shadow" : distance + "px " + distance + "px " + size + "px " + spread + "px rgba(0, 0, 0, " + opacity + ")",
                "box-shadow" : distance + "px " + distance + "px " + size + "px " + spread + "px rgba(0, 0, 0, " + opacity + ")"
            });
        } else {
            e.css({
                "-webkit-box-shadow" : "none",
                "-moz-box-shadow" : "none",
                "box-shadow" : "none"
            });
        }
    });

    // Fx
    $("#ds_opacity_range, #ds_distance_range, #ds_spread_range, #ds_size_range").bind("change", function(){
        if ($("#ds_enabled").is(":checked")) {
            opacity = $("#ds_opacity_range").val() * 0.01;
            distance = $("#ds_distance_range").val();
            spread = $("#ds_spread_range").val();
            size = $("#ds_size_range").val();
            e.css({
                "-webkit-box-shadow" : distance + "px " + distance + "px " + size + "px " + spread + "px rgba(0, 0, 0, " + opacity + ")",
                "-moz-box-shadow" : distance + "px " + distance + "px " + size + "px " + spread + "px rgba(0, 0, 0, " + opacity + ")",
                "box-shadow" : distance + "px " + distance + "px " + size + "px " + spread + "px rgba(0, 0, 0, " + opacity + ")"
            });
        }
    });
    
})(jQuery);

// Inner Shadow
(function($){
    
    var opacity, distance, choke, size;
    
    // Enabled?
    $("#ins_enabled").bind("click", function(){
        if ($(this).is(":checked")) {
            opacity = $("#ins_opacity_range").val() * 0.01;
            distance = $("#ins_distance_range").val();
            choke = $("#ins_choke_range").val();
            size = $("#ins_size_range").val();
            e.css({
                "-webkit-box-shadow" : "inset " + distance + "px " + distance + "px " + size + "px " + choke + "px rgba(0, 0, 0, " + opacity + ")",
                "-moz-box-shadow" : "inset " + distance + "px " + distance + "px " + size + "px " + choke + "px rgba(0, 0, 0, " + opacity + ")",
                "box-shadow" : "inset " + distance + "px " + distance + "px " + size + "px " + choke + "px rgba(0, 0, 0, " + opacity + ")"
            });
        } else {
            e.css({
                "-webkit-box-shadow" : "none",
                "-moz-box-shadow" : "none",
                "box-shadow" : "none"
            });
        }
    });

    // Fx
    $("#ins_opacity_range, #ins_distance_range, #ins_choke_range, #ins_size_range").bind("change", function(){
        if ($("#ins_enabled").is(":checked")) {
            opacity = $("#ins_opacity_range").val() * 0.01;
            distance = $("#ins_distance_range").val();
            choke = $("#ins_choke_range").val();
            size = $("#ins_size_range").val();
            e.css({
                "-webkit-box-shadow" : "inset " + distance + "px " + distance + "px " + size + "px " + choke + "px rgba(0, 0, 0, " + opacity + ")",
                "-moz-box-shadow" : "inset " + distance + "px " + distance + "px " + size + "px " + choke + "px rgba(0, 0, 0, " + opacity + ")",
                "box-shadow" : "inset " + distance + "px " + distance + "px " + size + "px " + choke + "px rgba(0, 0, 0, " + opacity + ")"
            });
        }
    });
    
})(jQuery);

// Stroke
(function($){
    
    var size, position, opacity;
    
    // Enabled?
    $("#str_enabled").bind("click", function(){
        if ($(this).is(":checked")) {
            size = $("#str_size_range").val();
            opacity = $("#str_opacity_range").val() * 0.01;
            position = "outline";
            e.css(position, size + "px solid rgba(0, 0, 0, " + opacity + ")");
        } else {
            e.css("border", "none");
        }
    });

    // Size
    $("#str_size_range").bind("change", function(){
        if ($("#str_enabled").is(":checked")) {
            size = $(this).val();
            e.css(position + "-width", size + "px");
        }
    });

    // Position
    $("#str_position").bind("change", function(){
        if ($("#str_enabled").is(":checked")) {
            position = $(this).val();
            if (position === "outline") {
                e.css({
                    "border" : "none",
                    "outline" : size + "px solid rgba(0, 0, 0, " + opacity + ")"
                });
            }
            if (position === "border") {
                e.css({
                    "outline" : "none",
                    "border" : size + "px solid rgba(0, 0, 0, " + opacity + ")"
                });
            }
        }
    });

    // Opacity
    $("#str_opacity_range").bind("change", function(){
        if ($("#str_enabled").is(":checked")) {
            opacity = $(this).val() * 0.01;
            e.css(position + "-color", "rgba(0, 0, 0, " + opacity + ")");
        }
    });
    
})(jQuery);

// Color Overlay
(function($){
    
    var opacity;
    
    $("#co_enabled").bind("click", function(){
        if ($(this).is(":checked")) {
            opacity = $("#co_opacity_range").val() * 0.01;
            e.css("background", "rgba(125, 125, 125, " + opacity + ")");
        } else {
            e.css("background", "none");
        }
    });

    // Opacity
    $("#co_opacity_range").bind("change", function(){
        if ($("#co_enabled").is(":checked")) {
            opacity = $(this).val() * 0.01;
            e.css("background", "rgba(125, 125, 125, " + opacity + ")");
        }
    });
    
})(jQuery);

// Pattern Overlay
(function($){
    
    var opacity, pattern, scale;
    
    $("#po_enabled").bind("click", function(){
        if ($(this).is(":checked")) {
            opacity = $("#po_opacity_range").val() * 0.01;
            //pattern = $("#po_pattern").val();
            // Temp
            pattern = "iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGZJREFUeNqU0UsOACEIA1Ds/e/sUCcmBkErS+SFj83MukezxwCRR39BrIf9LWXMOtZjJhQ80Rh1fTjhFW2wwhGlMOIMjbwnpZ2277ihamfcOlUYyngZhrpTxFBQem1eVUFxsk+AAQAFDmUXbxh5bAAAAABJRU5ErkJggg==";
            scale = $("#po_scale_range").val() * 0.01;
            e.css("background", 'url("data:image/png;base64,' + pattern + '") 50% 50% repeat');
        } else {
            e.css("background", "none");
        }
    });

    // Pattern
    $("#po_pattern").bind("change", function(){
        if ($("#po_enabled").is(":checked")) {
            opacity = $(this).val() * 0.01;
            e.css("background", "rgba(125, 125, 125, " + opacity + ")");
        }
    });
    
})(jQuery);