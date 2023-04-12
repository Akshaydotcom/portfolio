import React from "react";
import "./ContactMe.css";
export const ContactMe = () => {
  return (
    <>
      <div className="main-contact" id="ContactMe">
        <h2>Wanna get in touch?</h2>
        <p>
          If you liked my work, or want to know more, you can contact me through
          these:
          <ul>
            <li className="LinkedIn">
              <a href="https://www.linkedin.com/in/akshaygb2508/">
              <svg id="Layer_1" version="1.1" viewBox="0 0 512 512"><g><g><path class="st0" d="M182.8,384V212.9h-54.9V384H182.8L182.8,384z M157.4,187c18.3,0,29.7-13.1,29.7-29.5    c-0.3-16.7-11.4-29.5-29.4-29.5c-18,0-29.7,12.8-29.7,29.5c0,16.4,11.4,29.5,29,29.5H157.4L157.4,187z"/><path class="st0" d="M320.6,209c-29.1,0-41.6,16.4-49.6,27.8V213h-55v171h55v-97.4c0-5,0.4-10,1.9-13.5c4-10,13-20.3,28.2-20.3    c19.9,0,27.9,15.3,27.9,37.7V384h55v-99.9C384,232.8,356.8,209,320.6,209z"/></g><path d="M417.2,64H96.8C79.3,64,64,76.6,64,93.9v321.1c0,17.4,15.3,32.9,32.8,32.9h320.3c17.6,0,30.8-15.6,30.8-32.9V93.9   C448,76.6,434.7,64,417.2,64z M414,416c-1.1,0-313.1,0-314.9,0s-3.1-1.4-3.1-3.1S96,99.1,96,98s1-2,2-2s315,0,316,0s2,1,2,2   c0,23.3,0,314.9,0,316C416,414.9,415.1,416,414,416z"/></g></svg>
              </a>
            </li>
            <li className="Github">
              <a href="https://github.com/Akshaydotcom">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </li>
            <li className="Email">
              <a href="mailto:abhandary@scu.edu">
                <svg
                  id="Layer_1"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,128v256h384V128H64z M256,267.9L93.2,144h325.6L256,267.9z M80,368V154.1l115.1,87.6L127,319l2,2l78.9-69.6L256,288  l48.1-36.6L383,321l2-2l-68.1-77.4L432,154.1V368H80z" />
                </svg>
              </a>
            </li>
          </ul>
        </p>
      </div>
    </>
  );
};
