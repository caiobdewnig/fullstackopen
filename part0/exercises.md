flowchart TD <!-- exercise 0.4 -->
    A[Browser] -->|Text and button click| B
    B[new_note.html] -->|POST w/ HTTP code 302| C[Server]
    C --> H{Page Reload}
    H --> I[notes.html] --> |GET wt/ HTTP code 200|M[Browser]
    H --> J[main.css] --> |GET wt/ HTTP code 200|M[Browser]
    H --> K[main.js] --> |GET wt/ HTTP code 200|M[Browser]
    H --> L[data.json] --> |GET wt/ HTTP code 200|M[Browser]

flowchart TD <!-- exercise 0.5 -->
    A[Browser, start here] --> B[Server]
    B --> C[spa.html] --> |GET https://studies.cs.helsinki.fi/exampleapp/spa, with status code 200 - OK|A
    B --> D[main.css] --> |GET https://studies.cs.helsinki.fi/exampleapp/main.css, with status code 200 - OK|A
    B --> E[spa.js] --> |GET https://studies.cs.helsinki.fi/exampleapp/spa.js, with status code 200 - OK|A
    B --> F[data.json] --> |GET https://studies.cs.helsinki.fi/exampleapp/data.json, with status code 200 - OK|A

flowchart TD <!-- exercise 0.6 -->
    A[Browser] -->|Text and button click| B
    B[new_note.json] -->|POST w/ HTTP code 201, created| C[Server]
    C --> |Page is dinamically updated by just JS|D[Browser]

