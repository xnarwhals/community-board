import OW_Logo from "../assets/overwatch.png";
import TheWitness_Logo from "../assets/witness.png";
import Bloons_Logo from "../assets/bloons.png";
import Cyberpunk_Logo from "../assets/cyberpunk.png";
import Pokemon_Logo from "../assets/pokemon.png";
import Minecraft_Logo from "../assets/minecraft.png";
import Fallout_Logo from "../assets/fallout.png";
import Mario_Logo from "../assets/mario.png";
import Portal_Logo from "../assets/portal.png";
import Pikmin_Logo from "../assets/pikmin.png";

// Stretch Goals Below
// Add properties: ESRB rating, platform, release date, studio, has remake?, and metacritic score
const CardData = [
    {
        id: 1,
        gameName: "Overwatch",
        genre: "FPS",
        link: "https://overwatch.blizzard.com/en-us/",
        image: OW_Logo,
        rating: "T",
        platform: "PC, Console",
        releaseDate: "May 24, 2016",
        studio: "Blizzard Entertainment",
        hasRemake: false,
        metacriticScore: 91  
    },
    {
        id: 2,
        gameName: "The Witness",
        genre: "Puzzle",
        link: "https://store.steampowered.com/app/210970/The_Witness/",
        image: TheWitness_Logo,
        rating: "E",
        platform: "PC, Console, IOS",
        releaseDate: "January 26, 2016",
        studio: "Thekla, Inc.",
        hasRemake: false,
        metacriticScore: 87
    },
    {
        id: 3,
        gameName: "Bloons TD 6",
        genre: "Tower Defense",
        link: "https://store.steampowered.com/app/960090/Bloons_TD_6/",
        image: Bloons_Logo,
        rating: "E",
        platform: "PC, Mobile",
        releaseDate: "December 17, 2018",
        studio: "Ninja Kiwi",
        hasRemake: false,
        metacriticScore: "TBD"
    },
    {
        id: 4,
        gameName: "Cyberpunk 2077",
        genre: "RPG",
        link: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
        image: Cyberpunk_Logo,
        rating: "M",
        platform: "PC, Console",
        releaseDate: "December 10, 2020",
        studio: "CD Projekt Red",
        hasRemake: false,
        metacriticScore: 86
    },
    {
        id: 5,
        gameName: "Pokemon Emerald",
        genre: "RPG",
        link: "https://www.pokemon.com/us/pokemon-video-games/pokemon-emerald-version",
        image: Pokemon_Logo,
        rating: "E",
        platform: "Gameboy Advance",
        releaseDate: "September 16, 2004",
        studio: "Game Freak",
        hasRemake: true,
        metacriticScore: 76
    },
    {
        id: 6,
        gameName: "Minecraft",
        genre: "Sandbox",
        link: "https://www.minecraft.net/en-us/about-minecraft",
        image: Minecraft_Logo,
        rating: "E10+",
        platform: "PC, Console, Mobile",
        releaseDate: "November 18, 2011",
        studio: "Mojang Studios",
        hasRemake: false,
        metacriticScore: 93
    },
    {
        id: 7,
        gameName: "Fallout 4",
        genre: "RPG",
        link: "https://store.steampowered.com/app/377160/Fallout_4/",
        image: Fallout_Logo,
        rating: "M",
        platform: "PC, Console",
        releaseDate: "November 10, 2015",
        studio: "Bethesda Game Studios",
        hasRemake: false,
        metacriticScore: 87
    },
    {
        id: 8,
        gameName: "Paper Mario: The Thousand-Year Door",
        genre: "RPG",
        link: "https://www.nintendo.com/us/store/products/paper-mario-the-thousand-year-door-switch/?srsltid=AfmBOorgKFKrJrfaTCiIuvHmSmBmsELL9KtbL18YY0Mhe9Ux2eFi5KhK",
        image: Mario_Logo,
        rating: "E",
        platform: "Nintendo GameCube, Nintendo Switch",
        releaseDate: "October 11, 2004",
        studio: "Intelligent Systems",
        hasRemake: true,
        metacriticScore: 87
    },
    {
        id: 9,
        gameName: "Portal 2",
        genre: "Puzzle",
        link: "https://store.steampowered.com/app/620/Portal_2/",
        image: Portal_Logo,
        rating: "E10+",
        platform: "PC, Console",
        releaseDate: "April 18, 2011",
        studio: "Valve Corporation",
        hasRemake: false,
        metacriticScore: 95
    },
    {
        id: 10,
        gameName: "Pikmin 2",
        genre: "Puzzle",
        link: "https://pikmin.nintendo.com",
        image: Pikmin_Logo,
        rating: "E",
        platform: "Nintendo GameCube, Nintendo Wii",
        releaseDate: "August 30, 2004",
        studio: "Nintendo",
        hasRemake: true,
        metacriticScore: 87
    }
]

export default CardData;