var script_url = "https://script.google.com/macros/s/AKfycbx4-qrqnL8jGrSDg4wWZ3mJaBIbSGcmYUOu9aWc1Hln3-8867IN/exec";
  
  // Make an AJAX call to Google Script
  function update_value() {
    
        $("#re").css("visibility","hidden");
        $('#mySpinner').addClass('spinner');
        var id1 = $("#id").val();
        var Titre= $("#Titre").val();
        alert(Titre);
        var Entreprise= $("#Entreprise").val();
        var name= $("#name").val();
        var Prenom= $("#Prenom").val();
        var Fonction= $("#Fonction").val();
        var AdresseMail= $("#AdresseMail").val();
        var Telephone= $("#Telephone").val();
        alert(Telephone);
        var Adresse= $("#Adresse").val();
        
    var url = script_url+"?callback=ctrlq&Titre="+Titre+"&Entreprise="+Entreprise+"&Prenom="+Prenom+"&id="+id1+"&name="+name+"&Fonction="+Fonction+"&AdresseMail="+AdresseMail+"&Telephone="+Telephone+"&Adresse="+Adresse+"&action=update";
  

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });
}
  // print the returned data
  function ctrlq(e) {
  
        
        $("#re").html(e.result);
        $("#re").css("visibility","visible");
        read_value();
        
  }
function delete_value(){
	$("#re").css("visibility","hidden");
     document.getElementById("loader").style.visibility = "visible";
	$('#mySpinner').addClass('spinner');
    var id1=	$("#id").val();
	var name= $("#name").val();
	
	
    var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&action=delete";
  

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });
setTimeout("location.reload(true);",1000);
  }
  
  function snackbar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
} 
var elem=document.querySelector('.modal');
var instance = M.Modal.init(elem);
instance.open();
