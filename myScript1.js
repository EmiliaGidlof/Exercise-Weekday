
// Du behöver egentligen ingen $veckodag-variabel, du kan köra new Date direkt i switch statement
// new Date = ett JavaScript Object
  const $veckodag = new Date().getDay(); 
  let $meddelande;

  switch ($veckodag) {
    case 0:
      $meddelande = "Söndag, du hinner tvätta";
      document.getElementById("idag").style.backgroundColor = "white";
      break; 

    case 1:
      $meddelande = "Måndag. Börsen öppnar, häng på låset!";
      document.getElementById("idag").style.backgroundColor = "#abeeab";
      break;

    case 2:
      $meddelande = "Tisdag. Häng på stubben med tisdagsklubben."; 
      document.getElementById("idag").style.backgroundColor = "#f6f9c2";
      break;
    
    case 3:
      $meddelande = "Onsdag. Idag är det Pig-lördag, rödtjut?";
      // document.getElementById("idag").style.backgroundColor = "red";
      document.querySelector('#idag').style.backgroundColor = "#ffdd00";
      break;

    case 4:
      $meddelande = "Torsdag. Ät pannkakor!";
      document.querySelector('#idag').style.backgroundColor = "#e3c88d7d";
      break;

    case 5:
        $meddelande = "Fredag. Preppa inför Disney-mys!";
        document.querySelector('#idag').style.backgroundColor = "pink";
        break;
        
    case 6:
          $meddelande = "Lördag. Veckans glansdag!";
          document.querySelector('#idag').style.backgroundColor = "white";
          break;
    
    default:
      console.log("Något blev fel");
      document.querySelector('#idag').style.backgroundColor = "red";
      break;
  }

  document.getElementById("idag").innerHTML= $meddelande;



























