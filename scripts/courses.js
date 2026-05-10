const courses = [
    {
        subject: "WDD",
        number: 130,
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 131,
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        credits: 2,
        completed: false
    },
    {
        subject: "CSE",
        number: 210,
        credits: 3,
        completed: false
    }
];

const container = document.querySelector("#course-container");

function displayCourses(courseList) {

    container.innerHTML = "";

    courseList.forEach(course => {

        const div = document.createElement("div");

        div.classList.add("course-card");

        if (course.completed) {
            div.classList.add("completed");
        }

        div.innerHTML =
        `${course.subject} ${course.number} - ${course.credits} Credits`;

        container.appendChild(div);
    });

    const totalCredits =
    courseList.reduce((total, course) =>
    total + course.credits, 0);

    document.querySelector("#credits").textContent =
    totalCredits;
}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
    displayCourses(courses.filter(course =>
    course.subject === "WDD"));
});

document.querySelector("#cse").addEventListener("click", () => {
    displayCourses(courses.filter(course =>
    course.subject === "CSE"));
});