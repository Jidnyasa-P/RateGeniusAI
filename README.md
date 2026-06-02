# 🚀 RateGenius AI

Autonomous Creator Growth Platform Powered by Multi-Agent AI

## 📖 Overview

RateGenius AI is an intelligent creator-growth platform that helps influencers, brands, and agencies make smarter decisions through AI-powered automation.

The platform combines Influencer Intelligence, Trend Discovery, Content Generation, Virality Prediction, and Brand Matching into a single ecosystem powered by Multi-Agent AI.

Unlike traditional influencer platforms that rely on vanity metrics such as follower count, RateGenius AI evaluates creators based on authenticity, engagement quality, audience relevance, growth potential, and content performance predictions.

---

🎯 Problem Statement

Influencer marketing has become one of the fastest-growing marketing channels, yet brands and creators continue to face significant challenges.

Brands struggle with:

- Identifying authentic influencers
- Detecting fake followers and engagement
- Predicting campaign success
- Finding emerging creators before they become mainstream

Creators struggle with:

- Discovering trending topics
- Generating engaging content consistently
- Predicting content performance
- Finding suitable brand collaborations

Current solutions are fragmented, reactive, and heavily dependent on manual research.

---

💡 Solution

RateGenius AI provides an end-to-end AI-powered ecosystem that enables:

- Trend Discovery
- Influencer Analysis
- Content Generation
- Virality Prediction
- Brand Matching
- Growth Recommendations

The platform leverages autonomous AI agents that collaborate to generate insights and recommendations in real time.

---

✨ Key Features

🔥 Trend Radar

Discover emerging trends before they become saturated.

Features:

- Trend Discovery
- Opportunity Detection
- Trend Scoring
- Growth Velocity Analysis

---

🎬 Content Studio

Generate platform-ready content instantly.

Generate:

- Reel Scripts
- Hooks
- LinkedIn Posts
- Instagram Captions
- Hashtags
- Calls-to-Action

---

📈 Virality Lab

Predict content performance before publishing.

Outputs:

- Expected Reach
- Expected Likes
- Expected Shares
- Expected Saves
- Virality Score

---

👤 Influencer Intelligence

Analyze creators using AI-powered metrics.

Metrics:

- Authenticity Score
- Engagement Score
- Audience Quality
- Growth Potential
- Posting Consistency

---

🤝 Brand Match Engine

Find the most suitable brand partnerships.

Outputs:

- Brand Match Score
- Audience Alignment
- Campaign Success Probability

---

🎯 Creator Twin™

A personalized AI growth advisor.

Provides:

- Content Recommendations
- Posting Strategy
- Growth Opportunities
- Brand Recommendations
- Creator Roadmap

---

🏗️ System Architecture

Frontend (Next.js + React)
            │
            ▼
      FastAPI Backend
            │
            ▼
     CrewAI Orchestrator
            │
 ┌──────────┼──────────┐
 ▼          ▼          ▼

Trend     Content    Virality
Agent      Agent      Agent

            │
            ▼

      Brand Match
          Agent

            │
            ▼

       Gemini API

            │
            ▼

      Firebase DB

---

🤖 Multi-Agent Architecture

Trend Agent

Responsibilities:

- Discover emerging trends
- Analyze opportunities
- Generate Trend Scores

Content Agent

Responsibilities:

- Generate scripts
- Create social media posts
- Generate captions and hashtags

Virality Agent

Responsibilities:

- Predict engagement
- Estimate reach
- Generate Virality Scores

Brand Match Agent

Responsibilities:

- Match creators with brands
- Calculate partnership compatibility
- Estimate campaign success

---

🛠️ Technology Stack

Frontend

- React.js
- Next.js
- Tailwind CSS
- ShadCN UI
- Framer Motion
- Recharts

Backend

- Python
- FastAPI

AI & Agents

- CrewAI
- Gemini 2.5 Flash

Database

- Firebase Firestore
- Firebase Authentication

Deployment

- Vercel
- Render

---

📂 Project Structure

RateGeniusAI/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── services/
│
├── backend/
│   ├── agents/
│   │   ├── trend_agent.py
│   │   ├── content_agent.py
│   │   ├── virality_agent.py
│   │   └── brand_agent.py
│   │
│   ├── crews/
│   │   └── main_crew.py
│   │
│   ├── api/
│   ├── services/
│   └── app.py
│
└── README.md

---

🚀 Installation

Clone Repository

git clone https://github.com/your-username/rategenius-ai.git

cd rategenius-ai

---

Backend Setup

cd backend

pip install -r requirements.txt

Create a ".env" file:

GEMINI_API_KEY=your_api_key

FIREBASE_API_KEY=your_key

FIREBASE_PROJECT_ID=your_project_id

Run backend:

uvicorn app:app --reload

---

Frontend Setup

cd frontend

npm install

Run frontend:

npm run dev

---

🔌 API Endpoints

Trend Discovery

POST /api/trends

Content Generation

POST /api/generate-content

Virality Prediction

POST /api/predict-virality

Brand Matching

POST /api/brand-match

Creator Twin

POST /api/creator-twin

---

📊 Results

Trend Discovery

- Detects high-growth content opportunities
- Generates trend scores

Content Generation

- Produces ready-to-publish content
- Reduces content creation time

Virality Prediction

- Estimates engagement metrics
- Helps creators optimize content before publishing

Brand Matching

- Recommends relevant brand partnerships
- Improves collaboration success rates

---

🌟 Future Enhancements

Short-Term

- Instagram API Integration
- YouTube Analytics
- TikTok Trend Monitoring
- Advanced Influencer Scoring

Medium-Term

- AI Video Generation
- Voiceover Generation
- Automated Publishing

Long-Term

- Autonomous Creator Growth Agent
- Self-Learning Recommendation Engine
- Creator Performance Feedback Loops

---

🌍 Business Impact

For Brands

- Better creator discovery
- Reduced campaign risk
- Improved ROI

For Creators

- Faster content creation
- Smarter growth decisions
- Better monetization opportunities

For Agencies

- Streamlined influencer management
- Automated campaign planning
- Improved creator-brand matching

---

👥 Team

Built for Ratefluencer AI Hackathon 2026

Developed using:

- CrewAI
- Gemini AI
- React
- FastAPI
- Firebase

---

📜 License

This project is developed for educational and hackathon purposes.

---

⭐ If you found this project interesting, consider starring the repository.