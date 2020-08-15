---
title: 'Product Design: Building CharacterCounter, A Typography Tool'
description: 'Building a web app to improve my design workflow and learning a small but mighty bit of JavaScript in the process.'
date: 2019-02-26
image: 'https://res.cloudinary.com/jasontcrabtree/image/upload/v1573418454/Portfolio-Assets/CharCount-Cover-Image-4.png'
---

import CaseStudyReadTime from "@/components/utils/CaseStudyReadTime";
import GIFImage from "@/components/GIFImage";

<CaseStudyReadTime readTime="6"/>

_Note: This was originally published on Medium in Feb of 2019, which you can find here [Character Counter Case Study, Medium](https://medium.com/@jasontcrabtree/building-character-counter-2670b30a7ef0)_

## Overview: What’s the Product

CharacterCounter is a simple, lightweight tool to count how many characters you’ve entered into a simple textbox.

Focused on working as quickly as possible, CharacterCounter gives you the information you need exactly when you need it. Then you can get straight back to what you were doing.

Having a precise, easy way to count the number of characters they’re using helps writers be measured and deliberate when they’re writing, editing and creating content. This can be useful for writing headlines, ad copy, tweets, email subject lines, designing interfaces or filling in web forms.

> You can check it out at [CharacterCounter live product](https://charactercounter.netlify.com/) (just make sure you come back to finish the case study!)

You can also visit the Product Hunt launch if you’d like to see how that went at [Product Hunt: CharacterCounter](https://www.producthunt.com/posts/charactercounter)

<GIFImage gifSource="https://res.cloudinary.com/jasontcrabtree/image/upload/v1581088985/Portfolio-2020/hello-world-count.gif" altGIF="GIF of CharacterCounter showing the 12 characters in the phrase Hello World"/>

> CharacterCounter gives you the info you need when you need it, letting you get straight back to what you were doing.

## Project Overview, Lessons and Contributions

This was a personal project built to scratch a personal itch while [learning about typography ideal line-lengths.](https://practicaltypography.com/line-length.html)

As I worked on the design and development of this project I realised just how often I had previously been opening Google Docs for just this purpose. CharacterCounter is custom built to do one thing quickly and well.

My design goals focused on speed, simplicity and clear visual hierarchy. People who use the tool can open a new tab, type or copy in their content and instantly get the results they need before moving on.

This project was a joy to work on and is one of the first JavaScript tools I’ve conceived, designed and built from scratch. It was a ton of fun (and a great learning opportunity)

## Design Challenge: What problem was I solving

It can be time-consuming to quickly and accurately check how many characters are in a given section of writing. The importance of specific character counts is relevant in several situations; writing emails, article headlines, tweets, interface design and even many web forms.

Existing solutions like loading a google doc or other similar word processing tool can take 20–30 seconds, interrupting workflows and slowing you down.

Character Counter gives a quick and focused solution to this problem.

### The ideal use-case (to complete in just a few seconds)

![The Ideal Use-Case. 1. Realise Product Need, 2. Quickly Use Product, 3. Get back to Original Task!](~/assets/images/charactercounter/cc-use-case-flow.png)

1. Load a new tab or page (or navigate to an existing tab!)
2. Navigate to the CharacterCounter page URL
3. Type or paste in text to confirm character number
4. Return to original task without breaking flow state

## Design Constraints: What are the constraints

Because of the primary goal of speed, the final solution needs to be lightweight. This limits codebase size, features and complexity.

This speed constraint also restricts the use of third-party libraries such as [Clipboard.JS](https://clipboardjs.com/) (I want this to be AS fast as possible, every micro-second counts towards the goal of avoiding flow-state disruption).

## Research: User Research & Existing-Solutions

As a project primarily built to scratch a personal itch — the research for this focused on my specific use case and needs. I would mostly be using the final product for interface design, writing article headlines, designing interface line-lengths and filling in web forms.

I started by exploring existing options. Surely I reasoned, a solution already existed. And, some did! But nothing quite fit.

![Image of Right-Click Services AppleScript Function to Count Word and Characters](~/assets/images/charactercounter/apple-script-counter.png)

1. The first solution I found was an [AppleScript hosted on GitHub](https://gist.github.com/mechanomi/1616556). This created a system-wide function that enabled you to select the text, right-click and then be told the number of words and characters present. After some testing, I discovered that the script didn’t work in Figma (my main design tool — and one of the common use-case) and that drag selecting text, right-clicking and using the script itself was **_clunky and awkward_**.

![Tweet requesting a macOS MenuBar Character Counting App](~/assets/images/charactercounter/tweet-productrequest.png)

2. After discounting the AppleScript solution, I explored the possibility of a macOS Menu Bar App. When Google failed to produce results I turned to Twitter. Unfortunately, the lone heart proves my request for a new product didn’t go as viral as I might have hoped!

![A hacky solution to my character counting goals — heavily taken from w3schools](~/assets/images/charactercounter/js-character-counter.png)

> Eventually, I hacked together a solution. Perfect! Ship it. (I’m sure this is awful code, but I’m so proud it works!)

1. Finally, I decided to build the solution myself. Enter several (too many to admit) nights of copying and pasting JS from w3school tutorials while trying to figure out how to A) connect JS to a textbox, and B) then count the number of characters present. **_Eventually, I hacked together a working solution. Perfect! Ship it._**

## Testing Usability: Version 1.0

The first version worked, in the sense that you could type text and it would load quickly. Unfortunately, usability fell over. I initially picked a Google Font. This caused page-delays while the font loaded. The font I chose (and quickly changed) was thin, making quick scanning of the relevant info difficult.

After a few weeks testing this out I realised the improvements I could achieve with a system font stack (using default computer system-level fonts) and strong visual hierarchy. This led to Version 2.0.

![The first version of CharacterCounter. Functional, but not pretty.](~/assets/images/charactercounter/character-counter-v1.png)

Plus, the first version also completely broke on mobile screens and narrow browser windows. Not ideal.

## The Great Iteration: Incorporating Usability Lessons

After a few weeks using the original, hastily designed Version 1.0, it was time to make some changes. The focus would be on designing a minimal, well-spaced layout emphasising strong visual hierarchy to help identify key information.

The new design incorporates a copy button to improve usability, letting text be quickly copied and carried away for use.

![Different Iterations of Formatting/Layout and the Final Layout used to plan the HTML File](~/assets/images/charactercounter/redlining-and-sections.png)

## Presenting the Product: Final Polish

The final product is minimal, focused and fully responsive, working across mobile and desktop. It uses CSS Grid, Vanilla JS and loads the system fonts associated with your computer, preventing a delayed trip to load a font.

The page loads quickly and easily, a perfect addition to my workflow for writing, designing and general internet usage.

Hopefully, it’ll be helpful for others too 💯🥳

![The Finished Product. The final image of Character Counter on Desktop and Mobile](~/assets/images/charactercounter/cc-responsive-views.png)

I’ve even managed to include a small animation. The button interaction confirms the textbox content has been successfully copied.

<GIFImage gifSource="https://res.cloudinary.com/jasontcrabtree/image/upload/v1581088985/Portfolio-2020/clicked-copy-animation.gif" altGIF="GIF of the copy button in action, including the button label changing. Fancy."/>

## Implementation: Technical launch and Implementation Details

This was the first project I’ve made using JavaScript (that wasn’t directly following a tutorial). All in all, the CSS and HTML is solid, if basic, while the JS can absolutely be improved in the future.

### Key technical features

- The code is open source and hosted on [GitHub](https://github.com/jasontcrabtree/CharacterCounter), while the page itself is deployed through [Netlify](https://www.netlify.com/). Netlify offers free domains — and a global CDN network to help with speed and performance.
- Media queries have been used to make the page more usable on a mobile phone (including small screens such as iPhone SE’s).
- The ‘Copy Text’ button dynamically changes when clicked — confirming the text has been copied.
- The page automatically counts characters after each keyboard interaction, creating a smooth interaction experience.
- Future technical improvements: The click to copy button **_doesn’t_** work on mobile and has been disabled. Something to fix!

## Outcomes: Results vs. Goals

The speed results are the main outcomes I’m interested in. I aimed to build a fast, effective tool for my workflow. This effectively achieves that goal.

I can load a new tab (**⌘ + T** on Mac, **Ctrl + T** on Windows + Linux), type or paste in whatever I’m working on and get back to my original task within a few seconds — consistently and every time. No more strange, delayed google doc loading freezes (for this particular task at least!)

![Pingdom Website Speed Test: Load time 452 ms](~/assets/images/charactercounter/pingdom-speed-results.png)

## Lessons: Lessons Learnt

1. It’s so cool to want a tool — and then just go and make it!
2. This is the first JS thing I’ve done outside a tutorial. Honestly, I’m not even sure
3. if I know how it works, but I hacked it together to achieve the goal I wanted(including the bells and whistles of the click to copy button, and the button text changing!)
4. The goal of speed was met which feels very rewarding.
   The visual design and usability feel solid, I’ll happily load this multiple times a day as needed!

Overall, this was a great mini-project to hack on. I discovered a lovely sense of joy in creating a solution for a problem I was experiencing. For now, onwards to the next one!

_PS._ After publishing this I spoke with [Kostya Gorskiy](https://twitter.com/k00) — a design manager at Intercom. While chatting over coffee Kostya was kind enough to give me some feedback on how I could improve and refine the visual design of Character Counter.

The main feedback focused on simplifying typography. As a result, we’ve gone from 8 different slight colour/boldness/size variations (it sounds like so many said like that!) to 4 different variations. These changes have been updated in the images so you get to see the final outcome! Enjoy.

---

## Wrapping Up

Read next case study about being a design lead for [Design Discovery in a Traditional Insurance Company](/work/repairer-allocation).
