# Giao diện  
![Imgur](https://i.imgur.com/fc9hQPM.png)  

+ Phân tích đề bài:  
Trong bài này có khá nhiều magic method, __construct, __destruct, __get và các class main, msec, pwn  
main:  + __construct($class="msec",$param="Champion") in ra giá trị của new $this->class($this->param)  
       + __destruct in ra giá trị $this->class->hi($this->param) (hi là một hàm không có ???)   

msec:  + in ra dòng chữ "If you pass this challenge you will be the ".$this->kaka (mình nghĩ class này chỉ để demo)  

pwn:  + __construct để gán 2 giá trị và hàm __get nhận giá trị từ $method  

![Imgur](https://i.imgur.com/pub33rI.png)  
Xử lý payload  

+ Sử dụng hint: chúng ta sẽ sử dụng DirectoryIterator và SplFileObject để thực hiện các thao tác với file  
+ Script:  
![Imgur](https://i.imgur.com/IO2VDNH.png)  
![Imgur](https://i.imgur.com/khxpJEI.png)  

Tiếp tục thêm Path vào script:  
![Imgur](https://i.imgur.com/rCUkjbe.png)
![Imgur](https://i.imgur.com/NjnKRVV.png)  

Thay SplFileObject để đọc nội dụng file:  
![Imgur](https://i.imgur.com/DjRBt9L.png)  
![Imgur](https://i.imgur.com/4dB49T4.png)  

Flag:  MSEC{_Cam_On_Taidh_Da_Dong_Gop_Chall_Cho_MSEC_CTF_N3wBi3_} 