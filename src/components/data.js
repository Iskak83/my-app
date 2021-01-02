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
            img: "../images/Mixifyer.jpg",
            date: "October 2020 - November 2020",
            description: "E-commerce application that allows users to create their own account, add their favorite drinks to thevshopping cart, edit their shopping cart, and place the order using credit card payment.",
            bulletPoints: {
                one: "-Designed and implemented a persistent user’s shopping cart page to see the items in the cart and to change quantities and delete them from the cart anytime.",
                two: "-Created and implemented an Admin-user page with functionality to have access to all users’ information, to add or remove inventory, or to change inventory information, such as cost, in stock etc."
            },
            tools: "['Express', 'PostgreSQL', 'React','Redux', 'React-Redux', 'Stripe API']",
            gitHub: 'https://github.com/Mixifyer/Mixifyer',
            link: "https://mixifyer.herokuapp.com",
            class: "image-mixifyer",
            id: 1

        },
        {
            name: "eBudget",
            img: "../images/eBudget.jpg",
            date: "October 2020 - November 2020",
            description: "Financial planning web application to create a personal  budget.",
            bulletPoints: {
                one: "-Built functionality to establish a persistent connection to the user's bank account through Plaid API and to fetch the user’s bank account activity including transfers, payments and spending.",
                two: "-Incorporated doughnut and bar charts functionality to display monthly and yearly spending using Chart.js."
            },
            tools: "['Express', 'PostgreSQL', 'React', 'Redux', 'React-Redux', 'ChartJS', 'Plaid API']",
            gitHub: 'https://github.com/Iskak83/eBudget',
            link: "https://ebudget-fsa2020.herokuapp.com",
            class: "image-eBudget",
            id: 2

        },
        {
            name: "ColourFinder",
            img: "../images/ColourFinder.jpg",
            date: "October 2020 - November 2020",
            description: "It is an app to identify the name and hex code of colors from the selected picture from your device's local storage or taking a picture using device's camera.",
            bulletPoints: {
                one: "",
                two: ""
            },
            tools: "['React-Native', 'Clariffi API']",
            gitHub: 'https://github.com/Iskak83/ColourFinder',
            link: "https://expo.io/@iskak/projects/colour-finder",
            class: "image-colourFinder",
            id: 3


        },
    ]
}

module.exports = {myStory : data.myStory, education: data.education, projects: data.projects}