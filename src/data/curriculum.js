/* ============================================================
   Cyber Academy — Curriculum
   30 lessons mirroring the BOOTCAMP 30-day roadmap (Weeks 1-4).
   Each lesson teaches real content, then a 30-min practical,
   a quiz, and curated free resources.
   ============================================================ */

export const curriculum = [
  /* ============================ WEEK 1 ============================ */
  {
    week: 1,
    title: 'Coding Fundamentals + How the Internet Works',
    goal: 'Be comfortable in the terminal, write basic Python, and explain how the internet moves data.',
    canDo: 'Write Python with variables, loops, conditionals, and functions; navigate the command line; explain IP, DNS, and HTTP.',
    lessons: [
      {
        id: 'w1d1', week: 1, day: 1, track: 'coding', duration: '4 hrs',
        title: 'Setup & Your First Program',
        objectives: [
          'Install Python and VS Code and run a script',
          'Understand how computers store data as binary',
          'Use print() and input() with variables',
        ],
        sections: [
          { heading: 'How computers actually think', body: `A computer only understands two states: on and off — **1 and 0**. Everything you see (text, images, this app) is ultimately billions of these *bits*. Eight bits make a **byte**, which can represent a number from 0–255 — enough to encode a single letter.\n\nYou don't write in 1s and 0s. You write in a language like **Python**, and an *interpreter* translates it down to those signals. That's the whole game: humans write readable instructions, software translates them for the machine.` },
          { heading: 'Your toolkit', body: `Two installs to do today:\n\n1. **Python** from [python.org](https://python.org) — on the installer, **check "Add Python to PATH"** (this lets you run \`python\` from any terminal).\n2. **VS Code** from [code.visualstudio.com](https://code.visualstudio.com) — your code editor.\n\nVerify it worked: open a terminal and type \`python --version\`. You should see a version number.` },
          { heading: 'Variables and input/output', body: `A **variable** is a labelled box that stores a value:\n\n\`\`\`python\nname = "Ada"        # text (a string)\nage = 36            # a whole number (int)\nprint("Hello", name)\n\`\`\`\n\n\`print()\` shows text on screen. \`input()\` *asks* the user and returns whatever they type — **always as a string**. To do maths with it, convert: \`age = int(input("Age? "))\`.` },
        ],
        practical: {
          title: 'Greeting + the year you turn 100',
          steps: [
            'Ask the user for their name and store it in a variable.',
            'Ask for their age and convert it to a number with int().',
            'Calculate the year they will turn 100 (current year + (100 - age)).',
            'Print a friendly greeting using their name, then the year they turn 100.',
            'Run it with: python your_file.py',
          ],
        },
        quiz: [
          { q: 'What does the input() function always return?', options: ['A number', 'A string (text)', 'True or False', 'Nothing'], answer: 1, explain: 'input() always returns a string — that is why you wrap it in int() when you need a number.' },
          { q: 'Eight bits make up one…', options: ['Byte', 'Pixel', 'Kilobyte', 'Word'], answer: 0, explain: '8 bits = 1 byte, which can hold a value 0–255.' },
          { q: 'Which option on the Python installer is important to enable?', options: ['Add to Desktop', 'Add Python to PATH', 'Install games', 'Disable antivirus'], answer: 1, explain: '"Add Python to PATH" lets you run python from any terminal window.' },
        ],
        resources: [
          { label: 'CS50 Lecture 0 (Harvard, free)', url: 'https://cs50.harvard.edu/x/' },
          { label: 'Download Python', url: 'https://python.org/downloads/' },
          { label: 'Download VS Code', url: 'https://code.visualstudio.com/' },
        ],
      },
      {
        id: 'w1d2', week: 1, day: 2, track: 'coding', duration: '4 hrs',
        title: 'Variables, Strings & Numbers',
        objectives: [
          'Work with strings, integers, and floats',
          'Combine variables into output (f-strings)',
          'Convert between data types',
        ],
        sections: [
          { heading: 'Data types', body: `Python values have **types**:\n\n- **str** — text: \`"hello"\`\n- **int** — whole numbers: \`42\`\n- **float** — decimals: \`3.14\`\n- **bool** — \`True\` / \`False\`\n\nCheck a type with \`type(x)\`. Types matter: \`"5" + "5"\` gives \`"55"\` (joined text), but \`5 + 5\` gives \`10\`.` },
          { heading: 'f-strings: the clean way to build text', body: `Put an \`f\` before a string and drop variables inside \`{}\`:\n\n\`\`\`python\nname = "Sam"\ntemp = 21.5\nprint(f"{name}, it is {temp}°C today")\n\`\`\`\n\nThis is far cleaner than gluing strings with \`+\`.` },
          { heading: 'Converting types', body: `\`int("10")\` → 10, \`float("3.5")\` → 3.5, \`str(99)\` → "99".\n\nA classic beginner bug: adding user input without converting. \`input()\` gives text, so \`int(input(...))\` is what you usually want for numbers.` },
        ],
        practical: {
          title: 'Unit converter (miles ↔ km, °C ↔ °F)',
          steps: [
            'Ask the user for a distance in miles, convert to km (1 mile = 1.60934 km).',
            'Ask for a temperature in °C, convert to °F (F = C × 9/5 + 32).',
            'Use float() so decimals work.',
            'Print results with an f-string, e.g. "5 miles = 8.05 km".',
          ],
        },
        quiz: [
          { q: 'What is the result of "5" + "5" in Python?', options: ['10', '"55"', 'Error', '25'], answer: 1, explain: 'Both are strings, so + joins them into "55". For arithmetic you need numbers.' },
          { q: 'Which is an f-string?', options: ['"Hi " + name', 'f"Hi {name}"', 'format(name)', '"Hi %name"'], answer: 1, explain: 'An f-string starts with f and uses {} to insert variables.' },
          { q: 'What type does 3.14 have?', options: ['int', 'str', 'float', 'bool'], answer: 2, explain: 'Numbers with a decimal point are floats.' },
        ],
        resources: [
          { label: 'Automate the Boring Stuff — Ch.1', url: 'https://automatetheboringstuff.com/2e/chapter1/' },
          { label: 'Exercism Python track', url: 'https://exercism.org/tracks/python' },
        ],
      },
      {
        id: 'w1d3', week: 1, day: 3, track: 'coding', duration: '4 hrs',
        title: 'Making Decisions: Conditionals',
        objectives: [
          'Use if / elif / else',
          'Apply comparison and logical operators',
          'Generate random numbers',
        ],
        sections: [
          { heading: 'if / elif / else', body: `Programs make decisions by checking conditions:\n\n\`\`\`python\nscore = 72\nif score >= 90:\n    print("A")\nelif score >= 60:\n    print("Pass")\nelse:\n    print("Try again")\n\`\`\`\n\n**Indentation matters in Python** — the indented block belongs to the \`if\`. Use 4 spaces.` },
          { heading: 'Comparison & logical operators', body: `Compare: \`==\` (equal), \`!=\` (not equal), \`<\`, \`>\`, \`<=\`, \`>=\`.\n\nCombine conditions with **and**, **or**, **not**:\n\n\`\`\`python\nif age >= 13 and age <= 19:\n    print("Teenager")\n\`\`\`\n\nNote: \`=\` *assigns* a value, \`==\` *compares* — mixing these up is a top beginner bug.` },
          { heading: 'Randomness', body: `Import Python's random module to pick numbers:\n\n\`\`\`python\nimport random\nsecret = random.randint(1, 100)  # 1..100 inclusive\n\`\`\`\n\nThis is the seed of your guessing game.` },
        ],
        practical: {
          title: 'Number-guessing game',
          steps: [
            'Use random.randint(1, 100) to pick a secret number.',
            'Loop: ask the user to guess.',
            'If the guess is too high or too low, tell them; if correct, congratulate and stop.',
            'Bonus: count how many guesses it took.',
          ],
        },
        quiz: [
          { q: 'Which operator checks if two values are EQUAL?', options: ['=', '==', '=>', ':='], answer: 1, explain: '== compares; a single = assigns a value to a variable.' },
          { q: 'What makes a block belong to an if statement in Python?', options: ['Curly braces {}', 'A semicolon', 'Indentation', 'The word "then"'], answer: 2, explain: 'Python uses indentation (whitespace) to define blocks.' },
          { q: 'random.randint(1, 6) can return…', options: ['1 to 5', '0 to 6', '1 to 6 inclusive', 'Any decimal'], answer: 2, explain: 'randint is inclusive on both ends, so 1 through 6.' },
        ],
        resources: [
          { label: 'Automate the Boring Stuff — Ch.2 (Flow control)', url: 'https://automatetheboringstuff.com/2e/chapter2/' },
        ],
      },
      {
        id: 'w1d4', week: 1, day: 4, track: 'coding', duration: '4 hrs',
        title: 'Repeating Work: Loops',
        objectives: [
          'Use for loops with range()',
          'Use while loops and avoid infinite loops',
          'Combine loops with conditionals',
        ],
        sections: [
          { heading: 'for loops', body: `A \`for\` loop repeats once per item:\n\n\`\`\`python\nfor i in range(1, 6):   # 1,2,3,4,5\n    print(i)\n\`\`\`\n\n\`range(start, stop)\` stops *before* stop. \`range(5)\` gives 0–4.` },
          { heading: 'while loops', body: `A \`while\` loop repeats *as long as* a condition is true:\n\n\`\`\`python\ncount = 0\nwhile count < 3:\n    print(count)\n    count += 1   # MUST change, or it loops forever\n\`\`\`\n\nForgetting to update the condition causes an **infinite loop** — press Ctrl+C to stop it.` },
          { heading: 'Putting it together', body: `Loops + conditionals = real logic. Example: print only even numbers.\n\n\`\`\`python\nfor n in range(1, 11):\n    if n % 2 == 0:   # % is remainder; 0 means divisible\n        print(n)\n\`\`\`\n\nThe \`%\` (modulo) operator is everywhere in programming — it gives the remainder.` },
        ],
        practical: {
          title: 'Multiplication table + even numbers 1–100',
          steps: [
            'Ask the user for a number N.',
            'Print its times table from 1 to 12 using a for loop.',
            'Then, in a second loop, print all even numbers from 1 to 100.',
            'Use the % operator to test for even.',
          ],
        },
        quiz: [
          { q: 'What does range(3) produce?', options: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '3'], answer: 1, explain: 'range(3) gives 0, 1, 2 — it starts at 0 and stops before 3.' },
          { q: 'What causes an infinite while loop?', options: ['Using range()', 'The condition never becomes false', 'Too many prints', 'Using i += 1'], answer: 1, explain: 'If nothing changes the condition to false, the loop runs forever.' },
          { q: 'n % 2 == 0 is True when n is…', options: ['Odd', 'Even', 'Negative', 'Prime'], answer: 1, explain: '% gives the remainder; an even number divided by 2 has remainder 0.' },
        ],
        resources: [
          { label: 'freeCodeCamp — Python loops', url: 'https://www.freecodecamp.org/news/python-loops/' },
        ],
      },
      {
        id: 'w1d5', week: 1, day: 5, track: 'coding', duration: '4 hrs',
        title: 'Lists & Dictionaries',
        objectives: [
          'Store many values in a list',
          'Add, remove, and loop over list items',
          'Use dictionaries for key → value data',
        ],
        sections: [
          { heading: 'Lists', body: `A **list** holds an ordered collection:\n\n\`\`\`python\ntasks = ["email", "lunch", "code"]\ntasks.append("gym")     # add to end\ntasks.remove("lunch")   # remove by value\nprint(tasks[0])          # first item -> "email"\nprint(len(tasks))        # how many\n\`\`\`\n\nIndexes start at **0**. Loop with \`for t in tasks:\`.` },
          { heading: 'Dictionaries', body: `A **dictionary** stores **key → value** pairs:\n\n\`\`\`python\nuser = {"name": "Sam", "level": 3}\nprint(user["name"])     # Sam\nuser["level"] = 4        # update\nuser["email"] = "s@x.com"  # add\n\`\`\`\n\nThink of it as a labelled lookup — perfect when each value has a name.` },
          { heading: 'Choosing between them', body: `Use a **list** for an ordered sequence ("a list of tasks"). Use a **dictionary** when each item has a label ("a user's properties"). You'll combine them constantly — e.g. a list of dictionaries to represent many users.` },
        ],
        practical: {
          title: 'To-do list app (terminal)',
          steps: [
            'Keep tasks in a list.',
            'Show a menu: 1) add task  2) view tasks  3) remove task  4) quit.',
            'Loop until the user picks quit.',
            'Use append() to add and remove()/pop() to delete.',
          ],
        },
        quiz: [
          { q: 'What is the index of the FIRST item in a list?', options: ['1', '0', '-1', 'first'], answer: 1, explain: 'List indexes start at 0, so the first item is list[0].' },
          { q: 'How do you add an item to the end of a list?', options: ['list.add()', 'list.append()', 'list.push()', 'list.insert()'], answer: 1, explain: 'append() adds to the end. (push is JavaScript; insert needs a position.)' },
          { q: 'A dictionary stores data as…', options: ['Ordered numbers', 'Key → value pairs', 'Only strings', 'Rows and columns'], answer: 1, explain: 'Dictionaries map a key to a value, like name -> "Sam".' },
        ],
        resources: [
          { label: 'Automate the Boring Stuff — Ch.4 (Lists)', url: 'https://automatetheboringstuff.com/2e/chapter4/' },
          { label: 'Automate the Boring Stuff — Ch.5 (Dictionaries)', url: 'https://automatetheboringstuff.com/2e/chapter5/' },
        ],
      },
      {
        id: 'w1d6', week: 1, day: 6, track: 'both', duration: '4 hrs',
        title: 'How the Internet Works',
        objectives: [
          'Explain IP addresses, DNS, and HTTP/HTTPS',
          'Describe the client–server model',
          'Use ping, tracert, and nslookup',
        ],
        sections: [
          { heading: 'Client, server, and IP addresses', body: `When you load a website, your device (the **client**) asks another computer (the **server**) for data. Every device on a network has an **IP address** — a numeric label like \`142.250.190.78\`. It works like a postal address: data is packaged and routed to the right IP.` },
          { heading: 'DNS — the internet phonebook', body: `Humans remember \`google.com\`, not IP numbers. **DNS (Domain Name System)** translates a domain name into its IP address. Type a URL → your computer asks a DNS server "what's the IP for this name?" → it replies → your browser connects to that IP. This lookup happens in milliseconds, every time.` },
          { heading: 'HTTP & HTTPS', body: `Once connected, the browser and server talk using **HTTP** (HyperText Transfer Protocol) — a request/response conversation. **HTTPS** is HTTP wrapped in **encryption (TLS)**, so anyone intercepting the traffic sees scrambled data. The padlock in your browser means HTTPS — essential for passwords and payments. This is your first taste of security: confidentiality in transit.` },
        ],
        practical: {
          title: 'Investigate a real website from your terminal',
          steps: [
            'Run: ping google.com — note the IP address and response times.',
            'Run: tracert google.com (Windows) — watch the hops your data takes across routers.',
            'Run: nslookup google.com — see the DNS lookup return the IP.',
            'Write 3–4 sentences explaining what each command showed you.',
          ],
        },
        quiz: [
          { q: 'What does DNS do?', options: ['Encrypts traffic', 'Translates domain names to IP addresses', 'Blocks viruses', 'Speeds up your CPU'], answer: 1, explain: 'DNS is the internet phonebook: name -> IP address.' },
          { q: 'What does the padlock / HTTPS indicate?', options: ['The site is fast', 'Traffic is encrypted with TLS', 'The site is free', 'You are logged in'], answer: 1, explain: 'HTTPS encrypts data in transit so eavesdroppers cannot read it.' },
          { q: 'In the client–server model, your laptop browsing a site is the…', options: ['Server', 'Router', 'Client', 'DNS'], answer: 2, explain: 'The client requests; the server responds with the data.' },
        ],
        resources: [
          { label: 'How the Internet Works (free video series)', url: 'https://www.code.org/howcomputerswork' },
          { label: 'MDN — What is HTTP?', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview' },
        ],
      },
      {
        id: 'w1d7', week: 1, day: 7, track: 'coding', duration: '4 hrs',
        title: 'Review + Build: Personal CLI Toolbox',
        objectives: [
          'Revisit anything shaky from Days 1–6',
          'Combine multiple programs behind one menu',
          'Ship your first portfolio project',
        ],
        sections: [
          { heading: 'Consolidate', body: `Before building, re-do the two exercises you found hardest this week **from memory** — no copying. Struggling to recall is how learning sticks. If something is fuzzy (loops? dictionaries?), reread that day's lesson first.` },
          { heading: 'Designing a menu program', body: `A "toolbox" is just a loop that shows options and calls the right code:\n\n\`\`\`python\nwhile True:\n    print("1) Converter  2) Guess  3) To-do  4) Quit")\n    choice = input("> ")\n    if choice == "1":\n        ... # your converter\n    elif choice == "4":\n        break\n\`\`\`\n\nThis pattern — a menu loop — appears in tons of real tools.` },
          { heading: 'Make it portfolio-worthy', body: `A project worth showing has: a clear name, a short comment at the top explaining what it does, sensible prompts, and no crashes on normal input. Save it as \`day07_cli_toolbox.py\`. This is **portfolio piece #1** — you'll push it to GitHub in Week 4.` },
        ],
        practical: {
          title: 'Build the Personal CLI Toolbox',
          steps: [
            'Create a menu loop with options for your converter, guessing game, and to-do list.',
            'Move each feature into its own section (or function if you peeked ahead).',
            'Test every menu option works and "quit" exits cleanly.',
            'Add a comment at the top describing the program.',
          ],
        },
        quiz: [
          { q: 'What does break do inside a loop?', options: ['Pauses the program', 'Exits the loop immediately', 'Restarts the loop', 'Prints an error'], answer: 1, explain: 'break stops the loop and continues after it — perfect for a "quit" option.' },
          { q: 'Best way to re-learn a shaky concept?', options: ['Copy the answer', 'Skip it', 'Re-do it from memory', 'Watch 10 videos'], answer: 2, explain: 'Active recall — rebuilding it yourself — is what cements learning.' },
          { q: 'Why add a comment at the top of your script?', options: ['It runs faster', 'It explains the purpose to humans', 'Python requires it', 'It hides the code'], answer: 1, explain: 'Comments document intent for you and anyone reading your portfolio.' },
        ],
        resources: [
          { label: 'Exercism — practice problems', url: 'https://exercism.org/tracks/python/exercises' },
        ],
      },
    ],
  },

  /* ============================ WEEK 2 ============================ */
  {
    week: 2,
    title: 'Python Deeper + Linux + Networking',
    goal: 'Write reusable, file-handling Python; operate confidently in Linux; understand networking fundamentals.',
    canDo: 'Write functions and handle files/errors in Python; use core Linux commands; explain TCP/IP, common ports, and read a basic packet capture.',
    lessons: [
      {
        id: 'w2d8', week: 2, day: 8, track: 'coding', duration: '4 hrs',
        title: 'Functions: Reusable Code',
        objectives: [
          'Define functions with parameters and return values',
          'Understand variable scope',
          'Refactor repeated code into functions',
        ],
        sections: [
          { heading: 'Why functions', body: `A **function** is a named, reusable block of code. Instead of copying the same logic everywhere, you write it once and *call* it:\n\n\`\`\`python\ndef greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Ada"))\n\`\`\`\n\n\`name\` is a **parameter** (input); \`return\` hands a value back to the caller.` },
          { heading: 'Parameters vs return', body: `Functions take inputs (parameters) and usually give back an output (return value). A function without \`return\` gives back \`None\`. Returning a value lets you use the result: \`total = add(2, 3)\`. **print is not return** — printing shows text; returning gives data you can reuse.` },
          { heading: 'Scope', body: `Variables created **inside** a function only exist there (local scope). This is good — it prevents functions from accidentally clobbering each other's data. Pass data in via parameters; get data out via return, not by reaching into another function's variables.` },
        ],
        practical: {
          title: 'Prime-check & string-reverse functions',
          steps: [
            'Write is_prime(n) that returns True/False.',
            'Write reverse_text(s) that returns the string backwards (try s[::-1]).',
            'Build a small menu that asks which tool to run and calls the matching function.',
            'Refactor: move your Week-1 toolbox features into functions too.',
          ],
        },
        quiz: [
          { q: 'What keyword sends a value back from a function?', options: ['print', 'send', 'return', 'output'], answer: 2, explain: 'return hands a value back to whatever called the function.' },
          { q: 'A variable defined inside a function is…', options: ['Global', 'Local to that function', 'Deleted instantly', 'Shared with all files'], answer: 1, explain: 'It has local scope — it only exists inside that function.' },
          { q: 'Why use functions?', options: ['They make code run on the GPU', 'To avoid repeating code and organise logic', 'They are required in Python', 'To slow the program down'], answer: 1, explain: 'Functions let you write logic once and reuse it — DRY: Don\'t Repeat Yourself.' },
        ],
        resources: [
          { label: 'Automate the Boring Stuff — Ch.3 (Functions)', url: 'https://automatetheboringstuff.com/2e/chapter3/' },
        ],
      },
      {
        id: 'w2d9', week: 2, day: 9, track: 'coding', duration: '4 hrs',
        title: 'Files & Error Handling',
        objectives: [
          'Read from and write to text files',
          'Handle errors with try / except',
          'Build a program that saves data between runs',
        ],
        sections: [
          { heading: 'Reading & writing files', body: `Use \`with open(...)\` so the file closes automatically:\n\n\`\`\`python\nwith open("notes.txt", "a") as f:   # "a" = append\n    f.write("New entry\\n")\n\nwith open("notes.txt", "r") as f:   # "r" = read\n    print(f.read())\n\`\`\`\n\nModes: \`"r"\` read, \`"w"\` overwrite, \`"a"\` append. Files let your program **remember** things after it closes.` },
          { heading: 'Errors happen', body: `If you open a file that doesn't exist, or convert "abc" to int, Python raises an **exception** and crashes. Real programs anticipate this:\n\n\`\`\`python\ntry:\n    age = int(input("Age? "))\nexcept ValueError:\n    print("Please enter a number.")\n\`\`\`\n\n\`try\` runs the risky code; \`except\` catches the failure gracefully.` },
          { heading: 'Why this matters for security', body: `Sloppy error handling is a real vulnerability. Crashes can leak stack traces (revealing how your system works) or leave things in a bad state. Handling input safely is the first habit of secure coding — never trust that input will be what you expect.` },
        ],
        practical: {
          title: 'Journal app that saves to a file',
          steps: [
            'Ask the user for a journal entry.',
            'Append it to journal.txt with the current date (use datetime).',
            'Add a menu option to read all past entries back.',
            'Wrap file reading in try/except so a missing file does not crash the app.',
          ],
        },
        quiz: [
          { q: 'Which file mode APPENDS without erasing existing content?', options: ['"r"', '"w"', '"a"', '"x"'], answer: 2, explain: '"a" appends; "w" would overwrite the whole file.' },
          { q: 'What does try / except do?', options: ['Speeds up code', 'Catches errors so the program does not crash', 'Repeats code', 'Defines a function'], answer: 1, explain: 'try runs risky code; except handles the error gracefully.' },
          { q: 'Why is good error handling a security concern?', options: ['It is not', 'Crashes can leak info or leave bad state', 'It encrypts data', 'It blocks hackers entirely'], answer: 1, explain: 'Unhandled errors can expose stack traces and internal details to attackers.' },
        ],
        resources: [
          { label: 'Automate the Boring Stuff — Ch.9 (Files)', url: 'https://automatetheboringstuff.com/2e/chapter9/' },
        ],
      },
      {
        id: 'w2d10', week: 2, day: 10, track: 'cyber', duration: '4 hrs',
        title: 'Linux Fundamentals',
        objectives: [
          'Understand the Linux filesystem',
          'Use core commands: ls, cd, cat, grep, chmod',
          'Grasp users and file permissions',
        ],
        sections: [
          { heading: 'Why Linux matters in security', body: `Most servers, security tools, and hacking distributions (like Kali) run **Linux**. If you want to work in cybersecurity, the Linux command line is non-negotiable. The good news: a few dozen commands cover most daily work.` },
          { heading: 'Navigating the filesystem', body: `Linux organises everything under a single root \`/\`. Key commands:\n\n- \`pwd\` — where am I?\n- \`ls -la\` — list files (including hidden + details)\n- \`cd /path\` — change directory\n- \`cat file\` — print a file's contents\n- \`grep "word" file\` — search for text inside files\n\n\`grep\` is your best friend for finding things — including, later, suspicious lines in logs.` },
          { heading: 'Permissions', body: `Every file has permissions for **read (r), write (w), execute (x)**, split across owner / group / others. \`ls -l\` shows them like \`-rwxr-xr--\`. \`chmod\` changes them. Permissions are a core security concept: the **principle of least privilege** says give each user/file only the access it needs — nothing more.` },
        ],
        practical: {
          title: 'OverTheWire — Bandit levels 0–4',
          steps: [
            'Go to overthewire.org/wargames/bandit and read the Level 0 page.',
            'SSH into the server (the site gives you the exact command).',
            'Use ls, cat, cd, and file to find each level\'s password.',
            'Write each password in your notes as you progress to level 4.',
          ],
        },
        quiz: [
          { q: 'Which command searches for text inside files?', options: ['ls', 'grep', 'cd', 'chmod'], answer: 1, explain: 'grep searches file contents for a pattern — essential for log analysis later.' },
          { q: 'In Linux, the very top of the filesystem is…', options: ['C:\\', '/ (root)', '~', '/home'], answer: 1, explain: 'Everything lives under the single root directory /.' },
          { q: 'The principle of "least privilege" means…', options: ['Everyone is admin', 'Give only the access needed, no more', 'Disable all permissions', 'Share all files publicly'], answer: 1, explain: 'Least privilege limits access to the minimum required — a core security idea.' },
        ],
        resources: [
          { label: 'OverTheWire — Bandit', url: 'https://overthewire.org/wargames/bandit/' },
          { label: 'Linux Journey', url: 'https://linuxjourney.com/' },
        ],
      },
      {
        id: 'w2d11', week: 2, day: 11, track: 'cyber', duration: '4 hrs',
        title: 'Linux Power Tools: Pipes & Bash',
        objectives: [
          'Chain commands with pipes and redirection',
          'Use find and package managers',
          'Read basic Bash scripts',
        ],
        sections: [
          { heading: 'Pipes and redirection', body: `The Unix philosophy: small tools that do one thing, combined. A **pipe** \`|\` sends one command's output into another:\n\n\`\`\`bash\ncat log.txt | grep "error" | wc -l\n\`\`\`\n\nThis reads a log, keeps only error lines, and counts them. **Redirection** \`>\` sends output to a file: \`ls > files.txt\`.` },
          { heading: 'Finding things', body: `\`find / -name "*.conf"\` locates files by name. \`find\` plus \`grep\` lets you hunt across an entire system — a skill you'll use constantly in investigations and CTFs.` },
          { heading: 'Package managers & Bash basics', body: `Software installs via a **package manager** (\`apt install nmap\` on Debian/Kali). A **Bash script** is just a file of commands run top to bottom — automation for repetitive tasks. You don't need to master Bash now; just be able to read a simple script and recognise \`#!/bin/bash\` at the top.` },
        ],
        practical: {
          title: 'OverTheWire — Bandit levels 5–9',
          steps: [
            'Continue from level 5 on the Bandit wargame.',
            'These levels need find with size/permission filters and grep through many files.',
            'Combine commands with pipes to narrow down the answer.',
            'Keep logging each password and the command that found it.',
          ],
        },
        quiz: [
          { q: 'What does the pipe | do?', options: ['Deletes a file', 'Sends one command\'s output into another', 'Comments out code', 'Runs as admin'], answer: 1, explain: 'A pipe chains commands: output of the left becomes input of the right.' },
          { q: 'How would you install nmap on Kali/Debian?', options: ['pip nmap', 'apt install nmap', 'nmap --install', 'get nmap'], answer: 1, explain: 'apt is the Debian/Kali package manager.' },
          { q: 'cat log.txt | grep "fail" | wc -l counts…', options: ['All lines', 'Lines containing "fail"', 'Words in the file', 'Files named fail'], answer: 1, explain: 'grep keeps only "fail" lines, then wc -l counts them.' },
        ],
        resources: [
          { label: 'OverTheWire — Bandit (cont.)', url: 'https://overthewire.org/wargames/bandit/' },
          { label: 'Linux Journey — The Shell', url: 'https://linuxjourney.com/lesson/the-shell' },
        ],
      },
      {
        id: 'w2d12', week: 2, day: 12, track: 'cyber', duration: '4 hrs',
        title: 'Networking Core: OSI, TCP/IP & Ports',
        objectives: [
          'Understand the OSI model and TCP vs UDP',
          'Memorise common ports',
          'Capture and read packets in Wireshark',
        ],
        sections: [
          { heading: 'The OSI model', body: `Networking is taught in **7 layers** (OSI model), from physical cables (Layer 1) up to applications (Layer 7). You don't need to memorise all seven perfectly, but know the idea: data is wrapped in headers as it goes down the layers on the sender and unwrapped on the receiver. Key layers to know: **Layer 3 (IP addresses)**, **Layer 4 (TCP/UDP ports)**, **Layer 7 (HTTP, DNS)**.` },
          { heading: 'TCP vs UDP', body: `Both deliver data, differently:\n\n- **TCP** — reliable, ordered, connection-based (a handshake first). Used by web, email, file transfer. Like a phone call.\n- **UDP** — fast, no guarantees, no handshake. Used by video streaming, DNS, gaming. Like sending postcards.\n\nKnowing which a service uses helps you understand how to scan and secure it.` },
          { heading: 'Ports you must know', body: `A **port** is a numbered door on a machine for a specific service:\n\n- **22** SSH (remote login)\n- **53** DNS\n- **80** HTTP\n- **443** HTTPS\n- **25** SMTP (email)\n- **3389** RDP (Windows remote desktop)\n\nWhen you scan a target later with Nmap, you're checking which of these doors are open.` },
        ],
        practical: {
          title: 'Capture your own traffic in Wireshark',
          steps: [
            'Install Wireshark from wireshark.org.',
            'Start a capture on your active network interface for ~60 seconds while browsing.',
            'Stop, then use the filter bar: type "dns" to find a DNS query, then "http" for web traffic.',
            'Identify one DNS packet and one HTTP packet; note the source/destination IPs and ports.',
          ],
        },
        quiz: [
          { q: 'Which protocol is reliable and connection-based?', options: ['UDP', 'TCP', 'DNS', 'ICMP'], answer: 1, explain: 'TCP establishes a connection and guarantees ordered delivery; UDP does not.' },
          { q: 'What port does HTTPS use by default?', options: ['80', '22', '443', '53'], answer: 2, explain: 'HTTPS uses port 443; plain HTTP uses 80.' },
          { q: 'Port 22 is associated with…', options: ['Web', 'SSH', 'Email', 'DNS'], answer: 1, explain: 'Port 22 is SSH, used for secure remote login.' },
        ],
        resources: [
          { label: 'Professor Messer — Network+ (free)', url: 'https://www.professormesser.com/network-plus/n10-009/n10-009-video/' },
          { label: 'Download Wireshark', url: 'https://www.wireshark.org/' },
        ],
      },
      {
        id: 'w2d13', week: 2, day: 13, track: 'cyber', duration: '4 hrs',
        title: 'IP Addressing: Subnets, NAT & Firewalls',
        objectives: [
          'Read IP addresses and CIDR notation',
          'Understand NAT, DHCP, and gateways',
          'Know what a firewall does',
        ],
        sections: [
          { heading: 'Public vs private IPs & NAT', body: `Your home devices use **private IPs** (like \`192.168.x.x\`). The whole house shares **one public IP** to reach the internet. **NAT (Network Address Translation)** on your router maps between them — like a receptionist routing calls to the right internal extension. This is also a basic security boundary: outside devices can't directly address your private machines.` },
          { heading: 'CIDR / subnets', body: `\`192.168.1.0/24\` means the first 24 bits are the network; the rest identify hosts — giving 256 addresses (0–255). The \`/24\` is the **subnet mask** in shorthand. Subnetting splits big networks into manageable, isolatable chunks — useful for both performance and security segmentation.` },
          { heading: 'DHCP, gateways & firewalls', body: `**DHCP** auto-assigns IPs to devices when they join. The **default gateway** is the router that forwards your traffic toward the internet. A **firewall** sits at the boundary and allows/blocks traffic by rules (e.g. "block inbound port 23"). Firewalls are the front-line defensive control on every network.` },
        ],
        practical: {
          title: 'Map your own network',
          steps: [
            'Run ipconfig /all in Windows PowerShell.',
            'Find and write down: your IPv4 address, subnet mask, default gateway, and DNS servers.',
            'Identify whether your IP is private (192.168.x / 10.x / 172.16-31.x).',
            'In a note, explain in your own words what each value does.',
          ],
        },
        quiz: [
          { q: 'Which is a PRIVATE IP address?', options: ['8.8.8.8', '192.168.1.10', '142.250.190.78', '1.1.1.1'], answer: 1, explain: '192.168.x.x is a private range used inside home/office networks.' },
          { q: 'What does NAT do?', options: ['Encrypts files', 'Maps private IPs to a shared public IP', 'Assigns domain names', 'Scans for viruses'], answer: 1, explain: 'NAT translates between private internal addresses and the public IP.' },
          { q: 'A firewall primarily…', options: ['Speeds up wifi', 'Allows or blocks traffic by rules', 'Stores passwords', 'Cools the router'], answer: 1, explain: 'Firewalls enforce rules about which traffic is permitted.' },
        ],
        resources: [
          { label: 'Professor Messer — Subnetting', url: 'https://www.professormesser.com/network-plus/n10-009/n10-009-video/' },
        ],
      },
      {
        id: 'w2d14', week: 2, day: 14, track: 'both', duration: '4 hrs',
        title: 'Review + Build: Host Ping Checker',
        objectives: [
          'Consolidate Week 2 Python + networking',
          'Run system commands from Python',
          'Build your first network tool',
        ],
        sections: [
          { heading: 'Bringing Python and networking together', body: `This is where the two halves of your training meet. You'll write a Python script that checks whether hosts are reachable — exactly the kind of small tool sysadmins and security folks write all the time. It uses functions, files, loops, and error handling from this week.` },
          { heading: 'Calling system commands from Python', body: `Python's \`subprocess\` module runs shell commands:\n\n\`\`\`python\nimport subprocess\nresult = subprocess.run(["ping", "-n", "1", host],\n                        capture_output=True, text=True)\nis_up = result.returncode == 0\n\`\`\`\n\n(On Windows use \`-n 1\`; on Linux/Mac use \`-c 1\`.) A return code of 0 generally means success.` },
          { heading: 'Reading targets from a file', body: `Store hosts in \`hosts.txt\` (one per line), read them with \`open()\`, loop, ping each, and print up/down. This separates *data* (the host list) from *logic* (the script) — a clean design habit. Save it as portfolio piece #2.` },
        ],
        practical: {
          title: 'Build the host ping checker',
          steps: [
            'Create hosts.txt with a few hostnames/IPs (e.g. google.com, your gateway).',
            'Read the file line by line in Python.',
            'For each host, run ping via subprocess and check the return code.',
            'Print "UP" or "DOWN" for each, wrapped in try/except for safety.',
          ],
        },
        quiz: [
          { q: 'Which Python module runs shell commands?', options: ['os.path', 'subprocess', 'random', 'math'], answer: 1, explain: 'subprocess lets Python launch and capture external commands like ping.' },
          { q: 'A ping returncode of 0 usually means…', options: ['Error', 'The host responded (success)', 'Permission denied', 'No internet'], answer: 1, explain: 'By convention, exit code 0 means success.' },
          { q: 'Why read hosts from a file instead of hardcoding them?', options: ['It is faster', 'Separates data from logic; easy to update', 'Python requires it', 'It encrypts the list'], answer: 1, explain: 'Keeping the list in a file lets you change targets without editing code.' },
        ],
        resources: [
          { label: 'Python subprocess docs', url: 'https://docs.python.org/3/library/subprocess.html' },
        ],
      },
    ],
  },

  /* ============================ WEEK 3 ============================ */
  {
    week: 3,
    title: 'Cybersecurity Core + Python for Security',
    goal: 'Understand the threat landscape and core defensive + offensive concepts, and write Python that touches security tasks.',
    canDo: 'Explain the CIA triad, common attacks (phishing, malware, brute force, SQLi, XSS), and basic cryptography; complete guided TryHackMe rooms.',
    lessons: [
      {
        id: 'w3d15', week: 3, day: 15, track: 'cyber', duration: '4 hrs',
        title: 'Security Fundamentals: The CIA Triad',
        objectives: [
          'Explain Confidentiality, Integrity, Availability',
          'Distinguish threats, vulnerabilities, and risk',
          'Identify types of threat actors',
        ],
        sections: [
          { heading: 'The CIA triad', body: `Every security decision protects one of three things:\n\n- **Confidentiality** — keeping data secret (encryption, access control).\n- **Integrity** — ensuring data isn't tampered with (hashing, signatures).\n- **Availability** — keeping systems up and reachable (backups, anti-DoS).\n\nThis triad is the lens for *everything* in security. When you assess a risk, ask: which of these is threatened?` },
          { heading: 'Threat vs vulnerability vs risk', body: `These are not synonyms:\n\n- **Vulnerability** — a weakness (unpatched software).\n- **Threat** — something that could exploit it (a hacker, malware).\n- **Risk** — the *likelihood × impact* of that happening.\n\nExample: an unlocked door is a vulnerability; a burglar is the threat; the risk depends on the neighbourhood and what's inside.` },
          { heading: 'Threat actors', body: `Who attacks? **Script kiddies** (low-skill, using others' tools), **hacktivists** (ideological), **organised crime** (money: ransomware, fraud), **nation-states / APTs** (espionage, highly resourced), and **insiders** (employees, intentional or accidental). Knowing the actor helps predict their methods and targets.` },
        ],
        practical: {
          title: 'TryHackMe — Intro to Cyber Security',
          steps: [
            'Log into TryHackMe and start the "Intro to Cyber Security" or "Pentesting Fundamentals" room.',
            'Work through the guided tasks and answer the questions.',
            'Note how the room maps to the CIA triad and threat concepts.',
            'Write 3 takeaways in your notes.',
          ],
        },
        quiz: [
          { q: 'Encrypting a file primarily protects which part of the CIA triad?', options: ['Availability', 'Integrity', 'Confidentiality', 'None'], answer: 2, explain: 'Encryption keeps data secret — that is confidentiality.' },
          { q: 'A weakness in software is a…', options: ['Threat', 'Vulnerability', 'Risk', 'Patch'], answer: 1, explain: 'A vulnerability is the weakness; a threat is what might exploit it.' },
          { q: 'A ransomware gang seeking payment is best described as…', options: ['Hacktivist', 'Organised crime', 'Insider', 'Script kiddie'], answer: 1, explain: 'Financially-motivated organised crime is behind most ransomware.' },
        ],
        resources: [
          { label: 'TryHackMe — Intro to Cyber Security', url: 'https://tryhackme.com/' },
          { label: 'Professor Messer — Security+ (free)', url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/' },
        ],
      },
      {
        id: 'w3d16', week: 3, day: 16, track: 'both', duration: '4 hrs',
        title: 'Cryptography Basics',
        objectives: [
          'Distinguish hashing from encryption',
          'Understand symmetric vs asymmetric encryption',
          'Hash and verify a password in Python',
        ],
        sections: [
          { heading: 'Hashing vs encryption', body: `These are often confused:\n\n- **Encryption** is **two-way**: data is scrambled with a key and can be *decrypted* back. Protects confidentiality.\n- **Hashing** is **one-way**: it turns input into a fixed fingerprint that *cannot* be reversed. The same input always gives the same hash. Used to verify integrity and store passwords.\n\nYou never "decrypt" a hash — you hash the new input and compare fingerprints.` },
          { heading: 'Symmetric vs asymmetric', body: `**Symmetric** encryption uses **one shared key** for both lock and unlock (fast; the challenge is sharing the key safely). **Asymmetric** uses a **key pair** — a public key to encrypt and a private key to decrypt. This solves key distribution and underpins HTTPS, SSH, and digital signatures.` },
          { heading: 'Why HTTPS is secure', body: `HTTPS uses asymmetric crypto to safely agree on a shared symmetric key (the TLS handshake), then uses fast symmetric encryption for the actual data. Best of both worlds. The certificate also proves you're talking to the real site, not an impostor.` },
        ],
        practical: {
          title: 'Python password hashing with hashlib',
          steps: [
            'Import hashlib.',
            'Write hash_pw(password) that returns hashlib.sha256(password.encode()).hexdigest().',
            'Store a hashed password, then ask the user to "log in".',
            'Hash their guess and compare to the stored hash — print success/fail. Note you never stored the real password.',
          ],
        },
        quiz: [
          { q: 'Which is a ONE-WAY function?', options: ['Encryption', 'Hashing', 'Encoding', 'Compression'], answer: 1, explain: 'Hashing cannot be reversed; encryption can be decrypted with a key.' },
          { q: 'Asymmetric encryption uses…', options: ['One shared key', 'A public/private key pair', 'No keys', 'A password only'], answer: 1, explain: 'Asymmetric crypto uses a public key to encrypt and a private key to decrypt.' },
          { q: 'Why store password hashes instead of passwords?', options: ['Hashes are smaller', 'If stolen, the real password is not directly exposed', 'It is faster to log in', 'Passwords cannot be stored'], answer: 1, explain: 'Storing only the hash means a breached database does not hand over plaintext passwords.' },
        ],
        resources: [
          { label: 'Python hashlib docs', url: 'https://docs.python.org/3/library/hashlib.html' },
          { label: 'TryHackMe — Cryptography basics', url: 'https://tryhackme.com/' },
        ],
      },
      {
        id: 'w3d17', week: 3, day: 17, track: 'both', duration: '4 hrs',
        title: 'Common Attacks: Phishing, Malware & Passwords',
        objectives: [
          'Recognise phishing and social engineering',
          'Identify malware types',
          'Understand password attacks and defenses',
        ],
        sections: [
          { heading: 'Social engineering & phishing', body: `The easiest way past security is often the human. **Phishing** tricks people into clicking malicious links or revealing credentials, usually via email pretending to be a trusted source. Red flags: urgency ("act now!"), mismatched sender addresses, generic greetings, suspicious links (hover to inspect), and unexpected attachments. **Social engineering** more broadly manipulates people into breaking security.` },
          { heading: 'Malware types', body: `Malicious software comes in flavours: **virus** (attaches to files), **worm** (self-spreads across networks), **trojan** (disguised as legit software), **ransomware** (encrypts your files for payment), **spyware/keyloggers** (steal data quietly), and **rootkits** (hide deep in the system). Defenses: patching, antivirus/EDR, least privilege, and user awareness.` },
          { heading: 'Password attacks', body: `**Brute force** tries every combination; **dictionary attacks** try common passwords; **credential stuffing** reuses leaked passwords on other sites. Defenses: long unique passphrases, a password manager, **multi-factor authentication (MFA)**, account lockouts, and hashing+salting on the server.` },
        ],
        practical: {
          title: 'Python password-strength checker',
          steps: [
            'Ask the user for a password.',
            'Check: length >= 12, has upper & lower case, has a digit, has a symbol.',
            'Optionally compare against a small list of common passwords and reject matches.',
            'Print a rating (Weak/Medium/Strong) with reasons.',
          ],
        },
        quiz: [
          { q: 'A classic phishing red flag is…', options: ['A signed contract', 'Urgent pressure + suspicious link', 'A phone call from family', 'A correct spelling'], answer: 1, explain: 'Urgency plus mismatched/suspicious links are hallmark phishing tactics.' },
          { q: 'Ransomware does what?', options: ['Speeds up your PC', 'Encrypts files and demands payment', 'Blocks ads', 'Backs up data'], answer: 1, explain: 'Ransomware encrypts victims\' files and demands a ransom to restore them.' },
          { q: 'The strongest single defense against password attacks is…', options: ['Changing password monthly', 'Multi-factor authentication (MFA)', 'A short simple password', 'Writing it on a sticky note'], answer: 1, explain: 'MFA stops attackers even when a password is compromised.' },
        ],
        resources: [
          { label: 'Professor Messer — Social engineering', url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/' },
        ],
      },
      {
        id: 'w3d18', week: 3, day: 18, track: 'cyber', duration: '4 hrs',
        title: 'Web Security & the OWASP Top 10',
        objectives: [
          'Understand HTTP requests and responses',
          'Get an overview of the OWASP Top 10',
          'Complete a guided SQL injection lab',
        ],
        sections: [
          { heading: 'How web apps work', body: `A web app is a conversation: the browser sends an **HTTP request** (method like GET/POST, a URL, headers, sometimes a body), and the server sends back a **response** (status code like 200/404, headers, and content). Attackers manipulate these requests — changing parameters, headers, or cookies — to probe for weaknesses. Tools like Burp Suite sit in the middle to inspect and tamper.` },
          { heading: 'The OWASP Top 10', body: `OWASP publishes the 10 most critical web app risks. Highlights you should know: **Broken Access Control** (#1 — users reaching things they shouldn't), **Injection** (untrusted input run as code, e.g. SQL injection), **Cryptographic Failures**, **Security Misconfiguration**, and **Identification/Authentication failures**. It's the industry's shared checklist of what to defend.` },
          { heading: 'SQL injection in one idea', body: `If an app builds a database query by gluing in user input — \`"SELECT * FROM users WHERE name='" + input + "'"\` — an attacker can type \`' OR '1'='1\` to break out of the string and change the query's logic, dumping data or bypassing login. The fix: **parameterised queries** that treat input as data, never as code.` },
        ],
        practical: {
          title: 'PortSwigger — SQL injection (guided lab)',
          steps: [
            'Create a free account at PortSwigger Web Security Academy.',
            'Open the "SQL injection" learning path and read the intro.',
            'Complete the first APPRENTICE-level lab (it walks you through it).',
            'Note what input you used and why it worked.',
          ],
        },
        quiz: [
          { q: 'What is the #1 risk in the OWASP Top 10 (2021)?', options: ['Phishing', 'Broken Access Control', 'Weak wifi', 'Outdated CPU'], answer: 1, explain: 'Broken Access Control rose to #1 — users accessing things they should not.' },
          { q: 'SQL injection happens because…', options: ['The server is too fast', 'User input is treated as part of a query', 'Passwords are hashed', 'HTTPS is enabled'], answer: 1, explain: 'When input is concatenated into a query, attackers can alter the query logic.' },
          { q: 'The main fix for SQL injection is…', options: ['Parameterised queries', 'A bigger database', 'Disabling JavaScript', 'Using GET instead of POST'], answer: 0, explain: 'Parameterised/prepared statements treat input as data, not executable code.' },
        ],
        resources: [
          { label: 'PortSwigger Web Security Academy (free)', url: 'https://portswigger.net/web-security' },
          { label: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
        ],
      },
      {
        id: 'w3d19', week: 3, day: 19, track: 'cyber', duration: '4 hrs',
        title: 'Cross-Site Scripting (XSS)',
        objectives: [
          'Explain how XSS works',
          'Distinguish reflected, stored, and DOM XSS',
          'Complete a guided XSS lab',
        ],
        sections: [
          { heading: 'What XSS is', body: `**Cross-Site Scripting** injects malicious JavaScript into a page that other users then load. If a site echoes your input back without sanitising it, you can submit \`<script>...</script>\` that runs in victims' browsers — stealing cookies/session tokens, defacing pages, or performing actions as the user.` },
          { heading: 'Three flavours', body: `- **Reflected XSS** — payload is in the request (e.g. a URL parameter) and echoed straight back; victims must click a crafted link.\n- **Stored XSS** — payload is saved on the server (e.g. a comment) and served to everyone who views it — the most dangerous.\n- **DOM-based XSS** — the vulnerability is in client-side JavaScript handling input unsafely.` },
          { heading: 'Defense', body: `Two core fixes: **output encoding** (render user input as text, not HTML/JS) and a strong **Content Security Policy (CSP)**. Never trust input; encode on output. This is the flip side of what you'll exploit in the lab — understanding the attack teaches you the defense.` },
        ],
        practical: {
          title: 'PortSwigger — XSS (guided lab)',
          steps: [
            'Open the "Cross-site scripting" path on PortSwigger.',
            'Read the reflected XSS intro.',
            'Complete the first APPRENTICE reflected-XSS lab using the provided guidance.',
            'Note the payload you injected and which flavour of XSS it was.',
          ],
        },
        quiz: [
          { q: 'XSS lets an attacker run what in a victim\'s browser?', options: ['SQL', 'JavaScript', 'Python', 'Bash'], answer: 1, explain: 'XSS injects JavaScript that executes in other users\' browsers.' },
          { q: 'Which XSS type is stored on the server and hits everyone?', options: ['Reflected', 'Stored', 'DOM-based', 'None'], answer: 1, explain: 'Stored XSS persists on the server and is served to all viewers.' },
          { q: 'A primary defense against XSS is…', options: ['Output encoding', 'Bigger servers', 'Disabling HTTPS', 'Longer passwords'], answer: 0, explain: 'Encoding user input on output prevents it being interpreted as code.' },
        ],
        resources: [
          { label: 'PortSwigger — XSS', url: 'https://portswigger.net/web-security/cross-site-scripting' },
        ],
      },
      {
        id: 'w3d20', week: 3, day: 20, track: 'cyber', duration: '4 hrs',
        title: 'Blue Team: Logs, SIEM & Incident Response',
        objectives: [
          'Understand the role of a SOC analyst',
          'Read logs and spot anomalies',
          'Know the incident response lifecycle',
        ],
        sections: [
          { heading: 'What defenders do', body: `The **blue team** defends. A **SOC (Security Operations Center) analyst** — one of the most accessible entry security jobs — monitors alerts, investigates suspicious activity, and escalates real incidents. The core skill is making sense of huge volumes of **logs**: records of who did what, when, from where.` },
          { heading: 'Logs and SIEM', body: `Systems constantly write logs (logins, network connections, errors). A **SIEM** (Security Information and Event Management, e.g. Splunk, Elastic) collects logs from everywhere into one searchable place and raises alerts on suspicious patterns — like 100 failed logins in a minute (a brute-force attempt). Learning to query logs is the daily bread of blue teaming.` },
          { heading: 'Incident response lifecycle', body: `When something bad happens, responders follow a cycle (NIST): **Preparation → Detection & Analysis → Containment → Eradication → Recovery → Lessons Learned**. The goal isn't just to stop the attack but to learn and harden so it doesn't recur.` },
        ],
        practical: {
          title: 'TryHackMe — Intro to Logs / log analysis room',
          steps: [
            'Start a TryHackMe defensive room such as "Intro to Logs" or a Windows/Linux logs room.',
            'Practice reading log entries and identifying suspicious events.',
            'Find the entry the room asks you to (e.g. a failed/successful login).',
            'Note what a brute-force pattern looks like in a log.',
          ],
        },
        quiz: [
          { q: 'A SOC analyst mainly…', options: ['Writes marketing copy', 'Monitors and investigates security alerts', 'Designs logos', 'Installs printers'], answer: 1, explain: 'SOC analysts monitor logs/alerts and investigate potential incidents.' },
          { q: 'What does a SIEM do?', options: ['Encrypts disks', 'Collects and analyses logs centrally with alerting', 'Hosts websites', 'Replaces a firewall'], answer: 1, explain: 'A SIEM aggregates logs and raises alerts on suspicious patterns.' },
          { q: 'Many failed logins in a short window suggests…', options: ['Normal use', 'A brute-force attempt', 'A backup running', 'Faster internet'], answer: 1, explain: 'A burst of failed logins is a classic brute-force signature.' },
        ],
        resources: [
          { label: 'TryHackMe — SOC Level 1 path', url: 'https://tryhackme.com/' },
          { label: 'NIST Incident Response (SP 800-61)', url: 'https://csrc.nist.gov/pubs/sp/800/61/r2/final' },
        ],
      },
      {
        id: 'w3d21', week: 3, day: 21, track: 'both', duration: '4 hrs',
        title: 'Review + Build: Log Scanner',
        objectives: [
          'Consolidate Week 3 security concepts',
          'Parse a log file in Python',
          'Build a defensive tool',
        ],
        sections: [
          { heading: 'Thinking like a defender in code', body: `You learned what brute-force looks like in logs. Now automate the detection. A **log scanner** reads a log file and flags lines that match suspicious patterns — exactly what a SIEM does in miniature. This is a great portfolio piece because it shows both coding and blue-team understanding.` },
          { heading: 'Reading and filtering lines', body: `\`\`\`python\nhits = []\nwith open("auth.log") as f:\n    for line in f:\n        if "Failed password" in line:\n            hits.append(line.strip())\nprint(f"Found {len(hits)} failed logins")\n\`\`\`\n\nYou can grab a sample SSH \`auth.log\` online, or make your own test file with a few fake "Failed password" lines.` },
          { heading: 'Going further', body: `Level up the tool: count failures **per IP address** (use a dictionary) and flag any IP over a threshold as a likely brute-force source. Extracting the IP from each line ties together strings, loops, and dictionaries from earlier weeks. Save as portfolio piece #4.` },
        ],
        practical: {
          title: 'Build the failed-login log scanner',
          steps: [
            'Create or download a sample auth log with several "Failed password" lines.',
            'Read it in Python and collect all failed-login lines.',
            'Count total failures and print them.',
            'Bonus: count failures per IP using a dictionary and flag IPs over a threshold.',
          ],
        },
        quiz: [
          { q: 'A log scanner is a tiny version of what tool?', options: ['A firewall', 'A SIEM', 'A compiler', 'A VPN'], answer: 1, explain: 'It collects and flags suspicious log lines, like a miniature SIEM.' },
          { q: 'Which data structure best counts failures PER IP?', options: ['A single integer', 'A dictionary (IP -> count)', 'A boolean', 'A float'], answer: 1, explain: 'A dictionary mapping each IP to a count is ideal for per-IP tallies.' },
          { q: 'Why build a sample log file for testing?', options: ['To safely test without real sensitive data', 'Because Python needs it', 'To slow the program', 'It is required by law'], answer: 0, explain: 'A controlled sample lets you test detection logic safely and repeatably.' },
        ],
        resources: [
          { label: 'Real Python — Reading files', url: 'https://realpython.com/read-write-files-python/' },
        ],
      },
    ],
  },

  /* ============================ WEEK 4 ============================ */
  {
    week: 4,
    title: 'Applied Labs, Capstone & Job-Readiness',
    goal: 'Tie everything together with realistic labs and finished projects, then prepare the materials that make you hireable.',
    canDo: 'Complete end-to-end attack & defense labs, ship 3–4 portfolio projects on GitHub, articulate a cert plan, and present a starter résumé/LinkedIn.',
    lessons: [
      {
        id: 'w4d22', week: 4, day: 22, track: 'cyber', duration: '4 hrs',
        title: 'Scanning & Enumeration with Nmap',
        objectives: [
          'Understand scanning and enumeration',
          'Run basic Nmap scans',
          'Know the legal and ethical limits of scanning',
        ],
        sections: [
          { heading: 'Why scan?', body: `Before attacking (or defending) a system, you map it: which hosts are alive, which **ports** are open, and what **services/versions** run on them. This is **enumeration** — gathering detail to find the attack surface. **Nmap** is the industry-standard tool for it.` },
          { heading: 'Basic Nmap', body: `\`\`\`bash\nnmap 10.10.10.5             # default scan of common ports\nnmap -sV 10.10.10.5          # detect service versions\nnmap -p- 10.10.10.5          # scan all 65535 ports\nnmap -A 10.10.10.5           # aggressive: OS, version, scripts\n\`\`\`\n\nOpen ports map back to the services you learned (22 SSH, 80 HTTP, 443 HTTPS). An old service version is a lead for known vulnerabilities.` },
          { heading: '⚠️ Legality first', body: `**Only scan systems you own or are explicitly authorised to test.** Unauthorised scanning can be illegal (e.g. under the Computer Fraud and Abuse Act / Computer Misuse Act). That's why you practise inside **TryHackMe / Hack The Box** sandboxes or on your own lab VM — these give you legal permission. Internalise this: authorisation is the line between security professional and criminal.` },
        ],
        practical: {
          title: 'TryHackMe — Nmap room',
          steps: [
            'Start the TryHackMe "Nmap" room and deploy the target machine.',
            'Run a basic scan, then a version scan (-sV).',
            'Identify the open ports and the services behind them.',
            'Answer the room questions and note which flags did what.',
          ],
        },
        quiz: [
          { q: 'Nmap is primarily used for…', options: ['Writing reports', 'Discovering hosts, ports, and services', 'Encrypting files', 'Sending email'], answer: 1, explain: 'Nmap maps live hosts and their open ports/services — enumeration.' },
          { q: 'Which flag detects service versions?', options: ['-sV', '-p-', '-oN', '-h'], answer: 0, explain: '-sV probes open ports to identify the service and version.' },
          { q: 'Is it OK to scan any website you want?', options: ['Yes, scanning is always legal', 'No — only systems you own or are authorised to test', 'Only at night', 'Only with a VPN'], answer: 1, explain: 'Unauthorised scanning can be illegal; always have explicit permission.' },
        ],
        resources: [
          { label: 'TryHackMe — Nmap', url: 'https://tryhackme.com/' },
          { label: 'Nmap reference guide', url: 'https://nmap.org/book/man.html' },
        ],
      },
      {
        id: 'w4d23', week: 4, day: 23, track: 'cyber', duration: '4 hrs',
        title: 'Vulnerabilities & Your First Guided Exploit',
        objectives: [
          'Understand the vulnerability lifecycle (CVE, CVSS)',
          'Follow an exploitation walkthrough safely',
          'Complete a beginner boot-to-root room',
        ],
        sections: [
          { heading: 'How vulnerabilities are tracked', body: `Known vulnerabilities get a **CVE** ID (e.g. CVE-2021-44228, "Log4Shell") and a **CVSS** score (0–10) rating severity. Defenders patch them; attackers (and pentesters) search databases like Exploit-DB for working exploits. Most real attacks use *known, unpatched* vulnerabilities — which is why patching is the single highest-impact defense.` },
          { heading: 'The pentest flow', body: `A guided "boot-to-root" room follows the real methodology: **enumerate** (Nmap) → **find a weakness** (a vulnerable service or web flaw) → **exploit** to get an initial foothold → **escalate privileges** to admin/root → capture the flags. Following a walkthrough teaches you the rhythm before you do it unaided.` },
          { heading: 'Stay in the sandbox', body: `Everything you do here is inside TryHackMe's legal lab against intentionally-vulnerable machines. Never apply these techniques outside authorised environments. The skills are dual-use; your **ethics and authorisation** are what make you a professional.` },
        ],
        practical: {
          title: 'TryHackMe — beginner guided room',
          steps: [
            'Pick a beginner-friendly guided room (e.g. from the "Jr Penetration Tester" or "Complete Beginner" path).',
            'Follow it end to end: enumerate, exploit, escalate.',
            'Capture the flags the room asks for.',
            'Write a short summary of the steps in your notes — this is practising report-writing.',
          ],
        },
        quiz: [
          { q: 'A CVE is…', options: ['A type of firewall', 'A unique ID for a known vulnerability', 'A password format', 'A Linux command'], answer: 1, explain: 'CVE = Common Vulnerabilities and Exposures — a public ID for a known flaw.' },
          { q: 'Most real-world breaches exploit…', options: ['Brand-new unknown bugs only', 'Known, unpatched vulnerabilities', 'Strong encryption', 'Physical break-ins'], answer: 1, explain: 'Unpatched known vulnerabilities are the most common entry point — patch!' },
          { q: 'After getting a foothold, attackers try to…', options: ['Log out', 'Escalate privileges to admin/root', 'Send an email', 'Reboot'], answer: 1, explain: 'Privilege escalation turns limited access into full control.' },
        ],
        resources: [
          { label: 'TryHackMe — Complete Beginner path', url: 'https://tryhackme.com/' },
          { label: 'CVE database (MITRE)', url: 'https://www.cve.org/' },
        ],
      },
      {
        id: 'w4d24', week: 4, day: 24, track: 'coding', duration: '4 hrs',
        title: 'Python Automation: Build a Port Scanner',
        objectives: [
          'Use Python sockets to test ports',
          'Loop over a port range',
          'Build a TCP port scanner (ethically)',
        ],
        sections: [
          { heading: 'Sockets: talking to ports in code', body: `A **socket** is a programming endpoint for network communication. To test if a TCP port is open, you try to connect to it:\n\n\`\`\`python\nimport socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.settimeout(1)\nresult = s.connect_ex((target, port))  # 0 means open\ns.close()\n\`\`\`\n\n\`connect_ex\` returns 0 if the connection succeeded (port open).` },
          { heading: 'Scanning a range', body: `Loop over ports and collect the open ones:\n\n\`\`\`python\nopen_ports = []\nfor port in range(1, 1025):\n    ...  # try connect_ex\n    if result == 0:\n        open_ports.append(port)\n\`\`\`\n\nThis is a simplified Nmap. A timeout keeps it from hanging on filtered ports.` },
          { heading: '⚠️ Scan only what you own', body: `Run this against \`127.0.0.1\` (your own machine) or an authorised TryHackMe target — never random internet hosts. With that rule respected, this is portfolio piece #5 and a great demonstration of combining networking knowledge with Python.` },
        ],
        practical: {
          title: 'Build a TCP port scanner',
          steps: [
            'Take a target (default to 127.0.0.1) and a port range.',
            'Loop the range, using socket connect_ex with a short timeout.',
            'Collect and print the open ports, with a friendly summary.',
            'Test it against your own machine only.',
          ],
        },
        quiz: [
          { q: 'What does socket connect_ex return when a port is OPEN?', options: ['1', '0', 'True', '"open"'], answer: 1, explain: 'connect_ex returns 0 on a successful connection (open port).' },
          { q: 'Why set a socket timeout?', options: ['To encrypt traffic', 'So the scan does not hang on unresponsive ports', 'To speed up the CPU', 'It is required syntax'], answer: 1, explain: 'A timeout prevents the scan stalling on filtered/closed ports.' },
          { q: 'A safe target to test your scanner on is…', options: ['Any bank website', '127.0.0.1 (your own machine)', 'A random IP', 'Your neighbour\'s router'], answer: 1, explain: 'Scan only systems you own or are authorised to test — localhost is safe.' },
        ],
        resources: [
          { label: 'Python socket docs', url: 'https://docs.python.org/3/library/socket.html' },
        ],
      },
      {
        id: 'w4d25', week: 4, day: 25, track: 'cyber', duration: '4 hrs',
        title: 'Defense in Depth & System Hardening',
        objectives: [
          'Understand layered defense',
          'Apply hardening best practices',
          'Build a hardening checklist tool',
        ],
        sections: [
          { heading: 'Defense in depth', body: `No single control is enough. **Defense in depth** layers many: firewall + patching + MFA + least privilege + backups + monitoring. If one layer fails, others still protect you. Think of a castle: moat, walls, gates, guards — not just one big door.` },
          { heading: 'Hardening checklist', body: `Practical steps that block most attacks:\n\n- **Patch** OS and software promptly.\n- Enable **MFA** everywhere.\n- Use **strong, unique passwords** (a password manager).\n- Apply **least privilege** — don't run as admin daily.\n- Turn off **unused services/ports**.\n- Keep **backups** (and test restoring them).\n- Enable the **firewall** and disk **encryption**.` },
          { heading: 'Why this matters for jobs', body: `Entry roles (help desk, junior SOC, IT) spend a lot of time on exactly this: keeping systems patched, configured safely, and users following good hygiene. Showing you understand hardening is directly relevant to getting hired.` },
        ],
        practical: {
          title: 'Hardening checklist script',
          steps: [
            'Write a Python script that prints a structured security hardening checklist.',
            'Group items by category (Accounts, Updates, Network, Backups).',
            'Bonus: make it interactive — ask y/n for each item and report a "security score".',
            'Save it as a portfolio-worthy tool with a top comment.',
          ],
        },
        quiz: [
          { q: 'Defense in depth means…', options: ['One very strong control', 'Multiple layered controls', 'Only using a firewall', 'Deep packet inspection only'], answer: 1, explain: 'Layering controls means a single failure does not breach everything.' },
          { q: 'Which is a top hardening action?', options: ['Disable updates', 'Enable MFA and patch promptly', 'Run everything as admin', 'Open all ports'], answer: 1, explain: 'MFA and timely patching block a huge share of real attacks.' },
          { q: 'Least privilege means…', options: ['Everyone is admin', 'Users get only the access they need', 'No passwords', 'Public file shares'], answer: 1, explain: 'Granting minimal necessary access limits damage if an account is compromised.' },
        ],
        resources: [
          { label: 'CIS Benchmarks (hardening guides)', url: 'https://www.cisecurity.org/cis-benchmarks' },
        ],
      },
      {
        id: 'w4d26', week: 4, day: 26, track: 'both', duration: '4 hrs',
        title: 'Capstone Day 1: Plan & Scaffold',
        objectives: [
          'Choose your capstone project',
          'Plan its features',
          'Set up the project structure',
        ],
        sections: [
          { heading: 'Pick your capstone', body: `Choose **one**:\n\n- **(A) Python Security Toolkit** — combine your port scanner, password checker, hashing tool, and log scanner behind one menu. Pure code, very demonstrable.\n- **(B) Threat Analysis Report** — pick a real breach (e.g. a well-documented ransomware case), and write a structured analysis: what happened, which CIA principles were violated, the attack chain, and what defenses would have stopped it.\n\n(A) showcases coding; (B) showcases security thinking and writing. Both impress.` },
          { heading: 'Plan before you build', body: `Spend real time planning on paper: list the features/sections, sketch the menu or report outline, and decide what "done" means. A planned project beats a rambling one. For (A), plan the menu and which module each option calls; for (B), plan the report's headings.` },
          { heading: 'Scaffold it', body: `Create the project folder and files. For (A): a main script plus a clear structure, and a \`README.md\` stub. For (B): a document with your section headings. A **README** explaining what the project is, how to run it, and what you learned is what makes a portfolio piece look professional.` },
        ],
        practical: {
          title: 'Scaffold the capstone',
          steps: [
            'Decide: toolkit (A) or report (B).',
            'Write the plan: features/sections and the "done" definition.',
            'Create the folder, starter file(s), and a README outline.',
            'Commit to finishing the core over the next two days.',
          ],
        },
        quiz: [
          { q: 'Why plan before coding/writing?', options: ['It wastes time', 'A clear plan produces a focused, finished project', 'Python requires a plan file', 'To avoid using a README'], answer: 1, explain: 'Planning scope and "done" keeps the project focused and completable.' },
          { q: 'A good README explains…', options: ['Nothing important', 'What the project is, how to run it, what you learned', 'Only your name', 'The CPU model'], answer: 1, explain: 'A README makes your work understandable and professional to reviewers.' },
          { q: 'The capstone should be…', options: ['Ten unfinished ideas', 'One focused, finished project', 'A copy of someone else\'s repo', 'Left incomplete'], answer: 1, explain: 'One finished, well-documented project is far stronger than many stubs.' },
        ],
        resources: [
          { label: 'Makeareadme.com', url: 'https://www.makeareadme.com/' },
        ],
      },
      {
        id: 'w4d27', week: 4, day: 27, track: 'both', duration: '4 hrs',
        title: 'Capstone Day 2: Build the Core',
        objectives: [
          'Implement the main functionality',
          'Test as you go',
          'Keep code/writing clean',
        ],
        sections: [
          { heading: 'Build one feature at a time', body: `Don't try to write everything at once. Implement one feature, **test it works**, then move to the next. For the toolkit: get the menu loop working with one tool, then add the rest. For the report: write one full section properly before the others. Small, tested increments beat a big untested blob.` },
          { heading: 'Reuse what you built', body: `You already wrote the port scanner, password checker, hashing function, and log scanner. The toolkit is largely **assembling** them behind a menu — turn each into a function and call it. This is why functions mattered: reusable building blocks. For the report, reuse the CIA triad and attack concepts as your analysis framework.` },
          { heading: 'Quality habits', body: `Add comments explaining intent, handle bad input with try/except, and use clear names. For writing, keep paragraphs tight and cite your sources. Quality is what separates a portfolio project from a homework dump.` },
        ],
        practical: {
          title: 'Implement one full feature end to end',
          steps: [
            'Toolkit: build the menu + integrate at least two of your existing tools as functions.',
            'Report: fully write at least two sections (e.g. timeline + CIA analysis).',
            'Test/proofread what you built.',
            'Commit progress; note what is left for tomorrow.',
          ],
        },
        quiz: [
          { q: 'Best way to build a larger project?', options: ['Write it all then test once', 'One feature at a time, testing each', 'Never test', 'Copy from the internet'], answer: 1, explain: 'Incremental, tested steps catch bugs early and keep momentum.' },
          { q: 'Why turn each tool into a function for the toolkit?', options: ['To slow it down', 'So they are reusable building blocks called from the menu', 'Python bans loose code', 'To hide them'], answer: 1, explain: 'Functions package each tool so the menu can call them cleanly.' },
          { q: 'A sign of a quality project is…', options: ['No comments and cryptic names', 'Clear names, comments, and input handling', 'It crashes often', 'No README'], answer: 1, explain: 'Readable, robust code signals professionalism.' },
        ],
        resources: [
          { label: 'Real Python — Writing clean code', url: 'https://realpython.com/tutorials/best-practices/' },
        ],
      },
      {
        id: 'w4d28', week: 4, day: 28, track: 'both', duration: '4 hrs',
        title: 'Capstone Day 3: Finish & Push to GitHub',
        objectives: [
          'Finish and document the capstone',
          'Learn Git/GitHub basics',
          'Publish your portfolio',
        ],
        sections: [
          { heading: 'Finish and polish', body: `Complete the remaining features/sections, fix any bugs, and write a clear **README** with: what it does, how to run it, a screenshot, and a short "what I learned". Polish matters — a recruiter spends seconds on first impression.` },
          { heading: 'Git & GitHub in five commands', body: `**Git** tracks versions of your code; **GitHub** hosts it online for the world (and employers) to see.\n\n\`\`\`bash\ngit init\ngit add .\ngit commit -m "Initial commit: capstone toolkit"\ngit branch -M main\ngit remote add origin <your-repo-url>\ngit push -u origin main\n\`\`\`\n\nCreate a free GitHub account, make a new repo, and push. Your projects now have a public home.` },
          { heading: 'Publish everything', body: `Push not just the capstone but all your earlier projects (toolbox, ping checker, password checker, log scanner, port scanner). A GitHub profile with 6 real projects is a genuine differentiator for entry roles — many applicants have none.` },
        ],
        practical: {
          title: 'Finish the capstone and publish to GitHub',
          steps: [
            'Complete and proofread the capstone; finalise the README.',
            'Create a GitHub account and a new repository.',
            'Use git init/add/commit/push to upload it.',
            'Push your other portfolio projects too.',
          ],
        },
        quiz: [
          { q: 'What is GitHub?', options: ['A code editor', 'An online host for Git repositories', 'A programming language', 'An antivirus'], answer: 1, explain: 'GitHub hosts Git repos online — a public home for your code.' },
          { q: 'Which command saves a snapshot with a message?', options: ['git push', 'git commit -m "..."', 'git clone', 'git status'], answer: 1, explain: 'git commit records a snapshot; -m attaches the message.' },
          { q: 'Why publish projects on GitHub for job hunting?', options: ['It is mandatory by law', 'It gives employers proof of real work', 'It deletes your code', 'It hides your skills'], answer: 1, explain: 'A public portfolio is concrete evidence of your abilities.' },
        ],
        resources: [
          { label: 'GitHub — Hello World guide', url: 'https://docs.github.com/en/get-started/start-your-journey/hello-world' },
          { label: 'Git basics (free book)', url: 'https://git-scm.com/book/en/v2' },
        ],
      },
      {
        id: 'w4d29', week: 4, day: 29, track: 'cyber', duration: '4 hrs',
        title: 'Job-Readiness: Certs, Résumé & LinkedIn',
        objectives: [
          'Map the entry-level certification path',
          'Draft a project-focused résumé',
          'Set up a professional LinkedIn',
        ],
        sections: [
          { heading: 'The cert path', body: `Certifications signal baseline knowledge to employers. The common entry ladder:\n\n- **CompTIA A+** — IT support fundamentals (great for help desk).\n- **CompTIA Network+** — networking (you've covered a lot of this).\n- **CompTIA Security+** — the most-requested entry security cert; aim here next.\n\nStudy Security+ with Professor Messer's free videos, then book the exam when ready. Certs + your portfolio = a credible entry-level candidate.` },
          { heading: 'Your résumé', body: `As a career-changer, lead with **projects and skills**, not (yet) experience. One page: a short summary ("aspiring SOC analyst with hands-on Python and TryHackMe lab experience"), a Skills section (Python, Linux, networking, Nmap, Wireshark), and a Projects section linking your GitHub. Quantify where you can ("completed 30-day intensive; built 6 security tools").` },
          { heading: 'LinkedIn', body: `Recruiters live on LinkedIn. Use a clean photo, a headline ("Aspiring Cybersecurity Analyst | Python | TryHackMe Top X%"), an About section telling your story, and list your projects and the skills you've built. Start following security professionals and companies. Visibility creates opportunity.` },
        ],
        practical: {
          title: 'Draft résumé + build LinkedIn',
          steps: [
            'Write a one-page résumé draft leading with Skills and Projects (link GitHub).',
            'Create or polish your LinkedIn profile: photo, headline, About, projects.',
            'List the concrete skills/tools from this bootcamp.',
            'Note your target first role and next cert.',
          ],
        },
        quiz: [
          { q: 'The most-requested ENTRY security cert is…', options: ['CISSP', 'CompTIA Security+', 'OSCP', 'CCNA'], answer: 1, explain: 'Security+ is the common entry-level security certification. (CISSP/OSCP are advanced.)' },
          { q: 'A career-changer résumé should lead with…', options: ['Unrelated job history', 'Projects and skills', 'Hobbies', 'A long essay'], answer: 1, explain: 'With little direct experience, projects and skills are your strongest evidence.' },
          { q: 'Why does LinkedIn matter for job hunting?', options: ['It does not', 'Recruiters actively source candidates there', 'It hosts your code', 'It is a coding tool'], answer: 1, explain: 'A strong LinkedIn presence puts you in front of recruiters.' },
        ],
        resources: [
          { label: 'Professor Messer — Security+ (free)', url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/' },
          { label: 'CompTIA certification roadmap', url: 'https://www.comptia.org/certifications' },
        ],
      },
      {
        id: 'w4d30', week: 4, day: 30, track: 'both', duration: '4 hrs',
        title: 'Final Review & Your 90-Day Plan',
        objectives: [
          'Self-assess against every weekly goal',
          'Confirm retention by redoing key tasks',
          'Write a concrete continuation plan',
        ],
        sections: [
          { heading: 'Look how far you came', body: `Thirty days ago you'd never written code. Now you can: program in Python (variables → functions → files), navigate Linux, explain how networks and the internet work, reason about the CIA triad and common attacks, complete guided hacking and defense labs, and you've built **6+ projects** on GitHub. That's a real foundation — be proud of it.` },
          { heading: 'Honest self-assessment', body: `Go week by week and rate yourself against each "by end of week you can…" goal. Anything weak, note it — that's your immediate review list. Redo one task from each week from memory to confirm it stuck. Gaps aren't failure; they're your study targets.` },
          { heading: 'The next 90 days', body: `This was the launchpad, not the destination. A strong continuation plan:\n\n1. **Study for Security+** (Professor Messer) — aim to sit it in ~8–12 weeks.\n2. **Follow a TryHackMe path** ("Cyber Security 101" or "SOC Level 1") — keep hands-on.\n3. **Build one project per month** and keep pushing to GitHub.\n4. **Apply** to help desk / IT support / junior SOC roles once your cert is in progress.\n5. Keep a weekly schedule so the habit you built doesn't fade.` },
        ],
        practical: {
          title: 'Write your personal 90-day plan',
          steps: [
            'Self-assess against all four weeks\' goals; list weak spots.',
            'Pick your first cert and a target exam window.',
            'Choose the next TryHackMe path to follow.',
            'Write a weekly schedule for the next 90 days and commit to it.',
          ],
        },
        quiz: [
          { q: 'After this bootcamp, the recommended next cert is…', options: ['CISSP', 'CompTIA Security+', 'PhD', 'None'], answer: 1, explain: 'Security+ is the natural next step toward entry security roles.' },
          { q: 'Best way to confirm knowledge stuck?', options: ['Reread passively', 'Redo tasks from memory (active recall)', 'Skip review', 'Watch videos at 2x'], answer: 1, explain: 'Active recall — redoing tasks unaided — proves and strengthens retention.' },
          { q: 'Day 30 is best thought of as…', options: ['The finish line', 'A launchpad for certs and applications', 'Time to stop', 'Job guaranteed'], answer: 1, explain: 'It is a strong foundation; the journey continues with certs, labs, and applications.' },
        ],
        resources: [
          { label: 'TryHackMe — Cyber Security 101 path', url: 'https://tryhackme.com/' },
          { label: 'Professor Messer — Security+', url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/' },
        ],
      },
    ],
  },
]

/* Flat list of all lessons in order — handy for progress + next-lesson logic */
export const allLessons = curriculum.flatMap((w) => w.lessons)

/* Look up a single lesson by id */
export function getLesson(id) {
  return allLessons.find((l) => l.id === id) || null
}

/* Look up a week by its number */
export function getWeek(weekNum) {
  return curriculum.find((w) => w.week === Number(weekNum)) || null
}

/* Previous / next lesson for in-lesson navigation */
export function getAdjacent(id) {
  const i = allLessons.findIndex((l) => l.id === id)
  return {
    prev: i > 0 ? allLessons[i - 1] : null,
    next: i >= 0 && i < allLessons.length - 1 ? allLessons[i + 1] : null,
  }
}
