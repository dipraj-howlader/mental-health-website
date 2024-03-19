This is Dipraj Project for 5th Semester.

Live website: https://mental-health-assurance.web.app/

 
Project Report Link: https://drive.google.com/file/d/1YG1U8As_QG16tjmHvQIm9CrY-Sd8bl7g/view?usp=sharing

PROJECT OVERVIEW


Our project aims to develop a user-friendly and comprehensive website that offers mental health services to individuals, educational institutions, and corporate organizations. The website will have three main sections: 

1. Individual Services:
   - Users can schedule appointments with mental health professionals.
   - Purchase mental health courses and resources, such as meditation guides, stress management, and self-help materials.
   - Access a free AI-based mental health assessment tool for self-assessment.

2. Educational Services:
   - Provide mental health programs for schools, colleges, and universities to promote emotional well-being among students.
   - Offer educational materials, workshops, and resources for institutions to implement mental health programs effectively.

3. Corporate Services:
   - Tailored mental health programs for businesses and organizations to support employee well-being and productivity.
   - Employee assistance programs and workshops on stress management, burnout prevention, and mental health awareness.

KEY PANELS:

1. User Panel:
   - Registration and profile management.
   - Appointment booking and management.
   - Course purchase and access to resources.
   - Access to the AI-based mental health assessment tool.

2. Mental Health Professional Panel:
   - Profile management.
   - Appointment management.
   - Communication with clients.
   - Access to client assessment reports.

3. Admin Panel:
   - User management and moderation.
   - Content management for courses, resources, and programs.
   - Analytics and reporting tools.
   - Payment transaction monitoring.
   - System settings and configuration.

DATABASE DESIGN
For the Mental Health Assurance website, a SQL database was chosen to store and manage the vast array of user data, course information, appointment schedules, and transaction records efficiently. MySQL, a popular open-source relational database management system, was selected for its robust performance, scalability, and ease of integration with the chosen technology stack.

The database schema encompasses various relational tables, including User, Course, Appointment, Transaction, and Notification. Relationships between these tables are established using foreign key constraints, ensuring data integrity and facilitating seamless retrieval and manipulation of information. Additionally, normalization techniques are employed to minimize redundancy and optimize query performance.

 


PROPOSED FEATURES

1. User Registration and Profiles:
   - Allow users to create accounts, manage profiles, and personalize their experience.

2. Appointment Scheduling:
   - Enable users to schedule appointments with mental health professionals based on availability.

3. E-commerce Functionality:
   - Offer a range of mental health courses, resources, and materials available for purchase.

4. AI-Based Mental Health Assessment:
   - Provide a free AI tool for users to assess their mental health and receive personalized reports. Provide Chatbot support.

5. User Dashboard:
   - Offer a user-friendly dashboard for easy management of appointments, purchased courses, and assessment reports.

6. Secure Payment Gateway:
   - Implement a secure payment system for transactions related to course purchases and services.

7. Educational Program Integration:
   - Incorporate tailored mental health programs for schools, colleges, and corporate organizations.

8. Professional Communication Portal:
   - Facilitate communication between users and mental health professionals.

9. Content Management System:
   - Enable easy updating and management of course materials, resources, and program details.

10. Administrator Dashboard:
    - Provide administrators with tools to manage users, appointments, and content.

11. Email Notifications and Reminders:
    - Send automated reminders and notifications for appointments and course access.

12. Analytics and Reporting Tools:
    - Offer insights for administrators to analyze user activity, engagement, and preferences.

13. Multi-Platform Accessibility:
    - Ensure the website is accessible across various devices (desktop, mobile, tablets).

14. Customizable Learning Paths:
    - Allow users to personalize their learning journey through customizable course paths.

15. Social Integration:
    - Enable sharing of resources or course progress on social media platforms for wider reach and engagement.

These features aim to create a comprehensive, user-centric experience while providing the necessary tools for professionals and administrators to effectively manage the platform and its services.

TECHNOLOGIES USED


Front-end:

•   React.Js: A popular and powerful JavaScript library for building user interfaces.
•   Redux: For state management and handling complex interactions.
•   React Router: For routing within the application.
•   Bootstrap: For interactive UI designing.
•   PDFjs: Creating PDF
•   EmailJS: SMTP server for sending and receiving emails.
•   Bootstrap: For interactive UI designing.

Back-end:

•   Node.js: A runtime environment for server-side applications.
•   Express.js: A web application framework for building APIs.
•   MySQL: A SQL database for flexible data storage.
•   Django : Python library for backend use.
•   JWT: JSON Web Tokens for secure user authentication.
•   Keras & PyTorch: For AI Chatbot and Neural Network.
•   NL-TK: For Natural Language Processing.
DATA FLOWCHART
1.	(User Panel)

 

2.	(Professional Panel)

  
3.	 (Admin Panel)

  
WORK PLAN AND TIMELINE (Gantt chart)



 


SOFTWARE DESIGN

1. Chatbot Support (using NLP and ChatGPT API):
The integration of a chatbot, leveraging Natural Language Processing (NLP) and the ChatGPT API, enhances user interaction by providing real-time assistance and support. With two distinct modes—normal mode for general inquiries and turbo mode for urgent issues—the chatbot offers personalized responses, aiding users in navigating the platform and accessing relevant resources efficiently. Through intelligent conversation management and context-awareness, the chatbot enhances user engagement and satisfaction, contributing to a seamless user experience within the Mental Health Assurance website.

2. User Signup Verification:
Implementing user signup verification ensures the security and authenticity of user accounts within the Mental Health Assurance platform. By requiring users to verify their email addresses or phone numbers upon registration, the system mitigates the risk of fraudulent or unauthorized access. This verification process not only enhances user trust but also reinforces data privacy and compliance with regulatory standards. By incorporating robust verification mechanisms, the platform safeguards user information and fosters a secure environment for accessing mental health resources and services.

3. Forget Password System:
The implementation of a forget password system offers users a convenient and secure way to regain access to their accounts in the event of forgotten passwords. Through a streamlined process of password reset requests and verification protocols, users can quickly recover their account credentials, minimizing disruptions to their user experience. By leveraging encryption techniques and multi-factor authentication, the forget password system enhances data security and protects user privacy. This feature underscores the platform's commitment to user convenience and data protection, further enhancing the overall user experience.

4. Doctor/Professional Login:
The inclusion of a dedicated login portal for doctors and mental health professionals facilitates secure access to specialized features and resources within the Mental Health Assurance platform. By authenticating professionals' credentials and granting tailored permissions, the system ensures that only authorized personnel can access sensitive information and perform professional tasks. This dedicated login interface streamlines workflows for healthcare providers, enabling them to manage appointments, access patient data, and deliver personalized services effectively. The doctor/professional login feature enhances collaboration and coordination among healthcare professionals, ultimately improving the quality and efficiency of mental health care delivery.

5. Professional's Dashboard:
The implementation of a professional's dashboard provides doctors and mental health professionals with a centralized hub for managing appointments, accessing patient records, and monitoring their professional activities within the Mental Health Assurance platform. Through intuitive data visualization tools, customizable widgets, and real-time notifications, the dashboard offers professionals insights into their schedule, workload, and patient interactions. By enabling seamless communication and task management, the professional's dashboard enhances productivity and facilitates informed decision-making. This feature empowers healthcare providers to deliver personalized care and support to their patients, fostering positive outcomes and improving overall satisfaction.

6. Admin Login:
The incorporation of an admin login interface grants authorized personnel access to administrative functionalities and controls within the Mental Health Assurance platform. By verifying admin credentials and enforcing role-based permissions, the system ensures that only designated administrators can perform critical tasks such as user management, content moderation, and system configuration. This dedicated admin login portal enhances security and accountability, enabling administrators to oversee platform operations and enforce compliance with regulatory standards. Through robust authentication protocols and audit trails, the admin login feature strengthens governance and promotes transparency in platform administration.

7. Admin Dashboard:
The inclusion of an admin dashboard empowers administrators with comprehensive insights and management tools to oversee the operations and performance of the Mental Health Assurance platform. Through customizable dashboards, data analytics, and reporting features, administrators gain visibility into key metrics, user activities, and system usage patterns. This centralized hub facilitates decision-making, resource allocation, and strategic planning, enabling administrators to optimize platform functionality and user experience. By providing real-time updates and actionable intelligence, the admin dashboard enhances administrative efficiency and promotes continuous improvement in platform governance and performance.

8. Admin Overall Report Generation:
The integration of an overall report generation feature empowers administrators to generate comprehensive reports summarizing key performance indicators, user demographics, and system analytics within the Mental Health Assurance platform. By aggregating and analyzing data from various sources, including user interactions, transaction records, and service utilization metrics, administrators can gain valuable insights into platform usage patterns and trends. These reports facilitate evidence-based decision-making, strategic planning, and performance evaluation, enabling administrators to identify areas for improvement and optimize platform outcomes. The admin overall report generation feature supports data-driven governance and continuous improvement in platform effectiveness and user satisfaction.

9. User Booking Appointment:
The implementation of a user booking appointment feature enables users to schedule appointments with mental health professionals conveniently and efficiently within the Mental Health Assurance platform. By providing a user-friendly interface, intuitive calendar tools, and availability notifications, the system simplifies the appointment booking process and enhances user engagement. Through seamless integration with professionals' schedules and real-time availability updates, users can select preferred dates and times for consultations, reducing wait times and improving access to mental health services. This feature underscores the platform's commitment to user-centered design and accessibility, promoting timely and personalized care delivery.

10. Email Notification System (after booking, used EmailJS SMTP server):
The integration of an email notification system enhances communication and engagement by sending automated notifications to users, professionals, and administrators within the Mental Health Assurance platform. Leveraging the EmailJS SMTP server, the system delivers timely updates, reminders, and alerts via email, keeping stakeholders informed about important events, such as appointment bookings, course enrollments, and account activities. By providing configurable templates, scheduling options, and tracking capabilities, the email notification system ensures reliable delivery and enhances user experience. This feature promotes transparency, accountability, and proactive communication, fostering positive user interactions and satisfaction.

11. Professional and Department Searching System:
The inclusion of a professional and department searching system facilitates user navigation and discovery of mental health professionals and specialized services within the Mental Health Assurance platform. By providing robust search filters, sorting options, and personalized recommendations, the system enables users to find professionals based on criteria such as specialty, location, availability, and user ratings. Through seamless integration with user profiles and appointment scheduling functionalities, users can easily identify suitable professionals and book appointments tailored to their needs. This feature enhances platform usability, accessibility, and user satisfaction, promoting seamless access to quality mental health care services.

12. Appointment PDF Generation:
The implementation of appointment PDF generation enables users to generate and download printable appointment summaries and confirmations within the Mental Health Assurance platform. By consolidating appointment details, including date, time, location, professional information, and user preferences, into a standardized PDF format, the system provides users with a convenient record of their scheduled appointments. Through customizable templates and branding options, users can personalize their appointment documents, enhancing clarity and professionalism. This feature promotes user empowerment, organization, and convenience, facilitating seamless communication and coordination between users and mental health professionals.

13. Stripe Payment Gateway:
The integration of the Stripe payment gateway enables secure and efficient online payment processing for course purchases and appointment bookings within the Mental Health Assurance platform. By leveraging industry-leading encryption standards and fraud prevention measures, Stripe facilitates seamless transactions while safeguarding sensitive financial information. Through support for various payment methods, including credit cards, debit cards, and digital wallets, the system offers users flexibility and convenience in completing transactions. This feature enhances user trust, transaction security, and payment reliability, contributing to a seamless and frictionless user experience.

14. Purchase Course:
The inclusion of a course purchase feature enables users to browse, select, and purchase mental health courses offered within the Mental Health Assurance platform. By providing detailed course descriptions, pricing information, and enrollment options, the system facilitates informed decision-making and seamless course registration. Through secure payment processing and transaction management, users can complete course purchases confidently, gaining access to valuable

 educational resources and learning materials. This feature promotes continuous learning, skill development, and self-improvement, empowering users to enhance their mental health literacy and well-being.

15. Watching Course Video Using FTP Server:
The implementation of course video streaming via FTP server enables users to access and watch educational content and course videos within the Mental Health Assurance platform. By hosting video files on a secure FTP server and integrating streaming capabilities into the platform, users can seamlessly view course materials without needing to download or store large files locally. Through adaptive streaming technology and responsive video players, the system ensures smooth playback and optimal viewing experience across devices and network conditions. This feature enhances accessibility, engagement, and retention of educational content, fostering effective learning and knowledge dissemination.

16. Coordination of MySQL and Firebase:
The coordination of MySQL and Firebase databases enables seamless data synchronization and real-time updates within the Mental Health Assurance platform. By leveraging MySQL for structured data storage and relational queries, and Firebase for real-time data synchronization and NoSQL document storage, the system achieves a balance between consistency and scalability. Through efficient data replication and bi-directional synchronization, users, professionals, and administrators can access up-to-date information across multiple devices and platforms. This coordination enhances data integrity, performance, and reliability, ensuring a seamless user experience and operational efficiency.

17. Firebase Authentication:
The integration of Firebase authentication enhances user security and access control within the Mental Health Assurance platform. By leveraging Firebase's robust authentication services, including email/password authentication, social login, and multi-factor authentication, the system verifies user identities and enforces secure access to platform features and resources. Through seamless integration with user profiles and permissions management, Firebase authentication facilitates personalized user experiences and role-based access control. This feature promotes trust, transparency, and compliance with data privacy regulations, enhancing user confidence and platform credibility.

18. Server Created for Fetching Data:
The creation of a dedicated server for fetching data facilitates efficient data retrieval and processing within the Mental Health Assurance platform. By deploying a scalable and responsive server infrastructure, the system ensures reliable access to backend data sources, APIs, and external services. Through optimized data fetching algorithms and caching mechanisms, the server minimizes latency and maximizes throughput, enabling seamless integration with frontend components and user interfaces. This feature enhances performance, scalability, and responsiveness, ensuring a smooth and uninterrupted user experience across various platform functionalities and usage scenarios.

19. Interactive UI:
The development of an interactive user interface (UI) enhances user engagement and satisfaction within the Mental Health Assurance platform. By incorporating intuitive navigation, responsive layouts, and interactive elements, the UI offers users a visually appealing and dynamic experience. Through rich multimedia content, animations, and feedback mechanisms, the system provides users with meaningful interactions and seamless transitions between different tasks and screens. This feature promotes usability, accessibility, and immersion, fostering positive user perceptions and encouraging prolonged engagement with platform features and resources.

20. Corporate and Professional Services:
The inclusion of corporate and professional services within the Mental Health Assurance platform offers organizations and employers tailored solutions for promoting employee well-being and mental health support. By providing customizable packages, employee assistance programs, and corporate wellness initiatives, the platform enables businesses to prioritize mental health in the workplace effectively. Through dedicated portals, analytics dashboards, and administrative controls, organizations can track employee engagement, measure program effectiveness, and demonstrate commitment to employee wellness. This feature supports holistic approaches to mental health management, fostering healthy work environments and enhancing organizational productivity and resilience.

