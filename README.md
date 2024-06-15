# ResumeSkillFinder

ResumeSkillFinder is a machine learning project built with Python, NLP, and SpaCy that analyzes resumes to identify the skills mentioned. This project includes a Flask API for backend processing and a React Vite frontend for user interaction.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- Extracts skills from resumes using NLP techniques.
- Easy-to-use web interface built with React Vite.
- Backend API built with Flask for skill extraction.
- Supports various resume formats (PDF, DOCX, TXT).

## Installation

### Prerequisites
- Python 3.8+
- Node.js 14+

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ResumeSkillFinder.git
    cd ResumeSkillFinder/backend
    ```

2. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. Install the required dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Run the Flask API:
    ```bash
    flask run
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

## Usage
1. Ensure both the backend and frontend servers are running.
2. Open your browser and navigate to `http://localhost:3000`.
3. Upload your resume and see the extracted skills.

## API Endpoints

### POST /extract_skills
- **Description:** Extracts skills from the uploaded resume.
- **Request Body:** Multipart form-data containing the resume file.
- **Response:** JSON object containing the extracted skills.

Example:
```json
{
  "skills": ["Python", "Machine Learning", "NLP", "SpaCy"]
}
```

## Technologies Used
- **Backend:** Python, Flask, SpaCy
- **Frontend:** React, Vite
- **Other:** Docker (for containerization), Git (version control)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes.
4. Commit your changes:
    ```bash
    git commit -m "Add some feature"
    ```
5. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
6. Open a pull request.

7. Drive Link
8. https://drive.google.com/drive/folders/1YTwqW1VVL3xY5h-4j8EV-Ymxj9BBt_hI?usp=sharing

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
