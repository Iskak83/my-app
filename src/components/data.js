const data = {
    myStory : {
        part1: "I have lived in four countries in the last 10 years, and mobile applications such as Google Maps, Google Translator and CityMapper were helpful in becoming assimilated, especially when I came to the United States. Throughout that time, I was curious about how apps worked, and even before then, about the magic behind computing in general, like when I first saw a computer and wondered how what I was typing was appearing on the screen. I knew that apps were based on a combination of algorithms, data structures, and logic, but I wanted to know more. So when I heard about coding bootcamps, I decided to take a chance and prepared to enroll in one.",
        part2: "In September 2019, I started self-directed online courses with Udemy in HTML, CSS and JavaScript, and wrote my very first line of code, which displayed 'Hello, world!'. I was excited and encouraged to learn more.",
        part3: "I entered Fullstack Academy bootcamp six months later. In my first week, I felt completely overwhelmed. It sounded like my instructors were speaking a completely different language, and I worried that my English was insufficient because it is not my first language. Sometimes, I was frustrated to the point of tears. But I was determined not to give up. In April 2020, I was assigned my first solo project to build a single-page application. I was nervous but as my project progressed, my confidence grew. Each challenge made me learn something new about how an object-relational database system works, how React and Redux and other libraries work, and what’s happening with them behind the scenes.",
        part4: "In the bootcamp’s final six weeks, I completed three full-stack projects and learned more about coding with Express, PostgreSQL, React and Redux, and new technologies like React-Native, Expo.io and Chart.js while working in immersive paired and team environments. As a developer, I am excited to bring my experience and knowledge to a work environment where I can learn even more about coding and improve my skills."},
    // education : {
    //     part1: {
    //         name: "Fullstack Academy",
    //         address: "New York, NY",
    //         date: "March 2020 - August 2020",
    //         degree: "Certificate in Full Stack Web Development, Software Engineering Immersive",
    //         img : '../images/fsa.jpg'
    //     },
    //     part2: {
    //         name: "Kyrgyz Russian Slavic University",
    //         address: "Bishkek, Kyrgyzstan",
    //         date: "September 2006 - July 2011",
    //         degree: "Economics | Accounting",
    //         img : "../images/krsu.jpg"
    //     },
    //     part3: {
    //         name: "Kyrgyz National University",
    //         address: "Bishkek, Kyrgyzstan",
    //         date: "September 2003 - July 2005",
    //         degree: "Mathematics",
    //         img : "../images/knu.jpg"
    //     },
    //     part4: {
    //         name: "Kyrgyz Economic University",
    //         address: "Bishkek, Kyrgyzstan",
    //         date: "September 2001 - July 2003",
    //         degree: "General Law",
    //         img : "../images/KEU.jpg"
    //     }
    // },
    education : [
         {
            name: "Fullstack Academy",
            address: "New York, NY",
            date: "March 2020 - August 2020",
            degree: "Certificate in Full Stack Web Development, Software Engineering Immersive",
            class: "image-fsa",
            id: 1
        },
         {
            name: "Kyrgyz Russian Slavic University",
            address: "Bishkek, Kyrgyzstan",
            date: "September 2006 - July 2011",
            degree: "Economics | Accounting",
            class: "image-krsu",
            id: 1
        },
       {
            name: "Kyrgyz National University",
            address: "Bishkek, Kyrgyzstan",
            date: "September 2003 - July 2005",
            degree: "Mathematics",
            class: "image-knu",
            id: 3
        },
        {
            name: "Kyrgyz Economic University",
            address: "Bishkek, Kyrgyzstan",
            date: "September 2001 - July 2003",
            degree: "General Law",
            class: "image-keu",
            id: 4
        }
    ],
    projects: [
        {
            name: "Mixifyer",
            img: "../images/mixifyer.jpg",
            date: "October 2020 - November 2020",
            description: "E-commerce application that allows users to create their own account, add their favorite drinks to the shopping cart, edit their shopping cart, and place the order using credit card payment.",
            tools: "Express, PostgreSQL, React, Redux, React-Redux and Stripe API",
            gitHub: 'https://github.com/Mixifyer/Mixifyer',
            link: "https://mixifyer.herokuapp.com/"

        },
        {
            name: "eBudget",
            img: "../images/eBudget.jpg",
            date: "October 2020 - November 2020",
            description: "E-commerce application that allows users to create their own account, add their favorite drinks to the shopping cart, edit their shopping cart, and place the order using credit card payment.",
            tools: "Express, PostgreSQL, React, Redux, React-Redux, ChartJS and Plaid API",
            gitHub: 'https://github.com/Iskak83/eBudget',
            link: "https://ebudget.herokuapp.com/"

        },
        {
            name: "ColourFinder",
            img: "../images/ColourFinder.jpg",
            date: "October 2020 - November 2020",
            description: "E-commerce application that allows users to create their own account, add their favorite drinks to the shopping cart, edit their shopping cart, and place the order using credit card payment.",
            tools: "React-Native and Clariffi API",
            gitHub: 'https://github.com/Iskak83/ColourFinder',
            link: ""

        },
    ]
}

module.exports = {myStory : data.myStory, education: data.education}