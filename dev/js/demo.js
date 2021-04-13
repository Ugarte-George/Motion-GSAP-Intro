import $ from "jquery";
import {gsap} from "gsap";

var redBox = $('.red-box');


// only here to make codeKit be quiet!
console.log(gsap);
$(document).ready(function(){

    console.log ('Page Loaded');

    gsap.to(redBox , {duration:  0.5, x:300});

});
