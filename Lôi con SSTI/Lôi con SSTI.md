# Giao diện  
![Imgur](https://i.imgur.com/KjhiY9H.png)  
![Imgur](https://i.imgur.com/MUllNyh.png)  

+ Kiểm tra source:  
![Imgur](https://i.imgur.com/Mh8Ov6H.png)  

Theo bài, có 1 biến Global Flag và 1 class User với tham số truyền vào là 1 obj.  
Chúng ta truyền vào 2 biến: k và your_template. Khởi tạo User(k), truyền cho obj và sau đó đưa ra dòng chữ như ở ảnh 2.  
Ở đây, tác giả đã gợi ý là sử dụng SSTI và có 1 điều chú ý là Flag để dưới dạng biến toàn cục. Chúng ta có thể sử dụng truy cập biến toàn cục thông qua 1 obj trong class:  
![Imgur](https://i.imgur.com/AzVC8VA.png)  

Payload: your_template={obj.__ init __ . __ globals __}  
![Imgur](https://i.imgur.com/TA73O2w.png)  

Flag: MSEC{h3h3_S$T!_W3lC0me_T0_@@@}