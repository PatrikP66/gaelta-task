⚙️ Zadanie 2 – API integrácia
Scenár:
Klient chce, aby sa po každej novej objednávke na Shoptete automaticky vytvoril záznam v externom Google Sheets (simulujeme jednoduchý sklad/reporting).

Tvoja úloha:

1. Popíš (alebo nakód) postup napojenia – Shoptet Webhook → spracovanie → zápis do Google Sheets
2. Aké dáta z objednávky by si poslal? (meno, e-mail, produkty, suma – čo ešte?)
3. Aký nástroj/prístup by si použil? (n8n, Make, vlastný PHP endpoint, iné) – zdôvodni prečo
4. Napíš pseudokód alebo reálny kód pre spracovanie webhook payloadu (PHP alebo JS)
---------------------------------------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------------------------------------------------
1. Popíš (alebo nakód) postup napojenia – Shoptet Webhook → spracovanie → zápis do Google Sheets
    - v prvom kroku by som na Shoptete nastavil event, aby s každou novou objednávkou sa na konkrétnu URL adresu 
    posielali dáta o objednávke.
    - vznikne nová objednávka, POST pošle request na URL. Request obsahuje JSON dáta o objednávke.
    - URL adresa obsahuje skriptl, ktorý dokáže čítať JSON dáta
    - získané dáta bude potrebné naformátovať na taký formár s akými dokáže pracovať Google Sheets
    - tak vznikne API volanie alebo pomocou n8n/Make zapíšeme dáta do nového riadka, teda jedna objednávka 
    a jej dáta sú v jednom riadku
---------------------------------------------------------------------------------------------------------------------------------------------------------


---------------------------------------------------------------------------------------------------------------------------------------------------------
2. Aké dáta z objednávky by si poslal? (meno, e-mail, produkty, suma – čo ešte?)
    - Údaje o objednávke    -> ID objednávky
                            -> dátum kedy bola objednávka vytvorená
                            -> v akom stave sa nachádza objednávka
                            -> aké produkty boli objednané
                            -> cena jednotlivých produktov + výsledná cena objednávky
                            -> spôsob platby

    - Údaje o zákazníkovy   -> meno a priezvisko
                            -> email
                            -> telefónne číslo
                            -> fakturačná alebo doručovacia adresa
---------------------------------------------------------------------------------------------------------------------------------------------------------


---------------------------------------------------------------------------------------------------------------------------------------------------------
3. Aký nástroj/prístup by si použil? (n8n, Make, vlastný PHP endpoint, iné) – zdôvodni prečo
    - Pre tento úkol by som použil n8n alebo Make, pretože umožňujú spracovať objednávky zo Shoptetu a zapisovať ich do Google Sheets bez písania kódu. 
    - Je to jednoduché na pochopenie a ako junior sa môžem rýchlo naučiť workflow a vidieť, že všetko funguje. 
    - Zároveň je to bezpečné a rýchlo testovateľné. 
    - Ak by sme potrebovali väčšiu kontrolu nad dátami alebo zapisovať veľké množstvo objednávok, vedel by som použiť vlastný PHP skript s Google Sheets API.
---------------------------------------------------------------------------------------------------------------------------------------------------------


---------------------------------------------------------------------------------------------------------------------------------------------------------
4. Napíš pseudokód alebo reálny kód pre spracovanie webhook payloadu (PHP alebo JS)

---------------------------------------------------------------------------------------------------------------------------------------------------------