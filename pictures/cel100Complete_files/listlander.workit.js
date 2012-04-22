$(document).ready(function () {
    $("#thelist tbody tr").css("cursor", "pointer").click(function () {
        window.location = $(this).find("a").attr("rel");
    });
    $("#following tbody tr").css("cursor", "pointer").click(function () {
        window.location = $(this).find("a").attr("rel");
    });
    $.fn.tabular = function () {
        $(this).find(".tabbed").hide();
        $(this).find("ul.tabs li:first").addClass("active").show();
        $(this).find(".tabbed:first").show();
        $("ul.tabs li").click(function () {
            $(this).parent().parent().find("ul.tabs li").removeClass("active");
            $(this).addClass("active");
            $(this).parent().parent().find(".tabbed").hide();
            var activeTab = $(this).find("a").attr("rel");
            $("#" + activeTab).fadeIn();
            return false;
        });
    };
    $(".tabular").tabular();

    $("#video li:odd").css("margin-right", "0");
    $("#gallerylastslide li:odd").css("margin-right", "0");
    $(".horznav li:last-child").css("border", "none");
    $(".horznav li").append('<div class="arrow"></div>');
    $("#listgallery ul li:last-child").css("margin-right", "0");
    $("#listgallery .iconoverlay").append('<span class="icon"><b></b></span>');

    $("#listwatchtabs ul li.over a img").hover(function () {
        $(this).stop().fadeTo("slow", 0)
    }, function () {
        $(this).stop().fadeTo("slow", 1)
    });

});

function loadScriptCallback(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
Array.prototype.sum = function () {
    return (!this.length) ? 0 : this.slice(1).sum() + ((typeof this[0] == "number") ? this[0] : 0);
};

function menu() {
    var nav = $("ul.paginate"),
        nav_item_height = 0,
        numMenuItems = $("> li", nav).size(),
        totalMenuItemWidth = 0,
        menuWidthRemainder = 0,
        wrapperWidth = 560,
        maxNavItemWidth = 200,
        priNavItems = new Array();
    $("> li", nav).each(function (i) {
        totalMenuItemWidth += $(this).width();
        priNavItems.push(($(this).width() > maxNavItemWidth) ? maxNavItemWidth : $(this).width());
    });
    if (totalMenuItemWidth < wrapperWidth) {
        menuWidthRemainder = wrapperWidth - totalMenuItemWidth;
        $("> li", nav).each(function () {
            var tmp_width = $(this).width();
            $(this).width(tmp_width + parseInt(menuWidthRemainder / numMenuItems));
        });
        tmp_width = $("> li:first", nav).width();
        $("> li:first", nav).width(tmp_width + (menuWidthRemainder % numMenuItems));
    }
}
$(function () {
    menu();
});
