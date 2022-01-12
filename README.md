# LEDMINH.DEV Source Code

The main part of this app is the blog component that can be found following this path “./src/components/blog".

It is my first attempt to build a blog for myself. I coded it from scratch using React. Actually, it is an U.I. that can get data from three sources: local, my personal blog, and any other wordpress blog that has CORS enabled. User can switch between these three sources using a menu right below the navigation bar of the blog.
1. The first source is local source. It is the file data.js that can be found by following the path “./src/components/blog/data/local/data.js”.
2. The second source is my personal blog at https://www.ledminh.com. It is a wordpress blog and the content is mainly about science in Vietnamese. I used the package wpapi to query data from its REST API and then display in this react blog.
3. The third source is any wordpress website that has CORS enabled. User can enter the address of the source and all of its content will be displayed.

My next plan is to make it become a real blog (by adding mongoDB database, admin panel, editor, etc..).

You can visit demo of the blog here: https://www.ledminh.dev/blog
