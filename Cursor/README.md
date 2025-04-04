# Minimal Portfolio Website

A minimalistic and responsive portfolio website featuring a custom interactive cursor inspired by slimcoffeetea.com.

## Features

- Clean, minimal design with focus on content
- Custom cursor with interactive hover and click animations
- Responsive layout that works on all device sizes
- Smooth scrolling navigation
- Fade-in animations for content sections
- Optimized for performance and accessibility

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (no frameworks)
- CSS Grid and Flexbox for layouts
- Intersection Observer API for scroll animations

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser
3. Customize the content in the HTML file to make it your own

## Customization

### Colors and Styling

You can easily customize the colors and styling by modifying the CSS variables in the `:root` section of `css/style.css`:

```css
:root {
    --primary-color: #000;
    --secondary-color: #333;
    --accent-color: #3498db;
    --background-color: #fff;
    --text-color: #333;
    --light-gray: #f5f5f5;
    /* ... other variables ... */
}
```

### Custom Cursor

The custom cursor can be modified in `css/cursor.css`. You can adjust the size, color, and animation properties.

## Browser Compatibility

The website works on all modern browsers that support CSS variables and the Intersection Observer API. For older browsers, fallbacks are provided:

- The custom cursor will revert to the standard browser cursor on touch devices or browsers that don't support custom cursors
- Animations gracefully degrade in older browsers

## License

This project is released under the MIT License.

# Simple Contact Form System

A lightweight contact form system that saves form submissions to a text file. This solution doesn't require a server or database setup - just Java.

## Files Included

- `SaveContact.java` - Java application to save contact form data
- `contact.html` - HTML form with JavaScript for collecting user input
- `compile_and_run.bat` - Windows batch script to compile and run
- `compile_and_run.sh` - Linux/Mac shell script to compile and run

## How to Use

### Step 1: Compile the Java Application

#### On Windows:
```
compile_and_run.bat
```

#### On Linux/Mac:
```
chmod +x compile_and_run.sh
./compile_and_run.sh
```

### Step 2: Use the Contact Form

Open `contact.html` in your web browser to access the contact form. Fill in the required fields and submit. The page will display a command that you can run to save the contact.

### Step 3: Save Contact Data

You can save contacts in two ways:

1. **From the command line directly:**
   ```
   java SaveContact "John Doe" "john@example.com" "Website Inquiry" "I would like to learn more about your services."
   ```

2. **Using the command generated by the contact form:**
   Copy the command displayed after submitting the form and run it in your terminal/command prompt.

## Where Contacts Are Stored

All contact form submissions are saved to a file named `contacts.txt` in the same directory as the application. The file is created automatically if it doesn't exist.

Each submission includes:
- Date and time
- Name
- Email
- Subject
- Message

## Requirements

- Java Runtime Environment (JRE) 8 or higher
- Any modern web browser

## Customization

- To change the storage location, edit the `CONTACTS_FILE` constant in `SaveContact.java`
- To modify the contact form appearance, edit the CSS in `contact.html` 