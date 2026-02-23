import React from "react";

const TechStackMarquee = () => {
  const techStack = [
    "Kubernetes", "Docker", "AWS", "GCP", "Terraform", "Jenkins",
    "GitLab CI", "Prometheus", "Grafana", "Datadog", "Helm", "Ansible",
    "Go", "Python", "Bash", "Linux", "PostgreSQL", "MongoDB", "Redis",
    "Kafka", "Nginx", "Teleport", "Slurm", "EKS", "GKE"
  ];

  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className="overflow-hidden bg-base-200/50 py-4 sm:py-6 lg:py-8 my-6 sm:my-8 lg:my-12 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-base-200 via-transparent to-base-200 z-10 pointer-events-none"></div>
      <div className="relative">
        <div className="flex animate-scroll gap-4 sm:gap-6 lg:gap-8" style={{ width: 'max-content' }}>
          {duplicatedStack.map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-base-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300 hover:scale-105"
            >
              <span className="text-sm sm:text-base lg:text-lg font-semibold text-base-content whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackMarquee;
