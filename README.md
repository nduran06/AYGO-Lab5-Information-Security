# AYGO-Lab-Information-Security



## Prerequisites

* Have an AWS account
* Have aws-cli and aws-cdk installed locally

**Notes:**

1. This lab used an AWS Academy account; IAM roles are not supported with these account types for performing actions from the CLI.


## AWS-CLI
![](imgs/sec-1.png)

![](imgs/sec-2.png)  
![](imgs/sec-3.png)  
![](imgs/sec-4.png)
![](imgs/sec-5.png)
![](imgs/sec-6.png)


## 1. Hosting a static website

1. Create a Github repository (including the README.md); in this case is [AWS-wildrydes-site](https://github.com/nduran06/AWS-wildrydes-site)

2. Launch the [AWS Amplify console](https://console.aws.amazon.com/amplify/home) and click on ***Deploy and app***

![](imgs/sec-7.png)  

3. On the Start building with Amplify page, choose ***Github*** as the source code provider

![](imgs/sec-8.png)  

4. Update your GitHub permissions

* *Two-factor authentication (2FA) authentication*

![](imgs/sec-10.png)  

* The previously created repository is selected for use in AWS Amplify

![](imgs/sec-15.png)  
![](imgs/sec-11.png)  


5. Select the repository and the branch (*main* in thi case) in AWS Amplify; click on next

![](imgs/sec-9.png)

6. On the App settings, leave all the default values and click next

7. Your config should look like this:


* Select *Save and Deploy.*

![](imgs/sec-12.png)

8. When the resource is created, you will see the link to launch the site:

![](imgs/sec-13.png)

* At this point, if you click on the link provided (in this case *https://main.di8iut3v8urve.amplifyapp.com/*), since it is an empty repository, you should see something like:

![](imgs/sec-14.png)

9. Go to *App settings* and click on the *Edit* option

![](imgs/sec-16.png)  

10. Enable *Branch autodetection* and *Branch auto-disconnection*, then save it:

![](imgs/sec-18.png)  

### Populate the git repository

Originally for this workshop, this repository: [aws-samples/
aws-serverless-webapp-workshop](https://github.com/aws-samples/aws-serverless-webapp-workshop) was the one used to populate our repositories; however since it has been archived, a setup mirror was done in this implementation:

1. The previously created repository is cloned locally, and move to it:

```
git clone https://github.com/nduran06/AWS-wildrydes-site.git && cd AWS-wildrydes-site
```
2. Create a bare copy of the *aws-samples/aws-serverless-webapp-workshop* repository (only Git's internal data structures, no source files to edit):

```
git clone --bare https://github.com/aws-samples/aws-serverless-webapp-workshop.git
```

3. Push exact copy (mirror) to the new repository (*AWS-wildrydes-site*)

```
cd aws-serverless-webapp-workshop.git && git push --mirror https://github.com/nduran06/AWS-wildrydes-site.git
```

4. Go up one directory; remove the bare repo directory; update the local repo with remote changes, replaying the local commits on top of the updated remote history:

```
cd .. && rm -rf aws-serverless-webapp-workshop.git && git pull --rebase
```
* This method was used to copy/clone the entire repository, including all branches and history, to the new location while maintaining the full Git history.

![](imgs/sec-16.png)

* Now, when you click on the link provided (in this case *https://main.di8iut3v8urve.amplifyapp.com/*), you should be able to see the website:

![](imgs/sec-17.png)  

## 2. Manage users

![](imgs/sec-19.png)  
![](imgs/sec-20.png)  
![](imgs/sec-21.png)  
![](imgs/sec-22.png)  
![](imgs/sec-23.png)  
![](imgs/sec-24.png)  
![](imgs/sec-25.png)  
![](imgs/sec-26.png)  
![](imgs/sec-27.png)  
![](imgs/sec-28.png)  
![](imgs/sec-29.png)
![](imgs/sec-30.png)  
![](imgs/sec-31.png)

## 3. Serverless service backend

![](imgs/sec-32.png)  
![](imgs/sec-33.png)  
![](imgs/sec-34.png)  
![](imgs/sec-35.png)  
![](imgs/sec-36.png)  
![](imgs/sec-37.png)  
![](imgs/sec-38.png)  
![](imgs/sec-39.png)  
![](imgs/sec-40.png)  
![](imgs/sec-41.png)  
![](imgs/sec-42.png)  
![](imgs/sec-43.png)

## 4. Deploy an API RESTful

![](imgs/sec-44.png)  
![](imgs/sec-45.png)  
![](imgs/sec-46.png)  
![](imgs/sec-47.png)  
![](imgs/sec-48.png)  
![](imgs/sec-49.png)  
![](imgs/sec-50.png)  
![](imgs/sec-51.png)  
![](imgs/sec-52.png)  
![](imgs/sec-53.png)  
![](imgs/sec-54.png)  
![](imgs/sec-55.png)  
![](imgs/sec-56.png)  
![](imgs/sec-57.png)  
![](imgs/sec-58.png)  
![](imgs/sec-59.png)

## Test
![](imgs/sec-60.png)  
![](imgs/sec-61.png)  
