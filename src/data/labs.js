/* ============================================================
   Cyber Academy — Hands-on Labs
   Larger, guided, step-by-step projects that build your portfolio.
   Each lab has checkable steps tracked in localStorage.
   ============================================================ */

export const labs = [
  /* ----------------------------------------------------------------- */
  {
    id: 'lab-cli-toolbox',
    title: 'Personal CLI Toolbox',
    emoji: '🧰',
    difficulty: 'Beginner',
    track: 'coding',
    time: '60–90 min',
    week: 1,
    lessonId: 'w1d7',
    summary: 'Combine a unit converter, a number-guessing game, and a to-do list into one menu-driven Python program. Your first real portfolio project.',
    objectives: [
      'Structure a program with functions and a menu loop',
      'Reuse code you wrote during Week 1',
      'Handle user input safely',
    ],
    prerequisites: ['Week 1 lessons (variables, loops, conditionals, lists)'],
    steps: [
      { title: 'Create the project file', body: `Make a new file called \`cli_toolbox.py\`. At the very top, add a comment describing what it does:\n\n\`\`\`python\n# Personal CLI Toolbox — converter, guessing game, and to-do list\n# Author: <your name>\n\`\`\`\n\nGood projects explain themselves from line 1.` },
      { title: 'Write the menu loop', body: `Create the skeleton that shows options and reads a choice. Everything else plugs into this:\n\n\`\`\`python\ndef main():\n    while True:\n        print("\\n=== Toolbox ===")\n        print("1) Unit converter")\n        print("2) Guessing game")\n        print("3) To-do list")\n        print("4) Quit")\n        choice = input("Pick an option: ")\n        if choice == "4":\n            print("Goodbye!")\n            break\n        else:\n            print("TODO: handle", choice)\n\nmain()\n\`\`\`\n\nRun it and confirm the menu loops and "4" quits.` },
      { title: 'Add the unit converter as a function', body: `Move your Day 2 converter into its own function and call it from option 1:\n\n\`\`\`python\ndef converter():\n    miles = float(input("Miles? "))\n    print(f"{miles} miles = {miles * 1.60934:.2f} km")\n\`\`\`\n\nIn the menu, replace the option-1 TODO with \`converter()\`.` },
      { title: 'Add the guessing game', body: `Turn your Day 3 game into \`guessing_game()\`. Use \`import random\` at the top of the file, then call the function from option 2. Test that winning ends the game and returns you to the menu.` },
      { title: 'Add the to-do list', body: `Your Day 5 to-do list becomes \`todo_list()\`. Keep the tasks in a list **inside** the function for now. Wire it to option 3.` },
      { title: 'Harden the input', body: `What happens if the user types "abc" when a number is expected? Wrap risky conversions in try/except so the toolbox never crashes:\n\n\`\`\`python\ntry:\n    miles = float(input("Miles? "))\nexcept ValueError:\n    print("Please enter a number.")\n    return\n\`\`\`` },
      { title: 'Test every path', body: `Run the program and exercise every menu option, including bad input and quitting. A finished tool handles normal use without errors. Fix anything that breaks.` },
    ],
    deliverable: 'A single cli_toolbox.py that runs all three tools from one menu without crashing.',
    stretch: [
      'Save to-do tasks to a file so they persist between runs (preview of Day 9).',
      'Add a 4th tool: a simple tip calculator.',
      'Track and display how many guesses the game took.',
    ],
  },

  /* ----------------------------------------------------------------- */
  {
    id: 'lab-ping-checker',
    title: 'Network Host Checker',
    emoji: '📡',
    difficulty: 'Beginner',
    track: 'both',
    time: '60–90 min',
    week: 2,
    lessonId: 'w2d14',
    summary: 'Build a Python tool that reads a list of hosts from a file and reports which are online — your first network/security utility.',
    objectives: [
      'Run system commands from Python with subprocess',
      'Read data from a file and loop over it',
      'Separate data (host list) from logic (the script)',
    ],
    prerequisites: ['Week 2 lessons (functions, files, subprocess, networking basics)'],
    steps: [
      { title: 'Create a hosts file', body: `Make \`hosts.txt\` with a few targets, one per line — e.g. your gateway, a public DNS, and a site you like:\n\n\`\`\`\n8.8.8.8\ngoogle.com\nexample.com\n\`\`\`\n\nKeeping targets in a file means you can change them without touching code.` },
      { title: 'Read the hosts into Python', body: `Create \`host_checker.py\` and read the file into a clean list:\n\n\`\`\`python\nwith open("hosts.txt") as f:\n    hosts = [line.strip() for line in f if line.strip()]\nprint("Checking:", hosts)\n\`\`\`\n\n\`.strip()\` removes the trailing newline; the \`if line.strip()\` skips blank lines.` },
      { title: 'Ping one host', body: `Use subprocess to ping a single host. On **Windows** the flag is \`-n 1\` (one packet); on Linux/Mac it is \`-c 1\`:\n\n\`\`\`python\nimport subprocess\n\ndef is_up(host):\n    result = subprocess.run(\n        ["ping", "-n", "1", host],\n        capture_output=True, text=True\n    )\n    return result.returncode == 0\n\`\`\`\n\nA return code of 0 means the host replied.` },
      { title: 'Loop over all hosts', body: `Call \`is_up()\` for each host and print a clean status line:\n\n\`\`\`python\nfor host in hosts:\n    status = "UP  ✅" if is_up(host) else "DOWN ❌"\n    print(f"{host:20} {status}")\n\`\`\`\n\nThe \`:20\` pads the name so the column lines up.` },
      { title: 'Make it robust', body: `Wrap the per-host check in try/except so one bad hostname does not stop the whole scan. Report unreachable/unknown hosts as DOWN rather than crashing.` },
      { title: 'Summarise the results', body: `After the loop, count and print how many hosts were up vs down. A good tool ends with a clear summary, e.g. \`2/3 hosts up\`.` },
    ],
    deliverable: 'host_checker.py that reads hosts.txt and prints UP/DOWN per host plus a summary.',
    stretch: [
      'Add a timestamp to each run and append results to a log file.',
      'Measure and show the ping response time, not just up/down.',
      'Accept the filename as a command-line argument (look up sys.argv).',
    ],
  },

  /* ----------------------------------------------------------------- */
  {
    id: 'lab-password-tool',
    title: 'Password Security Tool',
    emoji: '🔐',
    difficulty: 'Intermediate',
    track: 'both',
    time: '75–100 min',
    week: 3,
    lessonId: 'w3d17',
    summary: 'Build a two-in-one security tool: a password-strength checker and a SHA-256 hash/verify utility — putting cryptography concepts into code.',
    objectives: [
      'Use hashlib to hash and verify passwords',
      'Evaluate password strength against real criteria',
      'Understand why you store hashes, not passwords',
    ],
    prerequisites: ['Week 3 lessons (CIA triad, hashing, password attacks)'],
    steps: [
      { title: 'Set up the tool', body: `Create \`password_tool.py\` with a menu offering: (1) check strength, (2) hash a password, (3) verify a password against a hash, (4) quit. Reuse the menu-loop pattern from the CLI Toolbox lab.` },
      { title: 'Score password strength', body: `Write \`check_strength(pw)\` that scores against criteria:\n\n\`\`\`python\ndef check_strength(pw):\n    checks = {\n        "length >= 12": len(pw) >= 12,\n        "has uppercase": any(c.isupper() for c in pw),\n        "has lowercase": any(c.islower() for c in pw),\n        "has digit":     any(c.isdigit() for c in pw),\n        "has symbol":    any(not c.isalnum() for c in pw),\n    }\n    passed = sum(checks.values())\n    return checks, passed\n\`\`\`` },
      { title: 'Rate and explain', body: `Use the passed count to print a rating and show which checks failed, so the user learns how to improve:\n\n\`\`\`python\nchecks, passed = check_strength(pw)\nrating = ["Very weak","Weak","Fair","Good","Strong","Excellent"][passed]\nprint(f"Rating: {rating} ({passed}/5)")\nfor name, ok in checks.items():\n    print((" ✅ " if ok else " ❌ ") + name)\n\`\`\`` },
      { title: 'Reject common passwords', body: `Keep a small set of weak passwords and reject any match regardless of score:\n\n\`\`\`python\nCOMMON = {"password", "123456", "qwerty", "letmein", "admin"}\nif pw.lower() in COMMON:\n    print("This is a commonly-used password — choose another.")\n\`\`\`\n\nReal attackers try these first.` },
      { title: 'Hash a password', body: `Add the hashing tool with hashlib:\n\n\`\`\`python\nimport hashlib\n\ndef hash_pw(pw):\n    return hashlib.sha256(pw.encode()).hexdigest()\n\`\`\`\n\nPrint the resulting hex digest. Note it is always 64 characters, no matter the input length.` },
      { title: 'Verify against a hash', body: `For option 3, store a hash (from step 5), then ask the user to "log in": hash their guess and compare. **You never stored the real password** — that is the whole point.\n\n\`\`\`python\nif hash_pw(guess) == stored_hash:\n    print("Access granted ✅")\nelse:\n    print("Access denied ❌")\n\`\`\`` },
      { title: 'Reflect in your notes', body: `In a comment or your notes, answer: why is hashing one-way better than storing plaintext? What does a "salt" add (research it briefly)? This connects the code back to the Week 3 crypto lesson.` },
    ],
    deliverable: 'password_tool.py that rates strength, rejects common passwords, and hashes/verifies via SHA-256.',
    stretch: [
      'Add a salt: hash salt + password and store the salt alongside the hash.',
      'Generate a strong random password (look up the secrets module).',
      'Estimate crack time based on length and character variety.',
    ],
  },

  /* ----------------------------------------------------------------- */
  {
    id: 'lab-log-analyzer',
    title: 'Failed-Login Log Analyzer',
    emoji: '🕵️',
    difficulty: 'Intermediate',
    track: 'cyber',
    time: '75–100 min',
    week: 3,
    lessonId: 'w3d21',
    summary: 'Build a defensive (blue-team) tool that scans an auth log, flags failed logins, and detects brute-force sources — a miniature SIEM rule.',
    objectives: [
      'Parse a log file line by line',
      'Extract IP addresses and count events per IP',
      'Flag brute-force patterns with a threshold',
    ],
    prerequisites: ['Week 3 lessons (blue team, logs, SIEM, brute force)'],
    steps: [
      { title: 'Get a sample log', body: `Create \`auth.log\` with realistic lines (or download a sample SSH auth log). Include several failures from one IP:\n\n\`\`\`\nJan 1 10:00:01 server sshd[1]: Failed password for root from 10.0.0.5 port 22\nJan 1 10:00:03 server sshd[1]: Failed password for root from 10.0.0.5 port 22\nJan 1 10:00:04 server sshd[1]: Accepted password for sam from 10.0.0.9 port 22\nJan 1 10:00:06 server sshd[1]: Failed password for admin from 10.0.0.5 port 22\n\`\`\`\n\nTesting on a controlled sample is safe and repeatable.` },
      { title: 'Read and filter failed logins', body: `Create \`log_analyzer.py\` and collect the failure lines:\n\n\`\`\`python\nfails = []\nwith open("auth.log") as f:\n    for line in f:\n        if "Failed password" in line:\n            fails.append(line.strip())\nprint(f"Found {len(fails)} failed logins")\n\`\`\`` },
      { title: 'Extract the IP address', body: `Each failure line contains \`from <ip>\`. Pull the IP out of each line:\n\n\`\`\`python\ndef ip_from(line):\n    parts = line.split()\n    return parts[parts.index("from") + 1]\n\`\`\`\n\nThis finds the word "from" and takes the next token. (A regex would also work — try \`re\` as a stretch goal.)` },
      { title: 'Count failures per IP', body: `Use a dictionary to tally attempts from each source — exactly how a SIEM groups events:\n\n\`\`\`python\ncounts = {}\nfor line in fails:\n    ip = ip_from(line)\n    counts[ip] = counts.get(ip, 0) + 1\nprint(counts)\n\`\`\`` },
      { title: 'Flag brute-force sources', body: `Set a threshold and alert on any IP over it:\n\n\`\`\`python\nTHRESHOLD = 3\nfor ip, n in counts.items():\n    if n >= THRESHOLD:\n        print(f"⚠️  Possible brute force from {ip}: {n} failures")\n\`\`\`\n\nYou just wrote a detection rule.` },
      { title: 'Write a tidy report', body: `Print a clean summary: total lines scanned, total failures, unique source IPs, and the flagged offenders sorted by count (highest first). Use \`sorted(counts.items(), key=lambda x: x[1], reverse=True)\`.` },
    ],
    deliverable: 'log_analyzer.py that reports failed logins, per-IP counts, and flags brute-force sources over a threshold.',
    stretch: [
      'Use the re module with a regex to extract IPs more robustly.',
      'Also report successful logins ("Accepted password") for context.',
      'Output the report to a results file with a timestamp.',
    ],
  },

  /* ----------------------------------------------------------------- */
  {
    id: 'lab-port-scanner',
    title: 'TCP Port Scanner',
    emoji: '🔎',
    difficulty: 'Intermediate',
    track: 'both',
    time: '75–100 min',
    week: 4,
    lessonId: 'w4d24',
    summary: 'Build a simplified Nmap in Python using sockets to discover open TCP ports — scanning only your own machine or authorised targets.',
    objectives: [
      'Use sockets to test TCP connectivity',
      'Scan a range of ports with timeouts',
      'Map open ports back to their services',
    ],
    prerequisites: ['Week 4 Nmap lesson + Week 2 networking (ports)', 'Read the ethics note below before running'],
    steps: [
      { title: '⚠️ Read this first', body: `**Only scan systems you own or are explicitly authorised to test.** Use \`127.0.0.1\` (your own machine) or an authorised TryHackMe target. Unauthorised scanning can be illegal. With that rule respected, continue.` },
      { title: 'Connect to a single port', body: `Create \`port_scanner.py\`. The core idea: try to connect; success means the port is open:\n\n\`\`\`python\nimport socket\n\ndef is_open(host, port, timeout=0.5):\n    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    s.settimeout(timeout)\n    result = s.connect_ex((host, port))  # 0 == open\n    s.close()\n    return result == 0\n\`\`\`` },
      { title: 'Scan a range of ports', body: `Loop over a range and collect the open ones:\n\n\`\`\`python\nhost = "127.0.0.1"\nopen_ports = []\nfor port in range(1, 1025):\n    if is_open(host, port):\n        open_ports.append(port)\nprint("Open ports:", open_ports)\n\`\`\`\n\nThe timeout keeps the scan from hanging on closed/filtered ports.` },
      { title: 'Name the services', body: `Map common ports to their service so the output is meaningful:\n\n\`\`\`python\nSERVICES = {22: "SSH", 80: "HTTP", 443: "HTTPS", 53: "DNS", 3389: "RDP"}\nfor port in open_ports:\n    print(f"Port {port:5} OPEN  {SERVICES.get(port, 'unknown')}")\n\`\`\`` },
      { title: 'Add a friendly interface', body: `Prompt for the target (defaulting to 127.0.0.1) and the port range. Print a header showing what is being scanned and a footer summarising how many ports were open.` },
      { title: 'Make it faster (optional but great)', body: `A sequential scan is slow. Use \`concurrent.futures.ThreadPoolExecutor\` to scan many ports in parallel — a big, impressive upgrade. If threading is new, leave this as a stretch goal and keep the working sequential version.` },
    ],
    deliverable: 'port_scanner.py that scans a port range on an authorised target and labels open ports with their service.',
    stretch: [
      'Add multithreading to scan all 65535 ports quickly.',
      'Accept host and port range as command-line arguments.',
      'Grab the service banner from open ports (recv a few bytes).',
    ],
  },

  /* ----------------------------------------------------------------- */
  {
    id: 'lab-capstone-toolkit',
    title: 'Capstone: Security Toolkit',
    emoji: '🏆',
    difficulty: 'Advanced',
    track: 'both',
    time: '3 sessions (Days 26–28)',
    week: 4,
    lessonId: 'w4d26',
    summary: 'Combine your earlier tools — port scanner, password tool, hash utility, and log analyzer — into one polished, documented Security Toolkit, then publish it to GitHub.',
    objectives: [
      'Integrate multiple modules behind one interface',
      'Write a professional README',
      'Publish a portfolio-grade project to GitHub',
    ],
    prerequisites: ['The Password Tool, Log Analyzer, and Port Scanner labs'],
    steps: [
      { title: 'Plan the toolkit', body: `On paper, list the tools you will include (password checker, hasher, log analyzer, port scanner) and sketch the main menu. Decide what "done" means before you write code — a planned project beats a rambling one.` },
      { title: 'Scaffold the project', body: `Create a folder \`security-toolkit/\` with a \`main.py\` and a \`README.md\` stub. Optionally split tools into separate files (e.g. \`tools/scanner.py\`) and import them — clean structure impresses reviewers.` },
      { title: 'Turn each tool into a function', body: `Refactor each previous lab into a callable function (e.g. \`run_port_scanner()\`, \`run_password_tool()\`). This is why functions matter: they are reusable building blocks the menu can call.` },
      { title: 'Build the master menu', body: `Write the main loop that lists every tool and dispatches to the right function. Handle invalid choices gracefully and provide a clean quit.` },
      { title: 'Test end to end', body: `Run the toolkit and exercise every option, including bad input. Fix crashes. Confirm the ethics guardrail (scan-only-authorised) is stated where the scanner runs.` },
      { title: 'Write the README', body: `Document it like a real project: what it does, how to run it (\`python main.py\`), a screenshot, the tools included, and a short "what I learned". Use the README guide in the resources. This is what a recruiter reads first.` },
      { title: 'Publish to GitHub', body: `Initialise git, commit, and push:\n\n\`\`\`bash\ngit init\ngit add .\ngit commit -m "Security Toolkit"\ngit branch -M main\ngit remote add origin <your-repo-url>\ngit push -u origin main\n\`\`\`\n\nPush your other lab projects too — a GitHub profile with 5+ real tools is a genuine differentiator.` },
    ],
    deliverable: 'A published GitHub repo containing a menu-driven Security Toolkit with a professional README.',
    stretch: [
      'Add logging so the toolkit records what was run and when.',
      'Add a config file for default targets/thresholds.',
      'Write a short usage GIF or screenshots into the README.',
    ],
  },
]

export const allLabs = labs

export function getLab(id) {
  return labs.find((l) => l.id === id) || null
}

export function getLabByLesson(lessonId) {
  return labs.find((l) => l.lessonId === lessonId) || null
}
