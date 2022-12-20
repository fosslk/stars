# ⭐️ Stars by FOSSLK

The dashboard to display the stars earned by clubs collaborated with FOSSLK.

## Getting Started

### How to run locally

- Copy `env.sample` to `.env`

- Install dependecies `npm install`

- Run project `npm run dev`

Yes it simple 😉

### How to update stars

The star data is located inside `data/data.json`

The structure as follows.

```[json]
{
    "YYYY": [
        {
            "key": "<short-key-of-club>",
            "name": "<club-name>",
            "src": "/assets/cc/<club-short-key>.png",
            "count": <number>
        }
    ]
}
```

When you need to add new stars, just find the club under current year key. Then increase the number. If you don't find the Uni, add it as a new entry and add data.

Make sure to add a clear commit message why points are changing.


Happy collaborating 🎉