# 🚀 RateGenius AI

### Autonomous Creator Growth Platform powered by Multi-Agent AI

## 📌 Overview

RateGenius AI is an intelligent creator-growth platform that helps influencers, creators, brands, and marketing agencies make data-driven decisions through AI-powered automation.

The platform combines **Influencer Intelligence**, **Trend Discovery**, **Content Generation**, **Virality Prediction**, and **Brand Matching** into a single ecosystem powered by Multi-Agent AI.

Instead of relying on vanity metrics such as follower count, RateGenius AI evaluates creators based on authenticity, growth potential, audience quality, engagement signals, and content performance predictions.

---

## 🎯 Problem Statement

Brands invest billions in influencer marketing, yet selecting the right creator remains a challenge.

Current problems include:

* Fake followers and bot engagement
* Poor creator-brand matching
* Difficulty identifying emerging creators
* Time-consuming content research
* Lack of virality prediction before publishing
* Manual content creation workflows

RateGenius AI solves these challenges through autonomous AI agents that collaborate to provide actionable insights and content recommendations.

---

# ✨ Key Features

## 🔥 Trend Radar

Discover emerging topics before they become saturated.

Features:

* Trend discovery
* Trend ranking
* Opportunity scoring
* Growth velocity analysis
* Niche-specific recommendations

---

## 🎬 Content Studio

Generate platform-ready content instantly.

Generate:

* Reel Scripts
* Hooks
* Calls-to-Action
* LinkedIn Posts
* Instagram Captions
* Hashtags

---

## 📈 Virality Lab

Predict content performance before publishing.

Provides:

* Expected Reach
* Expected Likes
* Expected Shares
* Expected Saves
* Virality Score

---

## 👤 Influencer Intelligence

Analyze creator profiles using AI.

Metrics:

* Authenticity Score
* Engagement Score
* Audience Quality
* Growth Potential
* Posting Consistency

---

## 🤝 Brand Match Engine

Find ideal brand partnerships using AI-powered matching.

Provides:

* Brand Match Score
* Audience Alignment
* Campaign Success Probability
* Recommended Partnerships

---

# 🏗️ System Architecture

```text
                    ┌────────────────────┐
                    │    React Frontend   │
                    └──────────┬─────────┘
                               │
                               ▼
                    ┌────────────────────┐
                    │    FastAPI Server   │
                    └──────────┬─────────┘
                               │
                ┌──────────────┼──────────────┐
                ▼              ▼              ▼

        ┌────────────┐ ┌────────────┐ ┌────────────┐
        │Trend Agent │ │ContentAgent│ │ViralityAgent│
        └─────┬──────┘ └─────┬──────┘ └─────┬──────┘
              │              │              │
              └──────┬───────┴───────┬──────┘
                     ▼               ▼

              ┌─────────────────────────┐
              │   Brand Match Agent     │
              └────────────┬────────────┘
                           ▼

              ┌─────────────────────────┐
              │      Gemini API         │
              └────────────┬────────────┘
                           ▼

              ┌─────────────────────────┐
              │       Firebase          │
              └─────────────────────────┘
```

---

# 🤖 Multi-Agent Workflow

## 1. Trend Agent

Responsibilities:

* Discover trending topics
* Analyze emerging opportunities
* Score trends based on growth potential

Output:

```json
{
  "trend": "AI Agents",
  "score": 92
}
```

---

## 2. Content Agent

Responsibilities:

* Generate scripts
* Create captions
* Generate LinkedIn posts
* Create hashtags

Output:

```json
{
  "hook":"...",
  "script":"...",
  "linkedin":"...",
  "caption":"..."
}
```

---

## 3. Virality Agent

Responsibilities:

* Analyze content
* Predict engagement
* Generate Virality Score

Output:

```json
{
  "virality_score":89
}
```

---

## 4. Brand Match Agent

Responsibilities:

* Match creators with relevant brands
* Calculate partnership compatibility
* Estimate campaign success

Output:

```json
{
  "brand_match_score":95
}
```

---

# 🛠️ Tech Stack

### Frontend

* React.js
* Next.js
* Tailwind CSS
* ShadCN UI
* Framer Motion
* Recharts

### Backend

* Python
* FastAPI

### AI & Agents

* CrewAI
* Gemini 2.5 Flash

### Database

* Firebase Firestore
* Firebase Authentication

### Deployment

* Vercel
* Render / Railway

---

# 📂 Project Structure

```bash
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
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/rategenius-ai.git
cd rategenius-ai
```

---

## Backend Setup

```bash
cd backend

pip install -r requirements.txt
```

Create `.env`

```env
GEMINI_API_KEY=YOUR_API_KEY

FIREBASE_API_KEY=YOUR_FIREBASE_KEY

FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
```

Run Backend

```bash
uvicorn app:app --reload
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Run Frontend

```bash
npm run dev
```

---

# 🔌 API Endpoints

## Trend Discovery

```http
POST /api/trends
```

---

## Content Generation

```http
POST /api/generate-content
```

---

## Virality Prediction

```http
POST /api/predict-virality
```

---

## Brand Matching

```http
POST /api/brand-match
```

---

## Creator Twin

```http
POST /api/creator-twin
```

---

# 📊 Future Enhancements

* Real-time social media integrations
* Instagram API support
* YouTube analytics
* TikTok trend tracking
* AI video generation
* Voiceover generation
* Automated publishing
* Influencer campaign management
* Performance learning feedback loops
* Advanced ML-based creator scoring

---

# 🌍 Business Impact

RateGenius AI helps:

### Brands

* Discover high-potential creators
* Reduce campaign risk
* Improve ROI

### Creators

* Identify viral opportunities
* Generate content faster
* Grow audience intelligently

### Agencies

* Streamline influencer discovery
* Automate campaign planning
* Improve creator-brand matching

---

# 👥 Team

Built for **Ratefluencer AI Hackathon 2026**

Developed using:

* CrewAI
* Gemini AI
* React
* FastAPI
* Firebase

---

# 📜 License

This project is developed for educational and hackathon purposes.

---

### ⭐ If you like this project, consider giving it a star on GitHub!
