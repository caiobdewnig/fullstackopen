flowchart TD
    A[Browser] -->|Text and button click| B
    B[new_note.html] -->|POST w/ HTTP code 302| C[Server]
    C --> H{Page Reload}
    H --> I[notes.html] --> |GET wt/ HTTP code 200|M[Browser]
    H --> J[main.css] --> |GET wt/ HTTP code 200|M[Browser]
    H --> K[main.js] --> |GET wt/ HTTP code 200|M[Browser]
    H --> L[data.json] --> |GET wt/ HTTP code 200|M[Browser]