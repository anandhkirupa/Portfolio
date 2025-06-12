import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUncharted } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faNetworkWired, faRobot } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Python",
    "PyTorch",
    "TensorFlow",
    "NumPy",
    "pandas",
    "scikit-learn",
    "seaborn",
    "matplotlib",
    "TensorBoard",
    "Torchinfo",
    "Wandb"
];

const labelsSecond = [
    "SQL (MySQL)",
    "Views",
    "Joins",
    "Aggregations",
    "Subqueries",
    "ER Diagrams",
    "Relational Schemas",
    "Normalization",
    "Power BI",
];

const labelsThird = [
    "LangChain",
    "FastAPI",
    "Groq",
    "Streamlit",
    "LLaMA",
    "DeepSeek",
    "Mistral(via Ollama)",
    "FAISS",
    "PyMuPDF",
    "Transformers",
    "SentenceTransformers",
    "HuggingFace",
    "dotenv"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faNetworkWired} size="3x"/>
                    <h3>Machine Learning & Deep Learning</h3>
                    <p>I have built and trained a wide range of neural network architectures from scratch using PyTorch, including CNNs (VGG-16, ResNet-18), RNNs, LSTMs, Autoencoders, and Transformers. My experience spans across tasks like image classification, sentiment analysis, time-series forecasting, and anomaly detection. I have also implemented models for real-world datasets like OCTMNIST, Yahoo S5, and Amazon/Yelp reviews, emphasizing model interpretability, performance tuning, and custom evaluation metrics.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faUncharted} size="3x"/>
                    <h3>Data Analytics & Data Visualization</h3>
                    <p>I engineered a full-stack analytics pipeline by designing and querying relational databases to derive insights into real-world retail operations. This project included advanced SQL querying (joins, aggregations, nested subqueries), ER modeling, and schema normalization. The results were integrated into interactive dashboards using Power BI, offering actionable visual insights into customer trends, product performance, and regional profitability.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>GenAI & RAG</h3>
                    <p>I’ve designed and deployed end-to-end GenAI systems using LangChain, FastAPI, and Ollama to automate dynamic report generation from multi-modal data sources. My work includes building RAG pipelines that integrate custom retrievers, chunking strategies, and prompt templates to deliver context-aware summarization and analysis. These systems integrate semantic chunking, vector search (FAISS), and multi-stage prompting to deliver accurate, context-rich outputs for unstructured PDF and website data.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;