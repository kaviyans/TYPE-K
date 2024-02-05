const paragraphs =  [
    "the sun dipped below the horizon painting the sky with hues of pink orange and purple creating a breathtaking canvas that captivated onlookers",
    "amidst the bustling cityscape people hurried along the sidewalks their faces lost in the anonymity of urban life each with a unique story and destination",
    "a solitary oak tree stood proudly in the expansive meadow its branches stretching toward the heavens providing a picturesque silhouette against the setting sun",
    "laughter filled the air as a group of friends gathered around a crackling bonfire sharing tales of adventures and weaving memories that would endure through time",
    "gentle raindrops pattered on the window composing a soothing melody that echoed through the quiet room inviting a sense of tranquility and introspection",
    "the rich aroma of freshly ground coffee beans enveloped the room awakening the senses and heralding the beginning of a new day filled with possibilities",
    "majestic mountains loomed in the distance their rugged peaks adorned with a pristine layer of snow casting a sense of awe over the surrounding landscape",
    "a curious tabby cat explored the flourishing garden its playful antics and graceful movements a testament to the wonders of the natural world on a lazy afternoon",
    "crimson and gold leaves descended from the autumn trees carpeting the earth in a vibrant mosaic signaling nature's transition into a season of reflection",
    "lush greenery the symphony of crickets and the scent of blooming flowers the garden was a haven for peaceful contemplation and connection with nature",
    "a rusty swing swayed gently under the ancient oak tree its creaks harmonizing with the melodies of the wind creating a nostalgic soundtrack for the surroundings",
    "children laughed as they chased vibrant butterflies through the meadow their innocent joy echoing the timeless dance between youth and the wonders of the world",
    "the scent of pine needles filled the air as a forest path led adventurers deeper into the woodland a sanctuary where the whispers of trees held ancient secrets",
    "a bubbling brook meandered through the moss-covered rocks its clear waters reflecting the dappled sunlight like liquid diamonds in a serene natural gallery",
    "the canvas of the night sky became a celestial masterpiece as countless stars twinkled and planets silently traversed the vastness of the cosmic expanse",
    "street vendors hawked exotic spices and colorful fabrics in a lively bazaar the diverse tapestry of cultures intermingling in a kaleidoscope of sensory experiences",
    "an old windmill stood as a stoic sentinel on the hill its blades turning gracefully in the breeze a silent witness to the passage of countless seasons",
    "a gathering of fireflies lit up the moonless night their bioluminescent glow creating a mesmerizing display akin to a living constellation on the forest floor",
    "a weathered bookshelf in a dimly lit room held the wisdom of ages written by hands long gone the stories and knowledge waiting to be rediscovered",
    "rows of sunflowers stretched towards the sun their golden faces following the journey of daylight in a natural choreography that mirrored the dance of time",
    "time seemed to stand still in a historic town square cobblestone streets leading to quaint shops and cafes where locals and tourists alike shared moments of connection",
    "the distant howl of a wolf carried through the mountainous terrain a reminder of the untamed wilderness and the creatures that thrived in its rugged embrace",
    "a lone sailboat navigated the open sea its sails billowing in the wind as it charted a course through the boundless blue horizon",
    "a makeshift tent city emerged at a music festival vibrant colors and energetic rhythms converging in a temporary utopia of shared love and camaraderie",
    "a cascading waterfall plunged into a crystal-clear pool its rhythmic roar blending with the symphony of birds and insects in a harmonious celebration of nature",
    "a dusty attic concealed forgotten relics from bygone eras a time capsule of memories waiting to be unearthed and relived by curious hands",
    "the rhythmic clacking of a typewriter echoed in a dimly lit room a writer's sanctuary where ideas flowed freely onto the pages of a bound notebook",
    "a bustling harbor buzzed with activity as fishermen hauled in their catch seagulls circling overhead in hopes of a share in the maritime bounty",
    "a coastal trail snaked along rugged cliffs providing breathtaking views of the ocean below the salty breeze carrying tales of distant lands and seafaring adventures",
    "a lone lighthouse stood tall against the storm its beacon slicing through the darkness to guide ships safely through treacherous waters",
    "an artist's studio was an explosion of colors and creativity splattered canvases and sculpted clay telling the stories of inspiration and the artistic process",
    "the rhythmic thud of hooves echoed through an open prairie as a herd of wild horses galloped freely under the expansive sky",
    "a bustling market square teemed with vendors selling fresh produce and handcrafted wares the vibrant energy of commerce interweaving with the chatter of bargaining",
    "the distant rumble of thunder heralded an approaching storm dark clouds swirling ominously as nature prepared to unleash its fury upon the landscape",
    "an ancient castle perched on a hilltop overlooked a serene valley its stone walls bearing witness to centuries of history and the passage of noble dynasties",
    "a quiet pond mirrored the surrounding foliage its still waters disturbed only by the occasional ripple as aquatic life moved beneath the reflective surface",
    "a train station buzzed with anticipation as passengers awaited the arrival of locomotives and the promise of journeys to distant destinations",
    "a bustling city market unfolded with vibrant street vendors selling exotic spices and handcrafted textiles creating a mosaic of colors and scents",
    "a lone kayaker paddled through calm waters surrounded by towering cliffs the rhythmic strokes echoing in the peaceful solitude of the natural canyon",
    "an old oak tree provided shade for a worn park bench its gnarled branches a testament to the passage of time and the stories witnessed beneath its branches",
    "the scent of freshly baked bread wafted through a charming village alleyway inviting passersby to a quaint bakery where culinary delights awaited discovery",
    "a vibrant mural adorned the side of a building telling a visual story of the community's history and the cultural diversity that shaped its identity",
    "a lone hiker trekked up a mountain trail the ascent rewarded with panoramic views of the valleys below and the feeling of accomplishment at the summit",
    "a quaint cottage nestled in a meadow was surrounded by a blooming garden its picket fence a charming barrier between the domestic haven and the untamed wild",
    "a makeshift campfire crackled under the starlit sky its warmth inviting storytellers to share tales of adventure and imagination in the tranquil night",
    "a narrow alleyway in an ancient city whispered with echoes of centuries past its cobblestone path leading to hidden courtyards and secrets waiting to be discovered",
    "a farmer's market bustled with activity as patrons explored stalls of fresh produce and artisanal crafts the lively atmosphere a celebration of local community and commerce",
    "a bicycle leaned against a sun-soaked wall in a coastal town the worn tires and rusted frame telling a story of countless rides along scenic seaside paths",
    "a sunflower field stretched for acres each bloom following the sun's journey across the sky in a collective display of nature's unwavering devotion to light",
    "the rhythmic sound of a distant waterfall provided a serene soundtrack for a forest glade its tranquil setting an invitation to pause and immerse in the natural beauty",
    "a forgotten attic housed relics of a bygone era dusty records vintage clothing and aged photographs preserving the memories of lives lived in a different time",
    "a lively carnival unfolded in a town square the whirl of rides and the aroma of cotton candy filling the air with an infectious sense of joy and nostalgia",
];


const typingText = document.querySelector(".data-word p")
const inpField = document.querySelector(".typing-space .text-area")
const tryAgainBtn = document.querySelector(".button button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")
const tab = document.querySelector("body")
const timevalue=document.querySelector(".time span b")

inpField.focus()
t=[10,20,30]
let maxTime=parseInt(localStorage.getItem('time'))||10;
timevalue.innerText=maxTime
console.log(maxTime)

function changetime(i){
    localStorage.setItem('time',JSON.stringify(t[i]))
    maxTime=t[i]
    timevalue.innerText = parseInt(localStorage.getItem('time'))||t[i]
    resetGame()
}

let timer;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

tab.addEventListener("keydown",(e)=>{
    if (e.key === 'Tab'){
        resetGame()
    }
    inpField.focus()
})


function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);