import { generateDash } from "./update-status.js";
$(document).ready(function(){
    $("header").load("header.html",generateDash);
});