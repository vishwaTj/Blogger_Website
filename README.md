

                                          **  Blogger website  **
                
                 This is a basic blogger website, where users can login/Signup and post their Blogs
                  share their exprirence and knowledge also read others Blogs and gain knowledge.




https://github.com/vishwaTj/Blogger_Website/assets/109414918/1afe771a-2447-4541-9b8d-7e98ee4151bd

   
  
  
     **How to start the project locally**

Follow the following steps to run the project locally<br/>
1) Download the file into your system<br/>
2) open the file in vs code<br/>
3)open two terminals and split them as shown below in image <br/>

![image](https://github.com/vishwaTj/Blogger_Website/assets/109414918/6c1e6b65-1949-4feb-b55c-89918ceafca8)
<br/>
4) In the second terminal do cd /backend  to set it to backend directory<br/>
5) give command >> npm install in the second terminal to install all the backend dependencies<br/>
6) give command >>npm install , >>npm run build and >>npm run start set up and start the React part<br/>
7) give command >> npm start after the install in the second terminal <br/>
8) The message "connected" in the second terminal determines that it is connected to the backend and Mongo server<br/>
9) In the first terminal if there is not error then your application is ready to be used<br/>
10) If you are using windows then got localhost://800 and if mac go to localhost://3000 to access the website.<br/>
<br/>
    !!!!!!!!!!!!            The website is ready to be used           !!!!!!!!!!!!    
    
    
    
    
File structure of the project is as follows
The  front end related files are  mainly 
                    i) public --> contains the basic react application boiler plate code no changes made

                    ii) src --> constains most of the front end code as follows
                          a) components --> these are files which were reused throught the website hence defined in this folder
                                   1) Avatar block --> the avatar icon
                                   2) Blog Card --> Blogging information as cards
                                   3) InputModal --> The input form for a blog
                                   4) Navbar --> basic header for the website
                          b) Pages --> these files contain different pages which the user switches to for differnt actions
                                   1) Login  --> this is the login page for website
                                   2) SignUp --> this is the sign up page for website
                                   3) Home --> Home page to display all the blogs
                     iii) App.js --> to render different pages using router
                     iv) index.js --> To access the root element DOM
                     
                     
The Backend files are stored in the backend folder<br/>
                       i) Routes --> To handle differnet CRUD operations with mongo DB atlas  and also trigger functions
                             a) BlogCreate --> this handles the fetch, create and delete operations of the Blogs posted
                             b) CreateUser --> this handles the fetch, create of users to the website
                       ii) models --> To establish schema for Blogs and users models
                             a) Blog --> Schema definition fror Blog
                             b) User --> Schema definition for User
                      iii) indes.js --> the root folder for the entire NodeJS and Express framework 
