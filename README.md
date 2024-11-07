This Project is setup using WebdriverIO and Cucumber BDD as its Framework
Appium is used to run the test cases on a Virtual device created on Android Studio
This suite tests the login functionality with error message assertions on failure and a page object assertion after a successful login. 
After the login and assertion is successful the script logs the use out of the application.

**Prerequisites:**
1. NodeJS needs to be installed and its **path** should be added under Environment Variables > System Variables > Path
![image](https://github.com/user-attachments/assets/4a320bc3-ae0c-4b94-842a-8906f5476014)

2. Java JDK should be installed and **JAVA_HOME** variable should be set, this project is using jdk 21
![image](https://github.com/user-attachments/assets/f657f586-d25f-498d-b21c-8c926d26085a)

3. **ANDROID_HOME** path should be set pointing to **Sdk**.
![image](https://github.com/user-attachments/assets/295e7c7b-8dab-4953-b06e-8f0c247325c0)
  
   Path to **platform-tools** and **tools** should also be added:
![image](https://github.com/user-attachments/assets/0e66c075-7623-4fa9-8ef6-bf4780ec1cc2)

**Note -- If you are not able to locate tools directory inside your Sdk directory, follow the steps below:**
  a. Go to SDK Manager on Android Studio
  b. Switch to SDK Tools tab and uncheck **Hide Obsolete Packages**
  c. Check the box against **Android SDK Tools(Obsolete)** and hit Apply
  d. Once its installed, any issue realted to the directory not being available will be resolved
![image](https://github.com/user-attachments/assets/9da1b41b-3687-4551-b708-cad2c4d16109)

4. Appium should be installed globally using **npm i -g appium**
5. Create a Device, preferably of API 30 and Android 11.0 (Since the sample app used seemed to be developed in late 2020). But if you wish to use any other device version, its also fine.
6. Install the app under test on the newly created virtual device.
7. The application sits inside **app** directory of the project. 

**Steps to Execute**
1. clone the repository and open it in **VS Code**
2. Open Terminal and run **npm install** - This will create the node_modules and install all the dependencies provided inside package.json
3. Open Command Prompt and run command **appium** - This will start the appium services
4. **loginTest** script is added to package.json to execute the current login use case. 
   On the IDE terminal run the command **npm run loginTest**. Make sure your virtual mobile device is up and running. 
5. Allure reporter is used at OnComplete hook to generate the test results automatically, just run **npx allure open** to render the results on a browser.
