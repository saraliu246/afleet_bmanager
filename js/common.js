
/** Sara Liu created in 05/29**/
var debounce = function (func, threshold, execAsap) {  
    var timeout;  
    return function debounced () {  
        var obj = this, args = arguments;  
        function delayed () {  
            if (!execAsap)  
            func.apply(obj, args);  
            timeout = null;  
        };  
        if (timeout)  
            clearTimeout(timeout);  
        else if (execAsap)  
            func.apply(obj, args);  
            timeout = setTimeout(delayed, threshold || 50);  
    };  
}
window.onresize = debounce( function(){  
    SetCwinHeight();
}, 50, true)

function SetCwinHeight() {
    var viewportwidth = document.body.clientWidth;
    var viewportheight = document.body.clientHeight;
    var iframeid=document.getElementById("LinkMenu");
    iframeid.height = viewportheight;
}

$(document).ready(function() {
   
    var BtnCollapse = document.getElementById("btn-collapse");
    var SidebarCollapse = document.getElementById("sidebar");
    var PageWrapper= document.querySelector(".page-wrapper");
    var W= SidebarCollapse.style.width;

     if(W="256px") {
        var a = $("#currentPage").text(); 
        var A = a.toUpperCase(); 
        var $target = $('#'+ A); 
        $target.addClass("active").parent().slideDown();
        $target.parent().addClass("active");
    }
    function goOpen() {
        if(SidebarCollapse.classList.contains("collapsed")) {
            /**縮小 */
            PageWrapper.classList.add("page-animation");
        }else {
            /**放大*/
            PageWrapper.classList.remove("page-animation"); 
        }
            
    }
    BtnCollapse.addEventListener("click", goOpen);
   


})















