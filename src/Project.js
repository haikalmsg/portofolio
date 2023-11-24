import proj2 from './Assets/pics/skin-lesion.png'
import proj1 from './Assets/pics/Screenshot 2023-11-24 at 16.48.27.png'
import proj3 from './Assets/pics/Rekmed.png'

const PROJECTS = [
    {
        name : "TechSpace E-Commerce Site",
        text : "A dynamic React website meticulously crafted to advance my proficiency in front-end programming. Leveraging the React Context API, it seamlessly integrates sophisticated features reminiscent of E-Commerce platforms, encompassing intricate functionalities such as a robust Add to Cart system and a Checkout system.",
        img : proj1,
        link : "https://haikalmsg.github.io/TechSpaceProject/"

    },
    {
        name : "Skin Lesion Classification with Ensemble Learning and Computer Vision",
        text : "Melanoma, identified as one of the deadliest forms of cancer globally, has the potential to metastasize if not detected early. The medical landscape has witnessed significant advancements through automated diagnostic systems, aiding both medical professionals and the general populace in disease identification. This program presents a hybrid approach for detecting melanoma skin cancer, applicable to the scrutiny of suspicious lesions. My system combines three Transfer Learning methods: ResNet50, Xception, and MobileNetV2, Using a soft voting algorithm.",
        img : proj2,
        link : "https://colab.research.google.com/drive/1gB86Az8s2NMP-VrQHraysQmyr_4WJ7wY?usp=sharing"
    },
    {
        name : "Search Engine for Rekmed Database using BM25 Algorithm",
        text : "Presenting a specialized website search engine equipped with the cutting-edge BM25 algorithm. This task, commissioned by one of my esteemed lecturers for their website, aims to facilitate swift and efficient database searches. Designed to enhance the speed and precision of information retrieval, the BM25 algorithm plays a pivotal role in optimizing search results. As a dedicated solution for this particular website, the search engine promises a seamless and effective user experience, ensuring quick access to relevant data. Explore the website with confidence, knowing that the BM25 algorithm is at the forefront of providing a responsive and streamlined search functionality.",
        img : proj3,
        link : "https://colab.research.google.com/drive/1QgKZ0AskiHDfHgQFeQLWHZ-fNiWCe-Zt?usp=sharing"
    }
]

export default PROJECTS