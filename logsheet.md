

# Logsheet for Google Games Recommendation System



### 14 Jan 2021

- used `google-play-scraper` Node.js to scrape google games id and info from google play store into text files. **Script: `get_ggames.js` **

  - ~ 200 for each `category`,`collection` (e.g., New Free Adventure games, New Paid Action games)

- this is needed because the package to scrape reviews require the `appID`

- extracted the games information from the text files and generated into csv. **Script: `scrape_game_details.ipynb`**

- used `google_play_scraper` Python to get more detailed information of games (2 games were not available and so details are not available)

  

### 15 Jan 2021

- scraped google reviews for each of the games (max 2k for each games, might increase later) and save as json files on `Kaggle`. **Script: `scrape-google-game-reviews.ipynb`**

- **Script: `Google Games Recommendation System.ipynb`** on `Kaggle` — for each game: 

  - removed duplicate reviews using `reviewId`
  - removed duplicate users using `userImage` (this was done as multiple ppl might share the same `userName`; `userImage` SHOULD be unique to each account)
  - removed `'A Google user'` users as they are from the old days

- combined all game reviews and gave each `userImage` a unique ID, `userID`, to identify each user 

  <u>**Things to note**</u>

* max number of reviews for a user is 123, and the distribution is very skewed
* so might need to extract more reviews from each game, to get more reviewers that have high multiple reviews



### 16 Jan 2021

- removed some fake users/reviews that have the same syntax for many reviews
- used `nltk` to create corpus of most common words from games `summary` to use as features for  **content-based filtering**

<u>**Things to note**</u>

* some games have very few reviews so should remove them?



## TO DO

- [ ] Download 4k reviews from each game?
  - [ ] download only those with at least `n` reviews?

* Content-based filtering
  - [ ] extract out words from game summary that are in corpus to use as features
  - [ ] extract content ratings, genre, release date to use as features
  - [ ] `price`, `minInstalls`, `containsAds`, `editorsChoice`, `developerInternalID` can also be used as features
* Collaborative filtering
* Deploy model on Streamlit