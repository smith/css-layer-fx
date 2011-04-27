//Configure RequireJS
require({
    // Load jQuery, Underscore, and backbone before any other scripts.
    priority: ['jquery', 'underscore', 'backbone']
});

require([
    "jquery",
    "underscore",
    "backbone"
], function ($) {

});

/*******************************************************************************

Below here is the original code and "business logic" for reference to be
implemented soon.

*******************************************************************************/

/*var e = $("#element");*/

//// Update the textarea with generated code
//function updateCode(style, code) {
    //var output = {
        //opacity: "",
        //dropshadow: "",
        //innershadow: "",
        //stroke: "",
        //bgcolor: "",
        //pattern: ""
    //};

    //if (style === "opacity") {
        //output.opacity = code;
    //}
    //if (style === "drop-shadow") {
        //output.dropshadow = code;
    //}
    //if (style === "inner-shadow") {
        //output.innershadow = code;
    //}
    //if (style === "stroke") {
        //output.stroke = code;
    //}
    //if (style === "bgcolor") {
        //output.bgcolor = code;
    //}
    //if (style === "pattern") {
        //output.pattern = code;
    //}
    //$("#code_output").val(output.opacity + output.dropshadow + output.innershadow + output.stroke + output.bgcolor + output.pattern);
//}

//// Show selected effect
//(function($){
    //$("nav li").bind("click", function(){
        //var t = $(this);
        //var m = t.attr("data-fx");
        //if (t.hasClass("active")) {
            //t.removeClass("active");
            //$("#" + m).hide();
        //} else {
            //t.addClass("active");
            //$("#" + m).show();
        //}
    //});
//})(jQuery);

//// Opacity
//(function($){
    
    //var opacity;

    //// Fx
    //$("#bo_opacity_range").bind("change", function(){
        //opacity = ($("#bo_opacity_range").val() * 0.01).toFixed(2);
        //if (opacity < 1) {
            //e.css("opacity", opacity);
            //o = "opacity: " + opacity + "\n";
        //} else {
            //o = "";
        //}
        //updateCode("opacity", o);
    //});
    
//})(jQuery);

//// Drop Shadow
//(function($){
    
    //var opacity, distance, spread, size, ds;

    //// Enabled?
    //$("#ds_enabled").bind("click", function(){
        //if ($(this).is(":checked")) {
            //opacity = ($("#ds_opacity_range").val() * 0.01).toFixed(2);
            //distance = $("#ds_distance_range").val();
            //// Spread is a percentage of distance
            //spread = distance * ($("#ds_spread_range").val() * 0.01);
            //size = $("#ds_size_range").val();
            //e.css({
                //"-moz-box-shadow" : distance + "px " + distance + "px " + size + "px " + spread + "px hsla(0, 100%, 0%, " + opacity + ")",
                //"box-shadow" : distance + "px " + distance + "px " + size + "px " + spread + "px hsla(0, 100%, 0%, " + opacity + ")"
            //});
            //ds = "-moz-box-shadow: " + distance + "px " + distance + "px " + size + "px " + spread + "px hsla(0, 100%, 0%, " + opacity + ");" + "\n" + "box-shadow: " + distance + "px " + distance + "px " + size + "px " + spread + "px hsla(0, 100%, 0%, " + opacity + ")" + "\n";
        //} else {
            //ds = "";
            //e.css({
                //"-moz-box-shadow" : "none",
                //"box-shadow" : "none"
            //});
        //}
        //updateCode("drop-shadow", ds);
    //});

    //// Fx
    //$("#ds_opacity_range, #ds_distance_range, #ds_spread_range, #ds_size_range").bind("change", function(){
        //if ($("#ds_enabled").is(":checked")) {
            //opacity = ($("#ds_opacity_range").val() * 0.01).toFixed(2);
            //distance = $("#ds_distance_range").val();
            //// Spread is a percentage of distance
            //spread = distance * ($("#ds_spread_range").val() * 0.01);
            //size = $("#ds_size_range").val();
            //e.css({
                //"-moz-box-shadow" : distance + "px " + distance + "px " + size + "px " + spread + "px hsla(0, 100%, 0%, " + opacity + ")",
                //"box-shadow" : distance + "px " + distance + "px " + size + "px " + spread + "px hsla(0, 100%, 0%, " + opacity + ")"
            //});
            //ds = "-moz-box-shadow: " + distance + "px " + distance + "px " + size + "px " + spread + "px hsla(0, 100%, 0%, " + opacity + ");" + "\n" + "box-shadow: " + distance + "px " + distance + "px " + size + "px " + spread + "px hsla(0, 100%, 0%, " + opacity + ")" + "\n";
            //updateCode("drop-shadow", ds);
        //}
    //});
    
//})(jQuery);

//// Inner Shadow
//(function($){
    
    //var opacity, distance, choke, size, is;
    
    //// Enabled?
    //$("#ins_enabled").bind("click", function(){
        //if ($(this).is(":checked")) {
            //opacity = ($("#ins_opacity_range").val() * 0.01).toFixed(2);
            //distance = $("#ins_distance_range").val();
            //// Choke is a percentage of distance
            //choke = distance * ($("#ins_choke_range").val() * 0.01);
            //size = $("#ins_size_range").val();
            //e.css({
                //"-moz-box-shadow" : "inset " + distance + "px " + distance + "px " + size + "px " + choke + "px hsla(0, 100%, 0%, " + opacity + ")",
                //"box-shadow" : "inset " + distance + "px " + distance + "px " + size + "px " + choke + "px hsla(0, 100%, 0%, " + opacity + ")"
            //});
            //is = "-moz-box-shadow: inset " + distance + "px " + distance + "px " + size + "px " + choke + "px hsla(0, 100%, 0%, " + opacity + ")" + "\n" + "box-shadow: inset " + distance + "px " + distance + "px " + size + "px " + choke + "px hsla(0, 100%, 0%, " + opacity + ");" + "\n";
        //} else {
            //e.css({
                //"-moz-box-shadow" : "none",
                //"box-shadow" : "none"
            //});
            //is = "";
        //}
        //updateCode("inner-shadow", is);
    //});

    //// Fx
    //$("#ins_opacity_range, #ins_distance_range, #ins_choke_range, #ins_size_range").bind("change", function(){
        //if ($("#ins_enabled").is(":checked")) {
            //opacity = ($("#ins_opacity_range").val() * 0.01).toFixed(2);
            //distance = $("#ins_distance_range").val();
            //// Choke is a percentage of distance
            //choke = distance * ($("#ins_choke_range").val() * 0.01);
            //size = $("#ins_size_range").val();
            //e.css({
                //"-moz-box-shadow" : "inset " + distance + "px " + distance + "px " + size + "px " + choke + "px hsla(0, 100%, 0%, " + opacity + ")",
                //"box-shadow" : "inset " + distance + "px " + distance + "px " + size + "px " + choke + "px hsla(0, 100%, 0%, " + opacity + ")"
            //});
            //is = "-moz-box-shadow: inset " + distance + "px " + distance + "px " + size + "px " + choke + "px hsla(0, 100%, 0%, " + opacity + ")" + "\n" + "box-shadow: inset " + distance + "px " + distance + "px " + size + "px " + choke + "px hsla(0, 100%, 0%, " + opacity + ");" + "\n";
        //updateCode("inner-shadow", is);
        //}
    //});
    
//})(jQuery);

//// Stroke
//(function($){
    
    //var size, position, opacity, s;
    
    //// Enabled?
    //$("#str_enabled").bind("click", function(){
        //if ($(this).is(":checked")) {
            //size = $("#str_size_range").val();
            //opacity = ($("#str_opacity_range").val() * 0.01).toFixed(2);
            //position = "outline";
            //e.css(position, size + "px solid hsla(0, 100%, 50%, " + opacity + ")");
            //s = position + ": " + size + "px solid hsla(0, 100%, 50%, " + opacity + ");" + "\n";
        //} else {
            //e.css(position, "none");
            //s = "";
        //}
        //updateCode("stroke", s);
    //});

    //// Size
    //$("#str_size_range").bind("change", function(){
        //if ($("#str_enabled").is(":checked")) {
            //size = $(this).val();
            //e.css(position + "-width", size + "px");
            //s = position + ": " + size + "px solid hsla(0, 100%, 50%, " + opacity + ");" + "\n";
            //updateCode("stroke", s);
        //}
    //});

    //// Position
    //$("#str_position").bind("change", function(){
        //if ($("#str_enabled").is(":checked")) {
            //position = $(this).val();
            //if (position === "outline") {
                //e.css({
                    //"border" : "none",
                    //"outline" : size + "px solid hsla(0, 100%, 50%, " + opacity + ")"
                //});
            //}
            //if (position === "border") {
                //e.css({
                    //"outline" : "none",
                    //"border" : size + "px solid hsla(0, 100%, 50%, " + opacity + ")"
                //});
            //}
            //s = position + ": " + size + "px solid hsla(0, 100%, 50%, " + opacity + ");" + "\n";
            //updateCode("stroke", s);
        //}
    //});

    //// Opacity
    //$("#str_opacity_range").bind("change", function(){
        //if ($("#str_enabled").is(":checked")) {
            //opacity = ($("#str_opacity_range").val() * 0.01).toFixed(2);
            //e.css(position + "-color", "hsla(0, 100%, 50%, " + opacity + ")");
            //s = position + ": " + size + "px solid hsla(0, 100%, 50%, " + opacity + ");" + "\n";
            //updateCode("stroke", s);
        //}
    //});
    
//})(jQuery);

//// Color Overlay
//(function($){
    
    //var opacity, o;
    
    //$("#co_enabled").bind("click", function(){
        //if ($(this).is(":checked")) {
            //opacity = ($("#co_opacity_range").val() * 0.01).toFixed(2);
            //e.css("background-color", "hsla(0, 100%, 50%, " + opacity + ")");
            //c = "background-color: hsla(0, 100%, 50%, " + opacity + ")" + "\n";
        //} else {
            //e.css("background-color", "transparent");
            //c = "";
        //}
        //updateCode("bgcolor", c);
    //});

    //// Opacity
    //$("#co_opacity_range").bind("change", function(){
        //if ($("#co_enabled").is(":checked")) {
            //opacity = ($("#co_opacity_range").val() * 0.01).toFixed(2);
            //e.css("background-color", "hsla(0, 100%, 50%, " + opacity + ")");
            //c = "background-color: hsla(0, 100%, 50%, " + opacity + ")" + "\n";
            //updateCode("bgcolor", c);
        //}
    //});
    
//})(jQuery);

//// Pattern Overlay
//(function($){
    
    //var opacity, pattern, scale, p;
    
    //$("#po_enabled").bind("click", function(){
        //if ($(this).is(":checked")) {
            ////pattern = $("#po_pattern").val();
            //// Temp
            //pattern = "iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGZJREFUeNqU0UsOACEIA1Ds/e/sUCcmBkErS+SFj83MukezxwCRR39BrIf9LWXMOtZjJhQ80Rh1fTjhFW2wwhGlMOIMjbwnpZ2277ihamfcOlUYyngZhrpTxFBQem1eVUFxsk+AAQAFDmUXbxh5bAAAAABJRU5ErkJggg==";
            //scale = $("#po_scale_range").val() * 0.01;
            //e.css("background-image", 'url("data:image/png;base64,' + pattern + '")');
            //p = 'background-image: url("data:image/png;base64,' + pattern + '")' + "\n";
        //} else {
            //e.css("background-image", "none");
            //p = "";
        //}
        //updateCode("pattern", p);
    //});

//})(jQuery);

/*});*/
