
const sheet = `
|##################################################################################################################|
|				Bohater 				|#|																		 |#|
|#######################################|#|																		 |#|
|Imię:									|#|																		 |#|
|Rasa:									|#|																		 |#|
|Obecna Profesja:						|#|   __          __        _                                            |#|
|Poprzednia Profesja:					|#|   \ \        / /       | |                                           |#|
|Profesje Wyjściowe:					|#|    \ \  /\  / /_ _ _ __| |__   __ _ _ __ ___  _ __ ___   ___ _ __    |#|
|#######################################|#|     \ \/  \/ / _' | '__| '_ \ / _' | '_ ' _ \| '_ ' _ \ / _ \ '__|   |#|
|			 Opis Bohatera				|#|      \  /\  / (_| | |  | | | | (_| | | | | | | | | | | |  __/ |      |#|
|#######################################|#|       \/  \/ \__,_|_|  |_| |_|\__,_|_| |_| |_|_| |_| |_|\___|_|      |#|
|Płeć:									|#|       _____ _____                                                    |#|
|Wiek:									|#|      |_   _|_   _|                                                   |#|
|Data urodzenia:						|#|        | |   | |                                                   	 |#|
|Miejsce urodzenia:						|#|        | |   | |                                                   	 |#|
|Pochodzenie:							|#|       _| |_ _| |_                                                    |#|
|Znak gwiezdny:							|#|      |_____|_____|                                                   |#|
|Wzrost:								|#|																		 |#|
|Oczy:									|#|																		 |#|
|Znaki szczególne:						|#|																		 |#|
|Waga:									|#|																		 |#|
|włosy:									|#|																		 |#|
|##################################################################################################################|
|							Cechy							 |#|						Ruch					   |
|############################################################|#|###################################################|
|Główne			| WW |  US |  K  | Odp | Zr | Int | SW | Ogd |#|Sz 						|						   |
|Początkowe		|	 |     | 	 |	   |    |	  |	   | 	 |#|Sz w pancerzu			|						   |
|Schemat rozwoju|	 |	   | 	 |	   |    |	  |	   |     |#|Ruch Odwrót				|						   |
|Aktualne		|	 |     | 	 |	   |    |	  |    | 	 |#|Szarża					|						   |
|rozwiniecia	|	 |     |     |	   |    |	  |    | 	 |#|Bieg					|						   |
|############################################################|#|Przeskok w biegu		|						   |
|Drugorzędne	|  A | Zyw |  S  |  Wt | Sz | Mag | PO |  PP |#|Przeskok z Miejsca		|						   |
|Początkowe		|	 |     | 	 |	   |    |	  |	   | 	 |#|Lot						|						   |
|Schemat rozwoju|	 |	   | --- | --- | -- |	  |	-- | --- |#|Ostrożny marsz			|						   |
|Aktualne		|	 |     | 	 |	   |    |	  |    | 	 |#|Zwykły marsz			|						   |
|rozwiniecia	|	 |     |	 |	   |    |	  |    | 	 |#|swobodna podróż			|						   |
|##################################################################################################################|
|							Broń							 |#|						Pancerz					   |
|############################################################|#|###################################################|
|		Nazwa		 | Obc.| Kategoria | S broni | Zasięg | p|#|	Typ pancerza   |	Lokalizacja    | Obc. | PZ |
|####################|#####|###########|#########|########|##|#|###################|###################|######|####|
|					 |	   |           |         |		  |  |#|				   |                   |      |    |
|------------------------------------------------------------|#|-------------------|-------------------|------|----|
|Cechy:														 |#|				   |                   |      |    |
|------------------------------------------------------------|#|-------------------|-------------------|------|----|
|					 |	   |           |         |		  |  |#|				   |                   |      |    |
|------------------------------------------------------------|#|-------------------|-------------------|------|----|
|Cechy:														 |#|				   |                   |      |    |
|------------------------------------------------------------|#|-------------------|-------------------|------|----|
|					 |	   |           |         |		  |  |#|				   |                   |      |    |
|------------------------------------------------------------|#|-------------------|-------------------|------|----|
|Cechy:														 |#|				   |                   |      |    |
|------------------------------------------------------------|#|-------------------|-------------------|------|----|
|					 |	   |           |         |		  |  |#|				   |                   |      |    |
|------------------------------------------------------------|#|-------------------|-------------------|------|----|
|Cechy:														 |#|				   |                   |      |    |
|------------------------------------------------------------|#|-------------------|-------------------|------|----|
|					 |	   |           |         |		  |  |#|				   |                   |      |    |
|------------------------------------------------------------|#|-------------------|-------------------|------|----|
|Cechy:														 |#|				   |                   |      |    |
|------------------------------------------------------------|#|###################################################|
|					 |	   |           |         |		  |  |#|				Punkty Zbroi	   		  |  Rzut  |
|------------------------------------------------------------|#|###################################################|
|Cechy:														 |#|Głowa:			   						  | 01:15  |
|------------------------------------------------------------|#|Korpus:			   						  | 56:80  |
|					 |	   |           |         |		  |  |#|Prawa ręka:		   						  | 16:35  |
|------------------------------------------------------------|#|Lewa ręka:		   						  | 36:55  |
|Cechy:														 |#|Prawa noga:		   						  | 81:90  |
|------------------------------------------------------------|#|Lewa noga:		   						  | 91:00  |
|					 |	   |           |         |		  |  |#|				 						  |		   |
|------------------------------------------------------------|#|										  |		   |
|Cechy:														 |#|										  |		   |
|############################################################|#|###################################################|
|				   Umiejętności podsawowe					 |#|					Zdolności					   |
|############################################################|#|###################################################|
|	 Umiejętność	| wyk |	+10% | +20% | wartość cechy  |typ|#|	Zdolność	    |	  		  Opis   		   |
|###################|#####|######|######|################|###|#|####################|##############################|
|Charakteryzacja	|     |      |      |                |Ogd|#|					|							   |
|Dowodzenie			|     |      |      |                |Ogd|#|					|							   |
|Hazard				|     |      |      |                |Int|#|					|							   |
|Jeździectwo	    |     |      |      |                |Zr |#|					|							   |
|Mocna głowa		|     |      |      |                |Odp|#|					|							   |
|Opieka nad zwierz.	|     |      |      |                |Int|#|					|							   |
|Plotkowanie		|     |      |      |                |Ogd|#|					|							   |
|Pływanie			|     |      |      |                | K |#|					|							   |
|Powożenie			|     |      |      |                | K |#|					|							   |
|Przekonywanie		|     |      |      |                |Ogd|#|					|							   |
|Przeszukiwanie		|     |      |      |                |Int|#|					|							   |
|Skradanie się		|	  |      |      |                |Zr |#|					|							   |
|Spostrzegawczość	|     |      |      |                |Int|#|					|							   |
|Sztuka przetrwania |     |      |      |                |Int|#|					|							   |
|Targowanie			|     |      |		|				 |Ogd|#|					|							   |
|Ukrywanie się		|     |      |      |                |Zr |#|					|							   |
|Wioślarstwo		|     |      |      |                | K |#|					|							   |
|Wspinaczka			|	  |      |      |				 | K |#|					|							   |
|Wycena				|	  |      |      |                |Int|#|					|							   |
|Zastraszanie		|     |      |      |                | K |#|					|							   |
|############################################################|#|###################################################|
|				   Umiejętności Zaawansowane				 |#|					Wyposażenie					   |
|############################################################|#|###################################################|
|	 Umiejętność	| wyk |	+10% | +20% | wartość cechy  |typ|#|	Przedniot	    |Obc| 		  Opis   		   |
|###################|#####|######|######|################|###|#|####################|###|##########################|
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|					|	  |		 |		|				 |	 |#|					|	|						   |
|############################################################|#|###################################################|
|							Kompanion						 |#|					Pieniądze					   |
|##################################################################################################################|
|							Cechy							 |#|Złote korony[ZK]:								   |
|############################################################|#|---------------------------------------------------|
|Główne			| WW |  US |  K  | Odp | Zr | Int | SW | Ogd |#|Srebrne Szylingi[S]:							   |
|				|	 |     | 	 |	   |    |	  |	   | 	 |#|---------------------------------------------------|
|------------------------------------------------------------|#|Miedziane Pensy[P]:								   |
|Drugorzędne	|  A | Zyw |  S  |  Wt | Sz | Mag | PO |  PP |#|###################################################|
|				|	 |     | 	 |	   |    |	  |	   | 	 |#|				  Doświadczenie					   |
|------------------------------------------------------------|#|###################################################|
|Umiejętności:												 |#|Ogółem: 										   |
|														     |#|---------------------------------------------------|
|Zdolności:													 |#|Wolne:											   |
|PZ:														 |#|---------------------------------------------------|
|Ataki:														 |#|Za sesję:										   |
|##################################################################################################################|`

module.exports = sheet