# TaskMaster 🚀

TaskMaster is a full-stack task management platform designed to help individuals and teams organize, track, and collaborate on tasks efficiently. Built with modern technologies, TaskMaster offers a seamless user experience, robust functionality, and scalability.

<!-- ![TaskMaster Screenshot](./screenshot.png) Add a screenshot here -->

---

## Features ✨

- **User Authentication**: Sign up, log in, and manage your profile securely.
- **Task Management**: Create, update, delete, and organize tasks with due dates, labels, and priorities.
- **Collaboration**: Invite team members to projects and assign tasks.
- **Real-Time Updates**: Get instant notifications for task updates and deadlines.
- **Analytics Dashboard**: Visualize task progress and team performance with interactive charts.
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.

---

## Tech Stack 🛠️

- **Frontend**: Angular, TypeScript, HTML, SCSS
- **Backend**: NestJS, TypeScript
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **DevOps**: Docker, AWS (EC2, RDS, S3), CI/CD (GitHub Actions)
- **Testing**: Jasmine/Karma (Angular), Jest (NestJS)
- **Other Tools**: WebSockets (for real-time updates), Chart.js (for analytics)

---

## Getting Started 🚀

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker (optional, for containerization)
- PostgreSQL (or use Docker to run a PostgreSQL container)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/task-master.git
   cd task-master
   ```

2. **Set Up the Backend**:
   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` folder and add your environment variables:
     ```env
     DATABASE_URL=postgresql://user:password@localhost:5432/taskdb
     JWT_SECRET=your_jwt_secret
     ```
   - Run the database migrations:
     ```bash
     npm run migrate:up
     ```
   - Start the backend server:
     ```bash
     npm run start:dev
     ```

3. **Set Up the Frontend**:
   - Navigate to the frontend folder:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the Angular development server:
     ```bash
     ng serve
     ```
   - Open your browser and visit `http://localhost:4200`.

4. **Run with Docker (Optional)**:
   - Ensure Docker is installed and running.
   - Navigate to the project root and run:
     ```bash
     docker-compose up
     ```
   - The app will be available at `http://localhost:4200`, and the backend will run on `http://localhost:3000`.

---

## Running Tests 🧪

- **Frontend Tests**:
  ```bash
  cd frontend
  ng test
  ```

- **Backend Tests**:
  ```bash
  cd backend
  npm run test
  ```

---

## Deployment 🌐

TaskMaster is deployed on **AWS** using the following services:
- **EC2**: Hosts the application.
- **RDS**: Manages the PostgreSQL database.
- **S3**: Stores file attachments.
- **GitHub Actions**: Automates CI/CD pipelines for testing and deployment.

To deploy your own instance, follow the [Deployment Guide](./DEPLOYMENT.md).

---

## Contributing 🤝

Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## License 📄

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Acknowledgments 🙏

- **Angular** and **NestJS** for providing a robust framework for building modern web applications.
- **Docker** for simplifying containerization and deployment.
- **AWS** for scalable cloud infrastructure.
- **Chart.js** for beautiful and interactive data visualizations.

---

## Contact 📧

If you have any questions or feedback, feel free to reach out:

- **Your Name**: [Your Email](mailto:your-email@example.com)
- **GitHub**: [your-username](https://github.com/your-username)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)

---

Happy task managing! 🎉
```