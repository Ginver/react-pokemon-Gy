# Opdrachtbeschrijving

## Inleiding
Je bent al jaren een ontzettende Pokémon fan en kent alle afleveringen uit je hoofd. Laatst was je rustig aan het browsen en kwam je ineens tot de ontdekking dat er een 
Poké API bestaat waarmee je Pokémon data mee kunt ophalen! Jottem!

Je besluit om een applicatie te bouwen waarmee je alle Pokémons kunt bekijken, als een soort catalogus. Dat heeft vast nog nooit iemand gemaakt!

Het project is opgezet met [Create React App](https://github.com/facebook/create-react-app).

## Eindresultaat
Focus je deze opdracht niet op styling, maar om functionaliteit. Maar omdat iedereen blij wordt van leuke kleurtjes, is het voorbeeld toch voorzien van styling:

![Eindresultaat](src/assets/screenshot.gif)

## De applicatie starten
Als je het project gecloned hebt naar jouw locale machine, installeer je eerst de node_modules door het volgende commando in de terminal te runnen:

`npm install`

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

`npm start`

of gebruik de WebStorm knop (npm start). Open http://localhost:3000 om de pagina in de browser te bekijken. 
Begin met het maken van wijzigingen in `src/App.js`: elke keer als je een bestand opslaat, zullen de wijzigingen te zien zijn op de webpagina.

## Randvoorwaarden
Je gaat Pokémon data ophalen via de Poké API en deze weergeven in een Single Page Application. Hier heb je geen API key voor nodig!

Bekijk de documentatie van de Poké API [hier](https://pokeapi.co/) en gebruik vooral hun handige data-preview tool!

* Op de home pagina laat je direct de eerste twintig Pokémons uit het deck zien.
* Elk pokémon kaartje bevat een _naam_, een afbeelding, lijst van _abilities_, _gewicht_, en de hoeveelheid _moves_. 
* Er bevinden zich twee knoppen op de pagina: '_Vorige_' en '_Volgende_'. Wanneer de gebruiker op '_Volgende_' klikt, worden de volgende 20 pokémons in de reeks opgehaald. 
De knoppen worden automatich _disabled_ wanneer het begin of eind van de reeks bereikt is.
* De gebruiker wordt via de interface geinformeerd wanneer er data wordt opgehaald of een fout is opgetreden.
* Laat je niet uit het veld slaan als WebStorm sommige object keys van de data die je binnenhaalt niet herkent. Kan Webstorm niks aan doen.

Ga voor jezelf na wat een handige plek is om te beginnen met ontwikkelen en stel voor jezelf globale stappen op. Mocht je dat nog lastig vinden, kun je ook onderstaande stappen volgen.

## Stappenplan
1. Zorg er eerst voor dat je één pokémon kaartje kunt laten zien op de pagina, bijvoorbeeld JigglyPuff (endpoint: ``https://pokeapi.co/api/v2/pokemon/jigglypuff``)
2. Verplaats vervolgens alle code voor het ophalen en weergeven van JigglyPuff naar een apart Pokémon component en gebruik deze in `App.js`.
3. Probeer nu dit component in `App.js` twee keer te gebruiken, één keer voor _JigglyPuff_ (endpoint: `https://pokeapi.co/api/v2/pokemon/jigglypuff`) en één keer voor 
_Ditto_ (endpoint: `https://pokeapi.co/api/v2/pokemon/ditto`). Wat moet je hiervoor aanpassen in het Pokémon component zodat hij generiek te gebruiken wordt?
4. Ga nu eens kijken hoe je een lijst van 20 pokémon namen kunt ophalen in `App.js`. Welk endpoint heb je dan nodig?
5. Map over deze resultaten heen en render voor elk resultaat een pokémon op de pagina!
6. Maak twee knoppen en bekijk de documentatie voor het ophalen van een lijst van pokémons nog eens goed. Wanneer de gebruiker op 'volgende' klikt, willen we een nieuw request doen naar een nieuw endpoint. 
En we willen dat het ophalen van data getriggerd wordt, wanneer het endpoint wordt veranderd.