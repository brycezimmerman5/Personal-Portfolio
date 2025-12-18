# Personal Portfolio Website

A stunning, modern, and professional portfolio website for computer science professionals. Built with pure HTML, CSS, and JavaScript - no frameworks required.

## ✨ Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging animations and transitions throughout
- **Easy Customization**: Simple placeholder replacement system
- **SEO Friendly**: Semantic HTML structure
- **Fast Loading**: Optimized for performance
- **Accessibility**: ARIA labels and keyboard navigation support

## 🚀 Getting Started

1. **Clone or download** this repository
2. **Open `index.html`** in your browser
3. **Customize** the content with your information (see customization guide below)

## 📝 Customization Guide

### 1. Personal Information

#### Navigation Brand
```html
<!-- Line 18 in index.html -->
<a href="#home">&lt;YourName /&gt;</a>
```

#### Hero Section
```html
<!-- Lines 34-38 in index.html -->
<p class="hero-greeting">Hello, I'm</p>
<h1 class="hero-name">
    <span class="name-first">Your</span>
    <span class="name-last">Name</span>
</h1>
```

#### Typing Animation Titles
Edit the `titles` array in `script.js` (line 40-45):
```javascript
const titles = [
    'Full Stack Developer',
    'Software Engineer',
    'Your Custom Title',
    'Another Title'
];
```

#### Social Media Links
Update all social media links in the hero section (lines 47-60) and contact section (lines 302-315):
```html
<a href="https://github.com/yourusername" target="_blank">...</a>
<a href="https://linkedin.com/in/yourusername" target="_blank">...</a>
<a href="mailto:your.email@example.com">...</a>
```

### 2. About Section

#### Profile Image
Replace the placeholder image URL (line 100):
```html
<img src="path/to/your/photo.jpg" alt="Profile" id="profileImage">
```

#### About Text
Update the paragraphs in the about section (lines 88-103) with your own story and technologies.

### 3. Projects Section

For each project card, replace:

#### Project Image (line 140, 171, 202)
```html
<img src="path/to/project/screenshot.jpg" alt="Project Name">
```

#### Project Links
- **GitHub Link** (lines 142, 173, 204):
```html
<a href="https://github.com/yourusername/projectname" target="_blank">...</a>
```

- **Live Demo Link** (lines 145, 176, 207):
```html
<a href="https://yourproject-demo.com" target="_blank">...</a>
```

#### Project Details
Update for each project:
- **Title** (lines 152, 183, 214)
- **Description** (lines 154-158, 185-189, 216-220)
- **Technologies** (lines 159-164, 190-195, 221-226)

### 4. Skills Section

Add or remove skills by modifying the skill items in each category (lines 125-215). Each skill item follows this pattern:
```html
<div class="skill-item">
    <i class="fab fa-icon-name"></i>
    <span>Skill Name</span>
</div>
```

**Available Font Awesome icons**: Visit [Font Awesome](https://fontawesome.com/icons) to find icons for your technologies.

### 5. Color Scheme

To customize colors, edit the CSS variables in `styles.css` (lines 6-17):
```css
:root {
    --primary-color: #64ffda;      /* Accent color */
    --secondary-color: #ccd6f6;    /* Secondary text */
    --text-color: #8892b0;         /* Body text */
    --dark-bg: #0a192f;            /* Background */
    --light-bg: #112240;           /* Section backgrounds */
}
```

### 6. Contact Information

Update the contact section (lines 288-316):
- Email address
- Contact message text
- Social media links

## 🎨 Design Features

- **Color Scheme**: Modern dark theme with cyan accent
- **Typography**: Inter (body) and JetBrains Mono (monospace)
- **Animations**: Smooth fade-in, typing effect, hover transitions
- **Layout**: Clean grid-based responsive design
- **Icons**: Font Awesome 6.4.0

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Feel free to use this portfolio template for your personal website. Attribution is appreciated but not required.

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to fork, modify, and use this template.

## 📧 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Made with ❤️ for the developer community**

