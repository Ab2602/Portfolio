import React from "react";
import {motion} from "framer-motion";
import "./DevOpsVisual.scss";

const stages = [
  { label: "Code", icon: "</>" },
  { label: "Build", icon: "◇" },
  { label: "Test", icon: "✓" },
  { label: "Deploy", icon: "→" },
  { label: "Monitor", icon: "◉" }
];

export default function DevOpsVisual({ isDark }) {
  return (
    <div className="devops-visual" aria-hidden="true">
      <div className="devops-visual__pipeline">
        {stages.map((stage, i) => (
          <React.Fragment key={stage.label}>
            <motion.div
              className="devops-visual__stage"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.08 }}
            >
              <span className="devops-visual__icon">{stage.icon}</span>
              <span className="devops-visual__label">{stage.label}</span>
            </motion.div>
            {i < stages.length - 1 && (
              <motion.div
                className="devops-visual__connector"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
              >
                <span className="devops-visual__flow" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
      <p className="devops-visual__tagline">CI/CD · Kubernetes · Cloud</p>
    </div>
  );
}
