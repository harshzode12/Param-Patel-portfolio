import React from "react";
import "./CaseStudyPage.css";
import Navbar from "./Navbar";

export default function CaseStudyPage() {
  const sections = [
    {
      company: "@ Metanoia Solutions",
      role: "UI/UX Designer",
      date: "January 2025",
      ticker: "Aura Eats",
       colors: {
        peach: "#EFCAB7",
        blue: "#DAEFFF",
        beige: "#FDEEC7",
        green: "#D0FFD4"
      },
      title1: "Designed a Flexible Food Ecosystem that Combines",
      title2: "Instant Ordering with Smart Meal Subscriptions",
      description:
        "Aura Eats is a hybrid food platform designed to simplify daily meal experiences by integrating on-demand food ordering with flexible subscription-based meal planning. It enables users to instantly order food or subscribe to structured daily meals while maintaining the freedom to explore different restaurants and cloud kitchens. The platform introduces a Smart Meal Rotation system that reduces decision fatigue, enhances variety, and builds consistent eating routines. By combining personalized recommendations, seamless ordering, and adaptive subscription models, Aura Eats delivers a balanced solution that improves convenience, choice, and overall user experience.",
      disciplines: "UI/UX Design · Product Design · Prototyping · Researcher",
      roleText:
        "I led the end to end design process for Aura Eats, contributing across multiple stages of product development covering product strategy and user research to create a seamless and flexible meal experience.",
     
        cards: 
        [
        { img: "/assets/phone1.png", 
          title: "Daily Variety Onboarding Experience", 
          desc: "A welcoming introduction that showcases the core value of the app meal flexibility, variety, and everyday convenience. It encourages users to explore different kitchens, enjoy fresh meals, and break free from routine with a seamless, no-cooking experience.", 
          bg: "peach" 
        },

        { img: "/assets/phone2.png", 
          title: "Personalized Food Discovery", 
          desc: "A recommendation focused browsing experience that surfaces relevant restaurants and dishes based on user behavior, ratings, and preferences helping users make faster, more satisfying decisions.", 
          bg: "blue"
         },
         
        { img: "/assets/phone3.png", 
          title: "Flexible Subscription Plans", 
          desc: "Choose from tailored plans with exclusive perks, daily meal variety, and premium benefits all in one seamless experience.", 
          bg: "beige" 
        },

        { img: "/assets/phone4.png",
          title: "Smart Checkout & Customization",
          desc: "A frictionless checkout designed to simplify ordering by enabling quick quantity adjustments, personalized cooking instructions, and cost breakdowns ensuring clarity and efficiency in every transaction.",
          bg: "green"
        }

      ]
    },

    {
      company: "@ Metanoia Solutions",
      role: "UI/UX Designer",
      date: "August 2025",
      ticker: "PackPlanGo",
      colors: {
        peach: "#CAC5E2",
        blue: "#EEE7B7",
        beige: "#F2C8C8",
        green: "#AACCE7"
      },
      title1: "Reducing Travel Planning Complexity through AI-Driven",
      title2: "Insights and Automated Itinerary Generation",
      description:
        "PackPlanGo is an intelligent travel planning platform designed to simplify and automate the end-to-end trip discovery and planning process. It integrates AI-powered recommendation engines, and automated itinerary generation to help users efficiently plan personalized travel experiences. By analyzing user preferences, travel styles, budgets, and timing constraints, the platform curates relevant destinations, compares travel packages, and structures optimized itineraries in a single workflow. This enables travelers to reduce manual research, avoid information overload, and make confident decisions through a streamlined, user-centric planning experience.",
      disciplines: "UI/UX Design · Prototyping · Researcher",
      roleText:
        "Designed and researched analyzing user needs, travel platforms. Created wireframes, and UI designs to simplify trip planning and enhance usability. Collaborated with cross-functional teams to implement AI-driven features and optimize the user experience.",
      
        cards: [
        { img: "/assets/travel1.png",
          title: "Immersive Destination Discovery", 
          desc: "A visually rich hero section that highlights featured destinations with compelling storytelling, setting the tone for inspiration-driven and AI-curated travel planning.", 
          bg: "blue" 
        },

        { img: "/assets/travel2.png", 
          title: "AI-Powered Trip Discovery", 
          desc: "An AI-driven entry experience where users start with a destination and let the system intelligently generate personalized travel recommendations and itineraries.", 
          bg: "peach" 
        },

        { img: "/assets/travel3.png", 
          title: "Discover Your Way to Travel", 
          desc: "Browse curated trip categories such as adventure, cultural, family, and beach holidays, enabling users to explore destinations based on their preferred travel style.", 
          bg: "green" 
        },

        { img: "/assets/travel4.png", 
          title: "Complete Package Overview", 
          desc: "A structured package summary presenting trip duration, itinerary highlights, pricing, and inclusions, allowing users to understand the entire experience at a glance.", 
          bg: "beige" 
        }
      ]
    }
  ];

  return (
    <div>
      <Navbar />

      {/* 🔁 LOOP ALL SECTIONS */}
      {sections.map((sec, index) => (
        <div className={`case-container section-${index}`} key={index}>

          {/* Top Bar */}
          <div className="top-bar">
            <div className="company">{sec.company}</div>
            <div className="role">{sec.role}</div>
            <div className="date">{sec.date}</div>
          </div>

          {/* Ticker */}
            <div className="ticker">
              <div className="ticker-track">
                {Array(20).fill(sec.ticker).map((item, i) => (
                  <React.Fragment key={i}>
                    <span className="ticker-text">{item}</span>
                    <span className="ticker-dot">*</span>
                  </React.Fragment>
                ))}
              </div>

              {/* duplicate for seamless scroll */}
              <div className="ticker-track">
                {Array(20).fill(sec.ticker).map((item, i) => (
                  <React.Fragment key={"dup-" + i}>
                    <span className="ticker-text">{item}</span>
                    <span className="ticker-dot">*</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

          {/* Title */}
          <h1 className="main-title">
            <span>{sec.title1}</span>
            <span>{sec.title2}</span>
          </h1>

          {/* Description */}
          <p className="description">{sec.description}</p>

          {/* Info Row */}
          <div className="info-row">
            <div className="info-block">
              <h3>Disciplines</h3>
              <p>{sec.disciplines}</p>
            </div>

            <div className="info-block role-block">
              <h3>My Role</h3>
              <p>{sec.roleText}</p>
            </div>
          </div>

          {/* GRID */}
          <div className="grid">

            <div className="grid-row">
              <div className="card small">
                <div 
                className="image-box"
                style={{ background: sec.colors[sec.cards[0].bg] }}
              >
                  <img src={sec.cards[0].img} alt="" />
                </div>
                <h3>{sec.cards[0].title}</h3>
                <p>{sec.cards[0].desc}</p>
              </div>

              <div className="card big">
                <div 
                className="image-box"
                style={{ background: sec.colors[sec.cards[1].bg] }}
              >
                  <img src={sec.cards[1].img} alt="" />
                </div>
                <h3>{sec.cards[1].title}</h3>
                <p>{sec.cards[1].desc}</p>
              </div>
            </div>

            <div className="grid-row reverse">
              <div className="card big">
                <div 
                className="image-box"
                style={{ background: sec.colors[sec.cards[2].bg] }}
              >
                  <img src={sec.cards[2].img} alt="" />
                </div>
                <h3>{sec.cards[2].title}</h3>
                <p>{sec.cards[2].desc}</p>
              </div>

              <div className="card small">
                <div 
                  className="image-box"
                  style={{ background: sec.colors[sec.cards[3].bg] }}
                >
                  <img src={sec.cards[3].img} alt="" />
                </div>
                <h3>{sec.cards[3].title}</h3>
                <p>{sec.cards[3].desc}</p>
              </div>
            </div>

          </div>
        </div>
      ))}

     {/* 🔻 BOTTOM SECTION */}
      <div className="bottom-wrapper">
        <div className="bottom-section">

          <div className="bottom-card yellow">
            <div className="card-top">
              <div className="meta">
                <span>UI/UX Designer · VidhyaVault</span>
                <span>2024</span>
              </div>

              <h2>
                Lowering barriers to academic resource management through AI powered learning automation.
              </h2>
            </div>

            <div className="bottom-image">
              <img src="/assets/app1.png" alt="" />
            </div>

            <div className="card-bottom">
              <h4>Unorganized learning materials.</h4>
              <p>
                An intelligent platform that streamlines study resources and enhances learning through smart content organization and personalized academic support.
              </p>
            </div>
          </div>


          <div className="bottom-card pink">
            <div className="card-top">
              <div className="meta">
                <span>UI/UX · Smarter Admin Management</span>
                <span>2023</span>
              </div>

              <h2>
                Designing an Admin Management Platform to Streamline Operations and Reduce Workload.
              </h2>
            </div>

            <div className="bottom-image">
              <img src="/assets/app2.png" alt="" />
            </div>

            <div className="card-bottom">
              <h4>Smarter Admin Management</h4>
              <p>
                Manual processes slow down educational institutions. This admin dashboard automates operations and cuts administrative effort by 60%.
              </p>
            </div>
          </div>


          <div className="bottom-card purple">
            <div className="card-top">
              <div className="meta">
                <span>UI/UX Designer · NEOX</span>
                <span>2024</span>
              </div>

              <h2>
                A visually immersive movie ticket booking experience designed for speed, clarity, and delight.
              </h2>
            </div>

            <div className="bottom-image">
              <img src="/assets/app3.png" alt="" />
            </div>

            <div className="card-bottom">
              <h4>A Cinematic Booking Experience</h4>
              <p>
                Movie booking apps are often functional but forgettable. NEOX blends neon aesthetics with simple interactions to enhance the booking experience.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}