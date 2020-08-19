import styles from "./bio.module.css";
import utilStyles from "../styles/utils.module.css";

const Bio = () => (
  <main className={styles.container}>
    <h3 className={utilStyles.header}>biografie</h3>

    <div className={styles.containerBlurb}>
      <p className={styles.blurb}>
        Willy wordt op 9 juni 1934 geboren in het kleine stadje Ninove in de
        provincie Oost-Vlaanderen. Hij studeert Grieks-Latijn-Wiskunde aan het
        Lyceum, trekt naar Gent om Germaanse Filologie te studeren en zal later
        auteur worden van meer dan 100 teksten.
      </p>
      <img
        src="/roggeman-frontaal.jpg"
        className={styles.imageBio}
        width="250px"
        height="300px"
      />
    </div>

    <div class="bio">
      <h3 className={styles.header}>geboorte en levensloop</h3>

      <h3>
        Willy Roggeman wordt op 9 juni 1934 te Ninove geboren. Hij woont er nog
        steeds.
      </h3>
      <ul className={styles.list}>
        <li>
          1939 - 1948: Lagere school en lager secundair onderwijs aan de
          Rijksmiddelbare Jongensschool te Ninove (Grieks-Latijn-Wiskunde).
        </li>
        <li>
          1948 - 1951: Hoger middelbaar onderwijs aan het Koninklijk Atheneum te
          Aalst (Oude Humaniora).
        </li>
        <li>
          1944 - 1948: Stedelijke Muziekacademie te Ninove. Instrumentenklas:
          sopraansaxofoon.
        </li>
        <li>
          1948 - 1951: Schrijft for the fun filmscenario's en maakt musicals.
        </li>
        <li>
          1951 - 1955: Licentie Germaanse Filologie aan de Rijksuniversiteit
          Gent. Student van Prof. Dr. Herman Uyttersprot met wie hij na zijn
          studie permanent in verbinding blijft.
        </li>
        <li>
          Zomer 1953 - Gedichtencyclus Nuages. Louis-Paul Boon, die de gedichten
          toevallig in het tijdschrift van het Koninklijk Atheneum Aalst leest,
          nodigt Willy Roggeman uit tot medewerking aan het
          avantgardetijdschrift Tijd en Mens (1954).
        </li>
        <li>
          1955 - 1977: Leraar hoger secundair rijksonderwijs en vanaf 1962
          leraar algemene vakken hoger niet-universitair rijksonderwijs van de
          2de graad (Technisch ingenieur) aan het Hoger Rijskinstituut voor
          Technisch Onderwijs te Aalst.
        </li>
        <li>
          1978: Kortstondig assistent aan de Hogescholen voor Industrieel
          Ingenieur te Gent en Brugge.
        </li>
        <li>
          1979 - 1989: Verkiest ondanks protest der cabinetards de functie van
          leraar (met behoud van rechten) aan het Hoger Rijksinstituut voor
          Handel en Administratie met Normaalleergangen te Aalst boven de
          'bevordering' tot assistent aan de Hogescholen.
        </li>
        <li>
          1978: Zwaar ziek. Wordt geopereerd aan het hart wegens stenosis aortae
          (UZ te Gent). Er wordt een biokunstklep type Hancock ingeplant. De
          hartafwijking gaat terug op de gevolgen van een aanval van scarlatina
          (roodvonk) in de winter 1940 - 1941.
        </li>
        <li>
          1953 - 1976: Opus Finitum (30 werken). Vanaf 1969 is Willy Roggeman
          zich bewust van het feit dat zijn boekpublicaties zich naar een
          gesloten opus toe ontwikkelen, dat hij binnen een bepaalde fase van
          zijn bestaan dient te voltooien als constructieve/ constructivistische
          methode van artisticiteit.
        </li>
        <li>
          1977: Doctor in de Letteren en Wijsbegeerte (Universiteit Antwerpen).
          Scriptie: Een gedicht. 'Tweespraak in de herfst' door Maurice
          Gilliams, analyse en synthese.
        </li>
        <li>
          1986: Stopt zijn activiteiten in het onderwijs en wordt in 1989 op
          medische gronden gepensioneerd. Ere-leraar.
        </li>
        <li>1986 - 1991: Schrijft in deze periode geen woord.</li>
        <li>
          1991 - 2002: Voortzetting en voltooiing van de cycluswerken Usque ad
          finem die in 1977 werd begonnen.
        </li>
        <li>
          1990: Oordeelt de periode der Britse sportwagens afgesloten en besluit
          niet langer auto te rijden en Ninove nog slechts te verlaten in geval
          van overmacht. Monomaan op het schrijven gericht bestaan.
        </li>
        <li>
          2001 (voorjaar): Tweede, zeer complexe, meervoudige hartoperatie
          uitgevoerd door Dr. R. De Geest van het cardio-chirurgenteam van het
          OLV Ziekenhuis te Aalst.
        </li>
        <li>
          2001 (herfst): Andermaal chirurgische ingreep wegens eventratie.
        </li>
        <li>
          2002: Einde van Usque ad finem. Voorbereiding van de publicatie der
          verzamelde gedichten. Start van de Post Opera Supplementa.
        </li>
        <li>
          2004: Publicatie van vijftig jaar gedichten: De gedichten 1953 - 2002.
        </li>
        <li>
          Vanaf 1986 toenemend immobilisme wegens wervelkolomaandoening en
          rugproblemen. Blijft dagelijks (tot 2001) een uur op de punchball
          oefenen.
        </li>
        <li>
          2003 - 2009: Schrijft 20 delen Post Opera Supplementa en 10 delen
          Annex Documenta.
        </li>
      </ul>
    </div>

    <div className={styles.pro}>
      <h3 className={styles.header}>Professionele activiteiten</h3>

      <ul className={styles.list}>
        <li>1954 - 1955: Medewerker van Tijd en Mens.</li>
        <li>1954 - 1965: Vast medewerker van kunstpagina Vooruit.</li>
        <li>1959 - 1963: Redacteur van Gard Sivik.</li>
        <li>1961: Jazzrecensent van de Nederlandse krant De Haagse Post.</li>
        <li>
          1963 - 1966: Jazzkroniekschrijver voor het Nederlandse blad Kunst van
          Nu.
        </li>
        <li>
          1964 - 1968: Medeoprichter en (kortstondig) redacteur van het
          tijdschrift Komma.
        </li>
        <li>1966 - 1974: Vast jazzkroniekschrijver in het weekblad De Bond.</li>
        <li>1967 - 1974: Jazzbijdragen in het culturele weekblad K&C.</li>
        <li>
          1970 - 1974: Presentator - programmator verbonden aan de jazzsectie
          van BRT1 & BRT3.
        </li>
        <li>1981 - 1982: Andermaal in dezelfde functie bij BRT3.</li>
        <li>
          Vanaf de jaren 70 lid van de Werkgroep Improviserende Musici (WIM),
          waarvoor hij de theoretische verdediging, ingediend bij het Ministerie
          van Cultuur, schrijft.
        </li>
        <li>
          1967 - 1982: Leader van het door hem gevormde WR Jazz Lab en WR Jazz
          Quartet.
        </li>
        <li>
          Is in de jaren 60 en 70 lid van de Maatschappij der Nederlandse
          Letterkunde te Leiden die hij verlaat omdat hij haar activiteiten te
          stereotiep dor oordeelt.
        </li>
      </ul>
    </div>

    <div className={styles.prize}>
      <h3 className={styles.header}>Prijzen</h3>

      <ul className={styles.list}>
        <li>1962: Leo J. Krynprijs voor Het goudvisje.</li>
        <li>1963: Dirk Martensprijs voor de cyclus Kalkvrouw. Visgraatman.</li>
        <li>
          1965: Ark-Prijs van het Vrije Woord voor Blues voor glazen blazers
          (geweigerd door de auteur, opgedrongen door het Ark-comité).
        </li>
        <li>
          1966: Essayprijs Referendum van de Vlaamse Letterkunde voor Literair
          labo.
        </li>
        <li>
          1971: Bijzondere prijs van de Jan-Campertstichting voor de essaybundel
          De ringen van de Kinkhoorn.
        </li>
        <li>1975: Rode Vossen - prijs Malperthuis.</li>
        <li>
          1976: August Beernaertprijs der Koninklijke Academie voor Nederlandse
          Taal- en Letterkunde voor het proza Gnomon.
        </li>
        <li>
          1980: Arthur A. Cornetteprijs der Koninklijke Academie voor
          Nederlandse Taal- en Letterkunde voor de essaybundel Lithopedia.
        </li>
        <li>
          1982: Driejaarlijkse Staatsprijs voor Kritiek en Essay voor Glazuur op
          niets.
        </li>
        <li>2005: Plantin-Moretus-prijs voor De gedichten 1953 - 2002.</li>
        <li>
          2009: Prijs voor Letterkunde van de Vlaamse Provincies voor Cadenas.
        </li>
        <li>2009: Plantin-Moretus-prijs voor Betoverende Katastrofe.</li>
        <li>
          2010: Plantin-Moretus-prijs voor Practicum of het steriele schrijven.
        </li>
      </ul>
    </div>
    <h5>Noot: De gegevens werden bezorgd door de auteur zelf. </h5>
  </main>
);

export default Bio;
