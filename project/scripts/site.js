// Menu icon
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    // Function to check if the screen width is in mobile view
    const isMobile = () => window.innerWidth <= 768;

    // Toggle menu open/close when the button is clicked (only in mobile view)
    menuToggle.addEventListener("click", () => {
        if (isMobile()) {
            nav.classList.toggle("active"); 
            menuToggle.classList.toggle("active"); 

            // Change the icon between ☰ (hamburger) and ✖ (close)
            menuToggle.innerHTML = nav.classList.contains("active") ? "&times;" : "&#9776;";
        }
    });

    // Automatically close menu when resizing to a larger screen
    window.addEventListener("resize", () => {
        if (!isMobile()) {
            nav.classList.remove("active"); 
            menuToggle.classList.remove("active"); 
            menuToggle.innerHTML = "&#9776;"; 
        }
    });
});

// Courses Data 
document.addEventListener("DOMContentLoaded", () => {
    const courses = [
        {
            level: 1,
            title: "Beginner",
            summary: "This level introduces students to basic robotics concepts, simple programming (Scratch), and hands-on projects using everyday materials. The focus is on understanding what robots are, how they work, and writing basic programs.",
            content: [
                "✅ Introduction to Robotics – What robots are, history, and basic components.",
                "✅ Programming Basics – Introduction to Scratch, using loops, and working with variables.",
                "✅ Hands-on Projects – Building a simple robot and coding a basic game in Scratch."
            ]
        },
        {
            level: 2,
            title: "Intermediate",
            summary: "This level introduces electronics, Arduino, and text-based programming (Python). Students learn how circuits work, how to program Arduino boards, and how to write more complex programs.",
            content: [
                "✅ Basic Electronics – Understanding circuits, LEDs, sensors, and actuators.",
                "✅ Arduino Programming – Writing basic programs to control electronic components.",
                "✅ Python Programming – Learning coding logic, conditionals, loops, and functions.",
                "✅ Intermediate Projects – Building a line-following robot and coding an interactive Python game."
            ]
        },
        {
            level: 3,
            title: "Advanced",
            summary: "This level focuses on advanced robotics, artificial intelligence, and complex integration projects. Students work on robotic motion, kinematics, and AI applications.",
            content: [
                "✅ Advanced Robotics – Understanding robot motion, kinematics, and real-world applications.",
                "✅ AI and Automation – Exploring machine learning basics and automated systems.",
                "✅ Final Projects – Simulating robotic arms and creating advanced AI-powered robots."
            ]
        }
    ];

    if (window.location.pathname.includes("course-detail.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const level = urlParams.get('level'); 

        const course = courses.find(course => course.level == level);

        if (course) {
            
            document.getElementById('course-title').textContent = course.title;
            document.getElementById('course-objective').textContent = course.summary;

            const courseModules = document.getElementById('course-modules');
            courseModules.innerHTML = ""; 

            course.content.forEach(item => {
                const listItem = document.createElement('p');
                listItem.textContent = item;
                courseModules.appendChild(listItem);
            });
        } else {
        
            document.getElementById('course-title').textContent = "Course not found";
            document.getElementById('course-objective').textContent = "Sorry, the course you are looking for does not exist.";
        }
    }
});




