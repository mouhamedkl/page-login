var Adresse;
var AdrCor;
var Demande;
var Email1;
var Email2;
var MonSujet="";
var Catal="";

function GetContenu()
{
//E-mail du destinataire:

Email2='esprit.tn';
Demande="Messieurs, %0AMerci de bien vouloir me faire parvenir la documentation suivante:%0A";
//Vérification saisi
Adresse=""
Adresse=document.getElementById('mail');
if (Adresse.value=="") 
{
alert('Vous n\'avez pas saisi d\'adresse postale !');

return false;
}
 
else{
AdrCor=""
AdrCor=Adresse.value.split("\n");
AdrCor=AdrCor.join('%0A');
let length = AdrCor.length;
let car ="@";

Email1=AdrCor.slice(0,10);
    


String(AdrCor);
return true;
}
}
 
function mailenquiry(Adr)
{
if (Adr==false){
  					return false;
  				  }
else {  
//L'objet du message
MonSujet="Demande modifier mot passe.";

//Le texte du message
 Demande='Mr '+Email1+" votre demander a ete b1 saisir ";

 
//L'envoi du mail
 window.location.href='mailto:'+AdrCor+'\?Subject='+MonSujet+'&body='+Demande;
  //Le message de rappel
  
}
}