import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  // Standard Letter page: 8.5 x 11 inches = 612 x 792 points
  const page = pdfDoc.addPage([612, 792]);
  const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const timesRomanItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const { width, height } = page.getSize();
  const leftMargin = 38;
  const rightMargin = 574;
  const contentWidth = rightMargin - leftMargin;

  let y = height - 36;

  // Title: Kavin Sivasubramanian
  const name = 'Kavin Sivasubramanian';
  const nameSize = 20;
  const nameWidth = timesRomanBold.widthOfTextAtSize(name, nameSize);
  page.drawText(name, {
    x: (width - nameWidth) / 2,
    y,
    size: nameSize,
    font: timesRomanBold,
    color: rgb(0, 0, 0),
  });

  y -= 14;

  // Contact line
  const contactSize = 9.0;
  const contactParts = [
    { text: 'Atlanta, GA | (470) 892-1812 | kavinsivasu@gmail.com | US Permanent Resident | ', isLink: false },
    { text: 'Linkedin', isLink: true, url: 'https://www.linkedin.com/in/kavin-siva/' },
    { text: ' | ', isLink: false },
    { text: 'Portfolio', isLink: true, url: 'https://kavin-siva-portfolio.vercel.app/' },
    { text: ' | ', isLink: false },
    { text: 'GitHub', isLink: true, url: 'https://github.com/kavin-siva' },
  ];

  let totalContactWidth = 0;
  for (const part of contactParts) {
    totalContactWidth += timesRoman.widthOfTextAtSize(part.text, contactSize);
  }

  let contactX = (width - totalContactWidth) / 2;
  for (const part of contactParts) {
    const w = timesRoman.widthOfTextAtSize(part.text, contactSize);
    const color = part.isLink ? rgb(0.04, 0.32, 0.77) : rgb(0, 0, 0);
    page.drawText(part.text, {
      x: contactX,
      y,
      size: contactSize,
      font: timesRoman,
      color,
    });
    if (part.isLink) {
      page.drawLine({
        start: { x: contactX, y: y - 1 },
        end: { x: contactX + w, y: y - 1 },
        thickness: 0.5,
        color: rgb(0.04, 0.32, 0.77),
      });
    }
    contactX += w;
  }

  y -= 6;

  // Horizontal line under header
  page.drawLine({
    start: { x: leftMargin, y },
    end: { x: rightMargin, y },
    thickness: 0.75,
    color: rgb(0, 0, 0),
  });

  y -= 10;

  function drawSectionHeading(heading: string) {
    page.drawText(heading, {
      x: leftMargin,
      y,
      size: 10.0,
      font: timesRomanBold,
      color: rgb(0, 0, 0),
    });
    y -= 2.5;
    page.drawLine({
      start: { x: leftMargin, y },
      end: { x: rightMargin, y },
      thickness: 0.75,
      color: rgb(0, 0, 0),
    });
    y -= 10;
  }

  function drawEntryHeader(boldPart: string, restPart: string, datePart: string) {
    const boldW = timesRomanBold.widthOfTextAtSize(boldPart, 9.4);
    page.drawText(boldPart, {
      x: leftMargin,
      y,
      size: 9.4,
      font: timesRomanBold,
      color: rgb(0, 0, 0),
    });
    page.drawText(restPart, {
      x: leftMargin + boldW,
      y,
      size: 9.4,
      font: timesRoman,
      color: rgb(0, 0, 0),
    });
    const dateW = timesRoman.widthOfTextAtSize(datePart, 9.4);
    page.drawText(datePart, {
      x: rightMargin - dateW,
      y,
      size: 9.4,
      font: timesRoman,
      color: rgb(0, 0, 0),
    });
    y -= 10.5;
  }

  function wrapText(text: string, maxWidth: number, font: any, size: number) {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  function drawBullet(text: string, boldPrefix?: string) {
    const bulletIndent = leftMargin + 10;
    const textIndent = leftMargin + 18;
    const textWidth = rightMargin - textIndent;
    const fontSize = 8.9;
    const lineHeight = 10.8;

    // Draw bullet dot as circle
    page.drawCircle({
      x: bulletIndent + 1.5,
      y: y + 2.5,
      size: 1.7,
      color: rgb(0, 0, 0),
    });

    if (boldPrefix) {
      const fullText = `${boldPrefix} ${text}`;
      const lines = wrapText(fullText, textWidth, timesRoman, fontSize);
      const boldPrefixW = timesRomanBold.widthOfTextAtSize(boldPrefix, fontSize);

      for (let i = 0; i < lines.length; i++) {
        if (i === 0) {
          page.drawText(boldPrefix, {
            x: textIndent,
            y,
            size: fontSize,
            font: timesRomanBold,
            color: rgb(0, 0, 0),
          });
          const remainingFirstLine = lines[0].slice(boldPrefix.length);
          page.drawText(remainingFirstLine, {
            x: textIndent + boldPrefixW,
            y,
            size: fontSize,
            font: timesRoman,
            color: rgb(0, 0, 0),
          });
        } else {
          page.drawText(lines[i], {
            x: textIndent,
            y,
            size: fontSize,
            font: timesRoman,
            color: rgb(0, 0, 0),
          });
        }
        y -= lineHeight;
      }
    } else {
      const lines = wrapText(text, textWidth, timesRoman, fontSize);
      for (const line of lines) {
        page.drawText(line, {
          x: textIndent,
          y,
          size: fontSize,
          font: timesRoman,
          color: rgb(0, 0, 0),
        });
        y -= lineHeight;
      }
    }
    y -= 0.8; // minor spacing between bullets
  }

  // --- EDUCATION ---
  drawSectionHeading('EDUCATION');
  drawEntryHeader('Georgia Institute of Technology', ', Atlanta, GA, GPA: 3.92', 'December 2027');
  drawBullet(
    'Bachelor of Computer Engineering (Concentrated in Cybersecurity and Distributed Systems/Software Design).',
    'Major:'
  );
  drawBullet(
    'Python, Java, C, JavaScript, SQL, Bash/Shell, React, NumPy, Data Structures & Algorithms, Object-Oriented Design, Full-Stack Development, Frontend Development, Backend Development, REST API Design, API Integration, Application Architecture, Client-Server Architecture, Databases (MySQL, MongoDB), Software Testing, Unit Testing, Code Review, Debugging, Git/GitHub, Jenkins, CI/CD, Linux/Unix, AWS, .NET, Agile/Scrum, SDLC.',
    'Technical Skills:'
  );

  y -= 4;

  // --- PROFESSIONAL EXPERIENCE ---
  drawSectionHeading('PROFESSIONAL EXPERIENCE');

  drawEntryHeader('Fiserv', ', Technical Product Manager Intern (AI/ML development), Alpharetta, GA', 'June 2026 - August 2026');
  drawBullet('Engineered 4 full-stack AI/ML automation agents using Python, NumPy, GitHub Copilot & Claude Code, architecting scripting logic and exception handling for API integration across a 40-person team, cutting manual tasks 50%.');
  drawBullet('Designed API integration and exception-handling workflows for automation agents in 55+ projects, partnering with SWEs on application architecture and system-level design to cut project turnaround by 5 hours/week.');
  drawBullet('Owned compliance reporting pipeline, performing data cleaning and integration to resolve 85 data exceptions and maintain 98% accuracy across 15 reports, enabling quantitative, data-driven decision-making for senior leadership.');
  drawBullet('Debugged and maintained reporting infrastructure and data pipelines supporting roadmap tracking for 10+ senior stakeholders, identifying and resolving data integrity issues to optimize product and engineering workflows each quarter.');

  y -= 3;

  drawEntryHeader('State Farm Insurance', ', Data Engineering Intern, Metro Atlanta, GA', 'October 2025 - May 2026');
  drawBullet('Supported quantitative data decisions in a financial services environment by cleaning and validating 1,000+ structured records across networked infrastructure and data pipelines using Java and Excel, enhancing reliability of reporting.');
  drawBullet('Applied Python/NumPy analysis to 500+ customer interaction records sourced from Salesforce, MongoDB, and Spark data systems, translating CRM metrics into insights supporting risk assessment, retention strategy and lead qualification.');
  drawBullet('Redesigned data structures and query logic within large-scale, CRM-driven reporting systems, reducing manual processing effort by 37% across 12 major workflows and improving cross-functional access to insights for reporting teams.');
  drawBullet('Executed UAT and data validation procedures, documented test results and reporting workflows in Confluence, and communicated findings through Excel, Tableau, PowerPoint, and SSRS to improve reporting and cross-team collaboration.');

  y -= 3;

  drawEntryHeader('Prompt Mail Solutions', ', Software and Application Engineering Intern, Metro Atlanta, GA', 'October 2023 - December 2024');
  drawBullet('Engineered a full-stack web application serving 300+ users with Java, .NET, MySQL, and REST APIs, building object-oriented backend services, secure authentication workflows, and scalable database-driven frontend features.');
  drawBullet('Developed and shipped code features using Git and Bitbucket, contributing to code reviews, debugging implementation issues, and working across Agile sprint cycles to deliver reliable, maintainable, high-quality production software releases.');
  drawBullet('Implemented and tested backend application features using Java, .NET, MySQL, and REST APIs, resolving integration and data-flow issues to improve reliability, maintainability, and performance across production software features.');

  y -= 3;

  drawEntryHeader('Assets Edge', ', DevOps and E-commerce Intern, Cumming, GA', 'June 2022 - August 2022');
  drawBullet('Documented deployment gaps and core dependencies with Jenkins, Docker and shell scripting, defining engineering requirements that drove scalable CI/CD pipeline improvements and more reliable production software releases.');
  drawBullet('Optimized Jenkins CI/CD pipelines and Docker/Kubernetes deployment workflows, partnering with DevOps engineers to reduce deployment time by ~20%, improve build reliability, and minimize release bugs in production systems.');
  drawBullet('Tested backend and e-commerce app features by writing unit tests, debugging 20+ software issues, supporting REST API integrations, and contributing to Agile code reviews to improve production application reliability and code quality.');
  drawBullet('Performed root cause analysis on system logs and operational datasets in Linux/Unix env. using Splunk, documenting findings and recommended actions in Confluence to improve system reliability and incident response processes.');

  y -= 4;

  // --- PROJECTS & LEADERSHIP. ---
  drawSectionHeading('PROJECTS & LEADERSHIP.');

  drawEntryHeader('Automated Misinformation Detection Engine', ', Project Developer, Atlanta, GA', 'March 2026 - Present');
  drawBullet('Built and deployed a Python-based risk-scoring system using custom data structures/algorithms, statistical/NLP models, and information retrieval via REST APIs, achieving ~90% classification accuracy and <200ms inference latency.');
  drawBullet('Architected a full-stack React frontend for an AI/ML-driven risk engine to visualize a 0-100 credibility score, reducing false positives 25% and enabling users to analyze and interpret results with dynamic, real-time feedback.');

  y -= 3;

  drawEntryHeader('Georgia Tech Coding Club', ', VP of Artificial Intelligence/Machine Learning, Atlanta, GA', 'August 2025 - Present');
  drawBullet('Organized coding workshops focused on core computing concepts to build members\' network and programming skills.');
  drawBullet('Increased club meeting attendance and membership to 60+ members by fostering a collaborative technical community.');

  y -= 3;

  drawEntryHeader('LULU Bookstore', ', Co-Author, Cumming, GA', 'July 2023 - Present');
  drawBullet('Co-authored 2 beginner-focused technical books on Python and Artificial Intelligence, developing 50+ pages of instructional content covering algorithms, data structures, control flow, debugging techniques, and foundational concepts.');
  drawBullet('Created 30+ step-by-step tutorials and annotated code examples using Python scripting, API integration, and data handling workflows, translating complex technical concepts into clear, executable learning materials for the readers.');

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('public/Kavin_Sivasubramanian_Resume_UU.pdf', pdfBytes);
  console.log('Successfully generated public/Kavin_Sivasubramanian_Resume_UU.pdf. Final y =', y);
}

generateResume().catch(console.error);
