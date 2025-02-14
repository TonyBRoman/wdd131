document.addEventListener("DOMContentLoaded", () => {
    // Menu icon toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    const isMobile = () => window.innerWidth <= 768;

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            if (isMobile()) {
                const isActive = nav.classList.toggle("active");
                menuToggle.classList.toggle("active");
                menuToggle.innerHTML = isActive ? "&times;" : "&#9776;";
                menuToggle.setAttribute("aria-expanded", isActive);
            }
        });

        window.addEventListener("resize", () => {
            if (!isMobile()) {
                nav.classList.remove("active");
                menuToggle.classList.remove("active");
                menuToggle.innerHTML = "&#9776;";
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Courses Data Handling
    const courses = [
        {
            level: 1,
            title: "Beginner",
            summary: "Basic robotics concepts, Scratch programming, and hands-on projects.",
            content: [
                "✅ Introduction to Robotics – What robots are, history, and basic components.",
                "✅ Programming Basics – Introduction to Scratch, using loops, and working with variables.",
                "✅ Hands-on Projects – Building a simple robot and coding a basic game in Scratch."
            ]
        },
        {
            level: 2,
            title: "Intermediate",
            summary: "Electronics, Arduino programming, and Python coding.",
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
            summary: "Advanced robotics, AI, and complex projects.",
            content: [
                "✅ Advanced Robotics – Understanding robot motion, kinematics, and real-world applications.",
                "✅ AI and Automation – Exploring machine learning basics and automated systems.",
                "✅ Final Projects – Simulating robotic arms and creating advanced AI-powered robots."
            ]
        }
    ];

    if (document.getElementById("course-title")) {
        const urlParams = new URLSearchParams(window.location.search);
        const level = urlParams.get("level");
        const course = courses.find(c => c.level == level);

        if (course) {
            document.getElementById("course-title").textContent = course.title;
            document.getElementById("course-objective").textContent = course.summary;

            const courseModules = document.getElementById("course-modules");
            courseModules.innerHTML = ""; 

            course.content.forEach(item => {
                const listItem = document.createElement("p");
                listItem.textContent = item;
                courseModules.appendChild(listItem);
            });
        } else {
            document.getElementById("course-title").textContent = "Course not found";
            document.getElementById("course-objective").textContent = "Sorry, the course you are looking for does not exist.";
        }
    }
});





