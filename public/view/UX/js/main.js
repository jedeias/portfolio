class HomePage {
  
    page1() {
        
        const tagHeader = document.createElement("section");
        tagHeader.className = "pag1";

        let button = document.createElement("img");
        button.className = "btn"
        button.src = "public/view/UI/img/buttom.svg"

        button.textContent = "opiton";

        const logo = document.createElement("img");
        logo.src = "public/view/UI/img/logo.svg";
        logo.alt = "logo not fund";

        tagHeader.appendChild(button);
        tagHeader.appendChild(logo);

        return tagHeader;
    
    }

    aboutMe() {
        const section = document.createElement("section");
        section.className = "aboutMe";
    
        const div = document.createElement("div");
        div.className = "containerText";
    
        let center = document.createElement("div");
        center.className = "center";

        const content = `
        <p class="aboutMeTitle">About me:</p>
        <p class="aboutMeDescription">Welcome to my portfolio! My name is Jedeias Luiz, and I am a back-end developer who always opts for efficient solutions.</p>
        <p class="aboutMeDescription">Currently, I have academic and extracurricular experiences that have provided me with solid knowledge of PHP, MySQL, and Python. Additionally, I have a basic familiarity with front-end development, specifically with the following tools: HTML, CSS, JS, Bootstrap, jQuery, and DOM manipulation.</p>
        <p class="aboutMeDescription">I am constantly seeking to improve my software through studies and tools for code organization and maintenance, ensuring that my systems are scalable and easy to modify in the future, all while prioritizing the best user experience and adhering to good practices.</p>
        <p class="aboutMeDescription">I am ready to take on new challenges and contribute to projects that require a high level of technical skills. Let's work together!</p>
        <p class="aboutMeContact">Email: jedeiasluiz3@gmail.com</p>
        <p class="aboutMeContact">LinkedIn: <a href="www.linkedin.com/in/jedeias-luiz-608a00214/">www.linkedin.com/in/jedeias-luiz-608a00214/</a></p>
        <p class="aboutMeContact">GitHub: <a href="www.github.com/jedeias">www.github.com/jedeias</a></p>
        <div class="line"></div>`;
        
        div.innerHTML = content;
        center.appendChild(div);
        section.appendChild(center);
        return section;
    }

    footer(){
                
        let footer = document.createElement("footer");

        let downBox = document.createElement("img");
        downBox.className = "downBox";
        downBox.src = "public/view/UI/img/downBox.svg";

        footer.appendChild(downBox);


        return footer;
    }

    projects() {
      let section = document.createElement("section");
      section.className = "projects";
  
      let center = document.createElement("div");
      center.className = "projectCenter";
  
      let aboutProject = document.createElement("div");
      aboutProject.className = "aboutProject";
  
      let selectedDiv = null;
  
      function config() {
        let menuBar = document.createElement("div");
        menuBar.className = "menuBar";
    
        let list = [
            "Anote-me",
            "ajax",
            "cleanArchitectureCrud",
            "rework_register_mvc",
            "solid"
        ];
    
        list.forEach(element => {
            let newDiv = document.createElement("div");
            newDiv.className = "menuOptions";
    
            // Adicione um título (h3) acima de cada imagem
            let title = document.createElement("h3");
            title.textContent = element;
            newDiv.appendChild(title);
    
            let img = document.createElement("img");
            img.className = "menuOptionsImg";
            img.src = "public/view/UI/img/" + element + ".png";
    
            newDiv.appendChild(img);
            menuBar.appendChild(newDiv);
    
            img.addEventListener("click", () => {
                if (selectedDiv) {
                    selectedDiv.remove();
                }
                let existingDiv = document.querySelector(".about");
                if (existingDiv) {
                    existingDiv.remove();
                }
    
                let newDiv = document.createElement("div");
                newDiv.className = element;
                aboutProject.appendChild(newDiv);
    
                if (description[element]) {
                    newDiv.innerHTML = description[element];
                } else {
                    newDiv.textContent = "Description not available.";
                }
    
                selectedDiv = newDiv;
            });
        });
    
        return menuBar;
    }
          let description = {
            "Anote-me": `<p>"Anote-me" was an academic project for my graduation, aiming to serve as a management system for psychological clinics, providing support to professionals in the field and their clients through constant and alternative communication, following the guidelines already used by experts in the field.</p>
            <p>In the development of this system, I played a crucial role in making inherently important decisions, such as choosing the software architecture and code. I opted for the use of the MVC (Model, View, Controller) software architecture along with object-oriented programming. Through these structures, the software was dynamically created with minimal friction between the front-end and back-end teams.</p>
            <p>To execute this project, the following technologies were used:</p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>PHP</li>
              <li>MySQL</li>
            </ul>
            <p>These technologies allowed for the creation of an interactive and responsive interface, ensuring a pleasant user experience. Furthermore, the integration of PHP with MySQL enabled secure and efficient storage of the system's data.</p>
            <p>During the development of "Anote-me," I had the opportunity to enhance my back-end programming skills, work in a team, and tackle complex challenges. The end result was a robust and reliable system that meets the needs of psychology professionals and their clients, providing efficient clinic management.</p>
            <p>I am proud to have contributed to the success of this project and I am eager to take on new challenges in the field of back-end development.</p>
            <p>Find out more about the project at the link below:</p>
            <p>for more information click here: <a href='https://github.com/jedeias/anote-me' target='_blank'>Anote-me</a></p>`,
            "ajax": `<p>"Ajax" was an extracurricular project in which I dedicated myself to studying and improving dynamic requests between PHP and JS, using the Ajax mechanism. Through this project, I was able to learn and enhance my skills in real-time software creation. The following technologies were used:</p>
            <ul>
              <li>PHP 7.4</li>
              <li>JS</li>
              <li>jQuery</li>
              <li>HTML5</li>
            </ul>
            <p>Initially, I hesitated and postponed the start of the project because my personal interest was more focused on the back-end. However, throughout the development process, I realized the importance of this mechanism for the user and how dynamic and user-friendly a website can be when utilizing this tool. It was extremely rewarding to acquire this skill as now I can make the interactions of my systems more dynamic without relying on the knowledge of another front-end developer, as I can handle these interactions myself.</p>
            <p>Furthermore, this project reopened the doors to JavaScript, a language that I had lost interest in over time as it seemed to be only a visual support tool. However, I realized the value of the important interactions that JavaScript can offer.</p>
            <p>Through the use of Ajax, I was able to create a website that offers a richer and more interactive experience for users. This real-time experience is crucial for user efficiency and satisfaction, and I am excited to apply this knowledge to future projects.</p>
            
            <p>for more information click here: <a href='https://github.com/jedeias/ajax' target='_blank'>Ajax</a></p>`,
          
            "cleanArchitectureCrud": `<p>"cleanArchitectureCrud" was an extracurricular activity undertaken with the aim of learning new architectures beyond MVC (Model, View, Controller). The choice of this methodology was due to its modularity and flexibility, which can provide various benefits and conveniences for system development.</p>
            <p>In the development of this project, the following technologies were used:</p>
            <ul>
              <li>PHP 7.4</li>
              <li>MySQL 5.4</li>
              <li>CSS3</li>
              <li>HTML5</li>
              <li>JavaScript</li>
            </ul>
            <p>It was a challenging project as this architecture introduced more complex concepts that I had to gradually adapt to. However, it was extremely rewarding to learn how to organize and structure my code in a cohesive and coherent manner, making it more flexible for future changes and independent of external dependencies such as frameworks and APIs. This made my code more robust and resilient to changes as needed.</p>
            <p>Learning to apply clean architecture is an essential skill that I will undoubtedly use in many future projects. It provides a solid foundation for system development and allows functionalities to be implemented in a modular way, facilitating software maintenance and evolution. I am excited to apply this knowledge in future projects and continue to enhance my software architecture skills.</p>
            <p>for more information click here: <a href='https://github.com/jedeias/cleanArchitectureCrud' target='_blank'>cleanArchitectureCrud</a></p>`,
          
            "rework_register_mvc": `<p>"rework_register_mvc" was an academic project aimed at improving and deepening the knowledge previously acquired, focusing on the better implementation of the MVC (Model, View, Controller) software architecture. In this project, I focused on improving the interaction between the controller and the view, as well as optimizing the code structure by leveraging Object-Oriented Programming to make it more readable and cohesive.</p>
            <p>This initiative served as the foundation for the "ANOTE-ME" project, and the following technologies were used:</p>
            <ul>
              <li>PHP 7.4</li>
              <li>MySQL 5.7</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap 5</li>
              <li>JavaScript</li>
            </ul>
            <p>In addition to being a remodeling project aimed at reusing knowledge, the project also served as an example for a fellow student, demonstrating to them how an MVC architecture can be structured from the beginning and the importance of OOP in this process. As a result, I consider the project to be a complete success as I was able to deepen my own knowledge and provide a solid foundation for my colleague, who now utilizes this knowledge with proficiency.</p>
            <p>for more information click here: <a href='https://github.com/jedeias/rework_register_mvc' target='_blank'>rework_register_mvc</a></p>`,
          
            "solid": `<p>"SOLID" - This project started as a joke, as I used to ask my professor at least once a week if he would talk about this paradigm, but he always avoided the subject. Until one day, after joking about it, I said that I would study it on my own. Even though it wasn't part of the course curriculum, my professor supported the idea, and I took the liberty to study the paradigm. This project became my first application of SOLID principles in programming.</p>
            <p>To create this project, I used the following technologies:</p>
            <ul>
              <li>PHP 7.4</li>
              <li>MySQL 5.7</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
            <p>Despite its simple structure, this project applies all the SOLID principles. It also served as a foundation for my study of Clean Architecture, as many of the principles present in SOLID are also reflected in that architecture. The combination of these methodologies results in highly cohesive and reliable applications, making it easier to add and modify features in the project. In the end, it was an unexpected success for both my professor and me, as I was pleasantly surprised. In my conception, SOLID would be much more complex, and I expected it to take a longer time to comprehend.</p>
            <p>for more information click here: <a href='https://github.com/jedeias/solid' target='_blank'>solid</a></p>`,
          
          };

            let about = document.createElement("div");
            about.className = "about";
            about.textContent = "chose a project";
            aboutProject.appendChild(about);

            let menuBar = config(); 
            center.appendChild(menuBar);
            center.appendChild(aboutProject);
            section.appendChild(center);

        return section;

    }

    langue(){

    }

}

class Main {
    constructor() {
        const jsAlerter = document.querySelector("div");
        jsAlerter.remove();

        this.body = document.querySelector("body");

        this.homePage = new HomePage();
        this.lenpage();
    }

    lenpage() {
        
        
        this.body.appendChild(this.homePage.page1());
        
        this.body.appendChild(this.homePage.aboutMe());

        this.body.appendChild(this.homePage.projects());

        this.body.appendChild(this.homePage.footer());

    }
}
  
const main = new Main();
