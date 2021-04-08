/*<script>

function checkforblank(form)
{
 if (form.inputfield.value == ""){
    alert("errormessage");
    form.inputfield.focus();
    return false;
 }


}

</script>
*/









/*



/*
<script>
    function checkforblank() {
        var name = document.forms["RegForm"]["Name"];
        var email = document.forms["RegForm"]["EMail"];
        var phone = document.forms["RegForm"]["Telephone"];
        var what = document.forms["RegForm"]["Subject"];
        var password = document.forms["RegForm"]["Password"];
        var address = document.forms["RegForm"]["Address"];
  
        if (name.value == "") {
            window.alert("Please enter your name.");
            name.focus();
            return false;
        }
  
        if (address.value == "") {
            window.alert("Please enter your address.");
            address.focus();
            return false;
        }
  
        if (email.value == "") {
            window.alert(
              "Please enter a valid e-mail address.");
            email.focus();
            return false;
        }
  
        if (phone.value == "") {
            window.alert(
              "Please enter your telephone number.");
            phone.focus();
            return false;
        }
  
        if (password.value == "") {
            window.alert("Please enter your password");
            password.focus();
            return false;
        }
  
        if (what.selectedIndex < 1) {
            alert("Please enter your course.");
            what.focus();
            return false;
        }
  
        return true;
    }
</script>
*/

























































/*
/*$(document).ready(function() { 
            $("inputs").focusout(function() { 
                if($(this).val()=='') { 
                    $(this).css('border', 'solid 2px red'); 
                }
                else {
                      
                    // If it is not blank.
                    $(this).css('border', 'solid 2px green');    
                }    
            }) .trigger("focusout");
        }); 
*/


<script>
function checkforblank() {

    if (document.getElementByname('customer name').value == "") {
        alert('Please enter your first name');
        document.getElementById('customer name').style.borderColor = "red";
        return false;
        }

    }    /*
        
        var input = document.getElementById('form').style.borderColor = 'red';
    }
    if (document.getElementById('form').value == "") {
        errormessage += "skriv dit fornavn \n";
        document.getElementById('form').style.borderColor = "red";
}

    if (errormessage != "") {
        alert(errormessage);
        return false;
        }
    }*/

    </script>*/*/










