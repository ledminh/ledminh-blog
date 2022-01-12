# LEDMINH.DEV Source Code

The main part of this app is the blog component that can be found following this path “./src/components/blog".

Actually, the blog is an UI that can get data from three sources: local, my personal blog, and any other wordpress blog that has CORS enabled. User can switch between these three sources using a menu on top of the website.
- The local source is the file data.js that can be found by following the path “./src/data/local/data.js”.
- My personal blog’s address is https://www.ledminh.com. It was built on wordpress and the content is mainly about science and in Vietnamese. I used the package wpapi to query data from its REST API and then display in this react blog.
- User can also enter the address of any wordpress website that has CORS enabled and the blog wil load then display all of its content.

My next plan is to make it become a real blog (by adding mongoDB database, admin panel, editor, etc..).
You can visit the demo here: https://www.ledminh.dev
