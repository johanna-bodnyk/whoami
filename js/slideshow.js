$(document).ready(function() {
    setTimeout(function() {
        $("img.tl-media-item").each(function(index, img) {
            var slideId = $($(img).closest(".tl-slide")).attr('id');
            $(img).data("slide-id", slideId);
            $(img).data("image-index", 0);

            var next = $('<div id="' + slideId + '-next" class="slideshow-next">&nbsp;</div>');
            var prev = $('<div id="' + slideId + '-prev" class="slideshow-prev">&nbsp;</div>');
            $(img).after(prev);
            $(prev).after(next);

            setArrowPositions(prev, next, img);

            $(prev).on("click", function() {
                changeImage(img, "prev");
            });

            $(next).on("click", function() {
                changeImage(img, "next");
            });

            $(window).resize(function() {
                setArrowPositions(prev, next, img);
            });

            $(img).on("load", function() {
                setArrowPositions(prev, next, img);
            });
        });

        // TODO: 
        //  Only show arrows when hovering over image
        //  Animate image transition


    }, 3000);
});

var setArrowPositions = function(prev, next, img) {
    var imageContainer = $(img).parent()[0];
    var containerWidth = $(imageContainer).width();

    $(prev).css("top", img.height/2 - 16);
    $(prev).css("left", (containerWidth - img.width)/2 + 10);
    $(next).css("top", img.height/2 - 16);
    $(next).css("left", (containerWidth - img.width)/2 + img.width - 35);
};

var changeImage = function(img, direction) {
    var oldIndex = $(img).data("image-index");
    var images = allImages[$(img).data("slide-id")];
    var newIndex = 0;
    if (direction === "prev") {
        if (oldIndex === 0) {
            newIndex = images.length - 1;
        } else {
            newIndex = oldIndex - 1;
        }
    } else {
        if (oldIndex === images.length - 1) {
            newIndex = 0;
        } else {
            newIndex = oldIndex + 1;
        }
    }
    $(img).data("image-index", newIndex);
    $(img).attr("src", "https://raw.githubusercontent.com/johanna-bodnyk/whoami/master/photos/" + images[newIndex]);
};


var allImages = {
    "i-am-born": [
        "1981-johanna-and-deborah.jpg",
        "carrier.jpg",
        "baby-lucas.jpg",
        "baby-catherine.jpg",
        "cantalope.jpg",
        "julias-wedding.jpg",
        "mom-and-mj.jpg",
        "family-thanksgiving.jpg"
    ],
    "mom-meets-beth": [
        "https://raw.githubusercontent.com/johanna-bodnyk/whoami/master/photos/climbing_den-rock.jpg",
        "http://placekitten.com/500/300"
    ],
    "the-circle-school-opens": [],
    "the-founders-visit-svs": [],
    "bard-college": [],
    "pennsylvania-again": [],
    "to-boston": [],
    "weymouth-design": [],
    "sherman-cafe": [],
    "cmes": [],
    "learning-2-code": [],
    "vistaprint": [],
    "postscript-worklife-balance": [],
};