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
        "mom-and-mj.JPG",
        "family-thanksgiving.jpg"
    ],
    "mom-meets-beth": [
        "mom-and-beth.JPG",
        "babies.jpg",
        "dress-up.jpg",
        "outside.jpg",
        "twins.jpg",
        "camping.jpg",
        "highschool.jpg",
        "grownup.jpg"
    ],
    "the-circle-school-opens": [
        "tcs-opens.jpg",
        "circletime.jpg",
        "grange.jpg",
        "campout.jpg",
        "gamesday.jpg",
        "beth.jpg",
        "sue.jpg",
        "tuli.jpg"
    ],
    "the-founders-visit-svs": [
        "91-92.jpg",
        "92-93.jpg",
        "93-94.jpg",
        "backpacking.jpg",
        "highschool-graduation.jpg",
        "graduation-lucas.jpg"
    ],
    "bard-college": [
        "ps-stone-row.jpg",
        "back_river-arial.jpg",
        "blithewood.jpg",
        "bcsq.jpg",
        "bard-sirens.jpg",
        "milkshake.jpg",
        "nudity.jpg",
        "dq.jpg",
        "with-laura.jpg",
        "with-lydia.jpg",
        "bard_sirens-at-10-years.jpg"
    ],
    "pennsylvania-again": [
        "circle-school-front-400px.jpg",
        "smokies.jpg",
        "25th-cake.jpg"
    ],
    "to-boston": [
        "princesses.jpg",
        "smores.jpg"
    ],
    "weymouth-design": [
        "childrens-museum.jpg"
    ],
    "sherman-cafe": [
        "sherman.jpg",
        "sherman-inside.jpg",
        "scones.jpg"
    ],
    "cmes": [
        "38-kirkland.jpg",
        "cmes-rally.jpg",
        "snowflakes.jpg"
    ],
    "learning-2-code": [
        "extension-school.jpg",
        "dream-campaign.jpg",
        "tcs-board.jpg"
    ],
    "vistaprint": [
        "studio.jpg"
    ],
    "postscript-worklife-balance": [
        "rumney.jpg",
        "den-rock.jpg",
        "pemi.jpg",
        "glacier.jpg",
        "juniper.jpg",
        "juniper2.jpg",
        "juniper3.jpg",
        "juniper4.jpg"
    ],
};