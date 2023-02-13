const omikuji = [
    {
        luck: "very good",
        text: "You have great luck this year, your love will come finding you"
    },
    {
        luck: "good",
        text: "luck will follow you, take the chance for new opportunities"
    },
    {
        luck: "average",
        text: "you will have average luck, do something with your homies"
    },
    {
        luck: "below average",
        text: "your luck will be below average, watch it!"
    },
    {
        luck: "bad",
        text: "your luck will be bad, watch out for pidgeons above you!"
    },
    {
        luck: "very bad",
        text: "I don't want to trade with you at this point, good luck! (Ah you don't have it!)"
    },
    {
        luck: "abysmal",
        text: "...people grow with their challenges, if that is a consolation for you"
    },
    {
        luck: "hellish",
        text: "You picked the wrong difficulty setting my mate! Don't put those around you in danger too."
    },
]

const draw = () => {
    const number = Math.floor(Math.random() * 8);
    getOmikuji(number);
}

const getOmikuji = (number) => {
    console.log("\nYour luck is: " + omikuji[number].luck +"\n\n" + omikuji[number].text);
}

draw();