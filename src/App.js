
import './App.css';

function App() {
  return (
    <div className="App">
     <div class="container">
   
        <h1>Sujith</h1>
        <p><strong>Email:</strong> sujithnandu496@gmail.com | 
           <strong>Phone:</strong> +91 9515651835 | 
           <strong>GitHub:</strong> <a href="https://github.com/Sujithchary" target="_blank">github.com/Sujithchary</a></p>

      
        <div class="section">
            <h2>Objective</h2>
            <p>Enthusiastic and detail-oriented Information Technology student at Vasavi College of Engineering, graduating in 2026. Passionate about backend development and software engineering. Seeking an opportunity to apply my skills in Spring Boot, Java, and Microservices to build scalable and efficient software solutions.</p>
        </div>

        <div class="section">
            <h2>Education</h2>
            <p><strong>Vasavi College of Engineering</strong></p>
            <p>Bachelor of Technology in Information Technology</p>
            <p><strong>Expected Graduation:</strong> 2026</p>
        </div>

        <div class="section">
            <h2>Technical Skills</h2>
            <ul class="skills-list">
                <li>Java</li>
                <li>Maven</li>
                <li>Hibernate</li>
                <li>Spring 6</li>
                <li>Springboot 3</li>
                <li>Docker</li>
                <li>Git</li>
                <li>GitHub</li>
            </ul>
        </div>

    
        <div class="section">
            <h2>Projects</h2>
            <ul class="projects-list">
                <li>
                    <strong>Employee Management System</strong>  
                    <p>Developed a Spring Boot and Hibernate-based web application to manage employee records, roles, and attendance. Implemented RESTful APIs, secured authentication using JWT, and optimized database queries for improved performance.</p>
                </li>
                <li>
                    <strong>E-commerce Microservices</strong>  
                    <p>Built a scalable e-commerce backend using Spring Boot, Docker, and Kafka. Designed microservices for user authentication, product management, and payment processing. Integrated Redis caching for performance improvement.</p>
                </li>
                <li>
                    <strong>Online Course Platform</strong>  
                    <p>Developed a course registration system using Spring Boot with RESTful APIs. Integrated MySQL for database management and used Hibernate ORM for efficient data handling.</p>
                </li>
            </ul>
        </div>

        <div class="section">
            <h2>Leadership & Extracurricular Activities</h2>
            <ul class="clubs-list">
                <li><strong>NSS Club Member</strong> - Organized community service programs and awareness campaigns.</li>
                <li><strong>Toastmasters Club</strong> - Improved public speaking and leadership skills through regular sessions.</li>
            </ul>
        </div>

        <div class="section">
            <h2>Certifications</h2>
            <ul class="cert-list">
                <li>Java Developer Certification - Udemy</li>
                <li>Spring Boot Professional - Udemy</li>
                <li>Docker Certified Associate - Docker Inc.</li>
            </ul>
        </div>
    </div>
    </div>
  );
}

export default App;
