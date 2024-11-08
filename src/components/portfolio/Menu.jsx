import Work1 from "../../assets/work-1.svg";
import Work2 from "../../assets/work-2.svg";
import Work3 from "../../assets/work-3.svg";
import Work4 from "../../assets/work-4.svg";
import Work5 from "../../assets/work-5.svg";
import Work6 from "../../assets/work-6.svg";

/* Project pictures */
import beleaf1 from "../../assets/Project/brainhack-codexp_teamphoto.jpg";
import beleaf2 from "../../assets/Project/beleaf-prototype-02.mp4";
import tfscale1 from "../../assets/Project/tfscale_drone.jpg";
import tfscale2 from "../../assets/Project/tfscale_industryvisit1.jpg";
import eggpainting1 from "../../assets/Project/art-eggpainting-01.png";
import c33701 from "../../assets/Project/c337escaperoom01.mp4";

import arnamecard from "../../assets/Project/ar-name-card.mp4";

const Menu = [
    {
        id: 1,
        image: Work1,
        title: "VR Escape Room",
        category: "Programming",
        desc: "Inspired by the iconic openings of beloved RPGs, particularly The Legend of Zelda: Breath of the Wild, my VR escape room transports players into a mystical world where they awaken in an ancient sanctuary. To reach the open world beyond, players must solve intricate musical puzzles, navigate teleportation pads, and master potion mixing, mirroring the classic RPG challenge of preparation before exploration. Developed in Unity, I used complex logic for scenario-based color changes, object spawning, and dynamic transitions. This project was both intensive and deeply rewarding, blending my love for RPG storytelling with the challenge of immersive puzzle design.",
        images: [c33701],
    },
    {
        id: 2,
        image: Work2,
        title: "BeLeaf Mobile App",
        category: "Programming",
        desc: "Team BinaryBlossoms went to participate in DSTA's BrainHack 2024 CODE_EXP, and are proud to announce that we have made finals with our prototype! <br />BeLeaf is a mobile application utilising Amazon Web Service's Rekognition to help differentiate between real and fake plants. It is designed to help combat the issue of contaminated recyclables. \nUsers will be able to take a picture of the object they want to recycle, and the app will be able to differentiate recyclables from non-recyclables, additionally, it can also recommend users on what to do with non-recyclables - like dropping off a toy ball at an orphanage or thrift store. ",
        images: [beleaf1, beleaf2, tfscale1, tfscale2],
    },
    {
        id: 3,
        image: Work3,
        title: "Creative",
        category: "Branding",
        desc: "This AR name card reflects my passion for design and animation, blending a Japanese cartoon-style illustration with a custom pixel art logo I designed myself. Built in Unity, the card comes to life with dynamic AR effects, offering a playful introduction to my work and personality. I used assets from the Unity store for 3D models, integrating them seamlessly to create an engaging experience that’s both professional and fun.",
        images: [arnamecard],
    },
    {
        id: 4,
        image: Work4,
        title: "Bird Repository Website",
        category: "Programming",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus vitae justo",
        images: [],
    },
    {
        id: 5,
        image: Work5,
        title: "Sunny-Side-Up Painting",
        category: "Art",
        desc: "Yummy! Except, I dislike eating eggs. This did not stop my art teacher from making it be my oil painting subject! Proudest moment would be when the principal asked if she could hang it in her office, but I declined as I wanted to bring it back to show my grandfather <3",
        images: [eggpainting1],
    },
    {
        id: 6,
        image: Work6,
        title: "Game Store App Concept",
        category: "Art",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus vitae justo",
        images: [],
    },
];

export default Menu;