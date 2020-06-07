# ISMP Webapp API Endpoints

This document details the current state of the api, as well as the different parameters you can pass into each call. 

Things to note:
* Most endpoints will be paginated with a default page size of 5. We currently don’t support increasing the page size by passing in a parameter. To get more than 5, you have to make another call with ?page=2 or you can alter DEFAULT_PAGE_SIZE in settings.py on the backend if you are running a docker setup and not using the dev server.
* I will assume you are running docker for the sake of this document. If you want to use the dev server, replace localhost with the ip of the dev server
* The dev server is built off of what is in Master, but that takes time. It may be behind master at times.
* Currently you must us http, not https to hit the API
* Api endpoints must end with `/`, so `/api/v1/category` will not work but `/api/v1/category/` will. Usually it will redirect you or give you html that says you need to add a `/` to your url.
* By query parameters, I mean extra options that can be added to your api call like ?page=2 or ?published=true

# API Endpoints

## localhost:8000/api/v1/topic/

<ins>Description</ins>: This is what we also refer to as categories, although we’re trying to transition to using the word topics. These are the high-level topics like “adjusting to the US” or “mastering list” that we will want to show in a topic list component.

<ins>Allowed requests</ins>: GET, POST (although we don’t really have any reason to do that)

<ins>Parameters</ins>: none right now. Only getting is supported.

Sample Response:


    {
    "count": 10,
    "next": null,
    "previous": "http://localhost:8000/api/v1/topic/",
    "results": [
        {
            "id": 5,
            "blogpost": [],
            "name": "American society/societal norms"
        },
        {
            "id": 4,
            "blogpost": [],
            "name": "productivity tips"
        },
        {
            "id": 3,
            "blogpost": [],
            "name": "adjusting to the US"
        },
        {
            "id": 2,
            "blogpost": [
                {
                    "id": 2,
                    "media_url": "http://www.example.com",
                    "author": {
                        "id": 2,
                        "created_at": "2020-06-07T05:16:11.096872Z",
                        "updated_at": "2020-06-07T05:16:11.096913Z",
                        "bio": "",
                        "image": "",
                        "user": 2
                    },
                    "slug": "",
                    "is_featured": false,
                    "topic_set": [
                        {
                            "id": 2,
                            "name": "housing tips",
                            "blogpost": [
                                2
                            ]
                        }
                    ],
                    "tag_set": []
                }
            ],
            "name": "housing tips"
        },
        {
            "id": 1,
            "blogpost": [
                {
                    "id": 1,
                    "media_url": "http://www.google.com",
                    "author": {
                        "id": 1,
                        "created_at": "2020-06-07T05:16:11.085974Z",
                        "updated_at": "2020-06-07T05:16:11.086002Z",
                        "bio": "",
                        "image": "",
                        "user": 1
                    },
                    "slug": "",
                    "is_featured": true,
                    "topic_set": [
                        {
                            "id": 1,
                            "name": "mastering english",
                            "blogpost": [
                                1
                            ]
                        }
                    ],
                    "tag_set": []
                }
            ],
            "name": "mastering english"
        }
    ]
    }

<ins>Other notes</ins>: For now we won’t expose creating these on the frontend.


## localhost:8000/api/v1/topic/<ID>

<ins>Description</ins>: If you want to do something to an individual topic. 

<ins>Allowed requests</ins>: GET, PUT, PATCH, DELETE
<ins>Parameters</ins>: none right now

<ins>Sample Response</ins>:

    {
    "id": 2,
    "blogpost": [
        {
            "id": 2,
            "media_url": "http://www.example.com",
            "author": {
                "id": 2,
                "created_at": "2020-06-07T05:16:11.096872Z",
                "updated_at": "2020-06-07T05:16:11.096913Z",
                "bio": "",
                "image": "",
                "user": 2
            },
            "slug": "",
            "is_featured": false,
            "topic_set": [
                {
                    "id": 2,
                    "name": "housing tips",
                    "blogpost": [
                        2
                    ]
                }
            ],
            "tag_set": []
        }
    ],
    "name": "housing tips"
    }

## localhost:8000/api/v1/tag/

This one is pretty much the same as topic. We will hook this up later so that we can make tags from the blogpost editor screen, but for now that doesn’t exist yet.

The difference between a tag and a topic is that the list of topics is pretty much set from the beginning whereas tags can be created by the authors of the blogposts.

## localhost:8000/api/v1/blogpostcontent/

<ins>Description</ins>: This is what actually gets displayed when you show a blogpost. The language field is required when creating a blogpostcontent, but until we start supporting translations of blogposts just hardcode it to “en” for now. The body_content field can take HTML and will be populated by the output of the text editor.

<ins>Allowed requests</ins>: 

GET - gets the existing blogpostcontents. For populating pages.

<ins>Parameters</ins>:

* Language: set ?language=en to only return posts where the language is en

* Blogpost: set this to the id of the desired blogpost if you want to get the blogpostcontents associated with a particular blogpost. You don’t have to worry about this one right now.

* Featured: add ?featured=true to restrict your results to only blogpostcontents where is_featured is true, is_draft is false and publish_at is sometime in the past.

* Published: add ?published=true to restrict your results to blogpostcontents where is_draft is false and publish_at is in the past (ie it has been published).

* Query: use this for searches. It will search the contents of the title and body for your query string. Supports partial word matching.

POST - creates a new blogpostcontent. Use this when creating a post for the first time.

<ins>Required fields</ins>:
* Language:just set this value to “en” for now, but it supports being other things as well.
* Title_content: string. the title
* Body_content: string. Can be html or not. The output of the TinyMCE editor will go here.

<ins>Optional fields</ins>:
* Is_draft: boolean. If you don’t set this, the server will by default set this to true. If you want something to be published, you have to manually set this to false.
* Publish_at: datetime. When you want it to be published. Set it to a time in the future if you want to schedule something to be published.
* Created_at: this will be filled in automatically so you don’t need to worry about it.
* Updated_at: this will be updated automatically so you don’t need to worry about it.

<ins>Sample Response</ins>

    {
    "count": 3,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 3,
            "language": "en",
            "title_content": "english training",
            "body_content": "<p>talk to people</p>",
            "created_at": "2020-05-07T00:00:00Z",
            "updated_at": "2020-05-07T00:00:00Z",
            "publish_at": "2020-06-02T18:04:44.296110Z",
            "is_draft": false,
            "blogpost": {
                "id": 3,
                "media_url": "http://www.sample.com",
                "slug": "",
                "is_featured": false,
                "author": {
                    "id": 1,
                    "created_at": "2020-06-07T05:16:11.085974Z",
                    "updated_at": "2020-06-07T05:16:11.086002Z",
                    "bio": "",
                    "image": "",
                    "user": 1
                }
            }
        },
        {
            "id": 2,
            "language": "en",
            "title_content": "test blogpost with html",
            "body_content": "<div>hello world</div>",
            "created_at": "2020-05-07T00:00:00Z",
            "updated_at": "2020-05-07T00:00:00Z",
            "publish_at": null,
            "is_draft": true,
            "blogpost": {
                "id": 2,
                "media_url": "http://www.example.com",
                "slug": "",
                "is_featured": false,
                "author": {
                    "id": 2,
                    "created_at": "2020-06-07T05:16:11.096872Z",
                    "updated_at": "2020-06-07T05:16:11.096913Z",
                    "bio": "",
                    "image": "",
                    "user": 2
                }
            }
        },
        {
            "id": 1,
            "language": "en",
            "title_content": "my blogpost",
            "body_content": "hello world",
            "created_at": "2020-05-07T00:00:00Z",
            "updated_at": "2020-05-07T00:00:00Z",
            "publish_at": "2020-06-02T18:04:44.296110Z",
            "is_draft": false,
            "blogpost": {
                "id": 1,
                "media_url": "http://www.google.com",
                "slug": "",
                "is_featured": true,
                "author": {
                    "id": 1,
                    "created_at": "2020-06-07T05:16:11.085974Z",
                    "updated_at": "2020-06-07T05:16:11.086002Z",
                    "bio": "",
                    "image": "",
                    "user": 1
                }
            }
        }
    ]
    }

## localhost:8000/api/v1/blogpostcontent/<ID>

<ins>Description</ins>: Interact with a specific blogpostcontent.

<ins>Allowed requests</ins>: GET, POST, PUT, PATCH, DELETE

<ins>Parameters</ins>: none right now.

<ins>Sample Response</ins>:

    {
    "id": 2,
    "language": "en",
    "title_content": "test blogpost with html",
    "body_content": "<div>hello world</div>",
    "created_at": "2020-05-07T00:00:00Z",
    "updated_at": "2020-05-07T00:00:00Z",
    "publish_at": null,
    "is_draft": true,
    "blogpost": {
        "id": 2,
        "media_url": "http://www.example.com",
        "slug": "",
        "is_featured": false,
        "author": {
            "id": 2,
            "created_at": "2020-06-07T05:16:11.096872Z",
            "updated_at": "2020-06-07T05:16:11.096913Z",
            "bio": "",
            "image": "",
            "user": 2
        }
    }
    }
    
## localhost:8000/api/v1/school/

<ins>Description</ins>: Get the affiliated campuses

<ins>Allowed requests</ins>:

GET

<ins>Parameters</ins>:
* Name: filter by the name of the school

POST

<ins>Required fields</ins>:
* Name

* Page_description: the text that will be shown on the page for this campus.

<ins>Optional fields</ins>:
* Profile_picture_url: make sure you are linking to the actual image and not the page the image appears in

<ins>Sample Response</ins>:

    {
    "count": 3,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 3,
            "name": "University of California, Irvine",
            "profile_picture_url": "https://www.ocregister.com/wp-content/uploads/2020/03/uci-1.jpg",
            "page_description": "This is the page about UCI. I think it will be up to the content team to actually write a descriptive block of text about UCI. Also, I didn't check for copyrights on the image."
        },
        {
            "id": 2,
            "name": "University of California, Los Angeles",
            "profile_picture_url": "https://capitalallocatorspodcast.com/wp-content/uploads/UCLA_Royce-Hall_2019-01-17-1024x681.jpg",
            "page_description": "This is the page about UCLA. I think it will be up to the content team to actually write a descriptive block of text about UCLA. Also, I didn't check for copyrights on the image."
        },
        {
            "id": 1,
            "name": "University of California, San Diego",
            "profile_picture_url": "https://ucsdnews.ucsd.edu/news_uploads/big_29751174808_84979e38b9_z.jpg",
            "page_description": "This is the page about UCSD. I think it will be up to the content team to actually write a descriptive block of text about UCSD. Also, I didn't check for copyrights on the image."
        }
    ]
    }

## localhost:8000/api/v1/school/<ID>

<ins>Description</ins>: Get the information associated with a particular school

<ins>Allowed requests</ins>:

GET

<ins>Parameters</ins>:

* Name: filter by the name of the school

Sample Response:

    {
    "id": 3,
    "name": "University of California, Irvine",
    "profile_picture_url": "https://www.ocregister.com/wp-content/uploads/2020/03/uci-1.jpg",
    "page_description": "This is the page about UCI. I think it will be up to the content team to actually write a descriptive block of text about UCI. Also, I didn't check for copyrights on the image."
    }

## localhost:8000/upload/api

<ins>Description</ins>: use this endpoint to upload a video or image to s3 or local hosting. Will give you back a URL.

You need to add the image as part of a form, so here's some js.

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "csrftoken=FtKJIV9Mu56adncLKQb9aXebyVBiAJWN7brsgJWvw6cw9n3Tuw5R58QhQbDpth9X");

    var formdata = new FormData();
    formdata.append("filename", "germany");
    formdata.append("file", fileInput.files[0], "/path/to/file");
    formdata.append("image_type", "public");

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8000/upload/api", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

<ins>Allowed requests</ins>: 

POST


    {
    "file": "/mediafiles/germany.jpg",
    "uploaded_at": "2020-06-07T05:41:18.039581"
    }
