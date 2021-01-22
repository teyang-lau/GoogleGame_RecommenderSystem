

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



### 18-19 Jan 2021 

* Extracted out most common words from game `summary` and removed generic words like `game, play, free, best, fun`, and used them as boolean features — 1 if word is present in `summary`, 0 otherwise
* Tried looking at 2grams and 3grams but they didn't show any interesting ngrams
* Extracted `content ratings` to use as features as well, in a way that e.g., games with `Violence` will not have a value of 1 under `Mild Violence` feature, and games with `Gambling` will not have a value of 1 under `Simulated Gambling` feature
* Extracted out `year` from `released` date

<u>**Things to note**</u>

* There are NaNs for many games for many features. Use **mean** for `year` and 0 for summary word and content rating features? 



### 20-21 Jan 2021 

* `developerInternalID` was not used as it has too many unique values

* Decided to use 0 to replace NaNs for year and price instead of mean but can change later to see which performs better

* Game `genre` was dummy encoded as well

* Tried out LDA and TF-IDF. LDA gave topics that are not distinct and therefore is not used. TF-IDF was able to give distinct important words to act as features for the games, but only when `min_df` was increased

* Because `summary` features were weighted using TF-IDF, they are in the range of 0-1, while features like `editorsChoice` are boolean, so the latter might have a higher weightage then the other features, causing it to account for higher similarities, and thus more recommendations according to it

  <u>**Things to note**</u>

* Might want to consider removing `editorsChoice` as that can have its own recommendation section

* Might want to include `content ratings` into the `summary` to TF-IDF as well so that they don't take up higher weightage, or just TF-IDF itself

* Able to get TF-IDF weights for new examples using the fitted model but need to think of the best way to compute similar items as right now the similarity matrix is pre-computed and based on current available data



## TO DO

- [x] Download 2k reviews from each game?
  - [ ] download only those with at least `n` reviews?

* Content-based filtering
  - [x] extract out words from game summary that are in corpus to use as features
  - [x] extract content ratings, genre, release date to use as features
  - [x] `price`, `minInstalls`, `containsAds`, `editorsChoice` can also be used as features
  - [x] remove games with very low `minInstalls`? Probably need to do this with some other feature like `year`. If `minInstalls` is still low after released for a year or more, then should probably not recommend it
  - [ ] reset userID after filtering; if not userID can be quite long
* Collaborative filtering
* Deploy model on Streamlit
  - [ ] For children recommendations