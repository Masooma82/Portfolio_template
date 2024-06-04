/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/last.jpeg";

const imageAltText = "portfolio_aesthetic";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Virtual Memory Verification -SV32",
    description:
      "Put a considerable effort in writing the compliance tests for superpage and two-level pages in both user and supervisor modes, emphasizing the importance of thorough testing to ensure correct implementation of the advanced memory management feature. These compliance tests encompass critical aspects of virtual memory management, including address translation, permissions, and page faults resulting from the manipulation of various bits within the Page Table Entry (PTE)",
    url: "https://github.com/Masooma82/riscv-arch-test/tree/main/riscv-test-suite/rv32i_m/vm_test/src",
  },
  {
    title: "Running Microbenchmarks on UETRV_PCORE",
    description:
      "Run micrbenchmarks including execution, control, memory, dependency chain tests on UETRV_PCORE and calculate IPC",
    url: "https://drive.google.com/drive/folders/1X7YdP5yO0QGKc3ZWDZhaOwBt2TZon4xL?usp=sharing",
  },
  {
    title: "Boot Linux on UETRV_PCORE",
    description:
      "Boot Linux on the UETRV-PCORE with FPGA. Employing OpenSBI version 0.9 as the first-level bootloader and leveraging Buildroot 2021.05 for the root file system, incorporating Busybox 1.33, ensures an optimized environment. The utilization of the GNU toolchain riscv32-unknown-linux-gnu and Linux kernel version 6.1, directly linked into OpenSBI, the seamless transfer of the OS image via UART connection showcases precision and reliability in the bootstrapping process.",
    url: "https://drive.google.com/drive/folders/1tTQ5KfA8pHPaUaokWjBegRBqb8XkZi5t?usp=sharing",
  },
  {
    title: "Pakistan Sign Language (PSL) recognition using Mediapipe and tensorflow",
    description:
      "Introduce an innovative approach to Pakistan Sign Language (PSL) recognition, utilizing advanced technologies like Mediapipe and TensorFlow to efficiently interpret PSL gestures. By combining real-time hand gesture tracking with machine learning models, the project successfully achieved high accuracy in recognizing and categorizing intricate PSL gestures, offering a promising tool for improving communication accessibility for individuals with hearing impairments.",
    url: "https://github.com/Masooma82/hand-gesture-recognition-mediapipe",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
