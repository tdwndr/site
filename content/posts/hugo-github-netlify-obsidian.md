---
share: true
draft: false
featured: true
title: "Re-learning the web: getting started with Hugo, GitHub, Netlify and Obsidian"
tags:
  - in depth
date: 2023-08-04T21:40:00+01:00
---
The internet has changed a lot since 12-year-old me was throwing together HTML and CSS files via FTP to make websites almost 20 years ago. Back then, WordPress was the king of content management systems. [Web 2.0](https://www.oreilly.com/pub/a/web2/archive/what-is-web-20.html) was on the rise. And the concept of a 'responsive' web as we know it today barely existed, given the iPhone wasn't to be announced until 2007.

Now, Web3 is the buzzword on the block and web development seems to be all about data layers, micro frontends and headless CMS. Other than some dabbling in Bootstrap and jQuery, much of this has passed me by. So I thought it was about time to get my head around it all.

Over the last couple of weeks, I've been on a quick fire web development learning journey. The objective: to rebuild my fairly basic website from the ground up in the some more contemporary technologies. 

I'm now using [Hugo](https://gohugo.io "Hugo"), [GitHub](https://github.com), [Netlify](https://www.netlify.com "Netlify") and [Obsidian](https://obsidian.md) to run this thing. Here are some of my reflections.

### Static sites
Static site generators (SSGs) are an increasingly popular way to build websites that are cheap, flexible, lightweight and scalable. Following the [Jamstack](https://jamstack.org) approach, they 'decouple' content from how it is displayed, and rely on reusable pieces of code that can repeated into multiple different views rather than manually building everything into a single, tangled stack.

Traditionally, web pages get built on demand every time they are requested from the server. Every visit to a site requires the server to work out and dynamically compile the configuration between  content, data, templates and applications, then display this to the user.

One of the key features of a static site is that they are designed to be 'pre-built' once in every possible configuration, with this 'static' site then served to the user. This makes everything quicker (and cleaner) because it removes the need for servers to repeatedly perform logic and work, and it improves security because there are fewer opportunities to hijack the process.

### Hugo
I wanted to add a new 'posts' section to my site, so I was interested in an SSG aimed at consumption of content (as opposed to, for example, something aimed at applications that users can input to).

Hugo is one of a number of open source SSGs that fits this bill. It's a 'headless content management system', which means that the core components of its structure are:

- The **content** itself that should be displayed in pages and posts
- **Templates** that tell content, resources, and data how to appear 
- A **templating system** that uses variables, functions and actions to tell templates which content to render

With Hugo,  I can write *content* for a new post in [Markdown](https://daringfireball.net/projects/markdown/), separately define how this type of content should be displayed using HTML and CSS *templates*, then use Go variables from the *templating system* to tell the templates which content to pull through.

I'm using the [PaperMod](https://adityatelange.github.io/hugo-PaperMod/) theme with a number of customisations, including:

- Changing the title to an SVG and updating the colour
- Modifying the overall width to make the header slightly narrower
- Updating  fonts — now typeset in [Onest](https://onest.md/en) for body text and [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) for headings — and amending sizes and line heights
- Defining ['in brief'](https://tedw.co.uk/tags/in-brief/) and ['in depth'](https://tedw.co.uk/tags/in-depth/) tags, and specifying different formatting on the posts list for each
- Adding a standalone profile [homepage](https://tedw.co.uk)

This approach is designed to be light, and it is: this site achieves a [website carbon rating](https://www.websitecarbon.com/website/tedw-co-uk/) of A+, making it cleaner than 96% of pages on the web.

### GitHub
So, that's the underlying framework of how the site is put together. But where does all this live, and how are changes managed?

That's the job of GitHub, or, more specifically, [Git](https://git-scm.com). Git is a 'distributed version control system', while GitHub is a server that Git can connect to to store files in the cloud.

I'm essentially using GitHub as a middle-man for my site's files, using Git to connect what's on my computer (the local repository) with the internet (the remote repository on GitHub).

Git is run through a command line interface (CLI), and it's been a learning curve. Before this week, I'd never touched command line. Now I know four magic commands by heart:

- `git pull` to update the local repository with any remote changes
- `git add` to 'stage' (or snapshot) changes
- `git commit -m`, to 'commit' (or record) changes as a version
- `git push` to upload local changes to GitHub

Despite my initial unfamiliarity, I have to admit it works beautifully. And I'm barely scratching the surface of its capability, given the enormous number of powerful and widespread use cases for collaborative and efficient software development.

### Netlify
I mentioned above that static sites need to be 'pre-built' and served to the user. So how does that happen?

Enter Netlify. It's linked to my site's GitHub repository, which contains the files from Hugo required to build my site.

When Netlify detects changes to this repository — because Git has committed new updates — it automatically ***builds*** them (by taking all of the front end templates and content and turning them into static pages), ***deploys*** them (by publishing the site), and ***hosts*** them by enabling the deployment to be accessed on the web via a domain name.

Once I'd got it working, Netlify is awesome. The way it picks up on changes and automatically does what's required to build and publish them is really neat.

But it's also been very frustrating. I learned the hard way that any number of inconsistencies or errors across any of the site's files could cause the build to fail, even where there hadn't been a problem when I'd previewed the build locally. On almost every Occassion, it was a case of stepping back through my changes to multiple fles to try to identify what had caused the error. But that's all part of the fun.

### Obsidian
One of the benefits of a Hugo's 'decoupled' approach to content is that I can use any number of Markdown editors to create content in a simple and consistent format, without having to worry about the configuration of the rest of the site. But I also I wanted a way to publish posts — ideally from my phone  — without having to manually move files around or run command line.

I tried a number of self-hosted CMS solutions, including Decap CMS and TinaCMS. These create a back-end admin portal to the website where I could write and publish content, but for various reasons, I found each of these too restrictive or overwrought.

Then, I discovered Obsidian. This app, combined with the [Enveloppe](https://github.com/Enveloppe/obsidian-enveloppe) plugin, lets me write, organise *and* publish content directly to my GitHub repository. Netlify then picks up on this change and automatically redeploys the site. Bingo.

### Reflections on open source
The page you're looking at now is the output of my adventures. It may look simple and unadventurous — in fact, I hope it does — but more important to me is the learning process I've been on to get here. And, as a bonus, I now have somewhere to self-host my own posts like this one.

My final reflection is on the [power of open source](https://opensource.googleblog.com/2024/04/the-power-of-open-source.html#:~:text=It%20fosters%20creativity%20and%20collaboration,full%20creative%20autonomy%20without%20restriction.). The concept of using open technologies to drive innovation that benefits everyone is more important than I could hope to do justice to in my own words.

But I can land one significant point from a personal perspective: every part of this process is totally free. Hugo is open source. Git is open source. GitHub is free for personal use. Netlify is free for personal projects. Obsidian is free. Enveloppe is open source.

Not only that, but so many of these tools are supported by fantastically dedicated communities of users and developers who are interested only in the continued development and success of their work.  Whenever I ran into a problem — and this was *very* frequent — there was always a forum thread where people came together to solve the same issue that someone else had experienced.

I'm proud of what I've been able to piece together, and I'm grateful that these tools and communities exist. I won't be leaving it 20 years to jump in again.

