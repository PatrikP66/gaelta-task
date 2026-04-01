🛒 Zadanie 5 – Platformové znalosti

    Scenár: 
    Na stránke košíka chceš v custom skripte zobraziť upozornenie pre produkty, ktoré majú aktualnu zľavu – t.j. predávajú sa pod bežnou cenou. 
    Potrebuješ cenu v zľave dostať do svojho skriptu.

    Ako by si to riešil/a čo najjednoduchšie na každej z týchto platforiem? Popíš postup a aké funkcie/metódy využil, ak sú potrebné:
        - WordPress / WooCommerce
        - Shoptet
        - Upgates



    1. WordPress / WooCommerce
        - v prvom kroku by som asi skontroloval HTML, či sa tam nenachadzajú elementy, ktoré popisujú pôvodnú cenu a cenu po zlacnení
        - tak by som napisal javascript, ktorý by kontroloval dané elementy či sú pri prislušnom produkte
        - ak sú tak následne viem určiť či majú zľavu

    2. Shoptet 
        - postupoval by som úplne rovnako 
        - hľadal by som elementy v HTML a podľa nich určil či produkt je v zľave alebo nie je
        - teda ak pôvodná cena bola vyššia ako aktuálna produkt je zlacnený a zobrazím upozornenie 

    3. Updates
        - úplne rovnaký postup skrz HTML a elementy, následne javascript