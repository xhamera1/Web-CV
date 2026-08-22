const PROJECT_CATEGORIES = [
    { id: 'all', label: 'All', icon: '◈' },
    { id: 'ai-ml', label: 'AI / ML', icon: '◎' },
    { id: 'python', label: 'Python', icon: 'Py' },
    { id: 'java', label: 'Java', icon: 'Jv' },
    { id: 'csharp', label: 'C# / .NET', icon: 'C#' },
    { id: 'web', label: 'Full-Stack / Web', icon: '⬡' },
    { id: 'computer-vision', label: 'Computer Vision', icon: '◉' },
    { id: 'reinforcement-learning', label: 'Reinforcement Learning', icon: '▶' },
    { id: 'collaborative', label: 'Collaborative', icon: '⬢' }
];

const PROJECTS = [
    {
        id: 'diabetes-predictor',
        title: 'Diabetes Prediction: A Full-Stack Web Machine Learning Application',
        description: 'A full-stack web application featuring a Random Forest classifier (97.2% accuracy) served via Python FastAPI, a secure Spring Boot backend with JWT authentication and role-based access control, and a modern React frontend. The system allows users to submit health metrics, receive AI-driven diabetes risk predictions, and track their prediction history, with admin capabilities for user management.',
        techSummary: 'Python, FastAPI, Scikit-learn, Java, Spring Boot, Spring Security, Spring Data JPA, MySQL, React, TypeScript, Material-UI.',
        tags: ['ai-ml', 'python', 'java', 'web'],
        featured: true,
        collaborative: false,
        github: 'https://github.com/xhamera1/DiabetesPredictorApp'
    },
    {
        id: 'intelligent-health',
        title: 'Intelligent Health Prediction System (Collaborative)',
        description: 'An AI-powered web app using Spring Boot, React, and Python to predict health risks from user surveys and provide personalized recommendations. This is a university team project for the "Studio Projektowe 1" course. The application utilizes custom machine learning models and generative AI to provide personalized health recommendations.',
        techSummary: 'Spring Boot, React, Python, Machine Learning, Generative AI.',
        tags: ['ai-ml', 'python', 'java', 'web', 'collaborative'],
        featured: true,
        collaborative: true,
        github: 'https://github.com/xhamera1/Intelligent-Health-Prediction-System'
    },
    {
        id: 'track-and-trace',
        title: 'Track & Trace System - Advanced Package Tracking Application (Collaborative)',
        description: 'A full-stack web application for managing courier shipments with role-based access (User, Courier, Admin), real-time package tracking with history, geocoding integration, and REST API with API key authentication. Users can send and track packages, while couriers manage assigned deliveries with status and location updates.',
        techSummary: 'C#, ASP.NET Core MVC, REST API, Entity Framework Core, MySQL, Bootstrap, Leaflet.js, Azure.',
        tags: ['csharp', 'web', 'collaborative'],
        featured: true,
        collaborative: true,
        github: 'https://github.com/xhamera1/Track-And-Trace-App'
    },
    {
        id: 'heart-failure',
        title: 'Heart Failure Predictor Application',
        description: 'A system featuring a Java Spring Boot web application for user interaction (registration, login, data submission, history view) and a Python Flask API serving a pre-trained Gradient Boosting Classifier model to predict heart failure risk based on diagnostic data. Leverages Spring Security, Spring Data JPA (MySQL), and Thymeleaf for the web app, with Scikit-learn and Flask powering the ML service.',
        techSummary: 'Java, Spring Boot, Spring Security, JPA, JUnit, MySQL, Thymeleaf, Python, Flask, Scikit-learn, Pandas.',
        tags: ['ai-ml', 'python', 'java', 'web'],
        featured: false,
        collaborative: false,
        github: 'https://github.com/xhamera1/heart-failure-predictor'
    },
    {
        id: 'krakow-tram',
        title: 'Kraków Tram Lines Simulator (Collaborative)',
        description: 'A real-time simulation and visualization of the Kraków tram network. The application fetches real-time data and schedule information to simulate tram movements on an interactive map. Features include real-time simulation controls (pause, resume, restart, speed adjustment), interactive map visualization with Leaflet.js showing tram lines, stops, and live positions, and automated data fetching from official sources.',
        techSummary: 'Python, FastAPI, JavaScript, HTML, CSS, Leaflet.js, WebSocket.',
        tags: ['python', 'web', 'collaborative'],
        featured: true,
        collaborative: true,
        github: 'https://github.com/karolbystrek/krakow-tram-lines-simulator'
    },
    {
        id: 'toxic-comments',
        title: 'Toxic Comment Classification',
        description: 'Multi-label toxic comment classification on the Jigsaw dataset, comparing RNN, LSTM, GRU, and fine-tuned BERT models with hyperparameter tuning.',
        techSummary: 'Python, PyTorch, Transformers, RNN, LSTM, BERT.',
        tags: ['ai-ml', 'python'],
        featured: true,
        collaborative: false,
        github: 'https://github.com/xhamera1/toxic-comment-classification'
    },
    {
        id: 'crossy-road',
        title: 'Crossy Road Gymnasium',
        description: 'Custom Gymnasium environment based on Crossy Road, with a PPO agent trained via Stable-Baselines3 and evaluated against a rule-based baseline in Pygame.',
        techSummary: 'Python, Gymnasium, Pygame, Stable-Baselines3, PPO.',
        tags: ['ai-ml', 'python', 'reinforcement-learning'],
        featured: false,
        collaborative: false,
        github: 'https://github.com/xhamera1/crossy-road-gymnasium'
    },
    {
        id: 'brain-tumor',
        title: 'Brain Tumor MRI CNN Optimization',
        description: 'Deep learning project classifying brain MRI scans into four tumor types, comparing custom CNNs with fine-tuned ResNet50 transfer learning and Grad-CAM interpretability (93% test accuracy).',
        techSummary: 'Python, TensorFlow/Keras, ResNet50, Grad-CAM.',
        tags: ['ai-ml', 'python', 'computer-vision'],
        featured: false,
        collaborative: false,
        github: 'https://github.com/xhamera1/brain-tumor-mri-cnn-optimization'
    },
    {
        id: 'mot-tracking',
        title: 'Multi-Object Tracking Algorithm (Collaborative)',
        description: 'Tracking-by-detection MOT pipeline linking pre-computed person detections into trajectories using Kalman filtering, Hungarian assignment, and ByteTrack-style association, evaluated with MOTA.',
        techSummary: 'Python, Kalman Filter, Hungarian Algorithm, NumPy.',
        tags: ['ai-ml', 'python', 'computer-vision', 'collaborative'],
        featured: false,
        collaborative: true,
        github: 'https://github.com/xhamera1/multi-object-tracking-algorithm'
    },
    {
        id: 'crypto-fraud',
        title: 'Crypto Transaction Fraud Analysis',
        description: 'GNN-based node classification on the Elliptic Bitcoin dataset to detect illicit cryptocurrency transactions, comparing MLP, GCN, GraphSAGE, and GAT models.',
        techSummary: 'Python, PyTorch, PyTorch Geometric, GCN, GraphSAGE, GAT.',
        tags: ['ai-ml', 'python'],
        featured: false,
        collaborative: false,
        github: 'https://github.com/xhamera1/crypto-transaction-fraud-analysis'
    },
    {
        id: 'todo-app',
        title: 'TODO-Web-App',
        description: 'A web application for task management (TODO list) created using the Spring Boot framework. Implements RESTful CRUD (Create, Read, Update, Delete) operations for efficient task management. Focuses on backend logic and API design.',
        techSummary: 'Java, Spring Boot, REST API, JUnit, MySQL, Thymeleaf.',
        tags: ['java', 'web'],
        featured: false,
        collaborative: false,
        github: 'https://github.com/xhamera1/TODO-Web-App'
    },
    {
        id: 'swift-api',
        title: 'SWIFT Code API',
        description: 'A RESTful API service for managing and querying SWIFT/BIC (Bank Identifier Code) data. The application parses SWIFT code information from a CSV file during initialization, stores it in a MySQL database, and exposes endpoints to retrieve, add, and delete SWIFT code entries with comprehensive validation and error handling.',
        techSummary: 'Java, Spring Boot, REST API, MySQL, Docker, Apache Commons CSV.',
        tags: ['java', 'web'],
        featured: false,
        collaborative: false,
        github: 'https://github.com/xhamera1/swift-code-api'
    },
    {
        id: 'bank-churn',
        title: 'Bank Customer Churn Prediction',
        description: 'End-to-end ML project predicting bank customer churn, with EDA, preprocessing, and hyperparameter-tuned XGBoost and MLP models compared on tabular banking data.',
        techSummary: 'Python, Scikit-learn, XGBoost, TensorFlow/Keras, Pandas, SHAP.',
        tags: ['ai-ml', 'python'],
        featured: false,
        collaborative: false,
        github: 'https://github.com/xhamera1/bank-customer-churn-prediction'
    },
    {
        id: 'poker-game',
        title: 'Java Network Poker Game',
        description: 'A networked version of the Five-Card Draw poker game implemented using Java Sockets. Features a Client/Server architecture, allowing multiple players to connect and play against each other over a network. Demonstrates understanding of network programming and basic game logic.',
        techSummary: 'Java, Sockets (TCP/IP).',
        tags: ['java'],
        featured: false,
        collaborative: false,
        github: 'https://github.com/xhamera1/Poker-Game'
    },
    {
        id: 'zipf-law',
        title: "Zipf's Law Analyzer",
        description: 'A statistical analysis toolkit to validate Zipf\'s Law on an English corpus (~100k words) with automated data collection, frequency analysis, and interactive web visualization. Features include automated corpus download from diverse sources, log-log slope analysis, coverage analysis for vocabulary comprehension, and co-occurrence network visualization.',
        techSummary: 'Python, Flask, Pandas, NumPy, Jinja2.',
        tags: ['python', 'web', 'ai-ml'],
        featured: false,
        collaborative: false,
        github: 'https://github.com/xhamera1/Zipf-s-law-for-natural-language'
    },
    {
        id: 'chubby',
        title: 'Chubby Programming Language (Collaborative)',
        description: 'An ongoing collaborative project focused on developing a compiler for a custom programming language targeting the Java Virtual Machine (JVM). Utilizes Java and the ANTLR4 parser generator for lexical analysis and parsing. Explores concepts of compiler construction and language design.',
        techSummary: 'Java, ANTLR4, JVM.',
        tags: ['java', 'collaborative'],
        featured: true,
        collaborative: true,
        github: 'https://github.com/karolbystrek/Chubby'
    },
    {
        id: 'toothbrush-defect',
        title: 'Toothbrush Bristle Defect Detection',
        description: 'Hybrid computer vision project for binary segmentation of toothbrush bristle defects, combining OpenCV preprocessing with a U-Net model, TTA, and post-processing for CodaBench IoU evaluation.',
        techSummary: 'Python, OpenCV, PyTorch, U-Net, Albumentations.',
        tags: ['ai-ml', 'python', 'computer-vision'],
        featured: false,
        collaborative: false,
        github: 'https://github.com/xhamera1/toothbrush-bristle-defect-detection'
    },
    {
        id: 'strips-ai',
        title: 'Strips-AI (Collaborative)',
        description: 'STRIPS forward planner for Blocks World puzzles, using A* search with a custom heuristic and subgoal decomposition to solve increasingly complex block-stacking problems.',
        techSummary: 'Python, AIPython, A* Search.',
        tags: ['ai-ml', 'python', 'collaborative'],
        featured: false,
        collaborative: true,
        github: 'https://github.com/xhamera1/Strips-AI'
    },
    {
        id: 'racing-agent',
        title: 'Racing Agent Gymnasium',
        description: 'Autonomous racing agent trained with SAC in the continuous CarRacing-v3 environment, using CNN-based visual observations and compared across hyperparameters and architectures.',
        techSummary: 'Python, Gymnasium, Stable-Baselines3, SAC, PyTorch.',
        tags: ['ai-ml', 'python', 'reinforcement-learning'],
        featured: false,
        collaborative: false,
        github: 'https://github.com/xhamera1/racing-agent-gymnasium'
    }
];
