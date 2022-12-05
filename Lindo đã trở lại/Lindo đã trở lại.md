# Giao diện  
![Imgur](https://i.imgur.com/6c4AYxY.png)  

Ở bài này chúng ta đã không còn có thể đăng nhập một cách đơn giản như bài trước.  
![Imgur](https://i.imgur.com/extqDH0.png)  

Và do không còn quy định đầu vào dạng JSON nên ở đây chúng ta sẽ bypass một cách thông thường.  
Payload:  
![Imgur](https://i.imgur.com/wQLwWEf.png)  

Ở đây ta vào Burp và sử dụng $ne cho password (bởi vẫn yêu cầu username=="admin" trong source)  
![Imgur](https://i.imgur.com/tPhFOu6.png)  

Flag: MSEC{_Typ3_C0n_Fus_!0n_k@k@______}