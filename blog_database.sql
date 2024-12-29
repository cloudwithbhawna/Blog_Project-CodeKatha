create database blog;
use blog;
drop database blog;
create table authors(
author_id int auto_increment,
author_name varchar(150),
primary key(author_id)
);

create table categories(
category_id int auto_increment,
category_name varchar(150),
primary key(category_id)
);

create table blogs(
blog_id int auto_increment,
title varchar(255),
author_id int,
category_id int,
tags varchar(255),
date DATE,
content varchar(500),
primary key(blog_id),
foreign key (author_id) references authors(author_id) on delete cascade,
foreign key (category_id) references categories(category_id) on delete cascade
);

create table comments(
comment_id int auto_increment,
blog_id int,
author varchar(255),
date DATE,
content varchar(500),
primary key(comment_id),
foreign key (blog_id) references blogs(blog_id) on delete cascade
);

drop table comments;

delete from authors where author_id = 1;
delete from authors where author_id = 2;
delete from authors where author_id = 3;

select * from authors;

insert into authors(author_id, author_name) values
(1, 'Alice Johnson'), (2, 'Bob Smith'),
(3, 'Jane Doe'),(4, 'John Doe')
;

insert into categories(category_name) values
('JavaScript'),
('Python'),
('CSS'),
('Machine Learning'),
('React'),
('Version Control'),
('Web Design'),
('Node.js'),
('SQL');

INSERT INTO blogs (blog_id, title, author_id, category_id, tags, date, content) VALUES
(1, 'Understanding JavaScript Closures', 1, 1, '["JavaScript", "Closures", "Programming"]', '2024-11-12', 'Closures are a fundamental concept in JavaScript. They allow functions to access variables from an outer function scope, even after the outer function has returned.'),
(2, 'Getting Started with Python Data Science', 2, 2, '["Python", "Data Science", "Tutorial"]', '2024-11-10', 'Python is a powerful language for data science due to its vast array of libraries like NumPy, Pandas, and Matplotlib.'),
(3, 'CSS Grid Layout: A Beginner\'s Guide', 3, 3, '["CSS", "Web Design", "Grid Layout"]', '2024-10-25', 'CSS Grid Layout is a powerful layout system for creating responsive and flexible web designs.'),
(4, 'Exploring Machine Learning with Python', 1, 4, '["Machine Learning", "Python", "AI"]', '2024-11-05', 'Machine learning is a branch of AI that focuses on building models that improve with data.'),
(5, 'An Introduction to React JS', 3, 5, '["React", "JavaScript", "Frontend"]', '2024-10-30', 'React is a popular JavaScript library for building user interfaces.'),
(6, 'How to Use Git for Version Control', 4, 6, '["Git", "Version Control", "Collaboration"]', '2024-09-15', 'Git is an essential tool for developers to track code changes and collaborate with others.'),
(7, 'Responsive Web Design Principles', 2, 7, '["Web Design", "Responsive", "CSS"]', '2024-10-01', 'Responsive design ensures that a website looks good on any device.'),
(8, 'Building REST APIs with Node.js', 1, 8, '["Node.js", "API", "Backend"]', '2024-09-20', 'Node.js is a great choice for building scalable backend applications with RESTful APIs.'),
(9, 'Understanding Asynchronous JavaScript', 3, 1, '["JavaScript", "Async", "Programming"]', '2024-10-05', 'Asynchronous programming is essential for tasks that involve waiting, such as fetching data from APIs.'),
(10, 'A Guide to SQL for Data Analysis', 2, 9, '["SQL", "Data Analysis", "Database"]', '2024-08-22', 'SQL is a language designed for managing and analyzing data in databases.');

select * from blogs;


INSERT INTO comments (blog_id, author, date, content) VALUES
(1, 'John Doe', '2024-11-12', 'Great explanation! Closures were confusing for me initially.'),
(3, 'Alice Johnson', '2024-10-26', 'Thanks for this guide! CSS Grid really simplifies layout design.'),
(4, 'Bob Smith', '2024-11-06', 'Nice introduction! Looking forward to more content on this topic.'),
(6, 'Jane Doe', '2024-09-16', 'This was very helpful, thanks!'),
(8, 'John Doe', '2024-09-21', 'Clear and concise. I found this very useful.'),
(10, 'Alice Johnson', '2024-08-23', 'This was exactly what I needed, thanks!');

