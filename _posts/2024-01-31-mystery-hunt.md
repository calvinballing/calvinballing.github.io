---
type: standard
featimg: troll-quote.jpg
title: MIT Mystery Hunt 2024
homedisplay: featimg
description: 
tags: Puzzles Games Fun Musings
comments: true
date:   2024-01-31 12:00:00 -0500
---

# MIT Mystery Hunt
## Disclaimer
*The reflections below are my own.  I do not speak on behalf of TTBNL or any other team.*

## Background
Mystery Hunt is an annual, weekend-long, puzzle-solving extravaganza held at MIT over MLK Jr. weekend, with thousands of solvers on hundreds of teams that range in size from in the hundreds to solo solvers, solving hundreds of challenging bespoke puzzles that require wordplay, logic, creativity, lateral thinking, internet sleuthing, spreadsheets, and sometimes speciality skills like knitting, computer science, multiple languages, or obscure fandom knowledge.

I learned about it first when I joined a small team preparing for the 2021 Hunt.  With the pandemic in full-swing, this Hunt was fully remote, making it accessible to a wider audience. I competed with that team for two years, before they disbanded.  Still interested in solving again, I filled out a form for "unattached solvers" to get conected with teams.  As luck would have it, I ended up on a large team that (The Team Formerly Known as The Team Formerly Known as The Team Formerly Known as The Team Formerly Known as The Team Formerly Known as the Team to Be Named Later) went on to win Hunt that year.  The reward/requirement for winning is being tasked with writing the hunt for the following year.

So, with only three years of hunt experience behind me, I was now tasked with helping putting on this huge event.  Running hunt means picking a theme, writing a story, writing meta puzzles, writing puzzles, factchecking puzzles, testsolving puzzles, revising puzzles, postprodding puzzles, manufacturing physical puzzles, designing art, running the hunt website, running events, fundraising, coordinating with MIT Puzzle club, checking in on teams during the event, answering hint requests, grading scavenger hunt submissions, and coordinating all the people to do these tasks.

## Non-puzzling contributions
I contributed to the theme picking discussion, helped with QA on some of the puzzles, postprodding some of the puzzles, UI improvements on the website (especially to make it more mobile friendly), answering some hints, testsolving puzzles, and a variety of other miscellaneous tasks.

## Overall
Two points to address that stick out about the hunt we wrote: tech issues and Length.  It took several hours to get the site up and running after the hunt was supposed to have started.  Even after it was running, we had to disable some of the special features, and about once an hour throughout the entire weekend we had to manually reboot the server.  Once we realized that we had a problem, we scrambled to implement a backup plan by releasing links to the Google Doc version of the puzzles that we had used for testsolving. Fortunately, we were able to get things working "enough" that we didn't have to rely on that solution very long.  However, it was still a disappointing start to the weekend.

Despite the ~150-puzzle hunt that our team had won being generally criticized for being too long (it ended in the wee hours of Monday morning, and that, only with generous amounts of free answers given out), we wrote a hunt that had well over 200 puzzles, again creating a situation with an early Monday morning finish.

I acknowledge these shortcomings, and many words have been written about these and other criticisms of our hunt.  However, in this review I'm going to focus more on my individual contributions to the hunt.

The portions below will contain spoilers for many puzzles, so continue at your own risk!

## Puzzles
I have an author credit on [10 puzzles](https://devjoe.appspot.com/huntindex/author/haysjim).  Of these, for one I provided inspiration, for two I collaborated, and seven I'm listed as sole author. 

### Inspiration
#### Hydra
I suggested the general concept for this round, that solvers would be fighting a Hydra where solving a puzzle would provide multiple additional puzzles.  I had thought we might design this as an "infinite" round that would allow solvers to go arbitrarily deep using procedurally generated puzzles.  While we did use procedurally generated puzzles, in the end we decided that both from a technical perspective, and from a solving perspective, adding arbirary depth was unnecessary.  I tried to help brainstorm ideas for the puzzle, but never came up with a viable puzzle structure. 

### Collaboration
#### Boosted
A joint effort that came out of the writing retreat.  I believe this ended up being the most-solved puzzle of the hunt with 168 teams solving it, due in combination to its position as one of the unlocked puzzles for every team at the beginning of the hunt, its small size, and its structure being strongly hinted through the flavor text.

Thoughts on the answer: >!We had the somewhat awkward task of cluing the phrase "THE CABALLEROS", without referencing the 1944 movie *The Three Caballeros*.  Normally one would either say "Caballeros" or perhaps "Los Caballeros", but we specifically needed "The" to be part of the answer.  This meant that we probably couldn't get to the answer using a final cluephrase, but would likely need to provide all the letters in the answer directly.  Thinking about wordplay, at some point we noticed that we could  break the phrase up into sub-words that could be clued. "The Cab All Eros".  The next step was probably realizing that while Eros is uncommon, it was just one letter away from the more common "Zeros", which led to the "subtract a letter" concept that the puzzle is built around.!<

The puzzle had the additional constraint that the puzzle needed to start with the letter B.  Even after the rest of the puzzle was done, we spent a lot of time settling on the title.   

#### Augmented Raility
This puzzle was in full swing by the time I joined to help out.  I suggested a few of the games to include, and did most of the art for the puzzle.  A few of the things I was especially proud of were finding a 3D voxel model of Big Ben that I was able to rotate into the correct orientation to get a screenshot that fit the image's perspective, and finding a 3D Hachiko model that I was able to rotate into the correct orientation to make Hachiko a racer in Mario Kart.  The Mario Kart image also required finding an emulator and retrying the race enough times to get a string of banana peels, which is 5% odds, and only achievable when in 1st or 2nd place, with a second racer behind me in the correct position.

I'd probably have blurred the masks in the last image if doing this again.

Overall, I was pretty pleased with the concept of the puzzle, the implementation, the art, and how appropriate the answer was for the puzzle.

### Solo
#### IV GUYS
I think this puzzle turned out pretty well, and it was also pretty well received. The idea for this puzzle came while brainstorming puzzle ideas >!while driving, and seeing stores with lights out in their signs!<. One thing that came out of the first round of testsolving, was that originally >!I had kind of put some of the stores that were more similar into groups, but it wasn't actually fully in separate categories by group. Actually fully splitting it out so each set was a coherent grouping significantly improved the puzzle.!<

#### Ancient Mystery
I'm not a big fan of this puzzle in retrospect.  The break-in on this puzzle was under-clued.  The puzzle may give an aha when you finally make sense of what you're looking at, but the source data that it works from is rather fuzzy, and most solvers are going to be stuck with blind Googling until they get a hit.  

#### Cupid's Guide to Building Long-Distance Relationships
##### Puzzle Summary
Objects are shown along with pairs of numerical values, with each object having one number above or below, and another to the left or right.  The numbers are accompanied by arrows pointing in those directions.  

Summary >!The objects all correspond with real-world buildings shaped like those objects.  The arrows indicate latitude/longitude offsets from the buildings to other buildings that when viewed from the side resemble letters of the alphabet.!<

Analysis >!While I'm reasonably happy with the end product here when considered as a standalone puzzle in its own right, this puzzle's glaring flaw (which is no one's fault but my own), is that it had absolutely no business being in the "fish" round.  A "fish" round is designed to have a large number of easier than normal puzzles.   From early testsolving it was clear that it would have a low solve rate if kept in that round.  And indeed, it did.  It was the least-solved puzzle in the entire 40+ puzzle fish round.  I was offered the opportunity to rewrite it for a different round, but declined given the amount of work that had already gone into designing and theming the art and cluephrase around the specific answer I had been given.  Depending on the new answer, I might only have been able to reuse half of the selected buildings, and probably would have wanted to redo all the cupid theming.  While I had alternatives in mind for a lot of other possible letter-buildings from when the puzzle was still in the concept phase, I didn't yet have images to include in the solution file for those alternatives, either. One challenge of any image-based puzzle like this is that properly sourcing fair-use images with citations takes a lot of time.  I'm not an expert at this, but tried to do my best.

I did enjoy making this puzzle though, both the art, and tracking down the buildings.  The letter buildings were difficult to find, and made more challenging by repeatedly running across concept art for buildings that did not exist.  There were also some that I found that I believe to have been real, but might have needed Rainbolt's help on, because I could not locate where the buildings were, if they really existed.

And I'd like to point out that for the Community Bookshelf from Kansas City, the puzzle image is not just an image of a bookshelf, but specifically has all the same books as the Community Bookshelf, arranged in order, as supplied by our local library system.
!<

#### Don't Feed the Trolls
I'm fairly pleased with this puzzle.  I enjoyed finding the thematic fonts to use (though looking back over, a few seem out-of-place as more standard fonts, and I don't recall why that was).

![Troll Quote](/img/troll-quote.jpg)

#### Turning Æsop's Tables; a new translation
I like that in a puzzle like this one, even after you've had the aha, there's still creative work to do to solve each of the stories.  This was fun to write, and hopefully fun to solve.  Its difficulty level was well-suited for the fish round.

#### Intelligence Collection
This ended up being one of my favorite puzzles that I wrote for hunt.  I like that it encouraged groups to work on it together.  Some solvers reported feeling that there were too many steps after the initial one to get to the answer, but others reported that these steps made it one of their favorite puzzles ¯\\\_(ツ)\_/¯

#### ENNEAGRAM
This was one of a smaller number of interactive puzzles.  In 2023 of the prior year, I was introduced to the work of Jack Lance via OCTOGRAM.  I had been considering reaching out to Jack to ask for permission to include an OCTOGRAM-inspired puzzle in the hunt, when I learned of his tragic early demise.  I chose to move forward with the puzzle despite not having had a chance to ask, hoping that Jack would have appreciated their own creativity inspiring creativity in others.

In the editorial process I was encouraged to consider spelling out the answer literally, rather than giving a clue-phrase leading to the answer.  I argued that a final ENNEAGRAM would be a more fitting conclusion to the puzzle, and less susceptible to Nutrimatic.  While we did settle on a clue-phrase, I do think the final clue ends up being the weakest part of the puzzle, resulting in many teams losing steam after getting stymied on the final step (e.g. *Death and Mayhem*, who won, took almost an hour between the final clue phrase and solving the puzzle).  Further, 13 teams solved the puzzle, and of those, 12 gave the reasonable (but incorrect for this puzzle) answer of VIRGINIA, which demonstrates that the clue wasn't that strong.  


## Overall

I'm proud of the hunt we put on.  It was a lot of work, and I was only able to contribute as much as I did because I was between jobs at the time, and I did tone back the work on my job hunt during the busiest part of hunt preparation.  It would be fun to help put on hunt again sometime, but not for a long time. 