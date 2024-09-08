# Uber-Clone 

<p float="left">
  <img width="270" src="https://github.com/user-attachments/assets/ce01bda0-ef77-4c32-95fc-112e67c05e8f">
  <img width="270" alt="Screenshot 2022-11-23 at 17 11 15" src="https://github.com/user-attachments/assets/ec3b0b15-e024-4c20-b8a4-5796879dfa95">

</p>



[![Watch the video](https://github.com/user-attachments/assets/ce01bda0-ef77-4c32-95fc-112e67c05e8f)](
https://github.com/user-attachments/assets/7903852a-125b-40a0-866b-a3a76fe93782)



[![Watch the video](https://github.com/user-attachments/assets/ce01bda0-ef77-4c32-95fc-112e67c05e8f)](
https://github.com/user-attachments/assets/e6f7a43f-ccac-4461-b909-aef4737ad2f0)



[![Watch the video](https://github.com/user-attachments/assets/ce01bda0-ef77-4c32-95fc-112e67c05e8f)](
https://github.com/user-attachments/assets/2adbdc04-56ef-448b-bb92-8ed629fb9857)


  <video width="320" height="240" controls autoplay loop>
  <source src="https://github.com/user-attachments/assets/7903852a-125b-40a0-866b-a3a76fe93782" type="video/mp4">
</video>

<video width="320" height="240" controls autoplay loop>
  <source src="" type="video/mp4">
</video>

<video width="320" height="240" controls autoplay loop>
  <source src="https://github.com/user-attachments/assets/2adbdc04-56ef-448b-bb92-8ed629fb9857" type="video/mp4">
</video>



## App Setup

Clone the repository
```
git clone https://github.com/barisMarathon/uber-clone.git
```

Open a terminal, CD in to the folder and run these commands
```
npm i

```

Now go to https://console.cloud.google.com/

Generate an API KEY.

You'll need to ENABLE Maps API, Directions API, Places API, and Distance Matrix API.

Add your new API KEY to the script inside **public/index.html**

Also add your API KEY to the .env file

![Screenshot 2022-11-23 at 17 40 53](https://user-images.githubusercontent.com/108229029/203526600-42f9f3be-6e9d-4fcc-aff0-5d6c6c7e8d87.png)

Now run this command to start the project 
```
npm run serve
```

And to start in PWA mode run the command
```
npm run pwa
```
![Screenshot 2022-11-23 at 17 44 01](https://user-images.githubusercontent.com/108229029/203527683-4b43f88e-07d8-4e2a-bfad-9a785afed02f.png)

Open another terminal
```
cd server

npm i
```

Add the Google API Key to the .env

```
GOOGLE_MAPS_API_KEY=keyhere

cd server
npm run watch
```

![Screenshot 2022-11-23 at 17 53 00](https://user-images.githubusercontent.com/108229029/203529049-d7790bc7-0d0e-4b20-80d5-9cea46017c57.png)

You should be good to go!

If you'd like a step by step guide on how to build this just **CLICK THE IMAGE BELOW** For the tutorial i followed by John-Weeks-Dev!

[![GO TO JOHN WEEKS DEV TUTORIAL VIDEOS](https://user-images.githubusercontent.com/108229029/203519788-671b6891-e2fb-4a68-8418-2d359df54acc.jpeg)](https://www.youtube.com/watch?v=zXpr8zaK2eA)


#Added Changes

Fully-functional links to the app like food travel hotel etc.

Disturbing one-way animation replaced with fade-out animation.

Other Uber options are now selectable such as UberXL and Comfort rather than hard-coded UberX.

Basic waiting screen after confirming your Uber.


