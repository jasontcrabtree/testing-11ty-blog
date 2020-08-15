---
date: 2019-05-31
description: 'An approachable, beginner friendly introduction to designing websites using CSS Variables. No experience with code necessary!'
slug: 'approachable css variables'
title: 'Small Joys of Learning Code; the CSS Edition'
---

import BlogReadTime from "@/components/utils/BlogReadTime";

<BlogReadTime readTime="4"/>

One of the most consistently invigorating experiences I've had while learning to code is the joy of learning a seemingly small idea, then later learning how you can build on that initial concept in a super cool way.

The latest instance of this has been with CSS Variables. As a beginner, I always appreciated posts that explained concepts — so now I'm going to do that!

## The Basic Structure of a Webpage

Imagine a basic website with pictures and words. [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) (_**Hypertext Markup Language**_) is the coding language that creates the websites layout and underlying content. [CSS](https://developer.mozilla.org/en-US/docs/Web/css) (_**Cascading Style Sheets**_) is the coding language used to add styles to the original HTML code. It's a relatively controversial coding language, full of debates about whether it's even a real programming language. Personally, I love it because it's incredibly literal. Do you want to change the colour of something?

`background-color: red`

Or maybe you want to change the size of a font? Font size will do the trick.

`font-size: 40px`

HTML without CSS looks the same regardless of content — for Google, Twitter or this blog. CSS is (part of) what differentiates the design, style and brand of websites and products.

## Here's an Example of A Basic Webpage Without CSS

![A Basic HTML Website with no CSS Styling](~/assets/images/css-variables/html-no-css.jpg)

CSS Variables take things to a whole new level. CSS Variables store CSS values in keywords that can later be re-used as many times as you need. CSS Variables follow the same structure you might have learnt about in High School Algebra. I definitely failed High School algebra, potentially contributing to me being slow to pick up CSS Variables, but regardless — similar to Algebra, CSS Variables are assigned by associating a value with the variable name. For example, if we have a math problem such as Z = XY and we know that two of the values are X = 10, and Y = 5, then we can calculate Z as the result of X \* Y. Luckily, there's less math involved in CSS Variables than that, but the general principle of storing a value is the same.

> CSS Variables store CSS values in keywords that can later be re-used as many times as you need.

For example, if I had a particular colour that I wanted to use multiple times in the future, I could set that colour as a variable.

**Setting a CSS variable:**
(I don't know why the blue hex code is red, I promise it's blue!)

[A Gist of the CSS Variable](https://gist.github.com/jasontcrabtree/2ce934513ce317cf97de22f0de8aba34.js)
![gist Size Variables](~/assets/images/css-variables/setting-color-variables.png)

Once we apply these styles, our website looks like this:

![Adding some basic CSS using our CSS colour variable](~/assets/images/css-variables/adding-css-colors.jpg)

This concept of using the same variable, again and again as needed has been very compelling and is a technique I've started trying to use on every project. I was probably a bit slow to the Variables party (because of the previously discussed algebra issues). That aside, once I understood how it works, I've become a huge fan. **Mostly because it just makes sense.**

## Area-Man Discovers Computers Capable of Math, News at 6 (_Sarcasm Disclaimer_)

Today's revelation, however, **_(dramatic music)_** changes everything. While thinking about my favourite design methodology ([the 8-px grid](https://spec.fm/specifics/8-pt-grid)), which uses multiples of 8 for spacing and layout decisions, and once again wishing I had memorised my maths times-tables all those years ago, it occurred to me — hang on. If you can set colour Variables, what else can you set?

And that moment is how I realised computers could do the math for me. I can set numbers to Variables. Now, all of my x8 times-tables math problems have been solved.

Using CSS Variables I can set the a few relevant spacing Variables, then re-use those values as I need throughout a design. This builds consistency directly into the design — and ensures a smooth transition if sizes need to be tweaked later on. It also means I can much more easily use [CSS calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc) to calculate values on the fly from base Variables.

### Setting Size Variables

![gist Size Variables](~/assets/images/css-variables/setting-size-variables.png)
[A GitHub gist showing how to assign size variables](https://github.com/notifications)

### Lastly, Let's Apply our Layout Styles (and add a nice font!)

![Using A Few CSS Variables to Layout our Page](~/assets/images/css-variables/final-layout-and-styles.jpg)

With that, we're left with something closely resembling a real website. We've used a single colour (that we can change easily, just by changing the initial variable) and we've got consistent spacing throughout the page.

Admittedly, while typing this out it DOES feel like I should have known all of this from the start, but it's tough to see what you don't know. But, I know now — and that's fricking cool and all that matters. Plus, now you know too! Mostly, I'm excited to see what else I can do with CSS Variables in the future.

### GitHub Links from this Article

- [The Example Website used in this Article](https://jasontcrabtree.github.io/approachable-css-variables/)
- [Website Example GitHub Source Code](https://github.com/jasontcrabtree/approachable-css-variables)
- [Gist 1: Setting up Basic Colour CSS Variables](https://gist.github.com/jasontcrabtree/2ce934513ce317cf97de22f0de8aba34)
- [Gist 2: Defining Size CSS Variables](https://gist.github.com/jasontcrabtree/027b7a17ceb2ac650c10be22fca8b3b2)

---

### And, a few additional resources for those brave adventurers who want to learn more

- [Mozilla: CSS Variables Basic Usage](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#Basic_usage)
- [Smashing Magazine: A Strategy Guide To CSS Custom Properties](https://www.smashingmagazine.com/2018/05/css-custom-properties-strategy-guide/)
- [CSS Tricks: Making Custom Properties (CSS Variables) More Dynamic](https://css-tricks.com/making-custom-properties-css-variables-dynamic/)
- [The 8-Point Grid](https://spec.fm/specifics/8-pt-grid)
