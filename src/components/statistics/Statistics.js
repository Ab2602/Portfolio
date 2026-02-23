import React, { useState, useEffect, useRef } from "react";
import { Fade } from "react-reveal";

const Statistics = () => {
  const stats = [
    {
      number: 70,
      suffix: "%",
      label: "Faster Deployments",
      icon: "⚡",
      description: "Reduced deployment time",
      color: "text-yellow-500"
    },
    {
      number: 60,
      suffix: "%",
      label: "Monitoring Setup",
      icon: "📊",
      description: "Faster cluster monitoring",
      color: "text-blue-500"
    },
    {
      number: 3,
      suffix: "+",
      label: "Production Clusters",
      icon: "☸️",
      description: "EKS & GKE clusters managed",
      color: "text-purple-500"
    },
    {
      number: 5,
      suffix: "+",
      label: "Microservices",
      icon: "🚀",
      description: "Scalable services deployed",
      color: "text-green-500"
    },
    {
      number: 40,
      suffix: "%",
      label: "Resource Efficiency",
      icon: "💾",
      description: "Better resource utilization",
      color: "text-pink-500"
    },
    {
      number: 100,
      suffix: "%",
      label: "Zero Downtime",
      icon: "✅",
      description: "Production reliability",
      color: "text-emerald-500"
    }
  ];

  const AnimatedCounter = ({ target, suffix, delay = 0 }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [isVisible]);

    useEffect(() => {
      if (isVisible) {
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let intervalId;

        const timer = setTimeout(() => {
          intervalId = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(intervalId);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }, delay);

        return () => {
          clearTimeout(timer);
          if (intervalId) clearInterval(intervalId);
        };
      }
    }, [isVisible, target, delay]);

    return (
      <span ref={ref} className="text-4xl font-bold text-primary mb-2">
        {count}{suffix}
      </span>
    );
  };

  return (
    <div className="py-20 bg-base-100" id="statistics">
      <div className="container mx-auto px-4">
        <Fade bottom duration={1000} distance="20px">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-base-content">Impact & Achievements</h2>
            <p className="text-lg text-base-content/70">
              Metrics that showcase real-world DevOps impact
            </p>
          </div>
        </Fade>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Fade bottom duration={1000} distance="20px" delay={index * 100} key={index}>
              <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer group">
                <div className="card-body items-center text-center">
                  <div className={`text-5xl mb-4 transition-transform duration-300 group-hover:scale-125 ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} delay={index * 100} />
                  <h4 className="text-xl font-semibold mb-2 text-base-content group-hover:text-primary transition-colors">
                    {stat.label}
                  </h4>
                  <p className="text-base-content/70 text-sm">{stat.description}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
