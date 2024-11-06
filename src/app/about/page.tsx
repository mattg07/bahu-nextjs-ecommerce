import React from "react";
export const metadata = {
  title: "About Us",
}
function About() {
  return (
    <div className="container mx-auto p-8 w-2/4">
      <h1 className="text-2xl font-bold mb-6">
        About <span className="text-orange-500">US</span>
      </h1>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-lg">
          At BAHU, our mission is to provide the best products and services to
          our customers. We strive to ensure the highest quality and
          satisfaction with every purchase.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
        <p className="text-lg">
          Founded in 2010, BAHU started as a small business with a big dream.
          Over the years, we have grown significantly, but our core values of
          quality, integrity, and customer satisfaction have remained the same.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Meet the Team</h2>
        <p className="text-lg">
          Our team is composed of dedicated professionals who are passionate
          about what they do. From our customer service representatives to our
          product designers, everyone at BAHU is committed to providing the best
          possible experience for our customers.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-lg">
          Have any questions or concerns? Feel free to reach out to us at{" "}
          <a href="mailto:contact@bahu.com" className="text-blue-500">
            contact@bahu.com
          </a>
          . We are here to help!
        </p>
      </div>
    </div>
  );
}

export default About;
