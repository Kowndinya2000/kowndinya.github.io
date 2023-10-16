
$(document).ready(function () {
    $('.publication-mousecell').mouseover(function () {
        $(this).find('video').css('display', 'inline-block');
        $(this).find('img').css('display', 'none');
    });
    $('.publication-mousecell').mouseout(function () {
        $(this).find('video').css('display', 'none');
        $(this).find('img').css('display', 'inline-block');
    });
    var ids = ["lgmcts", "ovsg", "egen", "repoquester", "gitq", "annotator"]
    for (var i = 0; i < ids.length; i++) {
        var id = ids[i];
        console.log("project_page_" + id)
        console.log(document.getElementById("project_page_" + id).href);
        if (document.getElementById("project_page_" + id).href == "" || document.getElementById("project_page_" + id).href == "https://") {
            document.getElementById("project_page_" + id).style.display = "none";
            document.getElementById("project_page_" + id).style.visibility = "hidden";
        }
    }

})

