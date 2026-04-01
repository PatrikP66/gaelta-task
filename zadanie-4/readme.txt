🛠️ Zadanie 4 – Krátke otázky 
Odpovedz stručne (3–5 viet na každú):

    1. Klient chce migrovať e-shop zo Shoptetu na Shopify. 
    - Aké sú 3 hlavné veci, ktoré musíš vyriešiť technicky ako prvé?

    2. Core Web Vitals (LCP) sú na červeno. 
    - Čo skontroluješ ako prvé na Shoptet e-shope?

    3. Kedy by si povedal klientovi „toto na Shoptete natívne nevieš, treba doplnok/custom riešenie"? 
    - Daj konkrétny príklad.

    4. Klient chce skryť ceny produktov na všetkých stránkach kategórií, ale nie na stránke konkrétneho produktu. 
    - Ako by si postupoval/a?

    5. Potrebuješ spustiť vlastný kód v momente, keď zákazník klikne na tlačidlo „Pridať do košíka“ na Shoptet e-shope. 
    - Aký postup by si zvoli/la? Popíš možné spôsoby, ktoré ti napadajú.

    6. Potrebuješ cez Shoptet API získať informácie o stavoch objednávok, platobných metódach a krajinách, ktoré e-shop podporuje. 
    - Aký API endpoint by si použil/a a prečo?

    7. Klient predáva v SK, CZ a HU — chce jeden admin, tri frontendy s rôznymi cenami a jazykmi. 
    - Ako to riešiš na platforme (Wordpress, Upgates, Shoptet, Shopify) a kde sú limity?"
-----------------------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------------------
1. Klient chce migrovať e-shop zo Shoptetu na Shopify. 
    - Aké sú 3 hlavné veci, ktoré musíš vyriešiť technicky ako prvé?

    -> Na začiatku by som riešil hlavne prenos dát – produkty, zákazníkov a objednávky. 
    -> Potom by som skontroloval dizajn a šablónu, aby e-shop vyzeral podobne alebo lepšie. 
    -> A dôležité je aj nastaviť presmerovania, aby sa nestratilo SEO a staré URL fungovali.
-----------------------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------------------
2. Core Web Vitals (LCP) sú na červeno. 
    - Čo skontroluješ ako prvé na Shoptet e-shope?

    -> skontroloval by som ako rýchlo sa načítava hlavná časť stránky, to je to čo vidíme ako prvé
    -> najpomalšie sa zvyknú načítavať obrázky takže tie by som kontroloval ako prvé
    -> následne by som prekontroloval aj skripty, či nedochádza tam k spomaleniam. 
-----------------------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------------------
3. Kedy by si povedal klientovi „toto na Shoptete natívne nevieš, treba doplnok/custom riešenie"? 
    - Daj konkrétny príklad.

    ->
-----------------------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------------------
4. Klient chce skryť ceny produktov na všetkých stránkach kategórií, ale nie na stránke konkrétneho produktu. 
    - Ako by si postupoval/a?

    -> zvolil by som asi najľahšie riešenie a to upraviť šablónu (HTML/CSS/JS)
    -> skryl by som cenu na stránkach kategórie cez CSS alebo v blade/html.
-----------------------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------------------
5. Potrebuješ spustiť vlastný kód v momente, keď zákazník klikne na tlačidlo „Pridať do košíka“ na Shoptet e-shope. 
    - Aký postup by si zvoli/la? Popíš možné spôsoby, ktoré ti napadajú.

    -> zvolil by som možnosť cez javascript, kde by som dal event listener na tlačidlo "pridať do košíka"
-----------------------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------------------
6. Potrebuješ cez Shoptet API získať informácie o stavoch objednávok, platobných metódach a krajinách, ktoré e-shop podporuje. 
    - Aký API endpoint by si použil/a a prečo?

    -> vybral by som si taký, ktorý by už z názvu vystihoval o čo sa jedna aby som to nemusel nejak hľadať hlbšie v logike o čo ide
    -> napr. api/orders, alebo api/paymethods a niečo podobné.
-----------------------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------------------
 7. Klient predáva v SK, CZ a HU — chce jeden admin, tri frontendy s rôznymi cenami a jazykmi. 
    - Ako to riešiš na platforme (Wordpress, Upgates, Shoptet, Shopify) a kde sú limity?"

    ->
-----------------------------------------------------------------------------------------------------------------------------------------