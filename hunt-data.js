/* ============================================================
   HUNT DATA — this is the ONLY file you edit to set up an event.
   Change the event name, passwords, and missions below.
   The app (index.html) reads everything from here.
   ------------------------------------------------------------
   Items marked  >>> DRAFT <<<  are replacement content written
   for the Nov 28, 2026 public hunt because the original Base44
   wording lived in app code and could not be recovered (Show Me
   the Dough questions, Sabotage wording, BINGO squares 1/2/9),
   or because the original wording was Fulton Bank-specific
   (missions #8 and #13 openings). Kendra: approve or replace
   them — they are listed word-for-word in the build report.
   ============================================================ */

window.HUNT = {

  /* ---- Event settings ---- */
  eventName: "Lancaster City Scavenger Hunt",
  eventDateLabel: "Saturday, November 28, 2026",
  eventDateTimeLabel: "Saturday, November 28, 2026 at 12:00 PM · 100 min",
  startTimeISO: "2026-11-28T12:00:00",   // hunt start (Eastern)
  durationMinutes: 100,
  password: "112826",              // guest access code teams type to enter (tip: event date, MMDDYY)
  adminPassword: "admin1128",      // host password for the Admin button — change this!
  welcomeMessage: "Welcome to your Lancaster City Scavenger Hunt! Get your team ready to explore, earn, and discover.",
  hostPhoneDisplay: "(717) 925-0891",
  hostPhoneText: "17179250891",    // number teams text for check-in (country code + number, no spaces)

  /* Announcements teams see as a full-screen pop-up after sign-in.
     You can also send new ones live from Admin → Announce. */
  seedAnnouncements: [
    { type: "Reminder",    text: "Don't forget: enthusiasm = bonus points", fullscreen: true },
    { type: "Reminder",    text: "Don't forget to redeem your pizza before 4:30 PM", fullscreen: true }
  ],

  /* ---- Missions ----
     type (pill shown to players): "Text" | "Photo" | "Video"
     control (how the mission is completed):
       "info"    — read, then tap the submit button (Mission 1)
       "photo"   — upload 1 photo, points on submit (self-reported)
       "photo2"  — upload 2 photos, points on submit (self-reported)
       "video"   — upload 1 video, points on submit (self-reported)
       "quiz"    — Show Me the Dough: questions below, points per correct answer
       "bingo"   — Juice Box BINGO board below
       "pizza"   — Golden Pizza Pass slices below
       "nocap"   — video first, then answers revealed, team self-scores 0–3
       "checkin" — tap WE'VE ARRIVED, then upload a photo, points on submit
     restroom: true shows a "Restroom" tag on the mission card.
  */
  missions: [

    {
      id: "m1", type: "Text", control: "info",
      title: "Before You Begin", points: 5,
      body: [
        "Assign your team roles and check in with your host in person before starting the hunt. Your host will tell you where to begin.",
        "One of those roles matters most: your team's BOOKWORM. Pick your most detail-oriented reader — their one job is to read every mission out loud, word for word, before your team starts it. No skimming, no paraphrasing. Everything your team needs is in the mission text."
      ],
      submitText: "Team roles assigned and checked in with the host. Ready to begin!"
    },

    {
      id: "m2", type: "Photo", control: "photo",
      title: "A Regular Picasso", points: 50,
      hostBonus: { points: 100, label: "Best drawing bonus (+100, host-awarded at the end)" },
      body: [
        "Lancaster City was home to a world-renowned artist! Visit his childhood home for a fun communication challenge.",
        "1. Decide who is the LEAST artistic in your group.",
        "2. Go to the back room on the first floor of the museum.",
        "3. Give them paper and drawing supplies. But don't let them see the image.",
        "4. Everyone else takes turns providing 1 specific detail to help them draw the bowl of fruit on the table.",
        "5. Submit a photo of the artist with their handiwork.",
        "Submit a group photo with your drawing. Best drawing wins 100 bonus points!"
      ]
    },

    {
      id: "m3", type: "Video", control: "video",
      title: "🥊 The Rocky Steps — Eye of the Tiger!", points: 50,
      body: [
        "Lancaster has its own Rocky steps! Head to the top of the iconic steps at the Fulton Theatre, blast 'Eye of the Tiger', and recreate a training montage with the whole team.",
        "1. Head to the steps at the Fulton Theatre.",
        "2. Play 'Eye of the Tiger' on a speaker.",
        "3. Film your team running to the top and raising their arms in victory.",
        "Bonus points if you make the film in slow motion and add dramatic yelling. Submit your video."
      ]
    },

    {
      id: "m4", type: "Text", control: "quiz",
      title: "Show Me the Dough", points: 60,
      body: [
        "Time to make some dough. Get a question right and a $100 bill goes in — answer all six to fill the ATM with $600 of dough. Play from wherever you are; there is nowhere to go for this one."
      ]
      /* questions live in doughQuestions below (10 pts each) */
    },

    {
      id: "m5", type: "Text", control: "pizza",
      title: "🍕 Slice of the Action!", points: 50,
      body: [
        "Somewhere in downtown Lancaster, a delicious slice of pizza is waiting for you. But first, you've got to earn your slice of the action! We've got six slices of the pie scattered throughout the city. Find all six and your Golden Pizza Pass unlocks. Then head to Two Cousins on King Street, show your pass code, and redeem it at the counter. That's when the points land: 5 points for every slice you collected, plus a 20-point bonus the moment you redeem. Keep your eyes peeled as you explore downtown. You never know when your next slice might appear!"
      ]
      /* slices live in pizzaSlices below */
    },

    {
      id: "m6", type: "Video", control: "video",
      title: "Stay on Beat", points: 30,
      body: [
        "Rock, Paper, Scissors — loser does the Macarena while singing a patriotic song. Record a video to earn your points!"
      ]
    },

    {
      id: "m7", type: "Text", control: "bingo",
      title: "Juice Box BINGO", points: 10,
      body: [
        "Play BINGO with your team to earn a cocktail at Jimmy Juice. Complete any line to unlock your drink — redeem it right away, or keep playing for 10 bonus points on every extra correct square."
      ]
      /* squares live in bingoSquares below */
    },

    {
      id: "m8", type: "Video", control: "nocap",
      title: "No Cap: Ask a Gen Z", points: 30,
      /* >>> DRAFT <<< opening reworded without the banking framing.
         The 3 questions, the correct answers, and the self-scoring
         flow below are IDENTICAL to the original. */
      body: [
        "Time to test the generation gap! Today, your points depend on a Gen Z. Find a Gen Z out in the real world. Can't find one? Try a coffee shop. Ask permission to record them, then ask all three questions on one video:",
        "1. What does APR stand for?",
        "2. Why do you sign the back of a check?",
        "3. What are the two most common lengths of a house loan?",
        "RULES:",
        "- One volunteer answers all three questions.",
        "- Record their answers exactly as they give them — no helping, no hints, no coaching.",
        "- If someone declines to be recorded, ask someone else.",
        "- One video per team.",
        "HOW SCORING WORKS:",
        "1. Submit the video first.",
        "2. Only after the video is submitted, the app reveals the correct answers.",
        "3. Your team then selects how many questions your volunteer answered correctly (0, 1, 2, or 3) and the app awards 10 points per correct answer, up to 30 points.",
        "4. The video stays saved with your submission so your host can spot-check if needed. There is no review queue for this mission — your team scores itself."
      ],
      nocap: {
        questions: [
          "What does APR stand for?",
          "Why do you sign the back of a check?",
          "What are the two most common lengths of a house loan?"
        ],
        answers: [
          "APR = Annual Percentage Rate",
          "Signing the back of a check = endorsing it, so the bank can deposit or cash it",
          "House loan lengths = 15-year and 30-year"
        ],
        pointsPerCorrect: 10
      }
    },

    {
      id: "m9", type: "Photo", control: "photo", restroom: true,
      title: "The Next Big Flavor", points: 30,
      body: [
        "Step 1 — Arrival: Visit Seasons Olive Oil on King Street. Head inside and the staff will give each of you some popcorn. Be mindful of any allergies.",
        "Step 2 — The Brief: In addition to Pop-Tarts, Rice Krispies, and Froot Loops, Kellogg's is branching into the popcorn business — and your team has been chosen to create the company's next big hit flavor!",
        "Step 3 — Your Ingredients: You will use 3 items — infused oil, seasoning, and salt.",
        "Step 4 — Create Your Flavor: Use the infused oils, seasonings, and salts available at Seasons to create your team's new flavor. Choose one ingredient from each category and one team member to hold your ingredients — the rest of the team should cheer them on!",
        "Step 5 — Name Your Flavor: Decide on a name for your new flavor.",
        "Step 6 — Snap & Send: Take a photo of your team member holding your 3 ingredients along with your popcorn and send it to us.",
        "Plus, if you're looking for a restroom — the staff at Seasons Olive Oil will be happy to help you. The restroom is in the back. While you're at it, check out the amazing flavors and products at Seasons and buy some olive oil, if you like.",
        "FREE olive oil when you check in with the staff: The first 100 teams to visit will receive a free 60 ml bottle of olive oil to take home!"
      ]
    },

    {
      id: "m10", type: "Photo", control: "photo",
      title: "The LinkedIn Look", points: 30,
      hostBonus: { points: 70, label: "Best Effort bonus (+70 to one team, host-announced at the end)" },
      body: [
        "Mayhem Cafe is your supplies pickup. Everyone draws their LinkedIn self-portrait — name and dream job title underneath — then one team photo with the portraits held up next to your faces. 30 points the moment you submit.",
        "🏆 70-point Best Effort bonus goes to one team, announced by the host at the end."
      ]
    },

    {
      id: "m11", type: "Photo", control: "photo2",
      title: "📸 Iconic IRL", points: 100,
      photoLabels: ["Photo 1 — the icon in real life", "Photo 2 — its artistic match at Lancaster Art Vault"],
      body: [
        "Lancaster's icons aren't just on the streets—they're in the artwork, too. Find one in real life, then track down its artistic match at Lancaster Art Vault.",
        "Submit TWO photos: one of the icon in real life, and one of its artistic match at Lancaster Art Vault."
      ]
    },

    {
      id: "m12", type: "Video", control: "video",
      title: "By Royal Decree", points: 50,
      body: [
        "Hear ye, hear ye! Find the hidden kingdom on Market Street and perform your royal scene as a team.",
        "Bonus points for a dramatic medieval accent."
      ]
    },

    {
      id: "m13", type: "Photo", control: "checkin",
      title: "Dressed to Decline", points: 50,
      hostBonus: { points: 75, label: "Most declined outfit bonus (+75 to one team, host-announced at the end)" },
      /* >>> DRAFT <<< opening reworded without the bank-loan framing.
         Location, WE'VE ARRIVED check-in, 4-piece outfit rule, and
         the +75 bonus are IDENTICAL to the original. */
      body: [
        "A hopeful entrepreneur is getting ready for the biggest pitch meeting of their life — asking a room full of investors to back Lancaster's 73rd downtown coffee shop. The business plan? Debatable. The outfit? An instant decline. Head to People & Things, 17 N. Prince Street (2nd floor) and tap WE'VE ARRIVED.",
        "1. Choose your pitcher: the teammate who has had the most coffee today.",
        "2. Build the most absurd pitch-meeting outfit you can. Your pitcher must be wearing at least 4 pieces of clothing or accessories to qualify. No purchases necessary — just be creative with what you have, borrow from each other, and use items from the shop displays!",
        "3. Submit a photo of your pitcher, dressed and ready for their big meeting.",
        "Bonus: the single most declined outfit of the day wins an extra 75 points, announced by the host at the end."
      ]
    }

  ],

  /* ---- Show Me the Dough quiz ----
     >>> DRAFT <<< all six questions are replacements (originals
     were in Base44 app code and could not be recovered).
     Money-themed, general-public friendly. 10 points each. */
  doughQuestions: [
    { q: "Whose portrait appears on the U.S. $100 bill?",
      answers: ["benjamin franklin", "franklin", "ben franklin"] },
    { q: "What does ATM stand for?",
      answers: ["automated teller machine"] },
    { q: "You buy a $3 slice of pizza and pay with a $20 bill. How much change do you get back?",
      answers: ["17", "$17", "17 dollars", "seventeen", "seventeen dollars"] },
    { q: "What building is pictured on the back of the U.S. $20 bill?",
      answers: ["the white house", "white house"] },
    { q: "A 'sawbuck' is old-time slang for which bill?",
      answers: ["10", "$10", "10 dollar bill", "ten", "ten dollar bill", "the $10 bill", "a ten"] },
    { q: "How many quarters are there in $10?",
      answers: ["40", "forty"] }
  ],

  /* ---- Juice Box BINGO squares (3x3, in order 1–9) ----
     Squares 3–8 are the originals. Squares 1, 2 and 9 are
     >>> DRAFT <<< generic Lancaster replacements (originals
     were Fulton Bank-specific). */
  bingoSquares: [
    /* >>> DRAFT <<< square 1 */
    { label: "Red Rose City",
      question: "Lancaster is known as the Red Rose City. The red rose was the symbol of which English royal house?",
      answers: ["house of lancaster", "the house of lancaster", "lancaster"],
      hint: "It shares its name with our city — and its rival house flew a white rose." },
    /* >>> DRAFT <<< square 2 */
    { label: "Conestoga Wagon",
      question: "Lancaster County gave its name to a famous covered wagon that carried pioneers west. What is it called?",
      answers: ["conestoga wagon", "the conestoga wagon", "conestoga"],
      hint: "It shares its name with a river that winds through Lancaster County." },
    { label: "City Status",
      question: "What year did Lancaster officially become a city?",
      answers: ["1730"],
      hint: "As old as Central Market" },
    { label: "Jimmy Juice Map",
      question: "Go to Juice Box and scan the QR code. Use the map. What are the states furthest North & South where you can get a Jimmy Juice?",
      answers: ["maryland and new york", "new york and maryland"],
      hint: "The map shows every state where Jimmy Juice is sold — look at the top and bottom edges." },
    { label: "Lancaster Skyline",
      question: "How many stories tall is the tallest building in Lancaster?",
      answers: ["19", "nineteen"],
      hint: "No 13th floor on this one!" },
    { label: "Back in 1880",
      question: "If you're standing inside Juice Box today, what historic building would you have been standing in around 1880? Hint: The Lancaster Parking Authority might have ticketed your horse!",
      answers: ["city hall"],
      hint: "Look for signage inside Juice Box about the building's history." },
    { label: "Central Market",
      question: "Which downtown Lancaster market has connected local farmers and small businesses with shoppers since 1730, the oldest continuously operating farmers market in America?",
      answers: ["lancaster central market", "central market"],
      hint: "It's a short walk from where your hunt starts." },
    { label: "Oldest in Lancaster",
      question: "Lancaster is home to which oldest thing?",
      answers: ["all the above"],
      choices: ["Opera House", "Cigar Shop", "Hardware store", "All the above"],
      hint: "It isn't a trick — the city holds bragging rights on more than one of these." },
    /* >>> DRAFT <<< square 9 */
    { label: "Penn Square Monument",
      question: "At the very center of Lancaster stands the Soldiers and Sailors Monument in Penn Square. Which war does it honor Lancaster's soldiers from?",
      answers: ["civil war", "the civil war", "american civil war"],
      hint: "It was dedicated in 1874, less than ten years after that war ended." }
  ],

  /* ---- Golden Pizza Pass slices (mission #5) ----
     5 pts per slice, collected when the pass is redeemed at
     Two Cousins on King Street, plus a 20-pt bonus on redemption. */
  pizzaSlices: [
    { emoji: "🐶", title: "A cute dog",
      description: "Find a cute dog somewhere along your adventure!" },
    { emoji: "💍", title: "A long-married couple",
      description: "Find a couple who has been married for at least 20 years." },
    { emoji: "🗽", title: "A statue or sculpture",
      description: "Find a public statue or sculpture in downtown Lancaster." },
    { emoji: "🎅", title: "Santa Claus",
      description: "Find Santa! The real one isn't required — a decoration, painting, ornament, window display, or figurine counts." },
    { emoji: "📖", title: "The FIG Magazine logo",
      description: "Find the FIG Magazine logo somewhere downtown — a sticker, magazine, sign, or business display." },
    { emoji: "🔢", title: "A business starting with a number",
      description: "Find a local business whose name begins with a number — written as a digit or spelled out." }
  ],
  pizzaPointsPerSlice: 5,
  pizzaBonusPoints: 20,
  pizzaRewardVenue: "Two Cousins on King Street",

  /* ---- Sabotage challenges ("Close Mouths Don't Get Fed") ----
     Admin-triggered from Admin → Live. The target team gets all
     three challenges, one upload each, and their missions stay
     locked until all three proofs are submitted.
     >>> DRAFT <<< wording for all three (originals were in
     Base44 app code and could not be recovered). */
  sabotageChallenges: [
    { key: "thriller", label: "Thriller Dance", proofType: "video",
      text: "SABOTAGE — THRILLER TIME! Your whole team must perform 30 seconds of the Thriller dance — zombie arms, claw hands, dramatic head turns. Film it and upload the video as proof to unlock your missions." },
    { key: "christmas", label: "Christmas Carol Chaos", proofType: "video",
      text: "SABOTAGE — CHRISTMAS CAROL CHAOS! Your whole team must sing one full chorus of 'Jingle Bells' in your loudest, most dramatic opera voices. Film it and upload the video as proof to unlock your missions." },
    { key: "jumping_jacks", label: "Jumping Jack Attack", proofType: "photo",
      text: "SABOTAGE — JUMPING JACK ATTACK! Get one photo of your ENTIRE team caught mid-air doing jumping jacks at the same time — every pair of feet off the ground. Upload the photo as proof to unlock your missions." }
  ]

};
