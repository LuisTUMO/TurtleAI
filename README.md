# AI-Powered TUMO Turtle Code Generator  

## 📚 About this project  
This project is designed to show how **AI models** and our **TUMO Turtle** graphics environment can work together.  
By providing an English prompt to an AI language model, we can automatically generate JavaScript code that runs inside the TUMO Turtle environment.  
This teaches students how large language models can understand instructions and generate code that follows clear constraints, while also reinforcing programming logic and graphics concepts.  

## 🚀 How it works  
1. The user provides a **prompt** describing the drawing task (for example, drawing shapes with specific constraints).  
2. The prompt is sent to the AI via **OpenRouter API**.  
3. The AI responds with a code snippet.  
4. The generated code is displayed and automatically executed in the TUMO Turtle environment.  

## 🗝️ Get your API Key  
You will need a free API Key from [https://openrouter.ai/](https://openrouter.ai/) to make requests to the language model.  

1. Go to [https://openrouter.ai/](https://openrouter.ai/)  
2. Sign up or log in.  
3. Navigate to your account settings and find your **API key**.  
4. Copy the key and paste it in the field when running the project.  

## ✅ Example prompt (in English)  
Below is an example of a prompt you can use to test:  

> Write JavaScript code to draw a green circle using only the following functions: `forward()`, `left()`, `right()`, `penup()`, `pendown()`, `color()`, and `width()`.  
>  
> The code should:  
> - Set the pen color to a vibrant color of your choice using `color()`.  
> - Set the pen width to a reasonable size using `width()`.  
> - Ensure that the triangle is equilateral, with all sides of equal length.  
> - Use only the provided functions — no additional methods or libraries.  
> - You can assume that `forward()`, `left()`, `right()`, `penup()`, `pendown()`, `color()`, and `width()` are predefined and work similarly to typical turtle graphics functions.  
> - Provide only the final code, do not create any functions, as this will use only basic programming.  

## 🎯 How to run
1. Open your terminal and run:  
```bash git clone https://github.com/your-username/your-repository.git```
2. Navigate to the cloned folder:
3. cd your-repository
4. Open the file ai_turtle.html in your browser by simply double-clicking it, or right-click > "Open with" and select your browser of choice.
5. Enter your API key and prompt, then click Generate Code.
6. Watch the AI-generated turtle code run on the canvas!

📂 Project structure

project-folder/
│
├── ai_turtle.html  # Main HTML file with canvas and input fields  
├── ai_turtle.js       # JavaScript logic to send requests and execute code  
├── lib/            # Turtle library files  
└── README       # This file  

👩‍🏫 Educational goals

Learn how to describe problems in natural language for AI.
Understand how AI can transform instructions into working code.
Strengthen knowledge of geometry, loops, and turtle graphics.
Build confidence working with APIs and basic web projects.   
