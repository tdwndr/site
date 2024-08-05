---
share: true
draft: false
featured: true
title: "Re-learning the web: getting started with Hugo, GitHub and Netlify"
tags:
  - in depth
date: 2024-08-04T21:40:00+01:00
---
The internet has changed a lot since 12-year-old me was throwing together HTML and CSS files via FTP to make websites almost 20 years ago.

Back then, WordPress was the king of content management. [Web 2.0](https://www.oreilly.com/pub/a/web2/archive/what-is-web-20.html) was in its ascendancy. And the concept of a 'responsive' web as we know it today barely existed, given the iPhone wasn't to be announced until 2007.

Now, Web3 is the buzzword on the block and web development seems to be all about data layers, micro frontends and headless CMS. Other than some infrequent dabbling in [Bootstrap](https://getbootstrap.com) and [jQuery](https://jquery.com), much of this has passed me by. So I thought it was about time to get my head around it all.

Over the last couple of weeks, I've been on a quick fire web development learning journey. The objective: to rebuild my basic website from the ground up in some more up-to-date technologies.

The outcome: I'm now using Hugo, GitHub, Netlify and Obsidian to run this thing.

### Static sites
Static site generators (SSGs) are an increasingly popular way to build websites that are flexible, lightweight and scalable. Following the [Jamstack](https://jamstack.org) approach, they 'decouple' the content, code and design of a website rather than building everything into a single stack.

Traditionally, web pages get built on demand every time they are requested from the server. Every visit to a site requires the server to work out and dynamically compile the right configuration of content, code and design for each user, then display this in the browser.

The main aim of the Jamstack approach is to shift as much of this work as possible away from the server. To enable this, static sites are designed to be 'pre-built' once in every possible configuration, with a highly-optimised 'static' site then served to the user. This makes everything faster (and cleaner) because it removes the need for servers to repeatedly perform logic and configuration. It also improves security because there are fewer server requests, and therefore fewer opportunities to hijack the process.

Sounds good. Let's build a static site.

### Hugo
There are [hundreds of different SSGs](https://jamstack.org/generators/) to choose from.

My use case is fairly simple. In addition to a landing page, I wanted to add a new 'posts' section to my site, so I was after an SSG aimed at consumption of content (as opposed to something aimed at applications requiring user input).

[Hugo](https://gohugo.io "Hugo") is one of a number of open source SSGs that fits this bill. It's a 'headless content management system', which means that the decoupled components of its structure are:

- The **content** itself that should be displayed in pages and posts
- The **templates** that tell content, resources, and data how to appear 
- A **templating system** that uses variables, functions and actions to tell templates which content to render

With Hugo,  I can write ***content*** for new posts in [Markdown](https://daringfireball.net/projects/markdown/), define separately how this type of content should be displayed using HTML and CSS ***templates***, then use features of the ***templating system*** to tell the templates which content to pull through.

Once I'd installed Hugo, I needed a template to get me going. I'm using the [PaperMod](https://adityatelange.github.io/hugo-PaperMod/) theme which I then amended with a number of my own customisations, including:

- Adding a standalone profile [homepage](https://tedw.co.uk)
- Modifying the overall width to make the header slightly narrower
- Changing the title to an SVG and updating the colour to pink
- Updating the fonts — [Onest](https://onest.md/en) for body text and [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) for headings
- Tweaking text sizes and line heights
- Defining ['in brief'](https://tedw.co.uk/tags/in-brief/) and ['in depth'](https://tedw.co.uk/tags/in-depth/) tags, and specifying different formatting for each in the list of posts

### GitHub
So, that's the underlying framework of how the site is put together. But where does all this live, and how are changes managed?

That's the job of [GitHub](https://github.com) or, more specifically, [Git](https://git-scm.com). The latter is a 'distributed version control system', while the former is a server that Git can connect to in order to store files in the cloud.

I'm barely scratching the surface of the capability of these tools, given the enormous number of powerful and widespread use cases in software development. I'm essentially using GitHub as a middle-man for my site's files, using Git to connect what's on my computer (the local repository) with the internet (the remote repository on GitHub).

To do this, Git is run through a command line interface (CLI). It's been a learning curve; before this week, I'd never touched command line. But despite my initial unfamiliarity, I have to admit it works beautifully. I now know four magic Git commands by heart:

- `git pull` to update the local repository with any remote changes
- `git add` to 'stage' (or snapshot) any local changes
- `git commit -m` to 'commit' (or record) changes as a version
- `git push` to upload local changes to the remote repository

### Netlify
I mentioned above that static sites are designed to be pre-built before being served to the user. So how does that happen?

Enter the [Netlify](https://www.netlify.com) hosting platform. My Netlify account is linked to my site's GitHub repository, which contains the files from Hugo required to build my site. When Netlify detects changes to this repository — usually because Git has committed new updates — it automatically ***builds*** them (by taking all of the templates and content and turning them into static pages), ***deploys*** them (by publishing the site), and ***hosts*** them by enabling the deployment to be accessed on the web via a domain name.

Once I'd got it working, Netlify has been brilliant. The way it picks up on changes and automatically takes care of what's required to build and publish them is really neat.

But it's also been very frustrating. I learned the hard way that tiny inconsistencies or errors across any of the site's files would cause the build to fail, even where there hadn't been a problem when previewing the build locally. When this happened, it was a case of stepping back through changes to multiple files to try to unpick what had caused the error. But that's all part of the fun!

### Obsidian
With the build of the site taken care of, that leaves the content to focus on.

One of the benefits of Hugo's 'decoupled' approach is that I can use any Markdown editor to create content in a simple and consistent format, without having to worry about the configuration of the rest of the site. But I also I wanted an easy way to publish posts (ideally from my phone) without having to manually move files around or run command line.

I tried a number of self-hosted CMS solutions, including [Decap CMS](https://decapcms.org) and [TinaCMS](https://tina.io). These create a back-end admin portal to the website where I could write and publish, but for various reasons, I found each of these too restrictive or overwrought for what I was after.

Then, I discovered [Obsidian](https://obsidian.md). This app, combined with the [Enveloppe](https://github.com/Enveloppe/obsidian-enveloppe) plugin, lets me write, organise *and* publish content directly to my GitHub repository — from both my laptop and phone. Netlify then picks up on the changes and automatically redeploys the site. Bingo.

### Reflections
The page you're looking at now is the output of my initial adventures. It may look simple and unadventurous, because it is.

The first reason for this is that the whole approach is designed to be light: my site achieves a [website carbon rating](https://www.websitecarbon.com/website/tedw-co-uk/) of A+, making it cleaner than 96% of pages on the web. 

The second reason is my own capability. It's early days. It works, and I now have somewhere to self-host posts like this one. But I'd be lying if I said I knew *how* or *why* it all works. There's a huge amount still to learn about every step in this process, and lots of tweaks I still want to make when I can find the time.

Most important to me is the learning process I've been on to get here. In particular, it's highlighted to me the [power of open source](https://opensource.googleblog.com/2024/04/the-power-of-open-source.html#:~:text=It%20fosters%20creativity%20and%20collaboration,full%20creative%20autonomy%20without%20restriction.). The concept of using open technologies to drive innovation that benefits everyone is more important than I could hope to do justice to in my own words.

But I can land one significant point from a personal perspective: every part of this process is totally free. Hugo is open source. Git is open source. GitHub is free for personal use. Netlify is free for personal projects. Obsidian is free. Enveloppe is open source.

Not only that, but all of these tools are supported by fantastically dedicated communities of users and developers who are interested only in the continued development and success of their work. Whenever I ran into a problem —  *very* frequently — there was always a forum thread where people came together to solve the same issue that someone else had experienced.

I'm proud of what I've been able to piece together, and I'm grateful that these tools and communities exist. I won't be leaving it 20 years to jump in again.