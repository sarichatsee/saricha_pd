import Work1 from "../../assets/work-1.svg";
import Work2 from "../../assets/work-2.svg";
import Work3 from "../../assets/work-3.svg";
import Work4 from "../../assets/work-4.svg";
import Work5 from "../../assets/work-5.svg";
import Work6 from "../../assets/work-6.svg";
import namecard1 from "../../assets/Project/namecard-sketch1.png";
import namecard2 from "../../assets/Project/namecard-sketch2.png";
import namecard3 from "../../assets/Project/namecard-sketch3.png";
import namecard4 from "../../assets/Project/front namecard print.png";
import Art1 from "../../assets/Project/G107-SDL-Wk10-Wk11.jpg";
import Art2 from "../../assets/Project/pfp.png";

/* Project pictures */
import beleaf1 from "../../assets/Project/brainhack-codexp_teamphoto.jpg";
import beleaf2 from "../../assets/Project/beleaf-prototype-02.mp4";
import tfscale1 from "../../assets/Project/tfscale_drone.jpg";
import tfscale2 from "../../assets/Project/tfscale_industryvisit1.jpg";
import eggpainting1 from "../../assets/Project/art-eggpainting-01.png";
import c33701 from "../../assets/Project/c337escaperoom01.mp4";
import arnamecard from "../../assets/Project/ar-name-card.mp4";
import pizzaapp from "../../assets/Project/pizzaapp.png";
import travelapp from "../../assets/Project/travelapp.png";
 
const Menu = [
    {
        id: 1,
        image: Work1,
        title: "VR Escape Room",
        category: "Programming",
        desc: "Inspired by the iconic openings of beloved RPGs, particularly The Legend of Zelda: Breath of the Wild, my VR escape room transports players into a mystical world where they awaken in an ancient sanctuary. To reach the open world beyond, players must solve intricate puzzles that include musical sequences, teleportation pad navigation, and potion mixing. This mirrors the classic RPG element of preparation and problem-solving before stepping into a vast, open world. \n\nDeveloped in Unity, the project challenged me to create immersive and interactive gameplay. I implemented complex logic systems for scenario-based color changes, object spawning, and smooth dynamic transitions between environments. This project allowed me to blend storytelling, puzzle design, and programming, resulting in a truly rewarding experience that captures the spirit of exploration and creativity.",
        images: [c33701],
    },
    {
        id: 2,
        image: Work2,
        title: "BeLeaf Mobile App",
        category: "Programming",
        desc: "As part of Team BinaryBlossoms, I had the privilege of competing in DSTA's BrainHack 2024 CODE_EXP, where we proudly made it to the finals with our innovative app, BeLeaf. The app is designed to address the issue of contaminated recyclables using Amazon Web Service's Rekognition. With BeLeaf, users can take a photo of an item to determine if it is recyclable or non-recyclable. \n\nBeyond identification, BeLeaf also provides actionable suggestions for non-recyclable items, such as donating toys or clothes to orphanages or thrift stores. This feature ensures that users can make environmentally conscious decisions even when traditional recycling isn't an option. This project not only honed my programming and teamwork skills but also highlighted the role technology can play in promoting sustainability.",
        images: [beleaf1, beleaf2],
    },
    {
        id: 3,
        image: Work3,
        title: "AR Name Card",
        category: "Branding",
        desc: "My AR name card project combines my love for design, animation, and technology. Using Unity, I created an interactive business card that brings my brand to life through augmented reality effects. The design reflects a playful yet professional style, featuring a Japanese cartoon-inspired illustration and a custom pixel art logo I developed myself. \n\nTo enhance the user experience, I incorporated assets from the Unity store, carefully integrating them with my original art to create a cohesive visual narrative. This AR name card is not just a creative project—it serves as a unique and memorable introduction to my skills and personality.",
        images: [arnamecard],
    },
    {
        id: 4,
        image: Work4,
        title: "Name Card Design",
        category: "Branding",
        desc: "After months of coding and programming, I decided to shift gears and revisit my artistic roots by designing a personal name card. Using Clip Studio Paint, I explored different concepts, creating three initial sketches before finalizing the design that best represented me. \n\nThis name card showcases not only my artistic aptitude but also my attention to detail and ability to create visually compelling designs. It was a refreshing experience that reminded me of the importance of balancing technical and creative pursuits.",
        images: [namecard4, namecard1, namecard2, namecard3],
    },
    {
        id: 5,
        image: Work5,
        title: "Sunny-Side-Up Painting",
        category: "Art",
        desc: "Eggs may not be my favorite food, but they became the unlikely subject of one of my proudest artistic achievements. My art teacher challenged me to create an oil painting of a sunny-side-up egg, and the result was so well-received that the principal requested to display it in her office. While I was flattered, I chose to bring it home to share with my grandfather, who inspired much of my creativity. \n\nThis project taught me the value of embracing challenges, even when they're outside of my comfort zone, and the power of art to connect with others on a personal level.",
        images: [eggpainting1],
    },
    {
        id: 6,
        image: Work6,
        title: "Pizza App",
        category: "Programming",
        desc: "The Pizza App was one of my first small-scale projects during my module on React for web development. This simple yet functional website displays whether a fictional pizza restaurant is open or closed, using the actual time to determine its status. \n\nBeyond its practical functionality, I added a playful touch with a logo featuring Usagi and Pisuke, showcasing my ability to blend technical skills with a bit of fun. This project marked an important step in my journey to mastering React and creating user-friendly web applications.",
        images: [pizzaapp],
    },
    {
        id: 7,
        image: Work6,
        title: "Travel App",
        category: "Programming",
        desc: "This Travel App was developed as part of a React web development module and represents my early exploration of creating functional and visually appealing web applications. Designed to cater to modern travelers, the app provides essential travel features in a sleek and intuitive interface. \n\nAlthough this was a relatively small project, it allowed me to apply React concepts such as state management and component-based architecture while focusing on user experience design. This project was a stepping stone that deepened my understanding of front-end development.",
        images: [travelapp],
    },
    {
        id: 8,
        image: Work6,
        title: "Multiracial Society Artwork",
        category: "Art",
        desc: "Created during my Global Communications module, this artwork celebrates Singapore's rich cultural diversity and the friendships I’ve formed over the years. Reflecting on my childhood, I dedicated this piece to my first group of friends, including a Japanese friend, a mixed Australian/Malaysian friend, a Malay friend, and myself, representing a blend of Chinese and Thai heritage. \n\nThis project allowed me to explore themes of identity and multiculturalism, emphasizing how Singapore embraces its diverse cultures. It stands as a testament to the importance of unity and mutual respect in a multiracial society.",
        images: [Art1],
    },
    {
        id: 9,
        image: Work6,
        title: "Original Illustration",
        category: "Art",
        desc: "Inspired by the vibrant and expressive style of anime, I challenged myself to return to drawing after years of focusing on other pursuits. This original illustration reflects my personal growth as an artist and my ability to convey emotion and storytelling through visual art. \n\nTaking the time to refine my techniques and experiment with new styles reminded me of the joy of creating purely for the sake of expression. This piece represents not only my skills but also my dedication to lifelong learning and self-improvement.",
        images: [Art2],
    }
];

export default Menu;
