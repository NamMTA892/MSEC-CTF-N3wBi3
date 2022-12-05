# Giao diện  
![Imgur](https://i.imgur.com/yGTWdAi.png)  

Đầu tiên chúng ta sẽ đi check source:  
+ Có DataBase (lưu ý là ở đây có username và pwd của 'admin'):   
![Imgur](https://i.imgur.com/bbVBocU.png)  

+ Cách lấy được flag (yêu cầu đăng nhập dưới username == 'admin'):  
![Imgur](https://i.imgur.com/jNZK3Tl.png)  

+ Và cuối cùng là Content-Type sẽ ở dạng JSON:  
![Imgur](https://i.imgur.com/Qi9kvUH.png)  

Ở bài này đơn giản nên sau khi chúng ta truy cập dưới username và pwd trong DB của admin thì sẽ ra flag:  
![Imgur](https://i.imgur.com/Wwwtv8o.png)  

Flag: MSEC{3m_S3ck_!nj3ct10N_N0-$ql}
