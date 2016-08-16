function allowDrop(ev) {
    ev.preventDefault();

}

function drag(ev) {

    ev.dataTransfer.setData("obj", ev.target.id);
    ev.target.style.opacity = '0.9';
}

function drop(ev) {
   debugger
    ev.preventDefault();
    var data = ev.dataTransfer.getData("obj");
    ev.target.appendChild(document.getElementById(data));
    

}


function dragSelect() {
    var selected = $([]),
        offset = { top: 0, left: 0 };
    $("#containerselec > div").draggable({
        containment: "#containerselec",
        scroll: false,
        start: function(ev, ui) {
            if ($(this).hasClass("ui-selected")) {

                selected = $(".ui-selected").each(function() {
                    var el = $(this);
                    el.data("offset", el.offset());
                });
            } else {
                selected = $([]);
                $("#containerselec > div").removeClass("ui-selected");
            }
            offset = $(this).offset();
        },
              drag: function(ev, ui) {
              	debugger
            var dt = ui.position.top - offset.top,
                dl = ui.position.left - offset.left;
            // take all the elements that are selected expect $("this"), which is the element being dragged and loop through each.
            selected.not(this).each(function() {
                // create the variable for we don't need to keep calling $("this")
                // el = current element we are on
                // off = what position was this element at when it was selected, before drag
                var el = $(this),
                    off = el.data("offset");

                el.css({ top: off.top + dt, left: off.left + dl });
            });
        }
    });
}


$("#containerselec").selectable();

// manually trigger the "select" of clicked elements
$("#containerselec > div").click(function(e) {
    if (e.metaKey == false) {
        // if command key is pressed don't deselect existing elements
        $("#containerselec > div").removeClass("ui-selected");
        $(this).addClass("ui-selecting");
    } else {
        if ($(this).hasClass("ui-selected")) {
            // remove selected class from element if already selected
            $(this).removeClass("ui-selected");
        } else {
            // add selecting class if not
            $(this).addClass("ui-selecting");
        }
    }

    $("#containerselec").data("selectable")._mouseStop(null);
});

// starting position of the divs
var i = 0;
$("#containerselec > div").each(function() {

    $(this).css({
        top: i * 42
    });
    i++;
});
