import React, { useState, useEffect } from "react";

const commands = [
  { prompt: "$", command: "whoami", output: "Abhinav Tripathi" },
  { prompt: "$", command: "cat about.txt", output: "DevOps Engineer | Kubernetes | AWS | GCP | Terraform" },
  { prompt: "$", command: "kubectl get pods", output: "All systems operational ✓" },
  { prompt: "$", command: "terraform plan", output: "Infrastructure ready for deployment" },
  { prompt: "$", command: "echo $SKILLS", output: "K8s, Docker, CI/CD, Monitoring, IaC" },
];

const TerminalIntro = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLine >= commands.length) {
      setIsTyping(false);
      return;
    }

    const currentCommand = commands[currentLine];
    const fullText = `${currentCommand.prompt} ${currentCommand.command}`;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
          setDisplayedText("");
        }, 1000);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentLine]);

  return (
    <div className="w-full max-w-xl shadow-xl rounded-lg overflow-hidden" style={{ backgroundColor: '#1e1e1e' }}>
      <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2" style={{ backgroundColor: '#2d2d2d', borderBottom: '1px solid #1e1e1e' }}>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
        <span className="ml-3 sm:ml-4 text-xs sm:text-sm font-mono" style={{ color: '#a0a0a0' }}>Terminal</span>
      </div>
      
      <pre className="p-3 sm:p-4 m-0 overflow-x-auto" style={{ backgroundColor: '#1e1e1e', color: '#00ff00' }}>
        <code className="font-mono text-xs sm:text-sm" style={{ color: '#00ff00' }}>
          {commands.slice(0, currentLine).map((cmd, idx) => (
            <div key={idx} className="mb-1.5 sm:mb-2">
              <span style={{ color: '#00ff00' }}>{cmd.prompt}</span>{" "}
              <span style={{ color: '#ffffff' }}>{cmd.command}</span>
              {cmd.output && (
                <div className="mt-0.5 sm:mt-1 ml-2 sm:ml-4" style={{ color: '#ffffff' }}>{cmd.output}</div>
              )}
            </div>
          ))}
          {isTyping && currentLine < commands.length && (
            <div>
              <span style={{ color: '#00ff00' }}>{commands[currentLine]?.prompt}</span>{" "}
              <span style={{ color: '#ffffff' }}>{displayedText.substring(commands[currentLine]?.prompt.length + 1)}</span>
              <span className="animate-pulse" style={{ color: '#00ff00' }}>▊</span>
            </div>
          )}
          {!isTyping && (
            <div className="mt-1.5 sm:mt-2" style={{ color: '#ffffff' }}>
              <span style={{ color: '#00ff00' }}>$</span> Ready to deploy infrastructure
            </div>
          )}
        </code>
      </pre>
    </div>
  );
};

export default TerminalIntro;
