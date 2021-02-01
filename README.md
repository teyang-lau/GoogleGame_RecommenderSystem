# Google Games Recommendation System

[![made-with-kaggle](https://img.shields.io/badge/Made%20with-Kaggle-lightblue.svg)](https://www.kaggle.com/)
[![made-with-python](https://img.shields.io/badge/Made%20with-Python-blue.svg)](https://www.python.org/)
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
[![Generic badge](https://img.shields.io/badge/STATUS-INPROGRESS-<COLOR>.svg)](https://shields.io/)
[![GitHub license](https://img.shields.io/github/license/teyang-lau/Dog_Breeds_Classification_CNN.svg)](https://github.com/teyang-lau/Melanoma_Detection/blob/master/LICENSE)

Author: TeYang, Lau <br>
Last Updated: 2 February 2021

<p align="center">
<img src = './Pictures/googlegames1.png'>
</p>

<br>

### Please refer to this [notebook](https://www.kaggle.com/teyang/google-games-recommendation-system) on Kaggle for a more detailed analysis of the project.   ###





## **Project Motivation** 

Recommendation systems are ubiquitous in our daily lives, from online shopping to YouTube videos to match dating  to mobile apps!  When you unlock your phone the first thing in the morning, it suggests to you interesting news articles about what happened when you were asleep. On your way to work, Google Map informs you that the usual route you took had an accident and advised alternative ways. During work, your boss asks you to research a topic. You did a online search query and Google gave you suggestions to webpages that might give you more info. After a hard day's work, you decided to treat yourself to a nice meal and Google Maps recommended the best restaurants near to you. On your way home, while listening to music to relax,  Spotify proposed a new song that matches your musical taste.

Recommending products or services to people is easy, and it has been around since ancient times. However, personalized recommendations are harder as it involves the recommender knowing about your preferences and likes. In this digital age, all these are captured by companies, who then used this data to recommend their products and services to you.

Building a personalized recommendation system thus requires lots of data, which unfortunately, due to privacy, confidentiality and competitive reasons, are not shared publicly by companies. Therefore, the motivation of this project find a product or service whereby data regarding users can be obtained and where not many people have done a project (movies, books) before. Google play games provide an excellent opportunity to do so, as APIs are available for accessing the review data, and it also offers products that many people are familiar with.

<br><br>

## **Project Goals** 

1. *Build* a recommendation system for **suggesting** games to people based on their reviews/ratings of games

2. *Scrape* google game **reviews** and game **features** from google play store

3. *Preprocess/Clean* game **description** to **generate/engineer** more features about the games

4. Use **TF-IDF** to extract most important words and **Latent Dirichlet Allocation (LDA)** for topic modelling 

5. *Employ* **content-based** and **collaborative filtering** techniques to recommend games to each user based on their game ratings

6. *Evaluate* recommendation models using appropriate offline testing metrics such as **prediction accuracy, usage performance, novelty, and serendipity**

7. *Deploy* the model onto a **web app**, for users to obtain game recommendations 

   <br><br>

## **About this Dataset** 

There are thousand of games on the Google Play Store. Using the Node.js [`google-play-scraper`](https://github.com/facundoolano/google-play-scraper) package, 200 games' `app IDs` from each category and collection in the store were obtained. Detailed game information and game reviews were scraped using Python [`google-play-scraper`](https://github.com/JoMingyu/google-play-scraper) package. A maximum of 2000 reviews were collected from each game, and stored in JSON format. Detailed game information contains game features like the long game description, its summary, price, released year, genre, content rating, url etc. while each review contains the username, review text, and review score on a scale of 1-5. In total, there were **~7600 games** and **~8 million game reviews** before cleaning and filtering.

<br><br>

## Exploratory Data Analysis

<img src='./Pictures/longtail1.png' width=400><img src='./Pictures/longtail2.png' width=400><img src='./Pictures/gamegenre.png' width=400>

<br><br>



## Game Description Text Cleaning

<img src='./Pictures/bigrams.png' width='400'>

<br><br>

## Content-Based Filtering

### TF-IDF for Feature Engineering

<img src='./Pictures/tfidf_wc.png' width=400>

<br><br>

### LDA for Topic Modelling

<img src='./Pictures/coherenceLDA.png' width=400>

<br><br>

### Cosine Similarity for Similar Games

Recommending similar games for **Coin Master**:

<img src='./Pictures/coinmaster_tfidf.png'>

<img src='./Pictures/coinmaster_lda.png'>



Recommending similar games for **Candy Crush**:

<img src='./Pictures/candycrush_tfidf.png'>

<img src='./Pictures/candycrush_lda.png'>

<br><br>

### Evaluation

<img src='./Pictures/CB_precision_recall.png'>

|              Model | Precision | Recall |
| -----------------: | --------: | -----: |
|     Weighted TFIDF |         0 |    5.0 |
| Non-weighted TFIDF |         1 |    3.0 |
|       Weighted LDA |         3 |    1.0 |
|   Non-weighted LDA |           |        |





## Collaborative Filtering



* Ongoing

























