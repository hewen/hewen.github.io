function checkhHtml5() {    
    if (typeof(Worker) == "undefined") {  
        document.getElementById("html5Check").style.display = "block";
    }
} 
checkhHtml5();
