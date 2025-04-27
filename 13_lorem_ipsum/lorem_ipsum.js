let texts = [
    `
    <b>My Wonderful Family </b> <br><br>
    I live in a house near the mountains. I have two brothers and one sister, and I was born last. My father teaches mathematics, and my mother is a nurse at a big hospital. My brothers are very smart and work hard in school. My sister is a nervous girl, but she is very kind. My grandmother also lives with us. She came from Italy when I was two years old. She has grown old, but she is still very strong. She cooks the best food!<br><br>`,
    `My family is very important to me. We do lots of things together. My brothers and I like to go on long walks in the mountains. My sister likes to cook with my grandmother. On the weekends we all play board games together. We laugh and always have a good time. I love my family very much.<br><br>`,
    `<b>My Day</b> <br><br>
    First, I wake up. Then, I get dressed. I walk to school. I do not ride a bike. I do not ride the bus. I like to go to school. It rains. I do not like rain. I eat lunch. I eat a sandwich and an apple.<br><br>`,
    `I play outside. I like to play. I read a book. I like to read books. I walk home. I do not like walking home. My mother cooks soup for dinner. The soup is hot. Then, I go to bed. I do not like to go to bed. <br><br>`,

    `<b>My name is John</b> <br><br>
    Hi! Nice to meet you! My name is John Smith. I am 19 and a student in college. I go to college in New York. My favorite courses are Geometry, French, and History. English is my hardest course. My professors are very friendly and smart. It's my second year in college now. I love it!<br><br>`,
    `I live in a big house on Ivy Street. It's near the college campus. I share the house with three other students. Their names are Bill, Tony, and Paul. We help each other with homework. On the weekend, we play football together.<br><br>`,
    `I have a younger brother. He just started high school. He is 14 and lives with my parents. They live on Mulberry Street in Boston. Sometimes they visit me in New York. I am happy when they visit. My Mom always brings me sweets and candy when they come. I really miss them, too!<br><br>`,

    `<b>Our Vacation</b> <br><br>
    Every year we go to Florida. We like to go to the beach.<br><br>`,
    `My favorite beach is called Emerson Beach. It is very long, with soft sand and palm trees. It is very beautiful. I like to make sandcastles and watch the sailboats go by. Sometimes there are dolphins and whales in the water!<br><br>`,
    `Every morning we look for shells in the sand. I found fifteen big shells last year. I put them in a special place in my room. This year I want to learn to surf. It is hard to surf, but so much fun! My sister is a good surfer. She says that she can teach me. I hope I can do it!<br><br>`
]

const global = new Global();

let btn = document.getElementById('btn');
let text = document.getElementById('lorem-generate');
let number = document.getElementById('paragraphs-number');

btn.addEventListener('click', (event) => {
    let numberInput = parseInt(number.value);
    // let r = global.numRamdom(texts.length + 1);
    if (isNaN(numberInput) || numberInput === 0) {
        text.innerHTML = `<p class=" text-center c-red"> Plase enter a number greater than zero </p>`;
        event.preventDefault();
    } else if (numberInput < 0){
        text.innerHTML = `<p class=" text-center c-red">Plase enter a number positive</p>`;
        event.preventDefault();
    } else if(numberInput > texts.length + 1) {
        text.innerHTML = `<p class=" text-center c-red">Sorry, you've reached your limit.</p>`;
        event.preventDefault();
    } else {
        let cutText = texts.slice(0, numberInput);
        text.innerHTML = `<p class="w-80 text-justify">${cutText}</p>`;
    }
})