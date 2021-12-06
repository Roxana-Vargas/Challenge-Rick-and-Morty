# Challenge - Rick and Morty 🚀

Solution to technical challenge that consists of consuming the Rick and Morty api.


All characters, locations and episodes of https://rickandmortyapi.com/ are consulted and indicate:

### Char counter:
* How many times does the letter appear **"l"** (case insensitive) en los nombres de todos los `location`.
* How many times does the letter appear **"e"** (case insensitive) en los nombres de todos los `episode`.
* How many times does the letter appear **"c"** (case insensitive) en los nombres de todos los `character`.
* How long the program took 👆 in total (from start of execution to delivery of results).

### Episode locations:
* For each `episode`, indicate the quantity and a list with the `location` (`origin`) of all the `character` that appeared in that `episode` (without repeating).
* How long the program took 👆 in total (from start of execution to delivery of results).

### Result


Output in json format with the following structure:
```json
[
  {
    "exercise_name": "Char counter",
    "time": "0s 848.6000001430511ms",
    "in_time": true,
    "results": [
      {
        "char": "l",
        "count": 82,
        "resource": "location"
      },
      {
        "char": "e",
        "count": 88,
        "resource": "episode"
      },
      {
        "char": "c",
        "count": 494,
        "resource": "character"
      }
    ]
  },
  {
    "exercise_name": "Episode locations",
    "time": "2s 854.6000001430511ms",
    "in_time": true,
    "results": [
      {
        "name": "Pilot",
        "episode": "S01E01",
        "locations": [
          "Earth (C-137)",
          "unknown",
          "Bepis 9",
          "Gromflom Prime",
          "Girvonesk"
        ]
      },
    ]
  }
]
```

