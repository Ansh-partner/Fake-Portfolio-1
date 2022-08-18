const nameField = document.getElementById("name-input")
const emailField = document.getElementById("email-input")
const projectField = document.getElementById("project-input")
const budgetField = document.getElementById("budget-input")
const timelineField = document.getElementById("timeline-input")
const submitButton = document.getElementById("finel-bu")

const aboutMe = document.getElementById("AboutMe")
const aboutmeSection = document.getElementById("aboutme-section")
const Work = document.getElementById("MyWork")
const workSection = document.getElementById("work-section")
const Contact = document.getElementById("ContactMe")
const contactSection = document.getElementById("contact-section")
const gotopButton = document.getElementById("gotop-box")
const mainHeader = document.getElementById("header")

window.addEventListener("click", function () {
    greenField(nameField)
    greenField(emailField)
    greenField(projectField)
    greenField(budgetField)
    greenField(timelineField)
})

function greenField(green) {

    if (green.value) {
        green.style.borderColor = "green"
    }
}

submitButton.addEventListener("click", () => {

    redField(nameField)
    redField(emailField)
    redField(projectField)
    redField(budgetField)
    redField(timelineField)
})

function redField(red) {
    if (!red.value) {
        red.style.borderColor = "red"
    }
}


const gotToAboutMe = () => {
    aboutmeSection.scrollIntoView({ behavior: "smooth" })
}

const gotToMyWork = () => {
    workSection.scrollIntoView({ behavior: "smooth" })
}

const gotToContactForm = () => {
    contactSection.scrollIntoView({ behavior: "smooth" })
}

const goTopSection = () => {
    mainHeader.scrollIntoView({ behavior: "smooth" })
}

aboutMe.addEventListener("click", gotToAboutMe)
Work.addEventListener("click", gotToMyWork)
Contact.addEventListener("click", gotToContactForm)
gotopButton.addEventListener("click", goTopSection)