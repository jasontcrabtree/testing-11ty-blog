---
date: 2020-07-12
description: "Discovering the Magic Features and Tools of Photoshop after 3 years of using Figma, and copying new Photoshop Workflows to use in Figma."
title: "Learning Photoshop, Favourite Features and New Figma Workflows"
---

import BlogReadTime from "@/components/utils/BlogReadTime";

<BlogReadTime readTime="2:45"/>

## Growing up as a Figma Designer, and learning the backstory of Photoshop

I’m a huge fan of Figma. I started using it six months after I learnt that digital product design existed, meaning I effectively grew up as a Figma designer. I’ve tried a whole bunch of other visual design tools too — Sketch, Figma, InVision Studio, Photoshop, Illustrator, Framer, Webflow, and even (forced by circumstance) PowerPoint. Figma is my favourite and daily tool for a bunch of meaningful reasons. I use it for all of my design work, and plan to continue doing so (future teammates considered!).

At the same time, I’m a big believer in the importance of understanding the tools of the industry, the proverbial ‘understanding of how the sauce is made’. Which means even if I use Figma for 90% of my design work — I think it’s **extremely important that I know the capabilities** of other tools, even if I’m not using those tools daily! And in terms of tools that have driven the historical direction of Product Design, Photoshop stands out as number one. So in that context, I recently finished a 10-hour Photoshop essentials skillshare course, [Adobe Photoshop CC – Essentials Training Course by Daniel Scott](https://skl.sh/2B9l1BA) (referral link for 2 months free on new accounts). It was a great course and covered a super-wide breadth of the capabilities of Photoshop without going too deep on specific tools.

While I was going through the course I kept a deliberate eye out for tools and features that were missing in Figma, or techniques or methods I could apply to Figma that I hadn’t made full use of before. I want to recap a few of each of these categories — **Photoshop specific tools***, and **Photoshop techniques to use in Figma.** Hopefully, this might spark some ideas for you, either of the capabilities of Photoshop or different workflows in Figma!

*Some of these features are in other tools, like the excellent Pixelmator Pro, and I’m sure many others. The distinction I’m mostly focused on features not currently in Figma.

## Newly discovered (for me) Impressive Photoshop Specific Features and Tools

### Element Selection Tools

- **Quick Selection Tool:** A truly wonderful tool that lets you drag and select any area of an image, with software-enhanced edge detection to help you carefully select any image. After a week of using Photoshop, this is my absolute favourite tool in Photoshop.
- **Save Selection Feature:** Incredibly helpful addition to Photoshop's select tool that lets you save a selection area to be re-used and re-selected as many times as you need. Great time-saver.
- **Quick Actions: Remove Background and Select Subject**: Incredibly smart auto-selection that highlights the person or main subject in an image, letting you add a new background or export with a transparent outline. High success rate, even with a difficult selection like hair.
- **Removing Content with Content-Aware Fill:** This is a great tool for removing items from images, something I always used to think was an impressive Photoshop magic trick! To use the Content-Aware Fill, select an area on your image with the Lasso Tool, then **Edit > Content-Aware Fill** and photoshop will automatically remove that selection, attempting to fill in the empty space with auto-generated fill from the surrounding area.
- **Content-aware Cropping:** Another amazing content-aware tool, then feature activates while you're cropping something. Enter Crop mode (C), drag to resize the image, click Content-Aware in the top controls bar and press enter — and like magic, photoshop will expand the image based on your resizing. Magical for just adding that little extra bit of skyline to your image.

### Styling Features and Filter Gallery

- **Filter Galleries:** Photoshop has a huge selection of image filters, editing styles and effects and features to customise and add onto your image. Running blur? Dripping paint? Oil painting effect? Freely available as from Photoshops Filter Galleries.
- **FX > Bevel & Emboss:** This is the big one, the effect I recognise from every design done in 2010. Select an element, FX (bottom right bar), then add Bevel and Emboss. Wonderful. Sadly, not yet available in Figma.

### Painting, Brushes and Texture Effects

- **Kyle T Websters brushes:** Kyle Webster used to sell [Photoshop brushes](https://www.kylebrush.com/), then he joined Adobe, putting all of his brushes directly in Photoshop to use. Dozens of different effects and styles to be used however you need. Super cool.
- **Combing Masks with Brushes:** Brushes can be used even more effectively with masks, enabling special effects and styles in unique shapes. E.g. during the course — one lesson focused on using a Smoke Brush to paint smoke coming out of a man's head, then using that brush as a mask to show a galaxy floating out of the man's head. Can't do that in Figma (or at least, I can't!)
- **Symmetry painting:** A cool feature for painting or illustration — duplicate your lines and drawings based on a number of different symmetry styles. Not something I'll use, but cool to learn about.

### Transforms and Shaping Tools

- **Transforms: Adjusting and Combining Images** I've always, always been impressed with how designers can draw a flat, 2-D poster, logo or brand, then magically insert that into an image to make it look like a real magazine. And I still am! But now I have a better idea of how it's done. Notable Photoshop transforms include Distort, Warp and Perspective.

<hr/>

## Re-discovered Photoshop Techniques and Workflows to use more often in Figma

### Masks: Use them more

- **Underlay text behind image content using masks and layer duplication:** You know those images where there's a picture of a person, and **inside the image, behind the head of the person**, there's a title or line of text? I *love those.* Here's one way to do them, in Figma! Use the pen tool to draw a vector shape around the area you want in front of the text. Fill in that layer to make it a solid shape, then use it to create a new layer mask of the image. Add your text to the image, then place the mask of the vector shape of over the top, resulting in a final outcome of Background Layer > Text > Front Mask of e.g. Head layer.
- **Marquee tool copy and paste:**  The Marquee tool lets you draw a selection around an area and copy and paste the selection as a new layer. This can be *somewhat* replicated with a Figma Layer mask.
- **Clipping masks:** Figma masks are **perfect for clipping.** They let you easily add an image or text to any vector shape, including text. Just remember, texture as the TOP layer, shape as the bottom layer, then add a new mask. I forget, every time.
- **Layer masks:** Again, Figma great layer mask support — definitely comparable to Photoshop.
- **Painting textures and layer masks:** Figma *can't* do this. I don't think? Let me know!
- **Adding texture layers:** One notable tutorial in the Skillshare class involved adding a *Dust Layer* to an image. This was provided by the instructor as a translucent image of dust particles, then applied to the image with layer blending. Easily achievable, provided you have your texture layer handy!
- **Masking text with layered, drop-shadow blocks of colour to create a paper fill effect:** This tutorial used Photoshop layers to create 'cut out paper' patterns, then masked layers to create a textured background to then overlap with a text layer mask. Easily achievable with Figma!

### Components

- **Smart Objects:** Smart Objects let you duplicate content throughout the Adobe eco-system, e.g. add an illustration from Illustrator into Photoshop, while still being editable in illustrator. Luckily, we already have this feature — within Figma at least. Edit your components in one file, update them, and the changes push to other folders. I use this a lot for UI components and design elements, less so right now for illustrations or images. So — a good reminder to use more often!

### Blending Modes

- **Multiply Blending Modes:** When I first found the blending modes in Figma, I had no idea why you would use any of them, or what any of them did! I still have a lot to learn on this front, but now I know you can use the *multiply* blending mode to add a logo with a white background to an image and have the white background disappear. Like magic. Anyway, a good reminder to practice using these more for blending and layering!

## Wrapping Up Lessons Learnt in Photoshop

Overall, Figma matches Photoshop in lots of features, especially text, shapes, artboards, layers, masks and vectors. Photoshop really stands out when it comes to manipulating images, removing content within images (exactly like you'd expect!), artbrushes, and adding stylised effects from the filter gallery. And of course, the infamous bevel and embossed effect. Can't forget that!
