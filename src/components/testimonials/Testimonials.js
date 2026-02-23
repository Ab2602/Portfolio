import React, { useState } from "react";
import { Fade } from "react-reveal";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Engineering Manager",
      role: "AppPerfect Corporation",
      content: "Abhinav transformed our deployment pipeline, reducing deployment time by 70%. His expertise in Kubernetes and Terraform has been invaluable for our infrastructure scaling.",
      rating: 5
    },
    {
      name: "Tech Lead",
      role: "Secure Meters Ltd",
      content: "Working with Abhinav on the SSO implementation was seamless. He delivered a robust solution that improved our security posture significantly.",
      rating: 5
    },
    {
      name: "DevOps Team Lead",
      role: "Previous Project",
      content: "Abhinav's observability module cut our monitoring setup time in half. The reusable Terraform modules he created are now standard across all our clusters.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-20 bg-base-200" id="testimonials">
      <div className="container mx-auto px-4">
        <Fade bottom duration={1000} distance="20px">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What People Say</h2>
            <p className="text-lg text-base-content/70">
              Feedback from colleagues and collaborators
            </p>
          </div>
        </Fade>

        <div className="max-w-4xl mx-auto">
          <Fade key={currentIndex} duration={500}>
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-lg text-base-content/90 italic mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                    <p className="text-base-content/70">{testimonials[currentIndex].role}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="btn btn-circle btn-outline btn-sm"
                      aria-label="Previous testimonial"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="btn btn-circle btn-outline btn-sm"
                      aria-label="Next testimonial"
                    >
                      →
                    </button>
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-primary w-8"
                          : "bg-base-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
