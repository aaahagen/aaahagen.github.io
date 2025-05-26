// Eksempelhistorier
// Merk: 'content' er nå en kortere teaser. Fullt innhold vil være på den separate HTML-siden.
// Vi legger til 'htmlFilename' for å lenke til riktig side.
const stories = [
    {
        id: 1,
        title: "Den Lille Nysgjerrige Kaninen",
        teaser: "Det var en gang en liten kanin som het Hoppsi. Hoppsi var veldig nysgjerrig og elsket å utforske skogen...",
        fullContent: "Det var en gang en liten kanin som het Hoppsi. Hoppsi var veldig nysgjerrig og elsket å utforske skogen. En dag fant Hoppsi en mystisk, glitrende sti som ledet dypt inn mellom trærne. 'Hvor fører denne stien?' tenkte Hoppsi og bestemte seg for å følge den. Etter en liten stund kom Hoppsi til en lysning hvor de søteste små blomstene danset i vinden og sang en stille sang. Hoppsi ble så glad og begynte å danse med dem til solen gikk ned. Trøtt og fornøyd hoppet Hoppsi hjem, drømmende om dansende blomster.",
        age: "0-3",
        gender: "Nøytral",
        image: "https://placehold.co/400x300/A8D5BA/333333?text=Kanin",
        htmlFilename: "historie1.html" // Filnavn for den fulle historien
    },
    {
        id: 2,
        title: "Prinsesse Liljas Stjerneeventyr",
        teaser: "Prinsesse Lilja elsket stjernene mer enn noe annet. Hver kveld så hun opp på himmelen...",
        fullContent: "Prinsesse Lilja elsket stjernene mer enn noe annet. Hver kveld så hun opp på himmelen og ønsket at hun kunne besøke dem. En natt kom en vennlig månestråle ned til vinduet hennes. 'Klatre på,' hvisket månestrålen. Lilja klatret opp og suste av sted, høyere og høyere, helt til hun kunne danse på Melkeveien og hilse på blinkende stjerner. Hun lærte at selv de minste stjernene har et stort lys. Da morgenen kom, var hun trygt tilbake i sengen sin, med stjernestøv i håret og et smil om munnen.",
        age: "4-6",
        gender: "Jente",
        image: "https://placehold.co/400x300/F9C2C2/333333?text=Prinsesse",
        htmlFilename: "historie2.html"
    },
    {
        id: 3,
        title: "Super-Leos Hemmelige Oppdrag",
        teaser: "Leo var en helt vanlig gutt om dagen, men om natten ble han Super-Leo! En kveld fikk han et viktig oppdrag...",
        fullContent: "Leo var en helt vanlig gutt om dagen, men om natten ble han Super-Leo! En kveld fikk han et viktig oppdrag: Noen hadde stjålet alle byens kosedyr! Super-Leo fløy over hustakene, brukte superhørselen sin og fant tyven – en rampete rev som bare ville ha noen å klemme. Super-Leo forklarte at det var bedre å spørre, og sammen leverte de tilbake alle kosedyrene. Byens barn sov ekstra godt den natten, takket være Super-Leo.",
        age: "4-6",
        gender: "Gutt",
        image: "https://placehold.co/400x300/B2EBF2/333333?text=Super-Leo",
        htmlFilename: "historie3.html"
    },
    {
        id: 4,
        title: "Skattekartet til Kaptein Sølvtann",
        teaser: "Mia og Noah fant et gammelt skattekart på loftet. Det hadde tilhørt den beryktede Kaptein Sølvtann!...",
        fullContent: "Mia og Noah fant et gammelt skattekart på loftet. Det hadde tilhørt den beryktede Kaptein Sølvtann! Kartet viste en øy formet som en sovende drage. Med hjerte i halsen og eventyrlyst i blikket, bygget de en flåte og seilte av gårde (i badekaret). De kjempet mot farlige badeender og unngikk såpe-monstre. Til slutt fant de 'skatten': en kiste full av sjokolademynter som bestemor hadde gjemt. Det var den beste skattejakten noensinne!",
        age: "7-9",
        gender: "Nøytral",
        image: "https://placehold.co/400x300/D4E157/333333?text=Skattekart",
        htmlFilename: "historie4.html"
    },
    {
        id: 5,
        title: "Den Kloke Ugla og Månesteinen",
        teaser: "Langt inne i den eldgamle skogen bodde en klok ugle ved navn Professor Hoot. En natt falt en glødende stein ned fra himmelen...",
        fullContent: "Langt inne i den eldgamle skogen bodde en klok ugle ved navn Professor Hoot. En natt falt en glødende stein ned fra himmelen – en månestein! Steinen gjorde alle dyrene i skogen urolige med sitt merkelige lys. Professor Hoot studerte steinen og oppdaget at den savnet måneskinnet. Sammen med de andre dyrene bygget de et høyt tårn slik at steinen kunne bade i månelyset. Straks steinen ble truffet av månens milde stråler, sluknet det intense lyset, og freden senket seg over skogen igjen. Alle lærte at selv det ukjente kan forstås med klokskap og samarbeid.",
        age: "7-9",
        gender: "Nøytral",
        image: "https://placehold.co/400x300/C5CAE9/333333?text=Klok+Ugle",
        htmlFilename: "historie5.html"
    },
    {
        id: 6,
        title: "Roboten Rasks Reise",
        teaser: "Roboten Rask var bygget for fart. En dag bestemte han seg for å se verden. Han suste gjennom travle byer...",
        fullContent: "Roboten Rask var bygget for fart. En dag bestemte han seg for å se verden. Han suste gjennom travle byer, over høye fjell og dype daler. Underveis møtte han mange nye venner: en skilpadde som lærte ham å ta det med ro, og en ørn som viste ham verden fra oven. Rask lærte at selv om han var rask, var det viktigste å nyte reisen og vennskapene han fant.",
        age: "4-6",
        gender: "Gutt",
        image: "https://placehold.co/400x300/FFD180/333333?text=Robot",
        htmlFilename: "historie6.html"
    }
    // Du kan legge til historier for 10-13 år her, for eksempel:
    // {
    //     id: 7,
    //     title: "Mysteriet i den Forlatte Stasjonen",
    //     teaser: "En gruppe venner på 12 år snubler over en nedlagt togstasjon som skjuler en gammel hemmelighet...",
    //     fullContent: "Full historie her...",
    //     age: "10-13",
    //     gender: "Nøytral",
    //     image: "https://placehold.co/400x300/A1887F/333333?text=Mysterium",
    //     htmlFilename: "historie7.html"
    // }
];

const storyContainer = document.getElementById('story-container');
const ageFilter = document.getElementById('age-filter');
const genderFilter = document.getElementById('gender-filter');
const noStoriesMessage = document.getElementById('no-stories-message');

// Funksjon for å vise historier på forsiden
function displayStories(filteredStories) {
    storyContainer.innerHTML = ''; // Tømmer containeren
    if (filteredStories.length === 0) {
        noStoriesMessage.classList.remove('hidden');
    } else {
        noStoriesMessage.classList.add('hidden');
        filteredStories.forEach(story => {
            const storyElement = `
                <div class="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col">
                    <img src="${story.image}" alt="Illustrasjon for ${story.title}" class="w-full h-56 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/400x300/cccccc/969696?text=Bilde+mangler';">
                    <div class="p-5 flex flex-col flex-grow">
                        <h3 class="text-2xl font-semibold text-indigo-600 mb-2">${story.title}</h3>
                        <p class="text-gray-700 text-sm leading-relaxed story-content-scrollable flex-grow mb-3">${story.teaser}</p>
                        <div class="mt-auto"> {/* Sørger for at knappen og info er nederst */}
                            <a href="historier/${story.htmlFilename}" class="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-150 ease-in-out mb-3 w-full text-center">
                                Les mer
                            </a>
                            <div class="pt-3 border-t border-gray-200">
                                <span class="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">Alder: ${story.age} år</span>
                                <span class="inline-block bg-pink-100 text-pink-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">Kjønn: ${story.gender}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            storyContainer.innerHTML += storyElement;
        });
    }
}

// Funksjon for å filtrere historier
function filterStories() {
    const selectedAge = ageFilter.value;
    const selectedGender = genderFilter.value;

    const filtered = stories.filter(story => {
        const ageMatch = selectedAge === 'alle' || story.age === selectedAge;
        const genderMatch = selectedGender === 'alle' || story.gender === selectedGender;
        return ageMatch && genderMatch;
    });

    displayStories(filtered);
}

// Event listeners for filterendringer (kun hvis filter-elementene finnes på siden)
if (ageFilter && genderFilter) {
    ageFilter.addEventListener('change', filterStories);
    genderFilter.addEventListener('change', filterStories);
}

// Viser alle historier ved første lasting (kun hvis storyContainer finnes)
document.addEventListener('DOMContentLoaded', () => {
    if (storyContainer) {
        displayStories(stories);
    }

    // Kode spesifikt for individuelle historiesider
    // Dette henter storyId fra URL-en hvis siden er en historieside
    // Eksempel: historie.html?storyId=1
    const storyPageContentDiv = document.getElementById('story-page-content');
    if (storyPageContentDiv) {
        const params = new URLSearchParams(window.location.search);
        const storyId = params.get('storyId');
        if (storyId) {
            const story = stories.find(s => s.id === parseInt(storyId));
            if (story) {
                document.title = story.title + " | Godnatthistorier"; // Oppdaterer sidetittel
                const storyHtml = `
                    <h1>${story.title}</h1>
                    <img src="${story.image}" alt="Illustrasjon for ${story.title}" class="story-image-full" onerror="this.onerror=null;this.src='https://placehold.co/800x400/cccccc/969696?text=Bilde+mangler';">
                    <div class="story-full-content">
                        ${story.fullContent.replace(/\n/g, '<br>')}
                    </div>
                    <a href="../index.html" class="back-link">Tilbake til oversikten</a>
                `;
                storyPageContentDiv.innerHTML = storyHtml;
            } else {
                storyPageContentDiv.innerHTML = "<p>Fant ikke historien. <a href='../index.html' class='back-link'>Tilbake til oversikten</a></p>";
            }
        }
    }
});

