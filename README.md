# LAB - Inventory Tracker


# **Overview (what I’m learning + what I’m trying to build)**

I’m practicing TypeScript and object-oriented programming by creating a small inventory tracker. The goal is to learn how to organize code using classes and handle different types of products, like physical items I can touch and digital items I download.
----------

# **Description 

In this project, I’m going to:

### **1. Create classes for different product types**

-   One class for **PhysicalProduct**
    
-   One class for **DigitalProduct**
    
- In this project, I built a basic system that can store products, tell the difference between physical and digital items, and calculate taxes for each type. I used OOP ideas like inheritance, abstraction, and encapsulation to keep the code clean and easy to understand. I also organize everything into simple modules so each part has its own job.

I  practiced the four big OOP ideas:

-   **Inheritance** — one class can “copy” or reuse code from another
    
-   **Encapsulation** — keeping some information private inside a class
    
-   **Abstraction** — hiding extra details and showing only what matters
    
-   **Polymorphism** — using the same method name for different product types, but letting each one behave differently
    

----------

## Task Scenario 

I’m creating a mini inventory tool in TypeScript. I’ll start by making a main product class, then create two versions of it—one for physical products and one for digital products. Each will have its own way of handling taxes. I’ll also build a small inventory module that lets me add products and list them. By the end, I’ll have a basic but working system that shows I understand the fundamentals.

## Learning Objectives

By completing this, I was able to:

-   Use TypeScript classes and type annotations
    
-   Create and extend classes using inheritance
    
-   Apply OOP concepts like abstraction, encapsulation, and polymorphism
    
-   Build simple modules to organize code
    
-   Understand how different product types can share features but behave differently


----------

## Description



This lab contains:

-   `Product`  class (base class)
-   `PhysicalProduct`  and  `DigitalProduct`  subclasses
-   `main.ts`  to create and display product instances
-   Dynamic price calculation with tax

----------

## Resources


-   [TypeScript Documentation](https://www.typescriptlang.org/docs/)
-   [Node.js Documentation](https://nodejs.org/en/docs/)
-   [ES Modules in Node.js](https://nodejs.org/api/esm.html)

----------

## Getting Started



### Requirements


-   Node.js v24+ installed
-   npm installed
-   Git installed
-   Code editor (VS Code recommended)

### OS Compatibility



This lab can be completed on  **Windows**,  **macOS**, or  **Linux**.

----------

## Installation



1.  **Clone this repository**  to your computer:

git clone https://github.com/Vanessa30043/Inventory-tracker-Lab-1

2. Open the project folder in your code editor:
cd Inventory-tracker-Lab-1

## Setup
1. Run the project:
node dist/main.js


## Project Structure
inventory-tracker/
├── src/
│   ├── main.ts
│   └── models/
│       ├── Product.ts
│       ├── PhysicalProduct.ts
│       └── DigitalProduct.ts
├── dist/          # Compiled JS files
├── package.json
├── tsconfig.json
└── README.md